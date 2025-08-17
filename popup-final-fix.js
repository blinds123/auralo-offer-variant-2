// FINAL POPUP FIX - Guaranteed to work on all mobile devices
function showXLSelloutPopup() {
    console.log('Displaying XL popup with final fix...');
    
    // Step 1: Clean up any existing popups and notifications
    const existingOverlay = document.getElementById('xl-popup-overlay');
    if (existingOverlay) existingOverlay.remove();
    
    const scarcityContainer = document.getElementById('mobile-scarcity-container');
    if (scarcityContainer) {
        scarcityContainer.style.display = 'none';
    }
    
    // Step 2: Create overlay with bulletproof styling
    const overlay = document.createElement('div');
    overlay.id = 'xl-popup-overlay';
    
    // Apply all styles directly to avoid CSS conflicts
    const overlayStyles = {
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: '2147483647',
        padding: '20px',
        boxSizing: 'border-box',
        overflow: 'auto'
    };
    
    Object.assign(overlay.style, overlayStyles);
    
    // Step 3: Create popup content
    const popup = document.createElement('div');
    popup.className = 'popup-content';
    
    const popupStyles = {
        backgroundColor: 'white',
        borderRadius: '16px',
        padding: '24px 20px',
        maxWidth: '340px',
        width: '100%',
        textAlign: 'center',
        boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
        maxHeight: '80vh',
        overflow: 'auto',
        margin: 'auto'
    };
    
    Object.assign(popup.style, popupStyles);
    
    // Step 4: Add content with proper styling
    popup.innerHTML = `
        <style>
            #xl-popup-overlay * {
                box-sizing: border-box;
                margin: 0;
                padding: 0;
            }
        </style>
        <div style="font-size: 36px; margin-bottom: 12px;">⏰</div>
        <h3 style="font-size: 20px; font-weight: 700; margin-bottom: 12px; color: #1a1a1a;">
            Size 44 Just Sold Out!
        </h3>
        <p style="font-size: 14px; color: #666; margin-bottom: 16px; line-height: 1.4;">
            Most popular sizes selling fast:
        </p>
        <div style="display: flex; justify-content: center; gap: 12px; margin-bottom: 20px; flex-wrap: wrap;">
            <span style="background: #fff3cd; padding: 8px 14px; border-radius: 8px; font-size: 13px; color: #1a1a1a; border: 1px solid #d4a574; white-space: nowrap;">
                38: 3 left
            </span>
            <span style="background: #fff3cd; padding: 8px 14px; border-radius: 8px; font-size: 13px; color: #1a1a1a; border: 1px solid #d4a574; white-space: nowrap;">
                40: 2 left
            </span>
        </div>
        <button onclick="closeXLPopup()" style="
            background: linear-gradient(135deg, #d4a574, #c49561);
            color: white;
            border: none;
            padding: 14px 28px;
            border-radius: 30px;
            font-size: 16px;
            font-weight: 600;
            width: 100%;
            cursor: pointer;
            -webkit-appearance: none;
            outline: none;
            touch-action: manipulation;
        ">Select Your Size Now</button>
    `;
    
    // Step 5: Prevent body scroll
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    overlay.dataset.scrollPosition = scrollY;
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
    document.body.style.top = `-${scrollY}px`;
    
    // Step 6: Add to DOM
    overlay.appendChild(popup);
    document.body.appendChild(overlay);
    
    // Step 7: Add click-to-close on overlay (not popup)
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
        document.body.style.position = '';
        document.body.style.width = '';
        document.body.style.top = '';
        
        // Restore scroll position
        window.scrollTo(0, scrollY);
        
        // Show scarcity notifications again
        const scarcityContainer = document.getElementById('mobile-scarcity-container');
        if (scarcityContainer) {
            scarcityContainer.style.display = '';
        }
        
        // Optional: Scroll to size selector
        setTimeout(() => {
            const sizeSelector = document.querySelector('.size-selector');
            if (sizeSelector) {
                sizeSelector.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }, 100);
    }
}

// Override existing functions
window.showXLSelloutPopup = showXLSelloutPopup;
window.closeXLPopup = closeXLPopup;