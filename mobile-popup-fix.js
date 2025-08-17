// iPhone-Compatible XL Sellout Popup
function showXLSelloutPopup() {
    // Remove any existing popup
    const existing = document.getElementById('xl-popup-wrapper');
    if (existing) existing.remove();
    
    // Create wrapper div that covers entire viewport
    const wrapper = document.createElement('div');
    wrapper.id = 'xl-popup-wrapper';
    
    // Use inline styles to ensure they work on all devices
    wrapper.setAttribute('style', 
        'position: fixed;' +
        'top: 0;' +
        'left: 0;' +
        'width: 100%;' +
        'height: 100%;' +
        'background-color: rgba(0, 0, 0, 0.8);' +
        'z-index: 999999;' +
        'display: flex;' +
        'align-items: center;' +
        'justify-content: center;' +
        'padding: 20px;' +
        'box-sizing: border-box;'
    );
    
    // Create the popup content
    const popup = document.createElement('div');
    popup.setAttribute('style',
        'background: white;' +
        'border-radius: 15px;' +
        'padding: 25px;' +
        'max-width: 320px;' +
        'width: 100%;' +
        'text-align: center;' +
        'box-shadow: 0 10px 30px rgba(0,0,0,0.3);' +
        'position: relative;'
    );
    
    // Create content HTML
    popup.innerHTML = [
        '<div style="color: #d4a574; font-size: 24px; margin-bottom: 10px;">⏰</div>',
        '<h3 style="margin: 0 0 10px 0; color: #333; font-size: 20px;">Size 44 Just Sold Out!</h3>',
        '<p style="margin: 0 0 15px 0; color: #666; font-size: 14px;">Most popular sizes selling fast:</p>',
        '<div style="display: flex; justify-content: center; gap: 10px; margin-bottom: 20px;">',
        '  <span style="background: #fff3cd; padding: 5px 10px; border-radius: 5px; font-size: 12px; color: #333;">38: 3 left</span>',
        '  <span style="background: #fff3cd; padding: 5px 10px; border-radius: 5px; font-size: 12px; color: #333;">40: 2 left</span>',
        '</div>',
        '<button id="xl-popup-close" style="',
        '  background: linear-gradient(135deg, #d4a574, #c49561);',
        '  color: white;',
        '  border: none;',
        '  padding: 12px 20px;',
        '  border-radius: 25px;',
        '  font-size: 16px;',
        '  font-weight: bold;',
        '  width: 100%;',
        '  cursor: pointer;',
        '">Select Your Size Now</button>'
    ].join('');
    
    // Append popup to wrapper
    wrapper.appendChild(popup);
    
    // Append wrapper to body
    document.body.appendChild(wrapper);
    
    // Prevent body scroll
    const scrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';
    
    // Add close functionality
    const closePopup = function() {
        wrapper.remove();
        // Restore body scroll
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        window.scrollTo(0, scrollY);
        
        // Scroll to size selector
        const sizeSelector = document.querySelector('.size-selector');
        if (sizeSelector) {
            setTimeout(() => {
                sizeSelector.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 100);
        }
    };
    
    // Close on button click
    document.getElementById('xl-popup-close').addEventListener('click', closePopup);
    
    // Close on overlay click
    wrapper.addEventListener('click', function(e) {
        if (e.target === wrapper) {
            closePopup();
        }
    });
    
    console.log('XL Popup shown at', new Date().toLocaleTimeString());
}

// Override the window function
window.showXLSelloutPopup = showXLSelloutPopup;
window.closeXLPopup = function() {
    const wrapper = document.getElementById('xl-popup-wrapper');
    if (wrapper) wrapper.remove();
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
};