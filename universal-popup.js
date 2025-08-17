// UNIVERSAL POPUP - Works on ALL devices (Desktop, Mobile, iPhone, Android)
function showXLSelloutPopup() {
    console.log('[Universal Popup] Starting...');
    
    // Remove any existing popup
    const existingOverlay = document.getElementById('xl-popup-overlay');
    if (existingOverlay) existingOverlay.remove();
    
    // Hide scarcity notifications
    const scarcityContainer = document.getElementById('mobile-scarcity-container');
    if (scarcityContainer) {
        scarcityContainer.style.display = 'none';
    }
    
    // Save scroll position
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    
    // Create overlay
    const overlay = document.createElement('div');
    overlay.id = 'xl-popup-overlay';
    overlay.dataset.scrollPosition = scrollY;
    
    // Simple flexbox centering that works everywhere
    overlay.setAttribute('style', `
        position: fixed !important;
        top: 0 !important;
        left: 0 !important;
        width: 100% !important;
        height: 100% !important;
        background: rgba(0, 0, 0, 0.8) !important;
        z-index: 2147483647 !important;
        display: flex !important;
        justify-content: center !important;
        align-items: center !important;
        padding: 20px !important;
        box-sizing: border-box !important;
    `);
    
    // Create popup
    const popup = document.createElement('div');
    popup.className = 'popup-content';
    
    // Simple popup styles
    popup.setAttribute('style', `
        background: white !important;
        border-radius: 16px !important;
        padding: 24px 20px !important;
        max-width: 340px !important;
        width: 100% !important;
        text-align: center !important;
        box-shadow: 0 20px 40px rgba(0,0,0,0.3) !important;
        box-sizing: border-box !important;
    `);
    
    // Popup content
    popup.innerHTML = `
        <div style="font-size: 32px; margin-bottom: 10px;">⏰</div>
        <h3 style="margin: 0 0 10px 0; color: #1a1a1a; font-size: 22px; font-weight: 700;">
            Size 44 Just Sold Out!
        </h3>
        <p style="margin: 0 0 15px 0; color: #666; font-size: 15px; line-height: 1.4;">
            Most popular sizes selling fast:
        </p>
        <div style="display: flex; justify-content: center; gap: 10px; margin-bottom: 20px; flex-wrap: wrap;">
            <span style="background: #fff3cd; padding: 6px 12px; border-radius: 6px; font-size: 13px; color: #1a1a1a; border: 1px solid #d4a574;">
                38: 3 left
            </span>
            <span style="background: #fff3cd; padding: 6px 12px; border-radius: 6px; font-size: 13px; color: #1a1a1a; border: 1px solid #d4a574;">
                40: 2 left
            </span>
        </div>
        <button onclick="window.closeXLPopup()" style="
            background: linear-gradient(135deg, #d4a574, #c49561);
            color: white;
            border: none;
            padding: 14px 24px;
            border-radius: 30px;
            font-size: 17px;
            font-weight: 600;
            width: 100%;
            cursor: pointer;
            -webkit-appearance: none;
            -webkit-tap-highlight-color: transparent;
        ">Select Your Size Now</button>
    `;
    
    // Lock body scroll
    const bodyStyle = document.body.style;
    const htmlStyle = document.documentElement.style;
    
    overlay.dataset.bodyPosition = bodyStyle.position || '';
    overlay.dataset.bodyTop = bodyStyle.top || '';
    overlay.dataset.bodyWidth = bodyStyle.width || '';
    overlay.dataset.htmlOverflow = htmlStyle.overflow || '';
    
    bodyStyle.position = 'fixed';
    bodyStyle.top = `-${scrollY}px`;
    bodyStyle.width = '100%';
    htmlStyle.overflow = 'hidden';
    
    // Add popup to overlay
    overlay.appendChild(popup);
    
    // Add overlay to body
    document.body.appendChild(overlay);
    
    // Click outside to close
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            window.closeXLPopup();
        }
    });
    
    console.log('[Universal Popup] Displayed successfully');
}

// Close popup function
window.closeXLPopup = function() {
    const overlay = document.getElementById('xl-popup-overlay');
    if (!overlay) return;
    
    const scrollY = parseInt(overlay.dataset.scrollPosition) || 0;
    
    // Restore body styles
    const bodyStyle = document.body.style;
    const htmlStyle = document.documentElement.style;
    
    bodyStyle.position = overlay.dataset.bodyPosition || '';
    bodyStyle.top = overlay.dataset.bodyTop || '';
    bodyStyle.width = overlay.dataset.bodyWidth || '';
    htmlStyle.overflow = overlay.dataset.htmlOverflow || '';
    
    // Remove overlay
    overlay.remove();
    
    // Restore scroll
    window.scrollTo(0, scrollY);
    
    // Show scarcity notifications
    const scarcityContainer = document.getElementById('mobile-scarcity-container');
    if (scarcityContainer) {
        scarcityContainer.style.display = '';
    }
    
    console.log('[Universal Popup] Closed');
};

// Override the existing function
window.showXLSelloutPopup = showXLSelloutPopup;

console.log('[Universal Popup] Script loaded');