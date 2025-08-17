#!/usr/bin/env python3
"""
Add new testimonials to the existing carousel structure
"""

import re

# Read the current HTML
with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Find the TikTok carousel section and add new testimonials
tiktok_pattern = r'(<!-- TikTok Reviews Section -->.*?<div class="story-slides" id="tiktokSlides">)(.*?)(</div>\s*</div>)'
tiktok_match = re.search(tiktok_pattern, html, re.DOTALL)

if tiktok_match:
    # Get existing slides
    existing_tiktok = tiktok_match.group(2)
    
    # Add new TikTok testimonials (6-10)
    new_tiktok_slides = """
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
    
    # Combine existing and new slides
    updated_tiktok_section = tiktok_match.group(1) + existing_tiktok + new_tiktok_slides + tiktok_match.group(3)
    html = html[:tiktok_match.start()] + updated_tiktok_section + html[tiktok_match.end():]
    print("✅ Added 5 new TikTok testimonials")

# Find the Trustpilot carousel section and add new testimonials  
trustpilot_pattern = r'(<!-- Trustpilot Reviews Section -->.*?<div class="story-slides" id="trustpilotSlides">)(.*?)(</div>\s*</div>)'
trustpilot_match = re.search(trustpilot_pattern, html, re.DOTALL)

if trustpilot_match:
    # Get existing slides
    existing_trustpilot = trustpilot_match.group(2)
    
    # Add new Trustpilot testimonials (6-10)
    new_trustpilot_slides = """
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
    
    # Combine existing and new slides
    updated_trustpilot_section = trustpilot_match.group(1) + existing_trustpilot + new_trustpilot_slides + trustpilot_match.group(3)
    html = html[:trustpilot_match.start()] + updated_trustpilot_section + html[trustpilot_match.end():]
    print("✅ Added 5 new Trustpilot testimonials")

# Save the updated HTML
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("\n✅ Successfully added all new testimonials to carousels")
print("The carousels now have 10 testimonials each (5 original + 5 new)")