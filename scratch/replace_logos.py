import os
import re

pages_dir = r"c:\Users\Admin\Desktop\HTML Templates\phase 2\GreenScape Pro\pages"

# Regex pattern to match the inline SVG logo
# It matches <svg ...> ... M12 22C12 ... </svg> (case-insensitive and dotall)
pattern = re.compile(r"<svg\b[^>]*>\s*<path\s+d=\"M12\s+22C12\s+22\s+20\s+18\s+20\s+12C20\s+6\.5\s+15\.5\s+2\s+12\s+2C8\.5\s+2\s+4\s+6\.5\s+4\s+12C4\s+18\s+12\s+22\s+12\s+22Z\"[^>]*>\s*<path\s+d=\"M12\s+2V22\"[^>]*>\s*<path\s+d=\"M12\s+8C12\s+8\s+16\s+9\s+17\s+12\"[^>]*>\s*<path\s+d=\"M12\s+13C12\s+13\s+8\s+14\s+7\s+17\"[^>]*>\s*</svg>", re.IGNORECASE | re.DOTALL)

replacement = '<img src="../assets/images/logo.svg" alt="GreenScape Pro" class="w-8 h-8">'

count = 0
for filename in os.listdir(pages_dir):
    if filename.endswith(".html"):
        filepath = os.path.join(pages_dir, filename)
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()
        
        new_content, num_subs = pattern.subn(replacement, content)
        if num_subs > 0:
            with open(filepath, "w", encoding="utf-8") as f:
                f.write(new_content)
            print(f"Replaced {num_subs} occurrence(s) in {filename}")
            count += num_subs

print(f"Total replacements: {count}")
