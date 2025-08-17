#!/usr/bin/env python3
"""
Fix the carousel testimonials properly by replacing inline SVGs with img references
"""

import re

# Read the current HTML
with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Create the proper TikTok carousel slides HTML
tiktok_slides_html = """
                <div class="story-slide tiktok-slide active">
                    <img src="./images/testimonials/svg/tiktok-review-1.svg" alt="TikTok review 1">
                </div>
                <div class="story-slide tiktok-slide">
                    <img src="./images/testimonials/svg/tiktok-review-2.svg" alt="TikTok review 2">
                </div>
                <div class="story-slide tiktok-slide">
                    <img src="./images/testimonials/svg/tiktok-review-3.svg" alt="TikTok review 3">
                </div>
                <div class="story-slide tiktok-slide">
                    <img src="./images/testimonials/svg/tiktok-review-4.svg" alt="TikTok review 4">
                </div>
                <div class="story-slide tiktok-slide">
                    <img src="./images/testimonials/svg/tiktok-review-5.svg" alt="TikTok review 5">
                </div>
                <div class="story-slide tiktok-slide">
                    <img src="./images/testimonials/svg/tiktok-testimonial-6.svg" alt="TikTok testimonial 6">
                </div>
                <div class="story-slide tiktok-slide">
                    <img src="./images/testimonials/svg/tiktok-testimonial-7.svg" alt="TikTok testimonial 7">
                </div>
                <div class="story-slide tiktok-slide">
                    <img src="./images/testimonials/svg/tiktok-testimonial-8.svg" alt="TikTok testimonial 8">
                </div>
                <div class="story-slide tiktok-slide">
                    <img src="./images/testimonials/svg/tiktok-testimonial-9.svg" alt="TikTok testimonial 9">
                </div>
                <div class="story-slide tiktok-slide">
                    <img src="./images/testimonials/svg/tiktok-testimonial-10.svg" alt="TikTok testimonial 10">
                </div>"""

# Create the proper Trustpilot carousel slides HTML
trustpilot_slides_html = """
                <div class="story-slide trustpilot-slide active">
                    <img src="./images/testimonials/svg/trustpilot-review-1.svg" alt="Trustpilot review 1">
                </div>
                <div class="story-slide trustpilot-slide">
                    <img src="./images/testimonials/svg/trustpilot-review-2.svg" alt="Trustpilot review 2">
                </div>
                <div class="story-slide trustpilot-slide">
                    <img src="./images/testimonials/svg/trustpilot-review-3.svg" alt="Trustpilot review 3">
                </div>
                <div class="story-slide trustpilot-slide">
                    <img src="./images/testimonials/svg/trustpilot-review-4.svg" alt="Trustpilot review 4">
                </div>
                <div class="story-slide trustpilot-slide">
                    <img src="./images/testimonials/svg/trustpilot-review-5.svg" alt="Trustpilot review 5">
                </div>
                <div class="story-slide trustpilot-slide">
                    <img src="./images/testimonials/svg/trustpilot-testimonial-6.svg" alt="Trustpilot testimonial 6">
                </div>
                <div class="story-slide trustpilot-slide">
                    <img src="./images/testimonials/svg/trustpilot-testimonial-7.svg" alt="Trustpilot testimonial 7">
                </div>
                <div class="story-slide trustpilot-slide">
                    <img src="./images/testimonials/svg/trustpilot-testimonial-8.svg" alt="Trustpilot testimonial 8">
                </div>
                <div class="story-slide trustpilot-slide">
                    <img src="./images/testimonials/svg/trustpilot-testimonial-9.svg" alt="Trustpilot testimonial 9">
                </div>
                <div class="story-slide trustpilot-slide">
                    <img src="./images/testimonials/svg/trustpilot-testimonial-10.svg" alt="Trustpilot testimonial 10">
                </div>"""

# Replace TikTok carousel slides
# Find pattern: <div class="story-slides" id="tiktokSlides"...>CONTENT</div>
tiktok_pattern = r'(<div class="story-slides" id="tiktokSlides"[^>]*>)(.*?)(</div>\s*</div>)'
tiktok_match = re.search(tiktok_pattern, html, re.DOTALL)

if tiktok_match:
    # Replace with our new slides
    new_tiktok_section = tiktok_match.group(1) + tiktok_slides_html + '\n            </div>'
    html = html[:tiktok_match.start()] + new_tiktok_section + html[tiktok_match.end():]
    print("✅ Replaced TikTok carousel with 10 testimonials")
else:
    print("❌ Could not find TikTok carousel section")

# Replace Trustpilot carousel slides
trustpilot_pattern = r'(<div class="story-slides" id="trustpilotSlides"[^>]*>)(.*?)(</div>\s*</div>)'
trustpilot_match = re.search(trustpilot_pattern, html, re.DOTALL)

if trustpilot_match:
    # Replace with our new slides
    new_trustpilot_section = trustpilot_match.group(1) + trustpilot_slides_html + '\n            </div>'
    html = html[:trustpilot_match.start()] + new_trustpilot_section + html[trustpilot_match.end():]
    print("✅ Replaced Trustpilot carousel with 10 testimonials")
else:
    print("❌ Could not find Trustpilot carousel section")

# Save the updated HTML
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("\n✅ Successfully updated carousels with proper img references")
print("Each carousel now has 10 testimonials pointing to the SVG files")