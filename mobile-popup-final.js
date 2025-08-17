// MOBILE-FIRST POPUP SOLUTION - Works on all phones including iPhones
function showXLSelloutPopup() {
    console.log('[Mobile Popup] Initiating display...');
    
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
    
    // Create overlay container
    const overlay = document.createElement('div');
    overlay.id = 'xl-popup-overlay';
    overlay.dataset.scrollPosition = scrollY;
    
    // Create inner wrapper for better mobile centering
    const wrapper = document.createElement('div');
    wrapper.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        -webkit-transform: translate(-50%, -50%);
        width: 90%;
        max-width: 340px;
        z-index: 2147483648;
    `;
    
    // Create popup content
    const popup = document.createElement('div');
    popup.style.cssText = `
        background: white;
        border-radius: 16px;
        padding: 24px 20px;
        text-align: center;
        box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        width: 100%;
        box-sizing: border-box;
    `;
    
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
    
    // Set overlay background styles
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        z-index: 2147483647;
        margin: 0;
        padding: 0;
    `;
    
    // Assemble elements
    wrapper.appendChild(popup);
    overlay.appendChild(wrapper);
    
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
    
    // Add to DOM
    document.body.appendChild(overlay);
    
    // Click outside to close
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            window.closeXLPopup();
        }
    });
    
    console.log('[Mobile Popup] Displayed successfully');
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
    
    // Scroll to size selector
    setTimeout(() => {
        const sizeSelector = document.querySelector('.size-selector');
        if (sizeSelector) {
            sizeSelector.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, 100);
};

// Override existing function
window.showXLSelloutPopup = showXLSelloutPopup;

console.log('[Mobile Popup] Script loaded');