document.addEventListener('DOMContentLoaded', () => {
    const output = document.getElementById('output');
    const background = document.querySelector('.tt-background-image');
    window.onload = function () {
        output.innerText = "MyTextStudio";
        output.style.overflow = "auto"
        output.style.textShadow = "none";
        output.style.fontSize = "60px"
        background.style.backgroundImage = 'none';
    
        
    }
    initializeTextControls();
    initializeFontControls();
    initializeAlignmentControls();
    initializeStyleControls();  
    initializeImageUploadControls();
    initializeAnimationControls();
    initializeMenuToggle(); 
    initializedivhide();
    showgradient(); 
    showicon();
    showboggle();
    showbackground();
    showcustommenu();
    showTextShadow(); 
    shadow3D();
    show3Dgradient();
    show3Dimage();
    showdiv();
    shadow3D2();
    showoutline();
    importicon();
    iconfunction(); 
    showcolorpalette();
    animationeffect();
    downloadeditor();
    showbevel();
    innershadow1();
    innershadow2();

    // showfont();
    outershadow1();
    outershadow2();
    importtext();
    // outlinefirstgradient();
    fillingshadow();
    showprojectiongradient();
    showpercentage();
    scrolling();
    backgroundchangecolor();
    changeicon();
});


// Initialize Menu Toggle
function initializeMenuToggle() {
    const menuItems = document.querySelectorAll('#tt-options-menu li');
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove 'selected' class from all list items
            document.querySelectorAll('#tt-options-menu li').forEach(li => li.classList.remove('selected'));
     
            // Add 'selected' class to the clicked item
            item.classList.add('selected');
     
            // Get the data-name attribute of the clicked item
            const dataName = item.getAttribute('data-name');
     
            // Hide all sections
            document.querySelectorAll('section.content').forEach(section => {
                section.style.display = 'none'; // Hide all sections
            });
          
            document.getElementById('tt-background-image-fieldset').style.display = 'none';
     
            // Show the section that matches the clicked item's data-name
            const activeSection = document.querySelector(`section[data-name="${dataName}"]`);
            if (activeSection) {
                activeSection.style.display = 'block'; // Show the corresponding section
            }
        });
        item.addEventListener('click', () => {
            // Remove 'selected' class from all list items
            document.querySelectorAll('#tt-options-menu li').forEach(li => li.classList.remove('selected'));
     
            // Add 'selected' class to the clicked item
            item.classList.add('selected');
     
            // Get the data-name of the clicked item
            const selectedName = item.getAttribute('data-name');
     
            // Hide all sections
            document.querySelectorAll('section').forEach(section => {
                section.style.display = 'none';
            });
            const fieldset = document.getElementById('tt-depth2-fieldset');
            fieldset.style.display = 'none';
     
            document.getElementById('tt-fill-gradient-fieldset').style.display = "none";
            document.getElementById('tt-fill-texture-fieldset').style.display = "none";
            document.getElementById('tt-lettering-boggle-fieldset').style.display = "none";
            document.getElementById('tt-lettering-shadow-fieldset').style.display = "none";
            document.getElementById('tt-depth-fill-gradient-fieldset').style.display = "none";
            document.getElementById('tt-depth-fill-texture-fieldset').style.display = "none";
            
     
     
     
            // Show the corresponding section
            const selectedSection = document.querySelector(`section[data-name="${selectedName}"]`);
            if (selectedSection) {
                selectedSection.style.display = 'block';
            }
            if(selectedName == "custom")
            {
                document.getElementById('tt-fill-fieldset').setAttribute('disabled', 'true');
                document.getElementById('tt-lettering-fieldset').setAttribute('disabled', 'true');
                document.getElementById('tt-depth-fieldset').setAttribute('disabled', 'true');
                document.getElementById('custom_column1').style.display = 'block';
                document.getElementById('custom_column2').style.display = 'block';
                document.getElementById('custom_column3').style.display = 'block';
                document.getElementById('depth_fill').style.display = 'none';

                document.getElementById('tt-outline-first-fieldset').style.display = 'none';
                document.getElementById('tt-outline-global2-fieldset').style.display = 'none';
                document.getElementById('tt-shadow-inner2-fieldset').style.display = 'none';
                document.getElementById('tt-outline-second-fieldset').style.display = 'none';
                document.getElementById('tt-outline-global-fieldset').style.display = 'none';
                document.getElementById('tt-bevel-inner-fieldset').style.display = 'none';
                document.getElementById('tt-shadow-inner-fieldset').style.display = 'none';
                document.getElementById('tt-shadow-outer-fieldset').style.display = 'none';
    
    
            }
            else if(selectedName == "text")
            {
                document.getElementById('text_column1').style.display = 'block';
                document.getElementById('text_column2').style.display = 'block';
    
            }
            else if(selectedName == "icon")
            {
                document.getElementById('icon-columns1').style.display = 'block';
                document.getElementById('icon-columns2').style.display = 'block';
                document.getElementById('tt-icon-fieldset').setAttribute('disabled', 'true');

    
            }
            else if(selectedName == "background")
            {
                document.getElementById('background_column1').style.display = 'block';
                document.getElementById('background_column2').style.display = 'block';
    
            }
            else if(selectedName == "animation")
            {
                document.getElementById('animation_column').style.display = 'block';
            }
            else if(selectedName == "save")
            {
                document.getElementById('save_column1').style.display = 'block';
                document.getElementById('save_column2').style.display = 'block';
    
            }
        
    
        });
    });
}

// Handle Menu Item Action
function handleMenuAction(menuName) {
    const contentSections = document.querySelectorAll('.menu-content');
    contentSections.forEach(section => {
        section.style.display = section.getAttribute('data-name') === menuName ? 'block' : 'none';
    });
}

// Initialize Text Controls
function initializeTextControls() {
    const output = document.getElementById('output');

    if (!output) return;

    const textArea = document.getElementById('tt-text-textarea');
    if (textArea) {
        textArea.addEventListener('input', () => {
            output.innerText = textArea.value || "";
        });
    }

   
}

// Initialize Font Controls
function initializeFontControls() {
    const output = document.getElementById('output');
    document.getElementById("tt-fill-color-input").addEventListener("input", function () {
        let selectedColor = this.value;
        output.style.textShadow = "none";
        output.style.color = selectedColor;
    });


    const fontSelector = document.querySelectorAll('li[data-name]');
    fontSelector.forEach(item => {
        item.addEventListener('click', function () {
            const fontName = this.getAttribute('data-name');
            if (fontName) {
                loadFontAndApply(fontName, output);
            }
        });
    });
}

// Utility: Load Font and Apply
function loadFontAndApply(fontName, output) {
    const fontCDNs = {
        'Angeline': 'https://fonts.cdnfonts.com/css/angeline',
        'Hartone Softed': 'https://fonts.cdnfonts.com/css/hartone-softed',
        'Airstrike': 'https://fonts.cdnfonts.com/css/airstrike',
        'Super Bubble': 'https://fonts.cdnfonts.com/css/super-bubble'
    };

    const fontURL = fontCDNs[fontName];
    if (fontURL) {
        const link = document.createElement('link');
        link.href = fontURL;
        link.rel = 'stylesheet';
        document.head.appendChild(link);
        output.style.fontFamily = `${fontName}, sans-serif`;
    }
}

// Initialize Alignment Controls
function initializeAlignmentControls() {
    const output = document.getElementById('output');
    if (!output) return;

    const alignmentButtons = document.querySelectorAll('.tt-align-list li');
    alignmentButtons.forEach(button => {
        button.addEventListener('click', () => {
            const alignment = button.getAttribute('data-id');
            if (alignment) {
                output.style.textAlign = alignment;
            }
        });
    });
}

// Initialize Style Controls
function initializeStyleControls() {
    const output = document.getElementById('output');
    if (!output) return;

    const boldButton = document.querySelector('[data-selected="bold"]');
    if (boldButton) {
        boldButton.addEventListener('click', () => {
            output.style.fontWeight = output.style.fontWeight === 'bold' ? 'normal' : 'bold';
        });
    }

   
}





// Initialize Image Upload Controls
function initializeImageUploadControls() {
    document.getElementById('tt-fill-texture-import-input').addEventListener('change', function (event) {
        const file = event.target.files[0];
        
    
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = function (e) {
                // Set the background image in the #output div
                document.getElementById('output').style.textShadow = 'none';
                document.getElementById('output').style.backgroundImage = `url(${e.target.result})`;
                document.getElementById('output').style.backgroundSize = 'cover'; // Adjust as needed
                document.getElementById('output').style.webkitBackgroundClip = 'text';
                // document.getElementById('output').style.backgroundClip = 'text';
                document.getElementById('output').style.backgroundposition = 'center';
                
    
     
                document.getElementById('output').style.color = 'transparent'; // Makes text color transparent so background image shows
     
                // Display the selected image in the .tt-texture-preview-image
                document.querySelector('.tt-texture-preview-image').src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });
     
    document.getElementById("tt-texture-delete-icon").addEventListener("click", function () {
        // Clear the img src and the background image
        // document.getElementById("output").style.backgroundImage = "none";
        const outputDiv = document.getElementById("output");
        outputDiv.style.backgroundImage = "none";
     
        // Get the color value from the color input
        const colorInput = document.getElementById("tt-fill-color-input");
        const selectedColor = colorInput.value;  // Get the selected color value
     
        // Set the text color in #output to the selected color
        outputDiv.style.color = selectedColor;
        const previewImage = document.getElementById("tt-texture-preview-image");
        previewImage.src = "";
    });
}

// Initialize Animation Controls
function initializeAnimationControls() {
    const animationList = document.querySelectorAll('#tt-animation-list li[data-animation-id]');
    const output = document.getElementById('output');
    if (!output || !animationList) return;

    animationList.forEach(item => {
        item.addEventListener('click', () => {
            const animationId = item.getAttribute('data-animation-id');

            // Remove previous animation classes
            output.className = 'output';

            // Add new animation class
            if (animationId) {
                output.classList.add(`animate-${animationId}`);
            }
        });
    });
}

function initializedivhide() {
    const checkboxIds = [
        { id: 'tt-fill-active-input', type: 'general' },
        { id: 'tt-fill-gradient-active-input', type: 'gradient' },
        { id: 'tt-fill-texture-active-input', type: 'texture' },
        { id: 'tt-lettering-active-input', type: 'lettering'},
        { id: 'tt-lettering-boggle-active-input', type: 'lettering_boggle'},
        { id: 'tt-lettering-shadow-active-input', type: 'lettering_shadow'},
        { id: 'tt-depth-active-input' , type: 'depth_active'},
        { id: 'tt-depth-fill-gradient-active-input', type: 'depth_fill'},
        { id: 'tt-icon-active-input' , type: 'icon'},
        { id: 'tt-background-fill-image-active-input' , type: 'background'},
        { id: 'tt-background-fill-gradient-active-input' , type: 'background_gradient'},
        { id: 'tt-depth-fill-texture-active-input' , type: 'depth_texture'},
        { id: 'tt-depth2-active-input', type: 'depth2_active'},
        { id: 'tt-outline-first-active-input', type: 'outline_first'},
        { id: 'tt-outline-second-active-input', type: 'outline_second'},
        { id: 'tt-outline-global-active-input', type: 'outline_third'},
        { id: 'tt-fill-palette-active-input', type: 'palette_active'},
        { id: 'tt-bevel-inner-active-input', type: 'bevel_active'},
        { id: 'tt-shadow-inner-active-input', type: 'shadow_inner_active'},
        { id: 'tt-shadow-inner2-active-input', type: 'shadow_inner2_active'},
        { id: 'tt-shadow-outer-active-input', type: 'shadow_outer_active'},
        { id: 'tt-shadow-outer2-active-input', type: 'shadow_outer2_active'},
        { id: 'tt-outline-first-fill-gradient-active-input' , type: 'outline_first_gradient'},
        { id: 'tt-outline-first-fill-texture-active-input' , type: 'outline_first_fillingpatttern'}







    ]; 
    
    checkboxIds.forEach(({ id, type }) => {
        const checkbox = document.getElementById(id);
    
        if (checkbox) {
            checkbox.addEventListener('change', () => {
                const fillDiv = document.getElementById('tt-fill-fieldset');
                const outputDiv = document.getElementById('output');
                
                if (type === 'general') {
                    if (checkbox.checked) {
                        fillDiv.removeAttribute('disabled');
                        outputDiv.style.textShadow ="none";
                        
                    } else {
                        fillDiv.setAttribute('disabled', 'true');
                        outputDiv.style.textShadow ="none";
                        output.style.color = "black";
                         // Reset background image
                    }
                }
                if (type === 'gradient') {
                    const gradientFieldset = document.getElementById('tt-fill-gradient-fieldset');
                    const colorsInput = document.getElementById('tt-fill-gradient-colors-input');
                    const outputDiv = document.getElementById('output');
                        if (checkbox.checked) {
                            gradientFieldset.style.display = 'block';
                            outputDiv.style.textshadow = 'none'
                            const groupPreview = document.querySelector(".grp-preview");
                            const currentBackgroundImage = getComputedStyle(groupPreview).backgroundImage;
                            const colors = colorsInput.value;
                            const angle = 90;
                            const newGradient = currentBackgroundImage.replace(/linear-gradient\([^,]+,/, `linear-gradient(${angle}deg,`);
                            
                            outputDiv.style.backgroundImage = newGradient;
                            outputDiv.style.webkitBackgroundClip = 'text'; // Clip the background to the text
                            outputDiv.style.webkitTextFillColor = 'transparent'; // Show the gradient fieldset
                        } else {
                            gradientFieldset.style.display = 'none'; // Hide the gradient fieldset
                            outputDiv.style.backgroundImage = '';
                            outputDiv.style.webkitBackgroundClip = '';
                            outputDiv.style.webkitTextFillColor = '';
                        }
                }
                if (type === 'texture') {
                    const textureFieldset = document.getElementById('tt-fill-texture-fieldset');
                    if (checkbox.checked) {
                        textureFieldset.style.display = 'block'; // Show the texture fieldset
                    } else {
                        textureFieldset.style.display = 'none'; // Hide the texture fieldset
                    }
                    const outputDiv = document.getElementById('output');
                    // Optionally reset or modify styles here
                }
                if (type === 'lettering') {
                    const letteringFieldset = document.getElementById('tt-lettering-fieldset');
                    const outputDiv = document.getElementById("output");
  
                    // Retrieve computed styles for the output div
                    ;
                    if (checkbox.checked) {
                        letteringFieldset.removeAttribute('disabled');
                       
                        const computedStyle = window.getComputedStyle(outputDiv);
                        const originalFontSize = parseFloat(computedStyle.fontSize); // Convert to number
                        const originalBackgroundImage = computedStyle.backgroundImage;
                        const originalBackgroundSize = computedStyle.backgroundSize;
                        const originalBackgroundPosition = computedStyle.backgroundPosition;
                        // const textshadow = computedStyle.textShadow
                        const color = computedStyle.color;
                        outputDiv.style.textShadow = "none";
                        outputDiv.style.fontSize = `${originalFontSize}px`; // Ensure fontSize is applied correctly
                        outputDiv.style.backgroundImage = originalBackgroundImage;
                        outputDiv.style.backgroundSize = originalBackgroundSize;
                        outputDiv.style.backgroundPosition = originalBackgroundPosition;
                        // outputDiv.style.textShadow = textshadow;
                        outputDiv.style.color = color;
                         // Show the texture fieldset
                    } else {
                        letteringFieldset.setAttribute('disabled', 'true');
                        const computedStyle = window.getComputedStyle(outputDiv);
                        const originalFontSize = parseFloat(computedStyle.fontSize); // Convert to number
                        const originalBackgroundImage = computedStyle.backgroundImage;
                        const originalBackgroundSize = computedStyle.backgroundSize;
                        const originalBackgroundPosition = computedStyle.backgroundPosition ;
                        outputDiv.style.textShadow = "none";
                        outputDiv.style.fontSize = `${originalFontSize}px`; // Ensure fontSize is applied correctly
                        outputDiv.style.backgroundImage = originalBackgroundImage;
                        outputDiv.style.backgroundSize = originalBackgroundSize;
                        outputDiv.style.backgroundPosition = originalBackgroundPosition;// Hide the texture fieldset
                    }
                }
                if (type === 'lettering_boggle') {
                    const fieldset = document.getElementById('tt-lettering-boggle-fieldset');
                    const outputDiv = document.getElementById('output');
                    const letters = outputDiv.querySelectorAll('span');
                    if (checkbox.checked) {
                        fieldset.style.display = 'block'; // Show the texture fieldset
                    } else {
                        fieldset.style.display = 'none';
                        for (let i = 0; i < letters.length; i++) {
                            letters[i].style.visibility = 'hidden';// Hide the texture fieldset
                        }
                    }
                }
                if (type === 'lettering_shadow') {
                    const fieldset = document.getElementById('tt-lettering-shadow-fieldset');
                    output = document.getElementById('output');
                    if (checkbox.checked) {
                        fieldset.style.display = 'block'; // Show the texture fieldset
                    } else {
                        fieldset.style.display = 'none';
                        output.style.textShadow = 'none';
                    }
                }
                if (type === 'depth_active') {
                    const fillDiv = document.getElementById('tt-depth-fieldset');
 
                    // Check if the checkbox is checked
                    if (checkbox.checked) {
                        fillDiv.removeAttribute('disabled'); // Enable the div (if needed)
                    } else {
                        fillDiv.setAttribute('disabled', 'true'); // Disable the div (if needed)
                    }
                }
                if (type === 'depth_fill') {
                    const gradientFieldset = document.getElementById('tt-depth-fill-gradient-fieldset');
                    const colorsInput = document.getElementById('tt-fill-gradient-colors-input');
                    const outputDiv = document.getElementById('output');
                
                    if (checkbox.checked) {
                        gradientFieldset.style.display = 'block';
                        outputDiv.style.backgroundImage = ''; // Remove any background image
                        const groupPreview = document.querySelector(".grp-preview");
                        const currentBackgroundImage = getComputedStyle(groupPreview).backgroundImage;
                        const colors = colorsInput.value;
                        const angle =  90;
                
                        // Convert colors input into an array (assuming it's comma-separated values)
                        const colorArray = colors.split(',').map(color => color.trim());
                
                        // Create the text-shadow gradient effect using multiple shadows
                        const shadowAmount = 10; // Number of layers for the gradient effect
                        const angleInRadians = (angle * Math.PI) / 180; // Convert angle to radians
                        let textShadowValue = '';
                
                        for (let i = 0; i < shadowAmount; i++) {
                            // Calculate position and opacity for each shadow layer
                            const offsetX = Math.cos(angleInRadians) * i * 2; // X offset
                            const offsetY = Math.sin(angleInRadians) * i * 2; // Y offset
                            const opacity = 1 - (i / shadowAmount); // Opacity decreases with each layer
                            const color = colorArray[i % colorArray.length]; // Use colors in a loop
                
                            // Add the shadow layer
                            textShadowValue += `${offsetX}px ${offsetY}px 0 ${color}${opacity === 1 ? '' : ` ${opacity}`}, `;
                        }
                
                        // Remove the trailing comma and space
                        textShadowValue = textShadowValue.slice(0, -2);
                
                        // Apply the gradient-like effect with text-shadow
                        // outputDiv.style.textShadow = textShadowValue;
                
                    } else {
                        gradientFieldset.style.display = 'none'; // Hide gradient fieldset
                        outputDiv.style.textShadow = ''; // Reset text-shadow
                    }
                }                
                if( type === 'icon') {
                    const fillDiv = document.getElementById('tt-icon-fieldset');
 
                    // Check if the checkbox is checked
                    if (checkbox.checked) {
                        fillDiv.removeAttribute('disabled'); // Enable the div (if needed)
                    } else {
                        fillDiv.setAttribute('disabled', 'true'); // Disable the div (if needed)
                    }
                }
                if( type === 'background') {
                    const fieldset = document.getElementById('tt-background-image-fieldset');
                    
                    // Check if the checkbox is checked
                    if (checkbox.checked) {
                        fieldset.style.display = 'block'; // Show the fieldset
                    } else {
                        fieldset.style.display = 'none'; // Hide the fieldset
                    }
                }
                if( type === 'background_gradient') {

                
                    document.getElementById('tt-background-fill-gradient-active-input').addEventListener('change', function () {
                        const fieldset = document.getElementById('tt-background-gradient-fieldset');
                        const background = document.querySelector('.tt-background-image');
                     
                        // Check if the checkbox is checked
                        if (checkbox.checked) {
                            fieldset.style.display = 'block'; // Show the fieldset
                        } else {
                            fieldset.style.display = 'none';
                            background.style.backgroundImage = 'none';
                        }
                    });
                
                }
                if(type === 'depth_texture')
                {
                    const fieldset = document.getElementById('tt-depth-fill-texture-fieldset');
 
                    // Check if the checkbox is checked
                    if (checkbox.checked) {
                        fieldset.style.display = 'block'; // Show the fieldset
                    } else {
                        fieldset.style.display = 'none'; // Hide the fieldset
                    }
                
                
                    const outputDiv = document.getElementById("output");
                    outputDiv.style.backgroundImage = "none";
                }
                if (type === 'depth2_active') {
                    const fillDiv = document.getElementById('tt-depth2-fieldset');
 
                    // Check if the checkbox is checked
                    if (checkbox.checked) {
                        fillDiv.removeAttribute('disabled'); // Enable the div (if needed)
                    } else {
                        fillDiv.setAttribute('disabled', 'true'); // Disable the div (if needed)
                    }
                }
                if(type === 'outline_first')
                {
                    const fillDiv = document.getElementById('tt-outline-first-fieldset');
                    const fieldset1 = document.getElementById('tt-outline-first-fill-gradient-fieldset');
                    const fieldset2 = document.getElementById('tt-outline-first-fill-texture-fieldset');
                    const output = document.getElementById('output');
                    // Check if the checkbox is checked
                    if (checkbox.checked) {
                        fillDiv.removeAttribute('disabled');
                        fieldset1.style.display = 'none'; 
                        fieldset2.style.display = 'none'; 
                        // Enable the div (if needed)
                    } else {
                        fillDiv.setAttribute('disabled', 'true'); 
                        output.style.textShadow = 'none'
                        // Disable the div (if needed)
                    }
                }
                if(type === 'outline_first_gradient') {
                    const fieldset = document.getElementById('tt-outline-first-fill-gradient-fieldset');
 
                    // Check if the checkbox is checked
                    if (checkbox.checked) {
                        fieldset.style.display = 'block'; // Show the fieldset
                    } else {
                        fieldset.style.display = 'none'; // Hide the fieldset
                    }
                }
                if(type === 'outline_first_fillingpattern') {
                    const fieldset = document.getElementById('tt-outline-first-fill-texture-fieldset');
 
                    // Check if the checkbox is checked
                    if (checkbox.checked) {
                        fieldset.style.display = 'block'; // Show the fieldset
                    } else {
                        fieldset.style.display = 'none'; // Hide the fieldset
                    }
                }
                if(type === 'outline_second'){
                    const fillDiv = document.getElementById('tt-outline-second-fieldset');
                    const fieldset1 = document.getElementById('tt-outline-second-fill-gradient-fieldset');
                    const fieldset2 = document.getElementById('tt-outline-second-fill-texture-fieldset');
                
                    // Check if the checkbox is checked
                    if (checkbox.checked) {
                        fillDiv.removeAttribute('disabled');
                        fieldset1.style.display = 'none'; 
                        fieldset2.style.display = 'none'; 
                        // Enable the div (if needed)
                    } else {
                        fillDiv.setAttribute('disabled', 'true'); // Disable the div (if needed)
                    }
                }
                if(type === 'outline_third') {
                    const fillDiv = document.getElementById('tt-outline-global-fieldset');
                    const fieldset1 = document.getElementById('tt-outline-global-fill-gradient-fieldset');
                    const fieldset2 = document.getElementById('tt-outline-global-fill-texture-fieldset');
                    
                    // Check if the checkbox is checked
                    if (checkbox.checked) {
                        fillDiv.removeAttribute('disabled');
                        fieldset1.style.display = 'none'; 
                        fieldset2.style.display = 'none'; 
                            // Enable the div (if needed)
                    } else {
                        fillDiv.setAttribute('disabled', 'true'); // Disable the div (if needed)
                    }
                }
                if(type === 'palette_active'){
                    const fieldset = document.getElementById('tt-fill-palette-fieldset');
                    const divout = document.getElementById('output');
                    const color = document.getElementById('tt-fill-color-input').value;
                    
                    // Check if the checkbox is checked
                    if (checkbox.checked) {
                        fieldset.style.display = 'block'; // Show the fieldset
                    } else {
                        fieldset.style.display = 'none';
                        if (divout) {
                            const spans = divout.querySelectorAll('span');
                            spans.forEach(span => {
                                span.style.color = ''; // Remove the color style
                            });
                        }
                       
                    }
                }
                if(type === 'bevel_active'){
                    const fillDiv = document.getElementById('tt-bevel-inner-fieldset');
 
                    // Check if the checkbox is checked
                    if (checkbox.checked) {
                        fillDiv.removeAttribute('disabled'); // Enable the div (if needed)
                    } else {
                        fillDiv.setAttribute('disabled', 'true'); // Disable the div (if needed)
                    }
                }
                if(type === 'shadow_inner_active'){
                    const fillDiv = document.getElementById('tt-shadow-inner-fieldset');
 
                    // Check if the checkbox is checked
                    if (checkbox.checked) {
                        fillDiv.removeAttribute('disabled'); // Enable the div (if needed)
                    } else {
                        fillDiv.setAttribute('disabled', 'true'); // Disable the div (if needed)
                    }
                }
                if(type === 'shadow_inner2_active'){
                    const fillDiv = document.getElementById('tt-shadow-inner2-fieldset');
 
                    // Check if the checkbox is checked
                    if (checkbox.checked) {
                        fillDiv.removeAttribute('disabled'); // Enable the div (if needed)
                    } else {
                        fillDiv.setAttribute('disabled', 'true'); // Disable the div (if needed)
                    }
                }
                if(type === 'shadow_outer_active'){
                    const fillDiv = document.getElementById('tt-shadow-outer-fieldset');
 
                    // Check if the checkbox is checked
                    if (checkbox.checked) {
                        fillDiv.removeAttribute('disabled'); // Enable the div (if needed)
                    } else {
                        fillDiv.setAttribute('disabled', 'true'); // Disable the div (if needed)
                    }
                }
                if(type === 'shadow_outer2_active'){
                    const fillDiv = document.getElementById('tt-shadow-outer2-fieldset');
 
                    // Check if the checkbox is checked
                    if (checkbox.checked) {
                        fillDiv.removeAttribute('disabled'); // Enable the div (if needed)
                    } else {
                        fillDiv.setAttribute('disabled', 'true'); // Disable the div (if needed)
                    }
                }
            });
        }
    });
}

function showgradient() {

    function updateGradientFromHandlers() {
        const handlers = document.querySelectorAll('.grp-handler');
        const colors = [];
    
        // Collect background colors from each handler
        handlers.forEach((handler) => {
            const bgColor = handler.style.backgroundColor;
            if (bgColor) {
                colors.push(bgColor);
            }
        });
    
        // Create and apply the gradient if there are at least two colors
        if (colors.length > 1) {
            const gradient = `linear-gradient(to right, ${colors.join(', ')})`;
            const previewElement = document.querySelector('.grp-preview');
            const outputDiv = document.getElementById('output');
            previewElement.style.backgroundImage = gradient;
            outputDiv.style.backgroundImage = gradient;
            outputDiv.style.webkitBackgroundClip = 'text'; // Clip the background to the text
            outputDiv.style.webkitTextFillColor = 'transparent';
        }
    }
    function createNewHandler(left = 0, top = 0, color = '#ff0000') {
        // Create the handler element
        const previewElement = document.querySelector('.grp-preview');
        const newHandler = document.createElement('div');
        newHandler.className = 'grp-handler';
        newHandler.style.position = 'absolute';
        newHandler.style.left = `${left}px`;
        newHandler.style.top = `${top}px`;
        newHandler.style.backgroundColor = color; // Set the initial color
    
        // Add inner elements
        newHandler.innerHTML = `
            <div class="grp-handler grp-handler-selected" style="position: absolute; top: 0px; left: 100%;">
                <div class="grp-handler-close-c">
                    <div class="grp-handler-close" data-toggle="handler-close">⨯</div>
                </div>
                <div class="grp-handler-drag" data-toggle="handler-drag"></div>
                <div class="grp-handler-cp-c" data-toggle="handler-color-c">
                    <div class="tt-pickr-gradient-button" id="color-picker" data-id="gp-1e3a9ab0-5c9f-4837-a0b3-848527e59f17" style="--color: ${color};"></div>
                </div>
            </div>
        `;
    
        // // Add drag functionality to the new handler
        // addDragFunctionality(newHandler);
    
        // // Append the new handler to the container
        // previewElement.appendChild(newHandler);
    }
    
    // Function to add drag functionality to a handler
    function addDragFunctionality(handler) {
        const previewElement = document.querySelector('.grp-preview');
        const dragHandle = handler.querySelector('.grp-handler-drag');
        const closeButton = handler.querySelector('.grp-handler-close');
        const colorPickerDiv1 = handler.querySelector('#color-picker');
        let isDragging = false;
        let offsetX = 0;
        let offsetY = 0;
    
         
        dragHandle.addEventListener('mousedown', (e) => {
            isDragging = true;
    
            // Calculate the offset between mouse position and handler's top-left corner
            const rect = handler.getBoundingClientRect();
            offsetX = e.clientX - rect.left;
            offsetY = e.clientY - rect.top;
    
            dragHandle.style.cursor = 'grabbing'; // Update cursor to grabbing
        });
    
        document.addEventListener('mousemove', (e) => {
            if (isDragging) {
                const rect = previewElement.getBoundingClientRect(); // Get the preview container's dimensions
    
                let left = e.clientX - rect.left - offsetX;
                let top = e.clientY - rect.top - offsetY;
    
                // Ensure the handler stays within the container's boundaries
                left = Math.max(0, Math.min(left, rect.width - handler.offsetWidth));
                top = Math.max(0, Math.min(top, rect.height - handler.offsetHeight));
    
                // Update handler position
                handler.style.left = `${left}px`;
                handler.style.top = `${top}px`;
    
                // Optionally, update the background image of the preview container if needed
                // previewElement.style.backgroundImage = handler.style.backgroundColor;
            }
        });
    
        document.addEventListener('mouseup', () => {
            isDragging = false;
            dragHandle.style.cursor = 'grab'; // Revert cursor to grab
        });
    
        // Add functionality to dynamically create another handler on click
        dragHandle.addEventListener('dblclick', (e) => {
            e.stopPropagation();
            // Add a new handler at a random position within the preview container
            const randomLeft = Math.random() * (previewElement.offsetWidth - 50); // Subtract handler width
            const randomTop = Math.random() * (previewElement.offsetHeight - 50); // Subtract handler height
            const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`; // Random color
            createNewHandler(randomLeft, randomTop, randomColor);
        });
    
        // Handle color picker functionality
        colorPickerDiv1.addEventListener('click', () => {
            const colorPicker = document.createElement('input');
            colorPicker.type = 'color';
            colorPicker.style.position = 'absolute';
            colorPicker.style.opacity = '0';
            colorPicker.style.pointerEvents = 'none';
    
            handler.appendChild(colorPicker);
    
            colorPicker.click();
    
            colorPicker.addEventListener('input', (e) => {
                const selectedColor = e.target.value;
                colorPickerDiv1.style.setProperty('--color', selectedColor);
                handler.style.backgroundColor = selectedColor;
    
                // Update the gradient whenever a color changes
                updateGradientFromHandlers();
            });
    
            colorPicker.addEventListener('blur', () => {
                handler.removeChild(colorPicker);
            });
        });
        
    
        // Handle close button functionality
        closeButton.addEventListener('click', (e) => {
            e.stopPropagation();
            handler.remove(); // Remove the handler from the DOM
        });
    }
    
    // Function to initialize the first handler if it exists
    function initializeFirstHandler() {
        const existingHandler = document.querySelector('.grp-handler.grp-handler-selected');
        if (existingHandler) {
            addDragFunctionality(existingHandler);
        }
    }
    
    // Initialize the first handler if it's already present
    initializeFirstHandler();

    const gradientCheckbox = document.getElementById('tt-fill-gradient-active-input');
    const gradientFieldset = document.getElementById('tt-fill-gradient-fieldset');
    const colorsInput = document.getElementById('tt-fill-gradient-colors-input');
    const angleInput = document.getElementById('tt-fill-gradient-angle-input');
    const outputDiv = document.getElementById('output');
    const opacityDiv = document.getElementById("tt-fill-alpha-input");
    function updateGradientcolor() {
        outputDiv.style.textShadow = 'none'; // Ensure textShadow is none before applying the gradient
    
        if (gradientCheckbox.checked) {
            // Show the gradient fieldset when the checkbox is checked
            gradientFieldset.style.display = 'block';
            const groupPreview = document.querySelector(".grp-preview");
            const handlers = document.querySelectorAll('.grp-handler');
    
            let colors = [];
            handlers.forEach(handler => {
                const colorPicker = handler.querySelector('.tt-pickr-gradient-button');
                if (colorPicker) {
                    colors.push(colorPicker.style.getPropertyValue('--color'));
                }
            });
    
            if (colors.length < 2) {
                colors = ['#000000', '#ffffff']; // Fallback if not enough colors
            }
    
            const angle = angleInput.value || 90; // Get the selected angle
            const opacity = opacityDiv.value || 1; // Get opacity value
    
            // Construct and apply the gradient with updated angle
            const newGradient = `linear-gradient(${angle}deg, ${colors.join(', ')})`;
    
            outputDiv.style.backgroundImage = newGradient;
            outputDiv.style.opacity = opacity;
            outputDiv.style.webkitBackgroundClip = 'text';
            outputDiv.style.webkitTextFillColor = 'transparent';
    
            // Also update the preview
            groupPreview.style.backgroundImage = newGradient;
        } else {
            // Hide the gradient fieldset and reset the outputDiv styles
            gradientFieldset.style.display = 'none';
            outputDiv.style.backgroundImage = '';
            outputDiv.style.textShadow = 'none';
            outputDiv.style.webkitBackgroundClip = '';
            outputDiv.style.webkitTextFillColor = '';
            outputDiv.style.opacity = '';
        }
    }
    
    

    // Add event listeners to update gradient dynamically
    gradientCheckbox.addEventListener('change', updateGradientcolor);
    colorsInput.addEventListener('input', updateGradientcolor);
    angleInput.addEventListener('input', updateGradientcolor);
    opacityDiv.addEventListener('input', updateGradientcolor);


    
}

function showboggle() {
    document.getElementById("tt-lettering-boggle-angle-input").addEventListener("input", function () {
        const outputDiv = document.getElementById("output");
    
        // Retrieve computed styles for the output div
        const computedStyle = window.getComputedStyle(outputDiv);
        const originalFontSize = parseFloat(computedStyle.fontSize); // Convert to number
        const originalBackgroundImage = computedStyle.backgroundImage;
        const originalBackgroundSize = computedStyle.backgroundSize;
        const originalBackgroundPosition = computedStyle.backgroundPosition;
        const color = computedStyle.color;
        // const textshadow = computedStyle.textShadow;
    
        const angle = parseInt(this.value, 10); // Get the angle from the slider input
    
        // Get the amplitude value
        const amplitude = parseFloat(
          document.getElementById("tt-lettering-boggle-amplitude-input").value
        );
    
    
        // Split the text into individual letters
        const text = outputDiv.textContent || outputDiv.innerText; // Use text content safely
        outputDiv.innerHTML = ''; // Clear current content
    
        // Process each character
        text.split('').forEach((char, index) => {
            const span = document.createElement('span');
            span.innerText = char;
            span.style.display = 'inline-block';
    
            // Set styles for each letter
            span.style.fontSize = `${originalFontSize}px`; // Ensure fontSize is applied correctly
            span.style.backgroundImage = originalBackgroundImage;
            span.style.backgroundSize = originalBackgroundSize;
            span.style.backgroundPosition = originalBackgroundPosition;
            span.style.webkitBackgroundClip = 'text'; // Clip the background to the text
    
            // **Fix the color issue**
            span.style.color = color; // Apply text color
            // span.style.textShadow = textshadow;
    
            // Apply rotation and vertical translation
            const translateY = (index % 2 === 0 ? -1 : 1) * amplitude * originalFontSize * 0.2; // Scale translation
            span.style.transform = `translateY(${translateY}px) rotate(${angle}deg)`;
    
            // Append the styled letter to the output div
            outputDiv.appendChild(span);
        });
    });
    

    document.getElementById('tt-lettering-boggle-amplitude-input').addEventListener('input', (event) => {
        const outputDiv = document.getElementById('output');
        const value = event.target.value; // Get the current value of the slider
        const text = outputDiv.textContent.trim();
        const fontSize = parseFloat(window.getComputedStyle(outputDiv).fontSize);
        const computedStyle = window.getComputedStyle(outputDiv);
        const originalBackgroundImage = computedStyle.backgroundImage;
        const originalBackgroundSize = computedStyle.backgroundSize;
        const originalBackgroundPosition = computedStyle.backgroundPosition;
         
        const color = computedStyle.color;
        // const textshadow = computedStyle.textShadow;
         // Split text into individual spans
         outputDiv.innerHTML = text
         .split("")
         .map((letter, index) => `<span style="display: inline-block; transition: transform 0.1s;">${letter}</span>`)
         .join("");
         
         const letters = outputDiv.querySelectorAll("span");
         const amplitude = value * 20; // Max up/down shift of 20px
         const angleSlider = document.getElementById('tt-lettering-boggle-angle-input');
         // Apply transformation to each letter
         letters.forEach((letter, index) => {
             letter.style.fontSize = `${fontSize}px`;
             letter.style.backgroundImage = originalBackgroundImage;
             letter.style.backgroundSize = originalBackgroundSize;
             letter.style.backgroundPosition = originalBackgroundPosition;
             letter.style.webkitBackgroundClip = 'text'; // Clip the background to the text
             letter.style.color = color;
            //  letter.style.textShadow = textshadow;
         
           const direction = index % 2 === 0 ? -1 : 1; // Alternate up and down
             const translateY = direction * amplitude;
            const rotateAngle = angleSlider.value; // Maintain the rotation
            letter.style.transform = `translateY(${translateY}px) rotate(${rotateAngle}deg)`;
             
        });
    });
}

function showicon() {
    document.querySelectorAll("#tt-icon-list li").forEach((item) => {
        item.addEventListener("click", function () {
            const imageSrc = this.querySelector("img").src;
            const outputDiv = document.getElementById("output");
     
     
            // Clear any previous image in #output
            content = outputDiv.innerText;
     
            // Create a new <img> element and set its src to the selected image's src
            const selectedImg = document.createElement("img");
            selectedImg.src = imageSrc;
            selectedImg.id = "icon";
            selectedImg.style.filter = "brightness(0)";
            selectedImg.alt = "Selected Icon";
            selectedImg.style.marginRight = "10px"; // Add some spacing after the icon
            selectedImg.style.height = "3em"; // Set the icon height to match the font size of "MyTextStudio"
            selectedImg.style.verticalAlign = "middle"; // Align the image vertically with the text
     
            // Insert the image before the text in the output div
            outputDiv.insertBefore(selectedImg, outputDiv.firstChild);
            const previewImg = document.getElementById("tt-icon-preview-img");
            previewImg.src = imageSrc; // Set the selected image's URL as the src
            previewImg.style.display = "inline";
     
     
     
        });
    });
    document.getElementById("tt-icon-preview-delete-icon").addEventListener("click", function () {
        const previewImg = document.getElementById("tt-icon-preview-img");
        previewImg.src = "";
        const outputDiv = document.getElementById("output");
        const imgInOutput = outputDiv.querySelector("img"); // Select the <img> in #output
     
        // If an image exists in #output, remove it
        if (imgInOutput) {
            outputDiv.removeChild(imgInOutput);
        } // Clear the src to hide the image
    });
}

function showbackground() {
    document.querySelectorAll("li").forEach((item) => {  
        item.addEventListener("click", function () {  
            // Attempt to find the <div> inside the clicked <li>  
            const divElement = this.querySelector("div");  
    
            // Check if the <div> element exists  
            if (divElement) {  
                const imageUrl = divElement.style.backgroundImage;  
    
                // Only proceed if imageUrl is defined  
                if (imageUrl) {  
                    const imageUrlLarge = imageUrl.replace('/preview/small', '/preview/large');  
                    document.querySelector(".tt-background-image").style.backgroundImage = imageUrlLarge;  
                    document.getElementById("tt-background-fill-image-preview-img").style.backgroundImage = imageUrl;  
                } else {  
                     
                }  
            } 
        });  
    });
    document.getElementById("tt-background-fill-image-import-input").addEventListener("change", function (event) {
        const file = event.target.files[0];
     
        if (file) {
            const reader = new FileReader();
     
            // When the file is loaded, set it as the background image
            reader.onload = function (e) {
                const imageUrl = e.target.result; // Base64 image URL
                const backgroundDiv = document.querySelector(".tt-background-image");
                const container =  document.getElementById("tt-canvas-wrapper");
                container.style.backgroundImage =`url('${imageUrl}')`;
                backgroundDiv.style.backgroundImage = `url('${imageUrl}')`;
                const previewDiv = document.getElementById("tt-background-fill-image-preview-img");
                previewDiv.style.backgroundImage = `url('${imageUrl}')`;
     
            };
     
            reader.readAsDataURL(file); // Read file as data URL
        }
    });
}

function showcustommenu() {
    document.querySelectorAll('#tt-custom-menu li').forEach(item => {
        item.addEventListener('click', () => {
            // Remove 'selected' class from all list items
            document.querySelectorAll('#tt-custom-menu li').forEach(li => li.classList.remove('selected'));
     
            // Add 'selected' class to the clicked item
            item.classList.add('selected');
     
            // Get the data-filter of the clicked item
            const selectedFilter = item.getAttribute('data-filter');
     
            // Hide all divs
            document.querySelectorAll('.tt-column').forEach(div => {
                div.style.display = 'none';
            });
            const fieldset = document.getElementById('tt-depth2-fieldset');
            fieldset.style.display = 'none';
     
            // Show the corresponding div(s)
            const selectedDivs = document.querySelectorAll(`.tt-column[data-custom="${selectedFilter}"],.tt-column[data-custom="${selectedFilter}-lettering"],.tt-column[data-custom="${selectedFilter}-depth"],.tt-column[data-custom="${selectedFilter}-first"], .tt-column[data-custom="${selectedFilter}-second"],.tt-column[data-custom="${selectedFilter}-global"],.tt-column[data-custom="${selectedFilter}-bevel-inner"],.tt-column[data-custom="${selectedFilter}-inner"],.tt-column[data-custom="${selectedFilter}-outer"]`);
            selectedDivs.forEach(div => {
                div.style.display = 'block';
            });
            if (selectedFilter === 'fill') {
                document.getElementById('tt-fill-fieldset').setAttribute('disabled', 'true');
                document.getElementById('tt-lettering-fieldset').setAttribute('disabled', 'true');
                document.getElementById('tt-depth-fieldset').setAttribute('disabled', 'true');
                document.getElementById('tt-outline-first-fieldset').style.display = 'none';
                document.getElementById('tt-outline-second-fieldset').style.display = 'none';
                document.getElementById('tt-outline-global-fieldset').style.display = 'none';
                document.getElementById('tt-bevel-inner-fieldset').style.display = 'none';
                document.getElementById('tt-shadow-inner-fieldset').style.display = 'none';
                document.getElementById('tt-shadow-outer-fieldset').style.display = 'none';
               
            } else if (selectedFilter === 'outline') {
                document.getElementById('tt-outline-first-fieldset').style.display = 'block';
                document.getElementById('tt-outline-second-fieldset').style.display = 'block';
                document.getElementById('tt-outline-global-fieldset').style.display = 'block';
                document.getElementById('tt-outline-first-fieldset').setAttribute('disabled', 'true');
                document.getElementById('tt-outline-second-fieldset').setAttribute('disabled', 'true');
                document.getElementById('tt-outline-global-fieldset').setAttribute('disabled', 'true');
            } else if (selectedFilter === 'shadow') {
                document.getElementById('tt-bevel-inner-fieldset').style.display = 'block';
                document.getElementById('tt-shadow-inner-fieldset').style.display = 'block';
                document.getElementById('tt-shadow-outer-fieldset').style.display = 'block';
                document.getElementById('tt-bevel-inner-fieldset').setAttribute('disabled', 'true');
                document.getElementById('tt-shadow-inner-fieldset').setAttribute('disabled', 'true');
                document.getElementById('tt-shadow-outer-fieldset').setAttribute('disabled', 'true');
                document.getElementById('tt-shadow-inner2-fieldset').style.display = 'none';
                document.getElementById('tt-shadow-outer2-fieldset').style.display = 'none';
            }
        });
    });
}
 
function showTextShadow() {  
    document.addEventListener("DOMContentLoaded", function () {
        const shadowBox = document.getElementById("output");
        const sizeInput = document.getElementById("tt-lettering-shadow-size-input");
        const opacityInput = document.getElementById("tt-lettering-shadow-fill-alpha-input");
        const distanceInput = document.getElementById("tt-lettering-shadow-distance-input");
        const angleInput = document.getElementById("tt-lettering-shadow-angle-input");
        const colorInput = document.getElementById("tt-lettering-shadow-fill-color-input");

        if (!shadowBox || !sizeInput || !opacityInput || !distanceInput || !angleInput || !colorInput) {
            console.error("One or more required elements are missing.");
            return;
        }

        function updateProjectShadow() {
            // Get values and ensure they are numbers
            const size = parseFloat(sizeInput.value) * 5 || 0;  
            let opacity = parseFloat(opacityInput.value);  
            const distance = parseFloat(distanceInput.value) * 10 || 0;
            const angle = parseFloat(angleInput.value) || 0;
            const color = colorInput.value || "#000000";  

            // Ensure opacity is between 0 and 1
            if (opacity > 1) opacity /= 100;  

            // Convert angle to radians
            const angleRad = (angle * Math.PI) / 180;
            const xOffset = Math.cos(angleRad) * distance;
            const yOffset = Math.sin(angleRad) * distance;

            // Convert hex color to rgba
            const r = parseInt(color.slice(1, 3), 16);
            const g = parseInt(color.slice(3, 5), 16);
            const b = parseInt(color.slice(5, 7), 16);
            const rgbaColor = `rgba(${r}, ${g}, ${b}, ${opacity})`;

            // Apply shadow
            const shadow = `${xOffset}px ${yOffset}px ${size}px ${rgbaColor}`;
            shadowBox.style.textShadow = shadow;

            console.log(`Applied shadow: ${shadow}`);
        }

        // Attach event listeners
        sizeInput.addEventListener("input", updateProjectShadow);
        opacityInput.addEventListener("input", updateProjectShadow);
        distanceInput.addEventListener("input", updateProjectShadow);
        angleInput.addEventListener("input", updateProjectShadow);
        colorInput.addEventListener("change", updateProjectShadow); // Use change for color input

        // Initial update
        updateProjectShadow();
    });
}















function shadow3D()
{
    
    const angleSlider = document.getElementById('tt-depth-angle-input');
    const lengthSlider = document.getElementById('tt-depth-length-input');
    const colorPicker = document.getElementById('tt-depth-fill-color-input');
    const output = document.getElementById('output');
    
    // Function to update shadow based on angle, length, and color
    function updateShadow() {
      
        const angle = parseInt(angleSlider.value, 10); // Angle in degrees
        const length = parseFloat(lengthSlider.value); // Length as multiplier
        const color = colorPicker.value; // Hex color from the color picker
    
        // Convert hex color to RGBA
        const { r, g, b } = hexToRgb(color);
    
        // Calculate x and y offsets based on angle and length
        const radian = angle * (Math.PI / 180);
        const offsetX = (length * 15) * Math.cos(radian); // Scale factor of 15
        const offsetY = (length * 15) * Math.sin(radian);

        // Apply shadow to output
        output.style.textShadow = `
            ${offsetX}px ${offsetY}px 5px rgba(${r}, ${g}, ${b}, 0.7),
            ${offsetX * 2}px ${offsetY * 2}px 10px rgba(${r}, ${g}, ${b}, 0.5),
            ${offsetX * 3}px ${offsetY * 3}px 15px rgba(${r}, ${g}, ${b}, 0.3)
        `;
    }
    
    // Helper function to convert hex color to RGB
    function hexToRgb(hex) {
        const bigint = parseInt(hex.replace(/^#/, ''), 16);
        return {
            r: (bigint >> 16) & 255,
            g: (bigint >> 8) & 255,
            b: bigint & 255
        };
    }
    
    // Attach event listeners to sliders and color picker
    angleSlider.addEventListener('input', updateShadow);
    lengthSlider.addEventListener('input', updateShadow);
    colorPicker.addEventListener('input', updateShadow);
    
}

function show3Dgradient() {

    // Function to update the gradient from handlers and apply it to text-shadow
    function updateGradientFromHandlers() {
        const handlers = document.querySelectorAll('.grp-handler');
        const colors = [];

        // Collect background colors from each handler
        handlers.forEach((handler) => {
            const bgColor = handler.style.backgroundColor;
            if (bgColor) {
                colors.push(bgColor);
            }
        });

        // Create and apply the gradient if there are at least two colors
        if (colors.length > 1) {
            const gradient = `linear-gradient(to right, ${colors.join(', ')})`;
            const previewElement = document.querySelector('.grp-preview');
            const outputDiv = document.getElementById('output');
            previewElement.style.backgroundImage = gradient;
            outputDiv.style.backgroundImage = gradient;
            outputDiv.style.webkitBackgroundClip = 'text'; // Clip the background to the text
            outputDiv.style.webkitTextFillColor = 'transparent';
        }
    }

    // Function to create a new handler
    function createNewHandler(left = 0, top = 0, color = '#ff0000') {
        const previewElement = document.querySelector('.grp-preview');
        const newHandler = document.createElement('div');
        newHandler.className = 'grp-handler';
        newHandler.style.position = 'absolute';
        newHandler.style.left = `${left}px`;
        newHandler.style.top = `${top}px`;
        newHandler.style.backgroundColor = color;

        newHandler.innerHTML = `
            <div class="grp-handler grp-handler-selected" style="position: absolute; top: 0px; left: 100%;">
                <div class="grp-handler-close-c">
                    <div class="grp-handler-close" data-toggle="handler-close">⨯</div>
                </div>
                <div class="grp-handler-drag" data-toggle="handler-drag"></div>
                <div class="grp-handler-cp-c" data-toggle="handler-color-c">
                    <div class="tt-pickr-gradient-button" id="color-picker" data-id="gp-1e3a9ab0-5c9f-4837-a0b3-848527e59f17" style="--color: ${color};"></div>
                </div>
            </div>
        `;

        addDragFunctionality(newHandler);
        previewElement.appendChild(newHandler);
    }

    // Function to add drag functionality to a handler
    function addDragFunctionality(handler) {
        const previewElement = document.querySelector('.grp-preview');
        const dragHandle = handler.querySelector('.grp-handler-drag');
        const closeButton = handler.querySelector('.grp-handler-close');
        const colorPickerDiv1 = handler.querySelector('#color-picker');
        let isDragging = false;
        let offsetX = 0;
        let offsetY = 0;

        dragHandle.addEventListener('mousedown', (e) => {
            isDragging = true;
            const rect = handler.getBoundingClientRect();
            offsetX = e.clientX - rect.left;
            offsetY = e.clientY - rect.top;
            dragHandle.style.cursor = 'grabbing'; 
        });

        document.addEventListener('mousemove', (e) => {
            if (isDragging) {
                const rect = previewElement.getBoundingClientRect();
                let left = e.clientX - rect.left - offsetX;
                let top = e.clientY - rect.top - offsetY;
                left = Math.max(0, Math.min(left, rect.width - handler.offsetWidth));
                top = Math.max(0, Math.min(top, rect.height - handler.offsetHeight));
                handler.style.left = `${left}px`;
                handler.style.top = `${top}px`;
            }
        });

        document.addEventListener('mouseup', () => {
            isDragging = false;
            dragHandle.style.cursor = 'grab'; 
        });

        dragHandle.addEventListener('click', (e) => {
            e.stopPropagation();
            const randomLeft = Math.random() * (previewElement.offsetWidth - 50);
            const randomTop = Math.random() * (previewElement.offsetHeight - 50);
            const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
            createNewHandler(randomLeft, randomTop, randomColor);
        });

        colorPickerDiv1.addEventListener('click', () => {
            const colorPicker = document.createElement('input');
            colorPicker.type = 'color';
            colorPicker.style.position = 'absolute';
            colorPicker.style.opacity = '0';
            colorPicker.style.pointerEvents = 'none';

            handler.appendChild(colorPicker);
            colorPicker.click();

            colorPicker.addEventListener('input', (e) => {
                const selectedColor = e.target.value;
                colorPickerDiv1.style.setProperty('--color', selectedColor);
                handler.style.backgroundColor = selectedColor;
                updateGradientFromHandlers();
            });

            colorPicker.addEventListener('blur', () => {
                handler.removeChild(colorPicker);
            });
        });

        closeButton.addEventListener('click', (e) => {
            e.stopPropagation();
            handler.remove(); 
        });
    }

    // Function to initialize the first handler
    function initializeFirstHandler() {
        const existingHandler = document.querySelector('.grp-handler.grp-handler-selected');
        if (existingHandler) {
            addDragFunctionality(existingHandler);
        }
    }

    initializeFirstHandler();

    const gradientCheckbox = document.getElementById('tt-depth-fill-gradient-active-input');
    const gradientFieldset = document.getElementById('tt-depth-fill-gradient-fieldset');
    const colorsInput = document.getElementById('tt-fill-gradient-colors-input');
    const angleInput = document.getElementById('tt-depth-fill-gradient-angle-input');
    const outputDiv = document.getElementById('output');
    
    outputDiv.style.textShadow = 'unset';

    function updateGradientcolor() {
        if (gradientCheckbox.checked) {
            gradientFieldset.style.display = 'block';

            const groupPreview = document.querySelector(".grp-preview");
            const currentBackgroundImage = getComputedStyle(groupPreview).backgroundImage;
            const colors = colorsInput.value;
            const angle = angleInput.value || 90;

            const colorArray = colors.split(',').map(color => color.trim());

            const shadowOffsets = 10; 
            let textShadow = '';

            for (let i = 0; i < colorArray.length; i++) {
                const offset = i * shadowOffsets;
                textShadow += `${offset}px ${offset}px 0 ${colorArray[i]}, `;
            }

            // outputDiv.style.textShadow = textShadow.slice(0, -2); // Remove trailing comma and space
            outputDiv.style.opacity = 1;
        } else {
            gradientFieldset.style.display = 'none';
            outputDiv.style.textShadow = ''; 
            outputDiv.style.opacity = ''; 
        }
    }

    // Add event listeners to update gradient dynamically
    gradientCheckbox.addEventListener('change', updateGradientcolor);
    colorsInput.addEventListener('input', updateGradientcolor);
    angleInput.addEventListener('input', updateGradientcolor);
}

function show3Dimage()
{
    document.getElementById('tt-depth-fill-texture-import-input').addEventListener('change', function(event) {
        const fileInput = event.target;
        const file = fileInput.files[0];
         
        if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
         
        reader.onload = function(e) {
            // Find the img element and update its src attribute
            // document.getElementById('output').style.textShadow = e.target.result;
            // const shadowImage = ;
            const imgElement = document.querySelector('.tt-3d1-preview-image');
            if (imgElement) {
                imgElement.src = e.target.result;
            }
        };
         
        reader.readAsDataURL(file);
        } else {
        alert('Please upload a valid image file.');
        }
        });
         
        // Delete functionality
        document.querySelector('.tt-3d1-delete-icon').addEventListener('click', function() {
        const imgElement = document.querySelector('.tt-3d1-preview-image');
        if (imgElement) {
        imgElement.src = ''; // Clear the image source
        }
        });
}   

function showdiv()
{
    document.querySelectorAll('.tt-show-brother li').forEach(item => {
        item.addEventListener('click', () => {
            // Remove 'selected' class from all list items
            document.querySelectorAll('.tt-show-brother li').forEach(li => li.classList.remove('selected'));
     
            // Add 'selected' class to the clicked item
            item.classList.add('selected');
     
            // Get the data-show of the clicked item
            const fieldsetId = item.getAttribute('data-show');
     
            // Hide all fieldsets
            document.querySelectorAll('fieldset').forEach(fieldset => {
                fieldset.style.display = 'none';
            });
     
            // Show the corresponding fieldset
            const selectedFieldset = document.getElementById(fieldsetId);
            if (selectedFieldset) {
                selectedFieldset.style.display = 'block';

            }
           
            if(selectedFieldset.id == 'tt-shadow-inner2-fieldset')
            {
                document.getElementById('tt-shadow-inner-fieldset').style.display = 'none';
                document.getElementById('tt-bevel-inner-fieldset').style.display = 'block';
                document.getElementById('tt-shadow-inner2-fieldset').style.display = 'block'
                document.getElementById('tt-shadow-outer-fieldset').style.display = 'block';
            }
            else if(selectedFieldset.id == 'tt-shadow-inner-fieldset')
            {
                document.getElementById('tt-shadow-inner-fieldset').style.display = 'block';
                document.getElementById('tt-bevel-inner-fieldset').style.display = 'block';
                document.getElementById('tt-shadow-inner2-fieldset').style.display = 'none'
                document.getElementById('tt-shadow-outer-fieldset').style.display = 'block';
            }
            else if(selectedFieldset.id == 'tt-shadow-outer-fieldset')
            {
                document.getElementById('tt-shadow-inner-fieldset').style.display = 'block';
                document.getElementById('tt-bevel-inner-fieldset').style.display = 'block';
                document.getElementById('tt-shadow-outer2-fieldset').style.display = 'none'
                document.getElementById('tt-shadow-outer-fieldset').style.display = 'block';
            }
            else if(selectedFieldset.id == 'tt-shadow-outer2-fieldset')
            {
                document.getElementById('tt-shadow-inner-fieldset').style.display = 'block';
                document.getElementById('tt-bevel-inner-fieldset').style.display = 'block';
                document.getElementById('tt-shadow-outer2-fieldset').style.display = 'block'
                document.getElementById('tt-shadow-outer-fieldset').style.display = 'none';
            }
            else if(selectedFieldset.id == 'tt-outline-global2-fieldset')
            {
                document.getElementById('tt-outline-first-fieldset').style.display = 'block';
                document.getElementById('tt-outline-second-fieldset').style.display = 'block';
                document.getElementById('tt-outline-global2-fieldset').style.display = 'block';
                document.getElementById('tt-outline-global-fieldset').style.display = 'none';
            }
            else if(selectedFieldset.id == 'tt-outline-global-fieldset')
            {
                document.getElementById('tt-outline-first-fieldset').style.display = 'block';
                document.getElementById('tt-outline-second-fieldset').style.display = 'block';
                document.getElementById('tt-outline-global2-fieldset').style.display = 'none';
                document.getElementById('tt-outline-global-fieldset').style.display = 'block';
            }
            document.getElementById('depth_fill').style.display = 'block';
            document.getElementById('tt-fill-fieldset').style.display = 'block';
            document.getElementById('tt-lettering-fieldset').style.display = 'block';
          

           

            
           
     
        });
    });
}

function shadow3D2()
{
    
    const angleSlider2 = document.getElementById('tt-depth2-angle-input');
    const lengthSlider2 = document.getElementById('tt-depth2-length-input');
    const colorPicker2 = document.getElementById('tt-depth2-fill-color-input');
    const output = document.getElementById('output');
    
    // Function to update shadow based on angle, length, and color
    function updateShadow2() {
        const angle = parseInt(angleSlider2.value, 10); // Angle in degrees
        const length = parseFloat(lengthSlider2.value); // Length as multiplier
        const color = colorPicker2.value; // Hex color from the color picker
    
        // Convert hex color to RGBA
        const { r, g, b } = hexToRgb(color);
    
        // Calculate x and y offsets based on angle and length
        const radian = angle * (Math.PI / 180);
        const offsetX = (length * 15) * Math.cos(radian); // Scale factor of 15
        const offsetY = (length * 15) * Math.sin(radian);
    
        // Apply shadow to output
        // output.style.textShadow = `
        //     ${offsetX}px ${offsetY}px 5px rgba(${r}, ${g}, ${b}, 0.7),
        //     ${offsetX * 2}px ${offsetY * 2}px 10px rgba(${r}, ${g}, ${b}, 0.5),
        //     ${offsetX * 3}px ${offsetY * 3}px 15px rgba(${r}, ${g}, ${b}, 0.3)
        // `;
    }
    
    // Helper function to convert hex color to RGB
    function hexToRgb(hex) {
        const bigint = parseInt(hex.replace(/^#/, ''), 16);
        return {
            r: (bigint >> 16) & 255,
            g: (bigint >> 8) & 255,
            b: bigint & 255
        };
    }
    
    // Attach event listeners to sliders and color picker
    angleSlider2.addEventListener('input', updateShadow2);
    lengthSlider2.addEventListener('input', updateShadow2);
    colorPicker2.addEventListener('input', updateShadow2);
    
}

function showoutline() {
    const updateOutline = () => {
        const preview = document.getElementById("output");

        // Get values for each outline only if the corresponding checkbox is checked
        const outlines = [
            {
                active: document.getElementById("tt-outline-first-active-input").checked,
                width: parseInt(document.getElementById("tt-outline-first-width-input").value),
                color: document.getElementById("tt-outline-first-fill-color-input").value,
                dotted: parseInt(document.getElementById("tt-outline-first-dash-input").value)
            },
            {
                active: document.getElementById("tt-outline-second-active-input")?.checked,
                width: parseInt(document.getElementById("tt-outline-second-width-input")?.value || 0),
                color: document.getElementById("tt-outline-second-fill-color-input")?.value || "#000000",
                dotted: parseInt(document.getElementById("tt-outline-second-dash-input")?.value || 0)
            },
            {
                active: document.getElementById("tt-outline-global-active-input")?.checked,
                width: parseInt(document.getElementById("tt-outline-global-width-input")?.value || 0),
                color: document.getElementById("tt-outline-global-fill-color-input")?.value || "#000000",
                dotted: 0 // Default to solid outline
            },
            {
                active: document.getElementById("tt-outline-global2-active-input")?.checked,
                width: parseInt(document.getElementById("tt-outline-global2-width-input")?.value || 0),
                color: document.getElementById("tt-outline-global2-fill-color-input")?.value || "#000000",
                dotted: 0 // Default to solid outline
            }
        ];

        // Function to create solid outline
        const createUniformShadow = (width, color) => {
            let shadow = [];
            for (let x = -width; x <= width; x++) {
                for (let y = -width; y <= width; y++) {
                    if (Math.abs(x) === width || Math.abs(y) === width) {
                        shadow.push(`${x}px ${y}px 0 ${color}`);
                    }
                }
            }
            return shadow.join(", ");
        };

        // Function to create dotted outline
        const createDottedShadow = (dotted, color, gap = 10) => {
            let shadow = [];
            for (let angle = 0; angle < 360; angle += gap) { // Space dots in a circular pattern
                let radian = (angle * Math.PI) / 180;
                let x = Math.round(Math.cos(radian) * dotted);
                let y = Math.round(Math.sin(radian) * dotted);
                shadow.push(`${x}px ${y}px 0 ${color}`);
            }
            return shadow.join(", ");
        };

        // Apply only active outlines
        const shadows = outlines
            .filter(outline => outline.active && outline.width > 0) // Only apply checked & non-zero width outlines
            .map(outline => 
                outline.dotted > 0 
                ? createDottedShadow(outline.dotted, outline.color, 15)  // Dotted outline
                : createUniformShadow(outline.width, outline.color)    // Solid outline
            );

        // Apply text shadow
        preview.style.textShadow = shadows.join(", ");
    };

    // Add event listeners to all inputs & checkboxes
    document.querySelectorAll("input").forEach(input => {
        input.addEventListener("input", updateOutline);
    });

    // Initialize on load
    updateOutline();
}




   
function importicon()
{
    document.getElementById('tt-icon-import-input').addEventListener('change', function (event) {
 
        const outputDiv = document.getElementById("output");
        const imgInOutput = outputDiv.querySelector("img"); // Get the existing img element
        const file = event.target.files[0]; // Get the selected file
         
        if (file) {
            const reader = new FileReader();
         
            // When the file is loaded, update the src of the img element
            reader.onload = function (e) {
                const selectedImg = document.createElement("img");
                selectedImg.src = e.target.result;
                selectedImg.alt = "Selected Icon";
                selectedImg.style.marginRight = "10px"; // Add some spacing after the icon
                selectedImg.style.height = "3em"; // Set the icon height to match the font size of "MyTextStudio"
                selectedImg.style.verticalAlign = "middle"; // Align the image vertically with the text
         
                // Insert the image before the text in the output div
                outputDiv.insertBefore(selectedImg, outputDiv.firstChild);
                const previewImg = document.getElementById("tt-icon-preview-img");
                previewImg.src = e.target.result; // Set the selected image's URL as the src
                previewImg.style.display = "inline";
                // imgInOutput.src = e.target.result; // Set the image source
            };
         
            reader.readAsDataURL(file); // Read the file as a data URL
        }
        });
}


function iconfunction(){
    document.getElementById("tt-icon-size-input").addEventListener("input", function () {
        const size = this.value;
        const outputDiv = document.getElementById("output");
        const imgInOutput = outputDiv.querySelector("img");
        const iconsize = document.getElementById('icon_size');
    
        if (imgInOutput) {
            imgInOutput.style.height = `${size}em`;
            
            // Tooltip update
            const min = parseFloat(this.min);
            const max = parseFloat(this.max);
            const percent = ((size - min) / (max - min)) * 100;
            
            iconsize.textContent = Math.round(size * 100) + '%';
            iconsize.style.left = `calc(${percent}% + 4.54px)`;
            iconsize.style.display = 'block';
        }
    });
    
    // Hide tooltip when mouse leaves the slider
    document.getElementById("tt-icon-size-input").addEventListener("mouseleave", function () {
        document.getElementById('icon_size').style.display = 'none';
    });
    
    document.getElementById("tt-icon-position-input").addEventListener("change", function () {
        var position = this.value; // Get selected position
        var outputDiv = document.getElementById("output");
        var img = outputDiv.querySelector("img");
        var textContent = outputDiv.textContent.trim().replace(/\s+/g, ' '); // Get text content
        var textSpan = document.createElement("span"); // Create a span for text
        textSpan.textContent = textContent;
       


    
        // Preserve the original font size
        var fontSize = window.getComputedStyle(outputDiv).fontSize;
    
        // Clear previous content
        outputDiv.innerHTML = "";
        outputDiv.style.display = "flex";
        outputDiv.style.alignItems = "center";
        outputDiv.style.justifyContent = "center";
        outputDiv.style.fontSize = fontSize; // Keep the same font size
        img.style.margin = "0";
    
        // Handle different positions
        if (position === "left") {
            outputDiv.style.flexDirection = "row";
            textSpan.style.fontSize = fontSize;
            img.style.marginRight = "10px";
            outputDiv.appendChild(img);
            outputDiv.appendChild(textSpan);
        } else if (position === "right") {
            textSpan.style.fontSize = fontSize;
            outputDiv.style.flexDirection = "row";
            img.style.marginLeft = "10px";
            outputDiv.appendChild(textSpan);
            outputDiv.appendChild(img);
        } else if (position === "top") {
            textSpan.style.fontSize = fontSize;
            outputDiv.style.flexDirection = "column";
            img.style.marginBottom = "10px";
            outputDiv.appendChild(img);
            outputDiv.appendChild(textSpan);
        } else if (position === "bottom") {
            textSpan.style.fontSize = fontSize;
            outputDiv.style.flexDirection = "column"; // Places image below text
            img.style.marginTop = "10px";
            outputDiv.appendChild(textSpan);
            outputDiv.appendChild(img);
        } else if (position === "center") {
            textSpan.style.fontSize = fontSize;
            outputDiv.style.position = "relative"; // Allows absolute positioning
            outputDiv.style.display = "inline-block"; // Makes text wrap around the image
            img.style.position = "absolute";
            img.style.top = "50%";
            img.style.left = "50%";
            img.style.transform = "translate(-50%, -50%)"; // Centers image over text
            img.style.zIndex = "1"; // Ensures image is in front
            textSpan.style.position = "relative";
            // Optional: Light background for readability
    
            outputDiv.appendChild(textSpan);
            outputDiv.appendChild(img);
        }
    });
    
    
    
    

    document.getElementById("tt-icon-offset-x-input").addEventListener("input", function () {
    const offsetX = this.value;
    // alert(offsetX);
    const outputDiv = document.getElementById("output");
    const imgInOutput = outputDiv.querySelector("img");
    // Get the current value of the slider
    // const imgInOutput = document.querySelector("img"); // Select the <img> in #output
     // Display the offset percentage value
    // document.getElementById("tt-icon-offset-output").textContent = `${(offsetX * 100).toFixed(0)}%`;

    // If an image exists in #output, adjust its horizontal offset
    if (imgInOutput) {
        imgInOutput.style.transform = `translateX(${offsetX}em)`;
        // outputDiv.style.transform = `translateX(${-offsetX}em)`; // Adjust horizontal offset with transform
        // Adjust horizontal offset with transform
    }
    });


    document.getElementById("tt-icon-offset-y-input").addEventListener("input", function () {
    const offsetY = this.value;
    const outputDiv = document.getElementById("output");
    const imgInOutput = outputDiv.querySelector("img");

    if (imgInOutput) {
        // Apply vertical offset, keeping horizontal offset unchanged
        imgInOutput.style.transform = `translate(${imgInOutput.dataset.offsetX || 0}em, ${offsetY}em)`;
        imgInOutput.dataset.offsetY = offsetY; // Store vertical offset in a data attribute
    }
    });

    document.getElementById("tt-icon-rotate-input").addEventListener("input", function () {
    const rotation = this.value; // Get the current rotation value from the slider

    const outputDiv = document.getElementById("output");
    const imgInOutput = outputDiv.querySelector("img"); // Select the <img> inside #output

    if (imgInOutput) {
        // Apply rotation to the image using CSS transform
        imgInOutput.style.transform = `rotate(${rotation}deg)`;
    }
    });
    document.getElementById("tt-icon-alpha-input").addEventListener("input", function () {
    const opacity = this.value; // Get the current opacity value from the slider

    const outputDiv = document.getElementById("output");
    const imgInOutput = outputDiv.querySelector("img"); // Select the <img> inside #output

    if (imgInOutput) {
        // Apply opacity to the image using CSS opacity property
        imgInOutput.style.opacity = opacity;
    }
    });

    document.getElementById("tt-icon-composite-input").addEventListener("change", (e) => {
        var outputDiv = document.getElementById("output");
        var img = outputDiv.querySelector("img");
        var fontSize = window.getComputedStyle(outputDiv).fontSize;
    
        console.log(e.target.value);
    
        // Common Styles
        outputDiv.style.fontSize = fontSize;
        outputDiv.style.position = "relative"; 
        outputDiv.style.display = "inline-block"; 
    
        img.style.position = "absolute";
        img.style.top = "50%";
        img.style.left = "50%";
        img.style.transform = "translate(-50%, -50%)"; // Center image properly
    
        // Adjust z-index for layering
        if (e.target.value === "source-over") {
            img.style.zIndex = "2"; // Image in front
        } else {
            img.style.zIndex = "-1"; // Image behind text
        }
    });
    
    

}

function showcolorpalette() {
    let counter = 4;
    let currentIndex = 0;
    let coloredLetters = [];
    let coloredWords = [];
    let coloredLines = [];
    let coloringMethod = "letter";

    document.getElementById('colorPickerBtn').addEventListener('click', function() {
        document.getElementById('colorPicker').click();
    });

    document.getElementById('colorPicker').addEventListener('input', function(event) {
        let selectedColor = event.target.value;
        let nextLi = document.createElement('li');
        nextLi.id = `color-${counter++}`;
        nextLi.style.backgroundColor = selectedColor;
        
        document.querySelector('#color_palette ul').appendChild(nextLi);
    });

    document.getElementById('tt-fill-palette-lettering-method-input').addEventListener('change', function(event) {
        coloringMethod = event.target.value;
     
        currentIndex = 0;
        coloredLetters = [];
        coloredWords = [];
        coloredLines = [];
    });

    document.querySelector('#color_palette ul').addEventListener('click', function(event) {
        if (event.target.tagName.toLowerCase() !== 'li') return;
        
        const color = window.getComputedStyle(event.target).backgroundColor;
       
        const outputDiv = document.getElementById('output');
        let originalHTML = outputDiv.innerHTML.replace(/<span[^>]*>(.*?)<\/span>/g, '$1');
        const fontSize = window.getComputedStyle(outputDiv).fontSize;

        let coloredText = "";
        
        coloredLetters = coloredLetters || [];
        coloredWords = coloredWords || [];
        coloredLines = coloredLines || [];
        currentIndex = currentIndex || 0;

        if (coloringMethod === "letter") {
            let letters = originalHTML.split(/(<br\s*\/?>)/);
            let letterIndex = 0;
            
            coloredLetters[currentIndex] = color;

            coloredText = letters.map((char) => {
                if (char.match(/<br\s*\/?>/)) return char;

                return char.split("").map((letter) => {
                    let letterColor = coloredLetters[letterIndex] || "inherit";
                    let coloredLetter = `<span style="color: ${letterColor}; font-size: ${fontSize}">${letter}</span>`;
                    letterIndex++;
                    return coloredLetter;
                }).join("");
            }).join("");

            currentIndex = (currentIndex + 1) % originalHTML.replace(/<br\s*\/?>/g, '').length;
        } else if (coloringMethod === "word") {
            let words = originalHTML.split(/(\s+|<br\s*\/?>)/);
            let wordIndex = 0;
            
            coloredWords[currentIndex] = color;

            coloredText = words.map((word) => {
                if (word.match(/<br\s*\/?>/)) return word;
                if (word.trim() !== "") {
                    let wordColor = coloredWords[wordIndex] || "inherit";
                    let coloredWord = `<span style="color: ${wordColor}; font-size: ${fontSize}">${word}</span>`;
                    wordIndex++;
                    return coloredWord;
                }
                return word;
            }).join('');

            currentIndex = (currentIndex + 1) % words.filter(w => !w.match(/<br\s*\/?>/)).length;
        } else if (coloringMethod === "line") {
            let lines = originalHTML.split(/<br\s*\/?>/);
            
            coloredLines[currentIndex] = color;

            coloredText = lines.map((line, index) => {
                return `<span style="color: ${coloredLines[index] || 'inherit'}; font-size: ${fontSize}">${line}</span>`;
            }).join('<br>');

            currentIndex = (currentIndex + 1) % lines.length;
        }

        outputDiv.innerHTML = coloredText;
    });
}


function animationeffect(){
    const animationItems = document.querySelectorAll('#tt-animation-list li[data-animation-id]');
    animationItems.forEach(item => {
        item.addEventListener('click', function () {
            const outputDiv = document.getElementById('output');
            
            // Get the animation ID from the clicked item
            const animationId = item.getAttribute('data-animation-id');
            
            // Remove all previous animation classes
            outputDiv.className = 'shadow-sm'; // Reset to default class
            
            // Add the new animation class if it exists
            if (animationId) {
                outputDiv.classList.add('ld', `ld-${animationId}`);
            }
        });
    });
    const durationInput = document.getElementById('tt-animation-duration-input');
    const pauseInput = document.getElementById('tt-animation-pause-input');
    function applyAnimationSettings() {
        const outputDiv = document.getElementById('output');
        
        // Get selected duration and pause values
        const duration = durationInput.value; // In milliseconds
        const pause = pauseInput.value;       // In milliseconds
    
        // Apply animation duration
        outputDiv.style.animationDuration = `${duration}ms`;
    
        // Apply animation delay (pause)
        outputDiv.style.animationDelay = `${pause}ms`;
    }
    durationInput.addEventListener('change', applyAnimationSettings);
    pauseInput.addEventListener('change', applyAnimationSettings);
    applyAnimationSettings();
    document.getElementById('tt-animation-active-input').addEventListener('change', function () {
    const animationList = document.getElementById('tt-animation-fieldset');
    
    if (this.checked) {
    animationList.classList.remove('disabled'); // Enable
    } else {
    animationList.classList.add('disabled'); // Disable
    }
    });
}



function downloadeditor() {
    document.getElementById("tt-download-format-list").addEventListener("click", async (e) => {
        if (e.target.tagName === "LI" && e.target.style.display !== "none") {
            const format = e.target.dataset.format;
            if (!format) return;

            const element = document.getElementById("tt-canvas-center");
            const backgroundDiv = document.querySelector(".tt-background-image");
            let backgroundImageUrl = "";
            
            if (backgroundDiv) {
                const backgroundImageStyle = getComputedStyle(backgroundDiv).backgroundImage;
                backgroundImageUrl = backgroundImageStyle.slice(5, -2).replace(/['"]/g, "");
            }
            
            try {
                const canvas = await renderCanvas(format,element, backgroundImageUrl);
                handleDownload(format, canvas, backgroundImageUrl);
            } catch (error) {
                console.error("Error generating image:", error);
                alert("An error occurred while processing the download.");
            }
        }
    });
}

async function renderCanvas(format, element, backgroundImageUrl) {
    return new Promise((resolve, reject) => {
        const canvas = document.createElement("canvas");
        canvas.width = element.offsetWidth;
        canvas.height = element.offsetHeight;
        const ctx = canvas.getContext("2d");

        // Ensure format is correctly compared
        if (format === "transparent-png") {
            // Debugging log

            // Ensure html2canvas renders without background
            html2canvas(element, {
                backgroundColor: "rgba(0,0,0,0)", // Fully transparent background
                useCORS: true
            }).then((htmlCanvas) => {
                ctx.clearRect(0, 0, canvas.width, canvas.height); // Ensure transparency
                ctx.drawImage(htmlCanvas, 0, 0);
                resolve(canvas);
            }).catch(reject);
            return; // Exit early
        }
        else {
           // Debugging log
            const img = new Image();
            img.crossOrigin = "anonymous";
            img.src = backgroundImageUrl;

            img.onload = () => {
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                html2canvas(element, { backgroundColor: null, useCORS: true })
                    .then((htmlCanvas) => {
                        ctx.drawImage(htmlCanvas, 0, 0);
                        resolve(canvas);
                    })
                    .catch(reject);
            };

            img.onerror = () => {
                console.warn("Image failed to load. Using fallback gradient.");
                const gradient = ctx.createRadialGradient(
                    canvas.width / 2, canvas.height / 2, 0,
                    canvas.width / 2, canvas.height / 2, canvas.width / 2
                );
                gradient.addColorStop(0, "rgb(0, 211, 255)");
                gradient.addColorStop(1, "rgb(0, 117, 255)");
                ctx.fillStyle = gradient;
                ctx.fillRect(0, 0, canvas.width, canvas.height);

                html2canvas(element, { backgroundColor: null, useCORS: true })
                    .then((htmlCanvas) => {
                        ctx.drawImage(htmlCanvas, 0, 0);
                        resolve(canvas);
                    })
                    .catch(reject);
            };
        }
    });
}

function createCanvas(width, height) {
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    return canvas;
}

function handleDownload(format, canvas, backgroundImageUrl) {
    if (format === "png" || format === "jpg") {
        downloadImage(canvas, format);
    } else if (format === "transparent-png") {
        downloadTransparentImage(canvas);
    } else if (format === "pdf") {
        downloadPDF(canvas);
    } else if (format === "gif") {
        downloadGIF(canvas);
    } else if (format === "clipboard") {
        copyToClipboard(canvas);
    } else if (format === "preset") {
        downloadPreset(backgroundImageUrl);
    } else {
        alert(`Format ${format} is not supported yet.`);
    }
}

function downloadImage(canvas, format) {
    const link = document.createElement("a");
    link.href = canvas.toDataURL(`image/${format}`);
    link.download = `download.${format}`;
    link.click();
}

function downloadTransparentImage(canvas) {
    const transparentCanvas = createCanvas(canvas.width, canvas.height);
    const ctx = transparentCanvas.getContext("2d");
    ctx.drawImage(canvas, 0, 0);
    ctx.globalCompositeOperation = "destination-in";
    const link = document.createElement("a");
    link.href = transparentCanvas.toDataURL("image/png");
    link.download = "download-transparent.png";
    link.click();
}

function downloadPDF(canvas) {
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF(canvas.width > canvas.height ? "l" : "p", "px", [canvas.width, canvas.height]);
    pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0, canvas.width, canvas.height);
    pdf.save("download.pdf");
}

function downloadGIF(canvas) {
    const gif = new GIF({
        workers: 2,
        quality: 10,
        workerScript: "./asset/js/gif.worker.js", // Use the locally stored script
    });

    const img = new Image();
    img.src = canvas.toDataURL("image/png");

    img.onload = () => {
        for (let i = 0; i < 10; i++) {
            gif.addFrame(img, { delay: 200 });
        }

        gif.on("finished", (blob) => {
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = "download.gif";
            link.click();
        });

        gif.render();
    };

    img.onerror = () => {
        console.error("Failed to load image for GIF rendering.");
    };
}



function copyToClipboard(canvas) {
    canvas.toBlob((blob) => {
        const clipboardItem = new ClipboardItem({ "image/png": blob });
        navigator.clipboard.write([clipboardItem]).then(() => {
            alert("Image copied to clipboard!");
        }).catch((err) => console.error("Clipboard error:", err));
    });
}

function downloadPreset(backgroundImageUrl) {
    const outputDiv = document.getElementById("output");
    if (!outputDiv) {
        alert("The output div is not found.");
        return;
    }
    
    const data = {
        content: outputDiv.innerHTML,
        styles: getElementStyles(outputDiv),
        attributes: getElementAttributes(outputDiv),
        timestamp: new Date().toISOString(),
        format: "textstudio",
        animations: getAnimationStyles(outputDiv),
        images: getImageData(outputDiv),
        background: backgroundImageUrl
    };
    
    const jsonData = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonData], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "download.textstudio";
    link.click();
}

function getElementStyles(element) {
    const styles = {};
    const inlineStyles = element.style;
    for (let i = 0; i < inlineStyles.length; i++) {
        styles[inlineStyles[i]] = inlineStyles.getPropertyValue(inlineStyles[i]);
    }
    return styles;
}

function getElementAttributes(element) {
    return Array.from(element.attributes).reduce((acc, attr) => {
        acc[attr.name] = attr.value;
        return acc;
    }, {});
}

function getAnimationStyles(element) {
    return { classes: element.className.split(" ").filter(cls => cls.startsWith("ld-")) };
}

function getImageData(element) {
    return Array.from(element.querySelectorAll("img")).map(img => ({ src: img.src, alt: img.alt, style: img.getAttribute("style") || "" }));
}


function showbevel() {
    document.getElementById('tt-bevel-inner-size-input').addEventListener('input', function () {
        const value = parseFloat(this.value); // Get the current slider value
      const outputdiv = document.getElementById('output');
      const highlight = document.getElementById('tt-bevel-inner-highlight-color-input');
      const shadow = document.getElementById('tt-bevel-inner-shadow-color-input');
      
     
      const shadowSize = Math.round(value * 10); // Scale the shadow size
      outputdiv.style.textShadow = `
        ${shadowSize}px ${shadowSize}px ${shadowSize * 2}px  ${highlight},
        -${shadowSize}px -${shadowSize}px ${shadowSize * 2}px ${shadow},
      `;
      });
    
    document.getElementById('tt-bevel-inner-angle-input').addEventListener('input', function () {
        const angle = parseInt(this.value, 10); // Get the angle value
        const outputDiv = document.getElementById('output');
        const highlight = document.getElementById('tt-bevel-inner-highlight-color-input');
        const shadow = document.getElementById('tt-bevel-inner-shadow-color-input');
        
        // Convert the angle to radians
        const radians = (angle * Math.PI) / 180;
      
        // Calculate the shadow offset based on the angle
        const shadowOffsetX = Math.round(Math.cos(radians) * 10); // Scale by 10 for noticeable effect
        const shadowOffsetY = Math.round(Math.sin(radians) * 10);
      
        // Apply the shadow to the text
        outputDiv.style.textShadow = `
          ${shadowOffsetX}px ${shadowOffsetY}px 6px ${highlight},
          ${-shadowOffsetX}px ${-shadowOffsetY}px 6px ${shadow},
        `;
    });
    
    
    document.getElementById('tt-bevel-inner-highlight-alpha-input').addEventListener('input', function () {
        const colorInput = document.getElementById('tt-bevel-inner-highlight-color-input');
        const outputDiv = document.getElementById('output');
        const color = colorInput.value;
        const alpha = this.value;
    
        outputDiv.style.textShadow = `
            2px 2px 5px rgba(0, 0, 0, 0.5),
            -2px -2px 5px rgba(${parseInt(color.slice(1, 3), 16)}, ${parseInt(color.slice(3, 5), 16)}, ${parseInt(color.slice(5, 7), 16)}, ${alpha})
         `;
    
    });
}

function innershadow1() {
    const shadowBox = document.getElementById("output");
    const sizeInput = document.getElementById("tt-shadow-inner-size-input");
    const opacityInput = document.getElementById("tt-shadow-inner-alpha-input");
    const distanceInput = document.getElementById("tt-shadow-inner-distance-input");
    const angleInput = document.getElementById("tt-shadow-inner-angle-input");
    const colorInput = document.getElementById("tt-shadow-inner-color-input");
    const activeInput = document.getElementById("tt-shadow-inner-active-input");
    const blendModeInput = document.getElementById("tt-shadow-inner-blendmode-input");

    // Create SVG filter dynamically
    function createSVGFilter() {
        const svgNS = "http://www.w3.org/2000/svg";
        let existingSVG = document.getElementById("innerShadowSVG");
        if (existingSVG) existingSVG.remove();

        const svg = document.createElementNS(svgNS, "svg");
        svg.setAttribute("id", "innerShadowSVG");
        svg.setAttribute("width", "0");
        svg.setAttribute("height", "0");

        const defs = document.createElementNS(svgNS, "defs");
        const filter = document.createElementNS(svgNS, "filter");
        filter.setAttribute("id", "innershadow");
        filter.setAttribute("x", "-50%");
        filter.setAttribute("y", "-50%");
        filter.setAttribute("width", "200%");
        filter.setAttribute("height", "200%");

        const feComponentTransfer = document.createElementNS(svgNS, "feComponentTransfer");
        feComponentTransfer.setAttribute("in", "SourceAlpha");
        const feFuncA = document.createElementNS(svgNS, "feFuncA");
        feFuncA.setAttribute("type", "table");
        feFuncA.setAttribute("tableValues", "1 0");
        feComponentTransfer.appendChild(feFuncA);

        const feGaussianBlur = document.createElementNS(svgNS, "feGaussianBlur");
        feGaussianBlur.setAttribute("stdDeviation", sizeInput.value);

        const angleRad = (angleInput.value * Math.PI) / 180;
        const xOffset = Math.cos(angleRad) * distanceInput.value * 2;
        const yOffset = Math.sin(angleRad) * distanceInput.value * 2;

        const feOffset = document.createElementNS(svgNS, "feOffset");
        feOffset.setAttribute("dx", xOffset);
        feOffset.setAttribute("dy", yOffset);
        feOffset.setAttribute("result", "offsetblur");

        const feFlood = document.createElementNS(svgNS, "feFlood");
        feFlood.setAttribute("flood-color", colorInput.value);
        feFlood.setAttribute("flood-opacity", opacityInput.value);
        feFlood.setAttribute("result", "color");

        const feComposite1 = document.createElementNS(svgNS, "feComposite");
        feComposite1.setAttribute("in2", "offsetblur");
        feComposite1.setAttribute("operator", "in");

        const feComposite2 = document.createElementNS(svgNS, "feComposite");
        feComposite2.setAttribute("in2", "SourceAlpha");
        feComposite2.setAttribute("operator", "in");

        const feMerge = document.createElementNS(svgNS, "feMerge");
        const feMergeNode1 = document.createElementNS(svgNS, "feMergeNode");
        feMergeNode1.setAttribute("in", "SourceGraphic");

        const feMergeNode2 = document.createElementNS(svgNS, "feMergeNode");

        feMerge.appendChild(feMergeNode1);
        feMerge.appendChild(feMergeNode2);

        filter.appendChild(feComponentTransfer);
        filter.appendChild(feGaussianBlur);
        filter.appendChild(feOffset);
        filter.appendChild(feFlood);
        filter.appendChild(feComposite1);
        filter.appendChild(feComposite2);
        filter.appendChild(feMerge);

        defs.appendChild(filter);
        svg.appendChild(defs);
        document.body.appendChild(svg);
    }

    // Function to update the shadow dynamically
    function updateTextShadow() {
        if (!activeInput.checked) {
            shadowBox.style.filter = "none";
            return;
        }

        createSVGFilter();
        shadowBox.style.filter = "url(#innershadow)";
        shadowBox.style.mixBlendMode = blendModeInput.value;
    }

    // Attach event listeners
    sizeInput.addEventListener("input", updateTextShadow);
    opacityInput.addEventListener("input", updateTextShadow);
    distanceInput.addEventListener("input", updateTextShadow);
    angleInput.addEventListener("input", updateTextShadow);
    colorInput.addEventListener("input", updateTextShadow);
    blendModeInput.addEventListener("change", updateTextShadow);
    activeInput.addEventListener("change", updateTextShadow);

    // Initialize
    updateTextShadow();
}

function innershadow2() {
    const shadowBox2 = document.getElementById("output");
    const sizeInput2 = document.getElementById("tt-shadow-inner2-size-input");
    const opacityInput2 = document.getElementById("tt-shadow-inner2-alpha-input");
    const distanceInput2 = document.getElementById("tt-shadow-inner2-distance-input");
    const angleInput2 = document.getElementById("tt-shadow-inner2-angle-input");
    const colorInput2 = document.getElementById("tt-shadow-inner2-color-input");
    const activeInput2 = document.getElementById("tt-shadow-inner2-active-input");
    const blendModeInput2 = document.getElementById("tt-shadow-inner2-blendmode-input");

    function createSVGFilter() {
        console.log("Creating SVG filter...");
        const svgNS = "http://www.w3.org/2000/svg";
        let existingSVG = document.getElementById("innerShadowSVG");
        if (existingSVG) existingSVG.remove();

        const svg = document.createElementNS(svgNS, "svg");
        svg.setAttribute("id", "innerShadowSVG");
        svg.setAttribute("width", "0");
        svg.setAttribute("height", "0");

        const defs = document.createElementNS(svgNS, "defs");
        const filter = document.createElementNS(svgNS, "filter");
        filter.setAttribute("id", "innershadow");
        filter.setAttribute("x", "-50%");
        filter.setAttribute("y", "-50%");
        filter.setAttribute("width", "200%");
        filter.setAttribute("height", "200%");

        // Component Transfer
        const feComponentTransfer = document.createElementNS(svgNS, "feComponentTransfer");
        feComponentTransfer.setAttribute("in", "SourceAlpha");
        const feFuncA = document.createElementNS(svgNS, "feFuncA");
        feFuncA.setAttribute("type", "table");
        feFuncA.setAttribute("tableValues", "1 0");
        feComponentTransfer.appendChild(feFuncA);

        // Gaussian Blur
        const feGaussianBlur = document.createElementNS(svgNS, "feGaussianBlur");
        feGaussianBlur.setAttribute("stdDeviation", sizeInput2.value);

        // Calculate Offset
        const angleRad = (angleInput2.value * Math.PI) / 180;
        const xOffset = Math.cos(angleRad) * distanceInput2.value * 2;
        const yOffset = Math.sin(angleRad) * distanceInput2.value * 2;

        const feOffset = document.createElementNS(svgNS, "feOffset");
        feOffset.setAttribute("dx", xOffset);
        feOffset.setAttribute("dy", yOffset);
        feOffset.setAttribute("result", "offsetblur");

        // Flood Color
        const feFlood = document.createElementNS(svgNS, "feFlood");
        feFlood.setAttribute("flood-color", colorInput2.value);
        feFlood.setAttribute("flood-opacity", opacityInput2.value);
        feFlood.setAttribute("result", "color");

        // Composite 1 (Combine Color with Offset)
        const feComposite1 = document.createElementNS(svgNS, "feComposite");
        feComposite1.setAttribute("in", "color");
        feComposite1.setAttribute("in2", "offsetblur");
        feComposite1.setAttribute("operator", "in");

        // Composite 2 (Apply Shadow Only Inside the Element)
        const feComposite2 = document.createElementNS(svgNS, "feComposite");
        feComposite2.setAttribute("in", "SourceAlpha");
        feComposite2.setAttribute("in2", "offsetblur");
        feComposite2.setAttribute("operator", "in");

        // Merge Nodes
        const feMerge = document.createElementNS(svgNS, "feMerge");
        const feMergeNode1 = document.createElementNS(svgNS, "feMergeNode");
        feMergeNode1.setAttribute("in", "SourceGraphic");

        const feMergeNode2 = document.createElementNS(svgNS, "feMergeNode");
        feMergeNode2.setAttribute("in", "color");

        feMerge.appendChild(feMergeNode1);
        feMerge.appendChild(feMergeNode2);

        // Assemble Filter
        filter.appendChild(feComponentTransfer);
        filter.appendChild(feGaussianBlur);
        filter.appendChild(feOffset);
        filter.appendChild(feFlood);
        filter.appendChild(feComposite1);
        filter.appendChild(feComposite2);
        filter.appendChild(feMerge);

        defs.appendChild(filter);
        svg.appendChild(defs);
        document.body.appendChild(svg);
    }

    function updateTextShadow2() {
        if (!activeInput2.checked) {
            shadowBox2.style.filter = "none";
            return;
        }

        createSVGFilter();
        shadowBox2.style.filter = "url(#innershadow)";
        shadowBox2.style.mixBlendMode = blendModeInput2.value;
    }

    // Attach event listeners
    [sizeInput2, opacityInput2, distanceInput2, angleInput2, colorInput2, blendModeInput2, activeInput2].forEach(input => {
        input.addEventListener("input", updateTextShadow2);
    });

    // Initialize
    updateTextShadow2();
}


function outershadow1() {
    const shadowBox = document.getElementById("output");
    const sizeInput = document.getElementById("tt-shadow-outer-size-input");
    const strengthInput = document.getElementById("tt-shadow-outer-strength-input");
    const opacityInput = document.getElementById("tt-shadow-outer-fill-alpha-input");
    const distanceInput = document.getElementById("tt-shadow-outer-distance-input");
    const angleInput = document.getElementById("tt-shadow-outer-angle-input");
    const colorInput = document.getElementById("tt-shadow-outer-fill-color-input");
    const activeInput2 = document.getElementById("tt-shadow-outer-active-input");


    // Make sure all elements are found before continuing
    if (!shadowBox || !sizeInput || !strengthInput || !opacityInput || !distanceInput || !angleInput  || !colorInput ) {
        return;
    }

    // Function to update the text shadow based on user inputs
    function updateTextShadow2() {
        if (!activeInput2.checked) {
            shadowBox.style.textShadow = "none";
            return;
        }

        const size = sizeInput.value * 10; // Scale value for visibility
        const opacity = opacityInput.value;
        const distance = distanceInput.value * 100; // Scale for distance
        const angle = angleInput.value;
        const color = colorInput.value;
        const angleRad = (angle * Math.PI) / 180;
        const xOffset = Math.cos(angleRad) * distance;
        const yOffset = Math.sin(angleRad) * distance;
        shadowBox.style.textShadow = `${xOffset}px ${yOffset}px ${size}px rgba(${parseInt(color.slice(1, 3), 16)}, ${parseInt(color.slice(3, 5), 16)}, ${parseInt(color.slice(5, 7), 16)}, ${opacity})`;
    }


    // Add event listeners for all inputs
    sizeInput.addEventListener("input", updateTextShadow2);
    strengthInput.addEventListener("input", updateTextShadow2);
    opacityInput.addEventListener("input", updateTextShadow2);
    distanceInput.addEventListener("input", updateTextShadow2);
    angleInput.addEventListener("input", updateTextShadow2);
    colorInput.addEventListener("input", updateTextShadow2);


}
function outershadow2() {
    const shadowBox = document.getElementById("output");
    const sizeInput = document.getElementById("tt-shadow-outer2-size-input");
    const strengthInput = document.getElementById("tt-shadow-outer2-strength-input");
    const opacityInput = document.getElementById("tt-shadow-outer2-fill-alpha-input");
    const distanceInput = document.getElementById("tt-shadow-outer2-distance-input");
    const angleInput = document.getElementById("tt-shadow-outer2-angle-input");
    const colorInput = document.getElementById("tt-shadow-outer2-fill-color-input");
    const activeInput2 = document.getElementById("tt-shadow-outer2-active-input");


    // Make sure all elements are found before continuing
    if (!shadowBox || !sizeInput || !strengthInput || !opacityInput || !distanceInput || !angleInput  || !colorInput ) {
        return;
    }

    // Function to update the text shadow based on user inputs
    function updateTextShadow2() {
        if (!activeInput2.checked) {
            shadowBox.style.textShadow = "none";
            return;
        }

        const size = sizeInput.value * 10; // Scale value for visibility
        const opacity = opacityInput.value;
        const distance = distanceInput.value * 100; // Scale for distance
        const angle = angleInput.value;
        const color = colorInput.value;
        const angleRad = (angle * Math.PI) / 180;
        const xOffset = Math.cos(angleRad) * distance;
        const yOffset = Math.sin(angleRad) * distance;
        shadowBox.style.textShadow = `${xOffset}px ${yOffset}px ${size}px rgba(${parseInt(color.slice(1, 3), 16)}, ${parseInt(color.slice(3, 5), 16)}, ${parseInt(color.slice(5, 7), 16)}, ${opacity})`;
    }


    // Add event listeners for all inputs
    sizeInput.addEventListener("input", updateTextShadow2);
    strengthInput.addEventListener("input", updateTextShadow2);
    opacityInput.addEventListener("input", updateTextShadow2);
    distanceInput.addEventListener("input", updateTextShadow2);
    angleInput.addEventListener("input", updateTextShadow2);
    colorInput.addEventListener("input", updateTextShadow2);


}

function showfont() {
    document.querySelectorAll('li').forEach(item => {
        item.addEventListener('click', function() {
            // Specify the font family directly or based on the data-name attribute
            const fontName = this.getAttribute('data-name').trim(); 
            const fontUrl =  this.querySelector('img'); 
            const imageUrl = fontUrl.getAttribute('src')
            const output = document.getElementById('output');
            const NameFont = document.getElementById('font_name');
    
        
            const fontCDNs = {
                'Angeline': 'https://fonts.cdnfonts.com/css/angeline',
                'Hartone Softed': 'https://fonts.cdnfonts.com/css/hartone-softed',
                'Airstrike': 'https://fonts.cdnfonts.com/css/airstrike',
                'Super Bubble' : 'https://fonts.cdnfonts.com/css/super-bubble',
                'LEMON MILK' : 'https://fonts.cdnfonts.com/css/lemon-milk',
                'Huge Promo': 'https://fonts.cdnfonts.com/css/huge-promo',
                'Bisney' : 'https://fonts.cdnfonts.com/css/bisney',
                'Boss Baby' : 'https://fonts.cdnfonts.com/css/baby-boss',
                'Weather Sunday - Personal Use' : 'https://fonts.cdnfonts.com/css/weather-sunday-personal-use',
                'Barbie' : 'https://fonts.cdnfonts.com/css/barbie-6',
                'Nautilus Pompilius' : 'https://fonts.cdnfonts.com/css/nautilus-pompilius',
                'GROBOLD' : 'https://fonts.cdnfonts.com/css/grobold',
                'Black Way' : 'https://fonts.cdnfonts.com/css/black-way-personal-use',
                
              
            };
            Object.keys(fontCDNs).forEach(key => {
    
                if (key === fontName.trim()) {
                    const link = document.createElement('link');
                    link.href = fontCDNs[key]; // Load font from CDN
                    link.rel = 'stylesheet';
                    document.head.appendChild(link);
            
                    // Apply the font family to the #output div
                    output.style.fontFamily = `"${fontName}"`;
                    NameFont.style.backgroundImage = `url('${imageUrl}')`;
    
                } else {
                    output.style.fontFamily = `"${fontName}"`;
                }
            });
        });
    });
}

function importtext() {
    document.getElementById("tt-import-preset-input").addEventListener("change", function (event) {
        const file = event.target.files[0];
      
        if (file) {
          const reader = new FileReader();
      
          reader.onload = function (e) {
            try {
              const jsonData = JSON.parse(e.target.result);
            //  console.log(jsonData.styles);
             console.log(jsonData);
    
              // Extract properties from JSON
                const text = jsonData.text ? jsonData.text : (jsonData.content ? jsonData.content : "Default Value");
                const fontSize = jsonData.font && jsonData.font.size ? jsonData.font.size : 48;
                const fontWeight = jsonData.font && jsonData.font.weight ? jsonData.font.weight : "bold";
                const fontName = jsonData.font && jsonData.font.name ? jsonData.font.name : "Arial";
                // const color = jsonData.fill && jsonData.fill.color ? jsonData.fill.color: (jsonData.attributes && jsonData.attributes.style && jsonData.attributes.style.color? jsonData.attributes.style.color: { r: 0, g: 0, b: 0 });
                const outline = jsonData.outline && jsonData.outline.global ? jsonData.outline.global : {};
                const gradient = jsonData.background && jsonData.background.fill && jsonData.background.fill.gradient ? jsonData.background.fill.gradient : {};
                const color = jsonData.styles.color;
                const textShadow = jsonData.styles["text-shadow"]|| "";
                const imageUrl = jsonData.backgroundImage || "";
              // Set background style
              const outputDiv = document.getElementById('output');
              
              
              outputDiv.style.textStroke = "none";
              outputDiv.style.background = "none";
              outputDiv.style.webkitBackgroundClip = "unset";
              outputDiv.style.webkitTextStroke = "unset";
              outputDiv.style.webkitTextFillColor = "unset";
              outputDiv.style.color = "unset";
    
      
              // Apply main text style
              console.log(text);
              console.log(fontSize);
              console.log(fontWeight);
              console.log(fontName);
              console.log(color);

    
              outputDiv.textContent = text;
              outputDiv.style.fontSize = `${fontSize}px`;
              outputDiv.style.fontWeight = fontWeight;
              outputDiv.style.fontFamily = fontName;
              outputDiv.style.color = color
              outputDiv.style.textTransform = "none";
    
    
              if (imageUrl) {
                document.querySelector('.tt-background-image').style.backgroundImage = `url('${imageUrl}')`;
               
              }
    
      
            //   // Apply outline style if active
              if (outline.active) {
                const outlineWidth = (outline.width || 0) * 100 + "px";
                const outlineColor = outline.fill?.color
                  ? `rgb(${outline.fill.color.r}, ${outline.fill.color.g}, ${outline.fill.color.b})`
                  : "transparent";
      
                if (outline.fill?.gradient?.active) {
                  const gradientColors = outline.fill.gradient.colors
                    .map(
                      (gradientColor) =>
                        `rgb(${gradientColor.r}, ${gradientColor.g}, ${gradientColor.b}) ${gradientColor.pos * 100}%`
                    )
                    .join(", ");
                  const gradientAngle = outline.fill.gradient.angle || 0;
      
                  outputDiv.style.webkitTextStroke = `${outlineWidth} transparent`;
                  outputDiv.style.background = `linear-gradient(${gradientAngle}deg, ${gradientColors})`;
                  outputDiv.style.webkitBackgroundClip = "text";
                  outputDiv.style.webkitTextFillColor = "transparent";
                } else {
                  outputDiv.style.webkitTextStroke = `${outlineWidth} ${outlineColor}`;
                }
              }
              if(gradient.active){
                
                const gradientStyle = gradient.active === 1
                ? `${gradient.type}-gradient(${gradient.angle}deg, rgb(${gradient.colors[0].r}, ${gradient.colors[0].g}, ${gradient.colors[0].b}) ${gradient.colors[0].pos * 100}%, rgb(${gradient.colors[1].r}, ${gradient.colors[1].g}, ${gradient.colors[1].b}) ${gradient.colors[1].pos * 100}%)`
                : `rgb(${jsonData.background.color.r}, ${jsonData.background.color.g}, ${jsonData.background.color.b})`;
    
                console.log(gradientStyle);
                outputDiv.style.background = gradientStyle;
              }
              if (textShadow) {
                // outputDiv.style.textShadow = textShadow;
              }
              if (jsonData.content) {
                const contentDiv = document.createElement('div');
                contentDiv.innerHTML = jsonData.content;
          
                const images = contentDiv.querySelectorAll('img');
                images.forEach(img => {
                  const imageElement = new Image();
                  imageElement.src = img.src;
                  imageElement.style.cssText = img.style.cssText;
                  contentDiv.replaceChild(imageElement, img);
                });
          
                // Append the modified content to outputDiv
                outputDiv.innerHTML = contentDiv.innerHTML;
              }
    
            // Append modified content
            outputDiv.innerHTML = contentDiv.innerHTML
              
            } catch (error) {
              console.error("Invalid JSON file", error);
              console.log("The uploaded file is not a valid .textstudio JSON file.");
            }
          };
      
          reader.readAsText(file);
        }
      });
      

}


// function outlinefirstgradient() {
//     // Function to create a new handler
//     function createNewHandler(left = 0, top = 0, color = '#ff0000') {
//         const previewElement = document.querySelector('.grp-preview');
//         const newHandler = document.createElement('div');
//         newHandler.className = 'grp-handler';
//         newHandler.style.position = 'absolute';
//         newHandler.style.left = `${left}px`;
//         newHandler.style.top = `${top}px`;

//         newHandler.innerHTML = `
//             <div class="grp-handler grp-handler-selected" style="position: absolute; top: 0px; left: 100%;">
//                 <div class="grp-handler-close-c">
//                     <div class="grp-handler-close" data-toggle="handler-close">⨯</div>
//                 </div>
//                 <div class="grp-handler-drag" data-toggle="handler-drag"></div>
//                 <div class="grp-handler-cp-c" data-toggle="handler-color-c">
//                     <div class="tt-pickr-gradient-button" id="color-picker" data-id="gp-1e3a9ab0-5c9f-4837-a0b3-848527e59f17" style="--color: ${color};"></div>
//                 </div>
//             </div>
//         `;

//         addDragFunctionality(newHandler);
//         previewElement.appendChild(newHandler);
//     }

//     // Function to add drag functionality to a handler
//     function addDragFunctionality(handler) {
//         const previewElement = document.querySelector('.grp-preview');
//         const dragHandle = handler.querySelector('.grp-handler-drag');
//         const closeButton = handler.querySelector('.grp-handler-close');
//         const colorPickerDiv1 = handler.querySelector('#color-picker');
//         let isDragging = false;
//         let offsetX = 0;
//         let offsetY = 0;

//         dragHandle.addEventListener('mousedown', (e) => {
//             isDragging = true;
//             const rect = handler.getBoundingClientRect();
//             offsetX = e.clientX - rect.left;
//             offsetY = e.clientY - rect.top;
//             dragHandle.style.cursor = 'grabbing'; 
//         });

//         document.addEventListener('mousemove', (e) => {
//             if (isDragging) {
//                 const rect = previewElement.getBoundingClientRect();
//                 let left = e.clientX - rect.left - offsetX;
//                 let top = e.clientY - rect.top - offsetY;
//                 left = Math.max(0, Math.min(left, rect.width - handler.offsetWidth));
//                 top = Math.max(0, Math.min(top, rect.height - handler.offsetHeight));
//                 handler.style.left = `${left}px`;
//                 handler.style.top = `${top}px`;
//             }
//         });

//         document.addEventListener('mouseup', () => {
//             isDragging = false;
//             dragHandle.style.cursor = 'grab'; 
//         });

//         dragHandle.addEventListener('click', (e) => {
//             e.stopPropagation();
//             const randomLeft = Math.random() * (previewElement.offsetWidth - 50);
//             const randomTop = Math.random() * (previewElement.offsetHeight - 50);
//             const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
//             createNewHandler(randomLeft, randomTop, randomColor);
//         });

//         colorPickerDiv1.addEventListener('click', () => {
//             const colorPicker = document.createElement('input');
//             colorPicker.type = 'color';
//             colorPicker.style.position = 'absolute';
//             colorPicker.style.opacity = '0';
//             colorPicker.style.pointerEvents = 'none';

//             handler.appendChild(colorPicker);
//             colorPicker.click();

//             colorPicker.addEventListener('input', (e) => {
//                 const selectedColor = e.target.value;
//                 colorPickerDiv1.style.setProperty('--color', selectedColor);
//                 handler.style.outline = `4px solid ${selectedColor}`;  // Applying gradient outline
//                 updateGradientFromHandlers();
//             });

//             colorPicker.addEventListener('blur', () => {
//                 handler.removeChild(colorPicker);
//             });
//         });

//         closeButton.addEventListener('click', (e) => {
//             e.stopPropagation();
//             handler.remove(); 
//         });
//     }

//     // Function to initialize the first handler
//     function initializeFirstHandler() {
//         const existingHandler = document.querySelector('.grp-handler.grp-handler-selected');
//         if (existingHandler) {
//             addDragFunctionality(existingHandler);
//         }
//     }

//     initializeFirstHandler();

//     const gradientCheckbox = document.getElementById('tt-outline-first-fill-gradient-active-input');
//     const gradientFieldset = document.getElementById('tt-outline-first-fill-gradient-fieldset');
//     const colorsInput = document.getElementById('tt-outline-first-fill-gradient-colors-input');
//     const angleInput = document.getElementById('tt-outline-first-fill-gradient-angle-input');
//     const outputDiv = document.getElementById('output');
    
//     outputDiv.style.textShadow = 'unset';

//     function updateGradientcolor() {
//         if (gradientCheckbox.checked) {
//             gradientFieldset.style.display = 'block';

//             const groupPreview = document.querySelector(".grp-preview");
//             const currentBackgroundImage = getComputedStyle(groupPreview).backgroundImage;
//             const colors = colorsInput.value;
//             const angle = angleInput.value || 90;

//             const colorArray = colors.split(',').map(color => color.trim());

//             const shadowOffsets = 10; 
//             let textShadow = '';

//             for (let i = 0; i < colorArray.length; i++) {
//                 const offset = i * shadowOffsets;
//                 textShadow += `${offset}px ${offset}px 0 ${colorArray[i]}, `;
//             }

//             // outputDiv.style.textShadow = textShadow.slice(0, -2); // Remove trailing comma and space
//             outputDiv.style.opacity = 1;
//         } else {
//             gradientFieldset.style.display = 'none';
//             outputDiv.style.textShadow = ''; 
//             outputDiv.style.opacity = ''; 
//         }
//     }

//     // Add event listeners to update gradient dynamically
//     gradientCheckbox.addEventListener('change', updateGradientcolor);
//     colorsInput.addEventListener('input', updateGradientcolor);
//     angleInput.addEventListener('input', updateGradientcolor);
// }

function fillingshadow()
{
    document.getElementById('tt-depth-fill-texture-import-input').addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                // Get the image URL
                const imageUrl = e.target.result;
    
                // Get the output div
                const outputDiv = document.getElementById('output');
    
                // Set text styles
                outputDiv.style.fontSize = '50px';
                outputDiv.style.fontWeight = 'bold';
                outputDiv.style.color = 'transparent';  // Make text color transparent for background-clip to work
                outputDiv.style.position = 'relative';
                outputDiv.style.backgroundImage = `url(${imageUrl})`;  // Set the image as background
                outputDiv.style.backgroundSize = 'cover';  // Ensure the background image covers the text
                outputDiv.style.backgroundClip = 'text';  // Clip the background to the text
                outputDiv.style.webkitBackgroundClip = 'text';  // For Safari compatibility
                outputDiv.style.display = 'inline-block';  // Allow the background to match the text size
                outputDiv.style.textShadow = '2px 2px 10px rgba(0, 0, 0, 0.6)';  // Optional text shadow for effect
            };
            reader.readAsDataURL(file);
        }
    });
    
    
    
}


function showprojectiongradient(){

        // Function to update the gradient from the handlers
        function updateGradientFromHandlers() {
            const handlers = document.querySelectorAll('.grp-handler');
            const colors = [];
    
            // Collect background colors from each handler
            handlers.forEach((handler) => {
                const bgColor = handler.style.backgroundColor;
                if (bgColor) {
                    colors.push(bgColor);
                }
            });
    
            // Create and apply the gradient if there are at least two colors
            if (colors.length > 1) {
                const gradient = `linear-gradient(to right, ${colors.join(', ')})`;
                const previewElement = document.querySelector('.grp-preview');
                const outputDiv = document.getElementById('output');
                previewElement.style.backgroundImage = gradient;
                outputDiv.style.backgroundImage = gradient;
                outputDiv.style.webkitBackgroundClip = 'text'; // Clip the background to the text
                outputDiv.style.webkitTextFillColor = 'transparent';
            }
        }
    
        // Function to create a new handler with optional parameters
        function createNewHandler(left = 0, top = 0, color = '#ff0000') {
            // Create the handler element
            const previewElement = document.querySelector('.grp-preview');
            const newHandler = document.createElement('div');
            newHandler.className = 'grp-handler';
            newHandler.style.position = 'absolute';
            newHandler.style.left = `${left}px`;
            newHandler.style.top = `${top}px`;
            newHandler.style.backgroundColor = color; // Set the initial color
    
            // Add inner elements (close button, drag handle, color picker)
            newHandler.innerHTML = `
                <div class="grp-handler-close-c">
                    <div class="grp-handler-close" data-toggle="handler-close">⨯</div>
                </div>
                <div class="grp-handler-drag" data-toggle="handler-drag"></div>
                <div class="grp-handler-cp-c" data-toggle="handler-color-c">
                    <div class="tt-pickr-gradient-button" id="color-picker" data-id="gp-1e3a9ab0-5c9f-4837-a0b3-848527e59f17" style="--color: ${color};"></div>
                </div>
            `;
            previewElement.appendChild(newHandler);
    
            // Initialize drag functionality for the new handler
            addDragFunctionality(newHandler);
        }
    
        // Function to add drag functionality to a handler
        function addDragFunctionality(handler) {
            const previewElement = document.querySelector('.grp-preview');
            const dragHandle = handler.querySelector('.grp-handler-drag');
            const closeButton = handler.querySelector('.grp-handler-close');
            const colorPickerDiv1 = handler.querySelector('#color-picker');
            let isDragging = false;
            let offsetX = 0;
            let offsetY = 0;
    
            dragHandle.addEventListener('mousedown', (e) => {
                isDragging = true;
                const rect = handler.getBoundingClientRect();
                offsetX = e.clientX - rect.left;
                offsetY = e.clientY - rect.top;
                dragHandle.style.cursor = 'grabbing';
            });
    
            document.addEventListener('mousemove', (e) => {
                if (isDragging) {
                    const rect = previewElement.getBoundingClientRect();
                    let left = e.clientX - rect.left - offsetX;
                    let top = e.clientY - rect.top - offsetY;
                    left = Math.max(0, Math.min(left, rect.width - handler.offsetWidth));
                    top = Math.max(0, Math.min(top, rect.height - handler.offsetHeight));
                    handler.style.left = `${left}px`;
                    handler.style.top = `${top}px`;
                }
            });
    
            document.addEventListener('mouseup', () => {
                isDragging = false;
                dragHandle.style.cursor = 'grab';
            });
    
            // Add functionality to dynamically create another handler on double-click
            dragHandle.addEventListener('dblclick', (e) => {
                e.stopPropagation();
                const randomLeft = Math.random() * (previewElement.offsetWidth - 50);
                const randomTop = Math.random() * (previewElement.offsetHeight - 50);
                const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
                createNewHandler(randomLeft, randomTop, randomColor);
            });
    
            // Handle color picker functionality
            colorPickerDiv1.addEventListener('click', () => {
                const colorPicker = document.createElement('input');
                colorPicker.type = 'color';
                colorPicker.style.position = 'absolute';
                colorPicker.style.opacity = '0';
                colorPicker.style.pointerEvents = 'none';
                handler.appendChild(colorPicker);
                colorPicker.click();
    
                colorPicker.addEventListener('input', (e) => {
                    const selectedColor = e.target.value;
                    colorPickerDiv1.style.setProperty('--color', selectedColor);
                    handler.style.backgroundColor = selectedColor;
                    updateGradientFromHandlers();
                });
    
                colorPicker.addEventListener('blur', () => {
                    handler.removeChild(colorPicker);
                });
            });
    
            // Close button to remove handler
            closeButton.addEventListener('click', (e) => {
                e.stopPropagation();
                handler.remove();
            });
        }
    
        // Initialize the first handler if it already exists
        function initializeFirstHandler() {
            const existingHandler = document.querySelector('.grp-handler.grp-handler-selected');
            if (existingHandler) {
                addDragFunctionality(existingHandler);
            }
        }
    
        // Initialize the first handler if it's already present
        initializeFirstHandler();
    
        const gradientCheckbox = document.getElementById('tt-depth-fill-gradient-active-input');
        const gradientFieldset = document.getElementById('tt-depth-fill-gradient-fieldset');
        const colorsInput = document.getElementById('tt-depth-fill-gradient-colors-input');
        const angleInput = document.getElementById('tt-depth-fill-gradient-angle-input');
        const outputDiv = document.getElementById('output');
        const opacityDiv = document.getElementById("tt-fill-alpha-input");
    
        function updateGradientcolor() {
            outputDiv.style.textShadow = 'none';
    
            if (gradientCheckbox.checked) {
                gradientFieldset.style.display = 'block';  // Show the gradient fieldset
                const groupPreview = document.querySelector(".grp-preview");
                const handlers = document.querySelectorAll('.grp-handler');
    
                let colors = [];
                handlers.forEach(handler => {
                    const colorPicker = handler.querySelector('.tt-pickr-gradient-button');
                    if (colorPicker) {
                        colors.push(colorPicker.style.getPropertyValue('--color'));
                    }
                });
    
                if (colors.length < 2) {
                    colors = ['#000000', '#ffffff']; // Fallback if not enough colors
                }
    
                const angle = angleInput.value || 90; // Get the selected angle
                const opacity = opacityDiv.value || 1; // Get opacity value
    
                const newGradient = `linear-gradient(${angle}deg, ${colors.join(', ')})`;
    
                outputDiv.style.backgroundImage = newGradient;
                outputDiv.style.opacity = opacity;
                outputDiv.style.webkitBackgroundClip = 'text';
                outputDiv.style.webkitTextFillColor = 'transparent';
    
                groupPreview.style.backgroundImage = newGradient;
            } else {
                gradientFieldset.style.display = 'none';  // Hide the gradient fieldset
                outputDiv.style.backgroundImage = '';
                outputDiv.style.textShadow = 'none';
                outputDiv.style.webkitBackgroundClip = '';
                outputDiv.style.webkitTextFillColor = '';
                outputDiv.style.opacity = '';
            }
        }
    
        // Add event listeners to update the gradient dynamically
        gradientCheckbox.addEventListener('change', updateGradientcolor);
        colorsInput.addEventListener('input', updateGradientcolor);
        angleInput.addEventListener('input', updateGradientcolor);
        opacityDiv.addEventListener('input', updateGradientcolor);
    
    
    
}


function showpercentage() {
    const output = document.getElementById('output');
    const zoom = document.getElementById('zoom');
    const letter = document.getElementById('letter');
    const line = document.getElementById('line');
    const rotate = document.getElementById('rotate');
    const arc = document.getElementById('arc');
    const fontSizeInput = document.getElementById('tt-font-size-input');
    const letterSpacingInput = document.getElementById('tt-letter-spacing-input');
    const lineHeightInput = document.getElementById('tt-line-height-input');
    const rotateInput = document.getElementById('tt-rotate-input');
    const curveInput = document.getElementById('tt-distort-arc-angle-input');

    if (!output) return;

    // Function to create and show the tooltip only when the user interacts with the slider
   

    if (fontSizeInput) {
        
        fontSizeInput.addEventListener('input', (e) => {
            output.style.fontSize = `${e.target.value}px`;
            const value = e.target.value;
            const min = fontSizeInput.min;
            const max = fontSizeInput.max;
            zoom.textContent = Math.round((value - 12) / 128 * 100) + '%';
            zoom.style.left = `calc(${(value - min) / (max - min) * 100}% + 0.96875px)`; 
            zoom.style.display = 'block';
           
        });
        fontSizeInput.addEventListener('blur', function() {
            zoom.style.display = 'none';
        });
    }

    if (letterSpacingInput) {
        
        letterSpacingInput.addEventListener('input', (e) => {
            output.style.letterSpacing = `${e.target.value}em`;
            const value = e.target.value;
            const min = letterSpacingInput.min;
            const max = letterSpacingInput.max;
            letter.textContent = Math.round(value * 100) + '%';
            letter.style.left = `calc(${(value - min) / (max - min) * 100}% + 4.25px)`;
            letter.style.display = 'block'
            
        });
        letterSpacingInput.addEventListener('blur', function() {
            letter.style.display = 'none';
        });
        
    }

    if (lineHeightInput) {
        
        lineHeightInput.addEventListener('input', (e) => {
            output.style.lineHeight = e.target.value;
            const value = e.target.value;
            const min = lineHeightInput.min;
            const max = lineHeightInput.max;
            line.textContent = Math.round(value * 100) + '%';
            line.style.left = `calc(${(value - min) / (max - min) * 100}% + 4.25px)`;
            line.style.display = 'block';
            
        });
        lineHeightInput.addEventListener('blur', function() {
            line.style.display = 'none';
        });
    }

    if (rotateInput) {
       
        rotateInput.addEventListener('input', (e) => {
            output.style.transform = `rotate(${e.target.value}deg)`;
            const value = e.target.value;
            const min = rotateInput.min;
            const max = rotateInput.max;
            rotate.textContent = value + '°';
            rotate.style.left = `calc(${(value - min) / (max - min) * 100}% + 0.5px)`;
            rotate.style.display = 'block';
          
        });
        rotateInput.addEventListener('blur', function() {
            rotate.style.display = 'none';
        });
    }

    if (curveInput) {
        
    
        curveInput.addEventListener('input', (e) => {
            var value = e.target.value;
            let curveValue = value;
            let totalLetters = output.length;
            let angle = curveValue / totalLetters; // Adjust curve

            for (let i = 0; i < totalLetters; i++) {
                output[i].style.transform = `rotate(${(i - totalLetters / 2) * angle}deg)`;
            }
    
            // Update angle display
            const min = curveInput.min;
            const max = curveInput.max;
            arc.textContent = value + '°';
            arc.style.left = `calc(${(value - min) / (max - min) * 100}% + 0.5px)`;
            arc.style.display = 'block';
        });
    
        // Hide the angle display when the input is blurred
        curveInput.addEventListener('blur', function() {
            arc.style.display = 'none';
        });
    }
}

function scrolling() {
    const fieldset = document.getElementById('tt-icon-fieldset');
    const checkbox = document.getElementById('tt-icon-active-input');

    // Set height, padding, and overflow dynamically
    fieldset.style.height = '100px';
    fieldset.style.overflowY = 'scroll';
    fieldset.style.paddingTop = '30px';

    // Ensure the checkbox is positioned correctly
    checkbox.parentElement.style.position = 'relative';

    // Dynamically adjust scroll behavior based on content
    if (fieldset.scrollHeight > fieldset.clientHeight) {
        fieldset.style.overflowY = 'scroll';
    } else {
        fieldset.style.overflowY = 'hidden';
    }
}

function iconpercentage() {
    const output = document.getElementById('output');
    const size = document.getElementById('icon_size');
    const iconoffsetX = document.getElementById('icon_offsetx');
    const iconoffsety = document.getElementById('icon_offsety');
    const iconrotate = document.getElementById('icon_rotate');
    const opacity = document.getElementById('opacity');
    // const IconSizeInput = document.getElementById('tt-icon-size-input');
    const IconoffsetxInput = document.getElementById('tt-icon-offset-x-input');
    const IconoffsetyInput = document.getElementById('tt-icon-offset-y-input');
    const IconrotateInput = document.getElementById('tt-icon-rotate-input');
    const Iconalpha = document.getElementById('tt-icon-alpha-input');
    const imgInOutput = output.querySelector("img"); 
    if (!output) return;

    // Function to create and show the tooltip only when the user interacts with the slider
    

    // if (IconSizeInput) {
        
    //     IconSizeInput.addEventListener('input', (e) => {
    //         imgInOutput.style.height = `${e.target.value}em`;
    //         const value = e.target.value;
    //         const min = IconSizeInput.min;
    //         const max = IconSizeInput.max;
    //         size.textContent = Math.round((value - 12) / 128 * 100) + '%';
    //         size.style.left = `calc(${(value - min) / (max - min) * 100}% + 0.96875px)`; 
    //         size.style.display = 'block';
            
    //     });
    //     IconSizeInput.addEventListener('blur', function() {
    //         size.style.display = 'none';
    //     });
    // }

    if (IconoffsetxInput) {
        
        IconoffsetxInput.addEventListener('input', (e) => {
            const offsetX  = e.target.value
            imgInOutput.style.transform = `translateX(${offsetX}em)`;
            const value = e.target.value;
            const min = IconoffsetxInput.min;
            const max = IconoffsetxInput.max;
            iconoffsetX.textContent = Math.round(value * 100) + '%';
            iconoffsetX.style.left = `calc(${(value - min) / (max - min) * 100}% + 4.25px)`;
            iconoffsetX.style.display = 'block'
            
        });
        IconoffsetxInput.addEventListener('blur', function() {
            iconoffsetX.style.display = 'none';
        });
        
    }

    if (IconoffsetyInput) {
        
        IconoffsetyInput.addEventListener('input', (e) => {
            const offsety = e.target.value;
            imgInOutput.style.transform = `translate(${imgInOutput.dataset.offsetX || 0}em, ${offsety}em)`;
            imgInOutput.dataset.offsetY = offsety; 
            const value = e.target.value;
            const min = IconoffsetyInput.min;
            const max = IconoffsetyInput.max;
            iconoffsety.textContent = Math.round(value * 100) + '%';
            iconoffsety.style.left = `calc(${(value - min) / (max - min) * 100}% + 4.25px)`;
            iconoffsety.style.display = 'block';
            
        });
        IconoffsetyInput.addEventListener('blur', function() {
            iconoffsety.style.display = 'none';
        });
    }

    if (IconrotateInput) {
        
        IconrotateInput.addEventListener('input', (e) => {
            imgInOutput.style.transform = `rotate(${e.target.value}deg)`;
            const value = e.target.value;
            const min = IconrotateInput.min;
            const max = IconrotateInput.max;
            iconrotate.textContent = value + '°';
            iconrotate.style.left = `calc(${(value - min) / (max - min) * 100}% + 0.5px)`;
            iconrotate.style.display = 'block';
            
        });
        IconrotateInput.addEventListener('blur', function() {
            iconrotate.style.display = 'none';
        });
    }

    if (Iconalpha) {
        
    
        Iconalpha.addEventListener('input', (e) => {
            const opacity = e.target.value;
            imgInOutput.style.opacity = opacity;
            const min = Iconalpha.min;
            const max = Iconalpha.max;
            opacity.textContent = Math.round(value * 100) + '%';
            opacity.style.left = `calc(${(value - min) / (max - min) * 100}% + 0.5px)`;
            opacity.style.display = 'block';
        });
    
        // Hide the angle display when the input is blurred
        Iconalpha.addEventListener('blur', function() {
            opacity.style.display = 'none';
        });
    
    }
}


function backgroundchangecolor() {
    
    const colorInput = document.getElementById('tt-background-fill-color-input');
    const backgroundDiv = document.querySelector('.tt-background-image');
    
    colorInput.addEventListener('input', (event) => {
        const color = event.target.value;
        backgroundDiv.style.backgroundColor = color;
    });
    
    const gradientPicker = document.querySelector('.tt-gradient-picker .grp-preview');
    
    document.querySelectorAll('.tt-pickr-gradient-button').forEach(button => {
        button.addEventListener('click', (event) => {
            const currentColor = button.style.getPropertyValue('--color');
            const colorInput = document.createElement('input');
            colorInput.type = 'color';
            colorInput.value = currentColor;
    
            colorInput.addEventListener('input', (e) => {
                button.style.setProperty('--color', e.target.value);
                updateGradient();
            });
    
            colorInput.click();
        });
    });
    
    function updateGradient() {
        const colors = Array.from(document.querySelectorAll('.tt-pickr-gradient-button'))
            .slice(0, 2) // Use only the first two colors
            .map(button => button.style.getPropertyValue('--color'));
    
        const gradient = `linear-gradient(to right, ${colors.join(', ')})`;
        backgroundDiv.style.backgroundImage = gradient;
        gradientPicker.style.backgroundImage = gradient;
    }
    
    document.querySelectorAll('.grp-handler').forEach(handler => {
        let isDragging = false;
    
        handler.addEventListener('mousedown', (e) => {
            isDragging = true;
            const startX = e.clientX;
    
            const onMouseMove = (moveEvent) => {
                if (!isDragging) return;
    
                const deltaX = moveEvent.clientX - startX;
                const parentWidth = gradientPicker.offsetWidth;
                const currentLeft = parseFloat(handler.style.left || '0%');
    
                let newLeft = ((deltaX / parentWidth) * 100) + currentLeft;
                newLeft = Math.max(0, Math.min(100, newLeft));
    
                handler.style.left = `${newLeft}%`;
                updateGradient();
            };
    
            const onMouseUp = () => {
                isDragging = false;
                document.removeEventListener('mousemove', onMouseMove);
                document.removeEventListener('mouseup', onMouseUp);
            };
    
            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
        });
    });
    
}

function changeicon() {
    const colorInput = document.getElementById('icon-color');
        const icon = document.getElementById('icon');

        colorInput.addEventListener('input', () => {
            const color = colorInput.value;
            console.log(color);
            icon.style.filter = `brightness(0) saturate(100%) invert(22%) sepia(74%) saturate(431%) hue-rotate(${getHue(color)}deg)`;
        });

        function getHue(hex) {
            console.log(hex);
            const rgb = hexToRgb(hex);
            return rgbToHue(rgb.r, rgb.g, rgb.b);
        }

        function hexToRgb(hex) {
            const bigint = parseInt(hex.slice(1), 16);
            return {
                r: (bigint >> 16) & 255,
                g: (bigint >> 8) & 255,
                b: bigint & 255
            };
        }

        function rgbToHue(r, g, b) {
            r /= 255;
            g /= 255;
            b /= 255;

            const max = Math.max(r, g, b), min = Math.min(r, g, b);
            let h = 0;

            if (max !== min) {
                if (max === r) {
                    h = (60 * ((g - b) / (max - min)) + 360) % 360;
                } else if (max === g) {
                    h = (60 * ((b - r) / (max - min)) + 120) % 360;
                } else if (max === b) {
                    h = (60 * ((r - g) / (max - min)) + 240) % 360;
                }
            }

            return Math.round(h);
        }
}

