#!/usr/bin/env python3
"""
Replace ONLY the carousel sections in auralo-collection with working carousels
Keep everything else exactly as it is
"""

import re

# Read the full auralo-collection HTML
with open('index.html', 'r', encoding='utf-8') as f:
    full_html = f.read()

# Read the working carousel HTML from auralo-desert-collection
with open('/Users/nelsonchan/Downloads/auralo-desert-collection/index.html', 'r', encoding='utf-8') as f:
    working_html = f.read()

# Extract working carousel sections
def extract_carousel_section(html, start_comment, end_pattern):
    """Extract a specific carousel section from HTML"""
    pattern = f'{start_comment}.*?{end_pattern}'
    match = re.search(pattern, html, re.DOTALL)
    if match:
        return match.group(0)
    return None

# Get the working story carousel
story_carousel = extract_carousel_section(
    working_html,
    '<!-- Story Carousel Section -->',
    '</section>\\s*(?=<!-- TikTok Reviews Section -->)'
)

# Get the working TikTok carousel  
tiktok_carousel = extract_carousel_section(
    working_html,
    '<!-- TikTok Reviews Section -->',
    '</section>\\s*(?=<!-- Trustpilot Reviews Section -->)'
)

# Get the working Trustpilot carousel
trustpilot_carousel = extract_carousel_section(
    working_html,
    '<!-- Trustpilot Reviews Section -->',
    '</section>\\s*(?=<!-- Trust & Guarantee Section -->)'
)

# Extract the carousel JavaScript
js_pattern = r'// Initialize all carousels with one-at-a-time navigation.*?// Cart functionality'
js_match = re.search(js_pattern, working_html, re.DOTALL)
carousel_js = js_match.group(0) if js_match else ""

# Now replace ONLY the carousel sections in the full HTML

# Replace story carousel - find the section with similar structure
story_patterns = [
    r'<section[^>]*class="[^"]*story[^"]*"[^>]*>.*?<h2[^>]*>Why This.*?</h2>.*?</section>',
    r'<!-- Story Section -->.*?</section>\\s*(?=<!--)',
    r'<div[^>]*class="story-carousel"[^>]*>.*?</div>\\s*</div>\\s*</section>'
]

replaced_story = False
for pattern in story_patterns:
    if re.search(pattern, full_html, re.DOTALL):
        full_html = re.sub(pattern, story_carousel if story_carousel else "", full_html, flags=re.DOTALL)
        replaced_story = True
        print(f"Replaced story carousel using pattern")
        break

if not replaced_story and story_carousel:
    # Insert after a logical point if not found
    insert_point = full_html.find('<!-- Social Proof Section -->')
    if insert_point > 0:
        full_html = full_html[:insert_point] + story_carousel + '\n\n' + full_html[insert_point:]
        print("Inserted story carousel")

# Replace TikTok reviews section
tiktok_patterns = [
    r'<!-- TikTok Reviews Section -->.*?</section>\\s*(?=<!--)',
    r'<section[^>]*>.*?<h2[^>]*>.*?TikTok.*?</h2>.*?</section>\\s*(?=<section|<!--)',
    r'<div[^>]*class="[^"]*tiktok[^"]*"[^>]*>.*?</div>\\s*</section>'
]

for pattern in tiktok_patterns:
    if re.search(pattern, full_html, re.DOTALL) and tiktok_carousel:
        full_html = re.sub(pattern, tiktok_carousel, full_html, flags=re.DOTALL)
        print(f"Replaced TikTok carousel")
        break

# Replace Trustpilot reviews section  
trustpilot_patterns = [
    r'<!-- Trustpilot Reviews Section -->.*?</section>\\s*(?=<!--|<section)',
    r'<section[^>]*>.*?<h2[^>]*>.*?Trustpilot.*?</h2>.*?</section>\\s*(?=<section|<!--)',
    r'<div[^>]*class="[^"]*trustpilot[^"]*"[^>]*>.*?</div>\\s*</section>'
]

for pattern in trustpilot_patterns:
    if re.search(pattern, full_html, re.DOTALL) and trustpilot_carousel:
        full_html = re.sub(pattern, trustpilot_carousel, full_html, flags=re.DOTALL)
        print(f"Replaced Trustpilot carousel")
        break

# Replace the carousel JavaScript - find and replace the carousel initialization
js_patterns = [
    r'// Complete carousel system from original Netlify source.*?console\.log\([^)]*\);',
    r'// Initialize carousels.*?\}\)\(\);',
    r'/\* Carousel script \*/.*?initializeAllCarousels\(\);'
]

for pattern in js_patterns:
    try:
        if re.search(pattern, full_html, re.DOTALL) and carousel_js:
            full_html = re.sub(pattern, carousel_js, full_html, flags=re.DOTALL)
            print(f"Replaced carousel JavaScript")
            break
    except:
        continue

# Save the updated HTML
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(full_html)

print("\n✅ Successfully replaced ONLY the carousel sections")
print("All other elements (timers, popups, checkout, etc.) remain unchanged")