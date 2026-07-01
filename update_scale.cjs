const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'src', 'pages');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

const regex = /(if\s*\(\s*width\s*<\s*768\s*\)\s*\{[^}]+?let\s+factor\s*=\s*[^;]+;)(\s*)(setScaleFactor\()/g;

walkDir(baseDir, (filePath) => {
    if (filePath.endsWith('.jsx')) {
        let content = fs.readFileSync(filePath, 'utf8');
        
        if (content.includes("availableWidth = width - 32") && content.includes("targetWidth = 340")) {
            return;
        }

        let newContent = content.replace(regex, (match, p1, p2, p3) => {
            return `${p1}${p2}// Also bound by width for tall/narrow Android phones${p2}const availableWidth = width - 32;${p2}const targetWidth = 340;${p2}factor = Math.min(factor, availableWidth / targetWidth);${p2}${p3}`;
        });

        if (content !== newContent) {
            fs.writeFileSync(filePath, newContent, 'utf8');
            console.log('Updated:', path.basename(filePath));
        }
    }
});
