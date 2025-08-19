# Product Conversion Template Guide
## From 2-Piece Desert Road Set → Maison Margiela Twist Jeans

This document details EVERY change made when converting the landing page from a 2-piece clothing set to a single jeans product. Use this as a template for future product changes.

---

## 🎯 QUICK REFERENCE - What Needs Changing for New Products

### 1. Core Product Information
- **Product Name**: Throughout entire document
- **Product Type**: set/sets → jeans/jean/pair
- **Price Points**: €1,140 → €1,075
- **Brand**: Generic → Maison Margiela / MM6
- **SKU/Model**: Update product codes

### 2. File Changes Required
- `index.html` - Main landing page (91+ changes)
- `/images/product/` - Product images
- `/images/story2/` - Story carousel images
- `/images/testimonials/svg/` - Review SVGs (20+ files)

---

## 📝 DETAILED SECTION-BY-SECTION CHANGES

### 1. HEAD SECTION (Lines 1-100)
**Location**: `<title>` tag (Line 10)
- **OLD**: "Auralo Fashion Desert Road Set"
- **NEW**: "FREE Viral Twist Jeans (Just Pay Shipping) - Worth €1,075 | TikTok's #1 Trending"

### 2. HERO SECTION (Lines 2900-3000)
**Changes**:
- Headline: "Your Desert Adventure Starts Here" → "THE JEANS THAT BROKE TIKTOK"
- Subheadline: Added "3M+ Views • 47 Left • Sold Out 5 Times"
- Value prop: "€1,140 VALUE" → "€1,075 VALUE"
- CTA: Updated to reference jeans instead of set

### 3. PRODUCT IMAGES (Lines 3200-3250)
**Location**: Product carousel
- **OLD**: `./images/product/lava-top-main.jpg`, `lava-pants-main.jpg`
- **NEW**: `./images/product/S52LA0243_M30016_961_D.jpg`, `_R.jpg`, `_T.jpg`

### 4. TRUST & SCAM OBJECTION SECTIONS (NEW - Lines 3400-3500)
**Added Sections**:
```html
<h3>🔍 REAL TALK: YES, THIS IS LEGIT</h3>
<p>We know what you're thinking. "Nobody gives away €1,075 jeans for free."
Here's the truth: We bought 10,000 pairs at 92% off from Maison Margiela's overstock.</p>
```

### 5. QUALITY COMPARISON SECTION (NEW - Lines 3550-3650)
**Added**:
- SHEIN quality (€15-25 range)
- Zara quality (€49-69 range)  
- MM6 quality (€1,075 - Italian-made)

### 6. SIZE GUIDE (Lines 3700-3800)
**Changes**:
- Removed top/bottom separate sizing
- Added single jeans size chart (XS-XL)
- Updated fit descriptions for wide-leg jeans

### 7. PRICING SECTIONS (Throughout)
**All Instances Changed**:
- €1,140 → €1,075
- "2-piece set" → "jeans"
- "Desert Road Set" → "Maison Margiela Twist Jeans"

### 8. STORY CAROUSEL - "3M+ Views" Section (Lines 4100-4230)
**Title Changes**:
- "The Story Behind Your New Obsession" → "The Jeans That Have 3M+ Views"
- "Why This Set Exists" → "The story behind the obsession"

**Image Updates** (12 slides):
- Slide 1: `top_img2.jpg` → `front.webp`
- Slide 2: `pants_img2.jpg` → `rear.webp`
- Slide 3: `close_up_img2.jpg` → `detail.webp`
- Slide 4: `combination_img2.jpg` → `diag.webp`
- Slide 5: `lifestyle_img2.jpg` → `bg_sand.webp`
- Slide 6: `model_img2.jpg` → `tag.webp`
- Slide 7: `detail1_img2.jpg` → `bg_beige.webp`
- Slide 8: `detail2_img2.jpg` → `front.webp`
- Slide 9: `packaging_img2.jpg` → `detail.webp`
- Slide 10: `brand_img2.jpg` → `bg_dark.webp`
- Slide 11: `quality_img2.jpg` → `rear.webp`
- Slide 12: `final_img2.jpg` → `diag.webp`

**Copy Updates**:
- All slide text updated to reference jeans, 90° twist design, TikTok virality

### 9. IMESSAGE CONVERSATIONS (Lines 4350-4550)
**Updated All Conversations**:
```
OLD: "wait is that the desert set everyone's talking about?"
NEW: "wait are those the Maison Margiela jeans???"

OLD: "how did you get it for free??"
NEW: "STOP how?? these are €1,075 on the website"
```

### 10. TESTIMONIAL SVGs (20+ files)
**Location**: `/images/testimonials/svg/`

**TikTok Reviews** (tiktok-review-1.svg through tiktok-review-5.svg):
- Updated all text references from "set" to "jeans"
- Changed price points from €1,140 to €1,075
- Added Gen Z language ("bestie", "no cap", "it's giving")

**Trustpilot Reviews** (trustpilot-review-1.svg through trustpilot-review-5.svg):
- Professional language but updated product references
- Added quality comparisons to other brands
- Emphasized Italian craftsmanship

### 11. MULTIPLE VOICES SECTION (Lines 3884-3946)
**Added 4 Perspectives**:
1. Business Truth - Explains overstock purchase
2. Skeptical Friend - Addresses scam concerns
3. Marketing Math - Shows ad cost comparison
4. Customer Testimonial - Real experience

### 12. AUTHENTICITY PROOF SECTION (Lines 3994-4050)
**Added Elements**:
- Authentication methods (QR codes, serial numbers)
- Fabric quality indicators
- Comparison to retail version
- Return policy emphasis

### 13. GEN Z LANGUAGE UPDATES (Throughout)
**Language Changes**:
- "Elegant ensemble" → "Main character energy"
- "Premium quality" → "It's giving luxury"
- "Exclusive offer" → "POV: You found THE jeans"
- "Limited availability" → "The girls who get it, get it"

### 14. BUTTON CTAs (All instances)
**Primary Button**:
- "GET YOUR SET NOW" → "PAY $99 NOW"
- Subtext: "Ships immediately" → "Get It TODAY - Ships Immediately"

**Secondary Button**:
- "CLAIM FREE SET" → "GET FOR FREE!"
- Subtext: "Just pay shipping" → "Ships in 2 Weeks • Just Cover Shipping"

### 15. URGENCY & SCARCITY (Lines 2950-3050)
**Updated**:
- "500 sets available" → "47 pairs left"
- "Selling fast" → "Sold out 5 times"
- Added: "3M+ views on TikTok"

### 16. FAQ/OBJECTION HANDLING
**New Objections Added**:
- "Is this a scam?" (Tier 1 priority)
- "What's the catch?" (Tier 1 priority)
- "Are they SHEIN quality?" (Tier 2 priority)
- "Why would anyone give away €1,075 jeans?" (Tier 3 priority)

### 17. SOCIAL PROOF UPDATES
**Stats Changed**:
- "10,000 happy customers" → "3M+ TikTok views"
- "Featured in Vogue" → "Viral on TikTok"
- Added: "247 DMs average first week"

### 18. TECHNICAL PRODUCT DETAILS
**Updated Descriptions**:
- Material: "Premium cotton blend" → "Italian denim with 90° twist construction"
- Fit: "Relaxed fit set" → "Wide-leg architectural silhouette"
- Care: Generic → "Machine wash cold, hang dry"

---

## 🔄 CSS & JAVASCRIPT CHANGES

### CSS Updates (Lines 400-450)
```css
/* Fixed positioning issue for story carousel overlays */
.story-slide-with-text {
    position: relative !important;
}
.story-slide-with-text > div {
    position: absolute !important;
}
```

### JavaScript Carousel Fix (Lines 7200-7250)
- Updated carousel initialization for mobile responsiveness
- Fixed transform calculations for proper slide navigation

---

## 📊 COMPLETE METRICS

### Total Changes by Category:
- **Product Name References**: 41 instances of "jeans"
- **Price Updates**: 23 instances (€1,140 → €1,075)
- **Brand Mentions**: 9 instances of "Maison Margiela"
- **Image Replacements**: 24 images updated
- **SVG Updates**: 20 testimonial files
- **New Sections Added**: 5 trust-building sections
- **Copy Rewrites**: ~60% of all text content

### Files Modified:
1. `index.html` - 91+ modifications
2. 20 SVG testimonial files
3. 12 story carousel images replaced
4. 6 product images updated

---

## 🚀 TEMPLATE USAGE INSTRUCTIONS

### For Future Product Changes:

1. **Search & Replace Core Terms**:
   - Product name (use case-sensitive search)
   - Price points (include currency symbol)
   - Brand names
   - Product type (singular/plural)

2. **Update Images**:
   - `/images/product/` - Main product shots
   - `/images/story2/` - Story carousel
   - Keep same filenames if possible

3. **Rewrite Trust Sections**:
   - Identify top 3 objections for new product
   - Address in multiple voices
   - Use target demographic language

4. **Update Testimonials**:
   - Edit SVG files directly
   - Maintain platform-appropriate tone
   - Include specific product benefits

5. **Test Everything**:
   - Mobile responsiveness
   - Carousel functionality
   - Image loading
   - Price consistency
   - No remaining old product references

---

## ⚠️ CRITICAL CHECKLIST

Before going live with new product:

- [ ] All prices updated consistently
- [ ] No references to old product remain
- [ ] Images all loading correctly
- [ ] Trust objections match new product
- [ ] Testimonials reference correct product
- [ ] Size guide matches product type
- [ ] CTAs updated with new offers
- [ ] Mobile tested with 15-second wait
- [ ] Carousel navigation working
- [ ] Text overlays displaying correctly

---

*Last Updated: Product conversion from Desert Road Set to Maison Margiela Twist Jeans*
*Template Version: 1.0*