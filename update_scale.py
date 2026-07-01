import os
import glob
import re

base_dir = r"c:\Users\devel\Downloads\Scaffolding\Scaffolding\src\pages"
jsx_files = glob.glob(os.path.join(base_dir, "**/*.jsx"), recursive=True)

pattern = re.compile(
    r"(if\s*\(width\s*<\s*768\)\s*\{[^\}]+?let\s+factor\s*=\s*[^;]+;)(\s*)(setScaleFactor\()",
    re.DOTALL
)

for file in jsx_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Skip if already has availableWidth calculation
    if "availableWidth" in content and "targetWidth" in content and "Math.min(factor, availableWidth / targetWidth)" in content:
        continue

    new_content, count = pattern.subn(
        r"\1\2// Also bound by width for tall/narrow Android phones\2const availableWidth = width - 32;\2const targetWidth = 340;\2factor = Math.min(factor, availableWidth / targetWidth);\2\3",
        content
    )

    if count > 0:
        with open(file, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated: {os.path.basename(file)}")
