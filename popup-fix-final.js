// BULLETPROOF MOBILE POPUP - Works at any scroll position
function showXLSelloutPopup() {
    console.log('Starting XL popup display...');
    
    // Hide scarcity notifications
    const scarcityContainer = document.getElementById('mobile-scarcity-container');
    if (scarcityContainer) {
        scarcityContainer.style.display = 'none';
    }
    
    // Remove existing popup
    const existing = document.getElementById('xl-popup-overlay');
    if (existing) {
        existing.remove();
    }
    
    // Create overlay that covers viewport
    const overlay = document.createElement('div');
    overlay.id = 'xl-popup-overlay';
    
    // Critical: Set all positioning inline to avoid CSS conflicts
    overlay.style.position = 'fixed';
    overlay.style.top = '0px';
    overlay.style.left = '0px';
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    overlay.style.zIndex = '2147483647';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.padding = '20px';
    overlay.style.boxSizing = 'border-box';
    
    // Create popup content
    const popup = document.createElement('div');
    popup.style.backgroundColor = 'white';
    popup.style.borderRadius = '20px';
    popup.style.padding = '25px 20px';
    popup.style.maxWidth = '320px';
    popup.style.width = '90%';
    popup.style.textAlign = 'center';
    popup.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
    
    // Popup content
    popup.innerHTML = `
        <div style="font-size: 32px; margin-bottom: 10px;">⏰</div>
        <h3 style="margin: 0 0 10px 0; color: #1a1a1a; font-size: 22px; font-weight: 700;">
            Size 44 Just Sold Out!
        </h3>
        <p style="margin: 0 0 15px 0; color: #666; font-size: 15px;">
            Most popular sizes selling fast:
        </p>
        <div style="display: flex; justify-content: center; gap: 10px; margin-bottom: 20px;">
            <span style="background: #fff3cd; padding: 6px 12px; border-radius: 6px; font-size: 13px; color: #1a1a1a; border: 1px solid #d4a574;">
                38: 3 left
            </span>
            <span style="background: #fff3cd; padding: 6px 12px; border-radius: 6px; font-size: 13px; color: #1a1a1a; border: 1px solid #d4a574;">
                40: 2 left
            </span>
        </div>
        <button onclick="closeXLPopup()" style="
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
        ">Select Your Size Now</button>
    `;
    
    // Append popup to overlay
    overlay.appendChild(popup);
    
    // Save scroll position before locking
    const scrollY = window.pageYOffset;
    overlay.dataset.scrollPosition = scrollY;
    
    // Append to body
    document.body.appendChild(overlay);
    
    // Lock body scroll without moving position
    const bodyStyle = document.body.style;
    bodyStyle.overflow = 'hidden';
    bodyStyle.touchAction = 'none';
    
    // Add click handler to overlay
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            closeXLPopup();
        }
    });
    
    console.log('XL popup displayed successfully');
}

// Close popup function
function closeXLPopup() {
    const overlay = document.getElementById('xl-popup-overlay');
    if (overlay) {
        // Get saved scroll position
        const scrollY = parseInt(overlay.dataset.scrollPosition) || 0;
        
        // Remove overlay
        overlay.remove();
        
        // Restore body scroll
        document.body.style.overflow = '';
        document.body.style.touchAction = '';
        
        // Restore scarcity notifications
        const scarcityContainer = document.getElementById('mobile-scarcity-container');
        if (scarcityContainer) {
            scarcityContainer.style.display = '';
        }
        
        // Maintain scroll position
        window.scrollTo(0, scrollY);
        
        // Optional: Scroll to size selector
        setTimeout(() => {
            const sizeSelector = document.querySelector('.size-selector');
            if (sizeSelector) {
                sizeSelector.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }, 100);
    }
}

// Make functions globally available
window.showXLSelloutPopup = showXLSelloutPopup;
window.closeXLPopup = closeXLPopup;