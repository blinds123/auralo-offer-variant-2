// VIEWPORT-CENTERED POPUP FIX - Guaranteed to work at any scroll position
function showXLSelloutPopup() {
    console.log('[Popup] Starting display...');
    
    // Remove any existing popup
    const existingOverlay = document.getElementById('xl-popup-overlay');
    if (existingOverlay) existingOverlay.remove();
    
    // Hide scarcity notifications
    const scarcityContainer = document.getElementById('mobile-scarcity-container');
    if (scarcityContainer) {
        scarcityContainer.style.display = 'none';
    }
    
    // Save current scroll position BEFORE any DOM changes
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    
    // Create overlay - use fixed positioning for viewport-relative display
    const overlay = document.createElement('div');
    overlay.id = 'xl-popup-overlay';
    overlay.dataset.scrollPosition = scrollY;
    
    // Apply all critical styles inline to avoid CSS conflicts
    overlay.style.cssText = `
        position: fixed !important;
        top: 0 !important;
        left: 0 !important;
        right: 0 !important;
        bottom: 0 !important;
        width: 100vw !important;
        height: 100vh !important;
        background-color: rgba(0, 0, 0, 0.8) !important;
        display: flex !important;
        justify-content: center !important;
        align-items: center !important;
        z-index: 2147483647 !important;
        padding: 20px !important;
        box-sizing: border-box !important;
        overflow: auto !important;
    `;
    
    // Create popup content container
    const popup = document.createElement('div');
    popup.className = 'popup-content';
    
    // Apply popup styles inline
    popup.style.cssText = `
        background-color: white !important;
        border-radius: 16px !important;
        padding: 24px 20px !important;
        max-width: 340px !important;
        width: 90% !important;
        text-align: center !important;
        box-shadow: 0 20px 40px rgba(0,0,0,0.3) !important;
        max-height: 80vh !important;
        overflow: auto !important;
        position: relative !important;
        margin: auto !important;
    `;
    
    // Add popup content
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
            touch-action: manipulation;
        ">Select Your Size Now</button>
    `;
    
    // Add popup to overlay
    overlay.appendChild(popup);
    
    // Lock body scroll - use position:fixed method correctly
    const bodyStyle = document.body.style;
    const htmlStyle = document.documentElement.style;
    
    // Store original styles
    overlay.dataset.bodyPosition = bodyStyle.position || '';
    overlay.dataset.bodyTop = bodyStyle.top || '';
    overlay.dataset.bodyWidth = bodyStyle.width || '';
    overlay.dataset.htmlOverflow = htmlStyle.overflow || '';
    
    // Apply scroll lock
    bodyStyle.position = 'fixed';
    bodyStyle.top = `-${scrollY}px`;
    bodyStyle.width = '100%';
    htmlStyle.overflow = 'hidden';
    
    // Add to DOM
    document.body.appendChild(overlay);
    
    // Add click-outside-to-close handler
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            window.closeXLPopup();
        }
    });
    
    console.log(`[Popup] Displayed successfully at scroll position: ${scrollY}px`);
}

// Close popup function
window.closeXLPopup = function() {
    const overlay = document.getElementById('xl-popup-overlay');
    if (!overlay) return;
    
    console.log('[Popup] Closing...');
    
    // Get saved scroll position
    const scrollY = parseInt(overlay.dataset.scrollPosition) || 0;
    
    // Restore original body styles
    const bodyStyle = document.body.style;
    const htmlStyle = document.documentElement.style;
    
    bodyStyle.position = overlay.dataset.bodyPosition || '';
    bodyStyle.top = overlay.dataset.bodyTop || '';
    bodyStyle.width = overlay.dataset.bodyWidth || '';
    htmlStyle.overflow = overlay.dataset.htmlOverflow || '';
    
    // Remove overlay
    overlay.remove();
    
    // Restore scroll position
    window.scrollTo(0, scrollY);
    
    // Show scarcity notifications again
    const scarcityContainer = document.getElementById('mobile-scarcity-container');
    if (scarcityContainer) {
        scarcityContainer.style.display = '';
    }
    
    // Optional: Scroll to size selector after a brief delay
    setTimeout(() => {
        const sizeSelector = document.querySelector('.size-selector');
        if (sizeSelector) {
            sizeSelector.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, 100);
    
    console.log('[Popup] Closed successfully');
};

// Make function globally available
window.showXLSelloutPopup = showXLSelloutPopup;

console.log('[Popup] Viewport-centered popup fix loaded');