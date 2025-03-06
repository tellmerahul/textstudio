
document.addEventListener('DOMContentLoaded', () => {
    const textArea = document.getElementById('tt-text-textarea');
    const output = document.getElementById('output');
    window.onload = function () {
        output.innerText = "MyTextStudio";
    }
 
    // Update Text Output
    textArea.addEventListener('input', () => {
        output.innerText = textArea.value;
    });
 
    // Font Size Control
    document.getElementById('tt-font-size-input').addEventListener('input', (e) => {
        output.style.fontSize = `${e.target.value}px`;
    });
 
    // Text Color Control
    document.getElementById('tt-fill-color-input').addEventListener('input', (e) => {
        output.style.color = e.target.value;
    });
 
    // Text Alignment Control
    document.querySelectorAll('.tt-align-list li').forEach((alignBtn) => {
        alignBtn.addEventListener('click', () => {
            const alignment = alignBtn.getAttribute('data-id');
            output.style.textAlign = alignment;
        });
    });
 
    // Font Weight (Bold)
    document.querySelector('[data-selected="bold"]').addEventListener('click', () => {
        output.style.fontWeight = output.style.fontWeight === 'bold' ? 'normal' : 'bold';
    });
 
    // Character Spacing Control
    document.getElementById('tt-letter-spacing-input').addEventListener('input', (e) => {
        output.style.letterSpacing = `${e.target.value}em`;
    });
 
    // Line Height Control
    document.getElementById('tt-line-height-input').addEventListener('input', (e) => {
        output.style.lineHeight = e.target.value;
    });
 
    // Rotation Control
    document.getElementById('tt-rotate-input').addEventListener('input', (e) => {
        output.style.transform = `rotate(${e.target.value}deg)`;
    });
 
    // Background and Gradient Options
    document.getElementById('tt-fill-gradient-active-input').addEventListener('change', (e) => {
        if (e.target.checked) {
            output.style.background = `linear-gradient(${document.getElementById('tt-fill-gradient-angle-input').value}deg, red, yellow)`;
            output.style.webkitBackgroundClip = "text";
            output.style.color = "transparent";
        } else {
            output.style.background = 'none';
            output.style.color = document.getElementById('tt-fill-color-input').value;
        }
    });
 
    // Gradient Angle Control
    document.getElementById('tt-fill-gradient-angle-input').addEventListener('input', (e) => {
        if (document.getElementById('tt-fill-gradient-active-input').checked) {
            output.style.background = `linear-gradient(${e.target.value}deg, red, yellow)`;
        }
    });
});
 
 
document.querySelectorAll('#tt-options-menu li').forEach(item => {
    item.addEventListener('click', () => {
        // Remove 'selected' class from all list items
        document.querySelectorAll('#tt-options-menu li').forEach(li => li.classList.remove('selected'));
 
        // Add 'selected' class to the clicked item
        item.classList.add('selected');
 
        // Get the data-name of the clicked item
        const selectedName = item.getAttribute('data-name');
 
        // // Hide all sections
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
        console.log(selectedSection);
        if(selectedName == "custom")
        {
            document.getElementById('tt-fill-fieldset').setAttribute('disabled', 'true');
            document.getElementById('tt-lettering-fieldset').setAttribute('disabled', 'true');
            document.getElementById('tt-depth-fieldset').setAttribute('disabled', 'true');
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
            document.getElementById('text_column').style.display = 'block';
        }
        else if(selectedName == "icon")
        {
            document.getElementById('icon-columns').style.display = 'block';
        }
        else if(selectedName == "background")
        {
            document.getElementById('background_column').style.display = 'block';
        }
        else if(selectedName == "animation")
        {
            document.getElementById('animation_column').style.display = 'block';
        }
        else if(selectedName == "save")
        {
            document.getElementById('save_column').style.display = 'block';
        }


        


        

    });
});
 
 
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
        const selectedDivs = document.querySelectorAll(`.tt-column[data-custom="${selectedFilter}"],.tt-column[data-custom="${selectedFilter}-lettering"],.tt-column[data-custom="${selectedFilter}-depth"],.tt-column[data-custom="${selectedFilter}-first"], .tt-column[data-custom="${selectedFilter}-second"],.tt-column[data-custom="${selectedFilter}-global"],.tt-column[data-custom="${selectedFilter}-belevel-inner"],.tt-column[data-custom="${selectedFilter}-inner"],.tt-column[data-custom="${selectedFilter}-outer"]`);
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
            document.getElementById('tt-shadow-inner-fieldset').setAttribute('disabled', 'true');
            document.getElementById('tt-shadow-inner2-fieldset').setAttribute('disabled', 'true');
            document.getElementById('tt-shadow-outer-fieldset').setAttribute('disabled', 'true');



        }
    });
});
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
        document.getElementById('tt-fill-fieldset').style.display = 'block';
        document.getElementById('tt-lettering-fieldset').style.display = 'block';
 
    });
});
document.querySelectorAll('#tt-options-menu li').forEach(item => {
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
});
document.getElementById('tt-background-fill-image-active-input').addEventListener('change', function () {
    const fieldset = document.getElementById('tt-background-image-fieldset');
 
    // Check if the checkbox is checked
    if (this.checked) {
        fieldset.style.display = 'block'; // Show the fieldset
    } else {
        fieldset.style.display = 'none'; // Hide the fieldset
    }
});
document.getElementById('tt-background-fill-gradient-active-input').addEventListener('change', function () {
    const fieldset = document.getElementById('tt-background-gradient-fieldset');
 
    // Check if the checkbox is checked
    if (this.checked) {
        fieldset.style.display = 'block'; // Show the fieldset
    } else {
        fieldset.style.display = 'none'; // Hide the fieldset
    }
});
document.getElementById('tt-outline-first-fill-gradient-active-input').addEventListener('change', function () {
    const fieldset = document.getElementById('tt-outline-first-fill-gradient-fieldset');
 
    // Check if the checkbox is checked
    if (this.checked) {
        fieldset.style.display = 'block'; // Show the fieldset
    } else {
        fieldset.style.display = 'none'; // Hide the fieldset
    }
});
document.getElementById('tt-fill-gradient-active-input').addEventListener('change', function () {
    const fieldset = document.getElementById('tt-fill-gradient-fieldset');
 
    // Check if the checkbox is checked
    if (this.checked) {
        fieldset.style.display = 'block'; // Show the fieldset
    } else {
        fieldset.style.display = 'none'; // Hide the fieldset
    }
});
document.getElementById('tt-fill-texture-active-input').addEventListener('change', function () {
    const fieldset = document.getElementById('tt-fill-texture-fieldset');
 
    // Check if the checkbox is checked
    if (this.checked) {
        fieldset.style.display = 'block'; // Show the fieldset
    } else {
        fieldset.style.display = 'none'; // Hide the fieldset
    }
    const outputDiv = document.getElementById("output");
    outputDiv.style.backgroundImage = "none";
});
document.getElementById('tt-lettering-boggle-active-input').addEventListener('change', function () {
    const fieldset = document.getElementById('tt-lettering-boggle-fieldset');
 
    // Check if the checkbox is checked
    if (this.checked) {
        fieldset.style.display = 'block'; // Show the fieldset
    } else {
        fieldset.style.display = 'none'; // Hide the fieldset
    }
});
document.getElementById('tt-lettering-shadow-active-input').addEventListener('change', function () {
    const fieldset = document.getElementById('tt-lettering-shadow-fieldset');
 
    // Check if the checkbox is checked
    if (this.checked) {
        fieldset.style.display = 'block'; // Show the fieldset
    } else {
        fieldset.style.display = 'none'; // Hide the fieldset
    }
});
document.getElementById('tt-depth-fill-gradient-active-input').addEventListener('change', function () {
    const fieldset = document.getElementById('tt-depth-fill-gradient-fieldset');
 
    // Check if the checkbox is checked
    if (this.checked) {
        fieldset.style.display = 'block'; // Show the fieldset
    } else {
        fieldset.style.display = 'none'; // Hide the fieldset
    }
});
document.getElementById('tt-depth-fill-texture-active-input').addEventListener('change', function () {
    const fieldset = document.getElementById('tt-depth-fill-texture-fieldset');
 
    // Check if the checkbox is checked
    if (this.checked) {
        fieldset.style.display = 'block'; // Show the fieldset
    } else {
        fieldset.style.display = 'none'; // Hide the fieldset
    }
 
 
    const outputDiv = document.getElementById("output");
    outputDiv.style.backgroundImage = "none";
});
 
document.getElementById('tt-fill-active-input').addEventListener('change', function () {
    const fillDiv = document.getElementById('tt-fill-fieldset');
 
    // Check if the checkbox is checked
    if (this.checked) {
        fillDiv.removeAttribute('disabled');
         // Enable the div (if needed)
    } else {
        fillDiv.setAttribute('disabled', 'true'); // Disable the div (if needed)
    }
});
document.getElementById('tt-lettering-active-input').addEventListener('change', function () {
    const fillDiv = document.getElementById('tt-lettering-fieldset');
 
    // Check if the checkbox is checked
    if (this.checked) {
        fillDiv.removeAttribute('disabled'); // Enable the div (if needed)
    } else {
        fillDiv.setAttribute('disabled', 'true'); // Disable the div (if needed)
    }
});
document.getElementById('tt-depth-active-input').addEventListener('change', function () {
    const fillDiv = document.getElementById('tt-depth-fieldset');
 
    // Check if the checkbox is checked
    if (this.checked) {
        fillDiv.removeAttribute('disabled'); // Enable the div (if needed)
    } else {
        fillDiv.setAttribute('disabled', 'true'); // Disable the div (if needed)
    }
});
document.querySelectorAll("li").forEach((item) => {
    item.addEventListener("click", function () {
        const imageUrl = this.querySelector("div").style.backgroundImage;
        const imageUrllarge = imageUrl.replace('/preview/small', '/preview/large');
        document.querySelector(".tt-background-image").style.backgroundImage = imageUrllarge;
        document.getElementById("tt-background-fill-image-preview-img").style.backgroundImage = imageUrl;
    });
});
document.getElementById("tt-background-fill-image-preview-delete-icon").addEventListener("click", function () {
    // Clear the img src and the background image
    document.getElementById("tt-background-fill-image-preview-img").style.backgroundImage = "";
    document.querySelector(".tt-background-image").style.backgroundImage = "none";
});
document.querySelectorAll("#tt-icon-list li").forEach((item) => {
    item.addEventListener("click", function () {
        const imageSrc = this.querySelector("img").src;
        const outputDiv = document.getElementById("output");
 
 
        // Clear any previous image in #output
        outputDiv.innerHTML = "MyTextStudio";
 
        // Create a new <img> element and set its src to the selected image's src
        const selectedImg = document.createElement("img");
        selectedImg.src = imageSrc;
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
 
document.getElementById('tt-icon-active-input').addEventListener('change', function () {
    const fillDiv = document.getElementById('tt-icon-fieldset');
 
    // Check if the checkbox is checked
    if (this.checked) {
        fillDiv.removeAttribute('disabled'); // Enable the div (if needed)
    } else {
        fillDiv.setAttribute('disabled', 'true'); // Disable the div (if needed)
    }
});
 
 
document.getElementById("tt-icon-size-input").addEventListener("input", function () {
    const size = this.value; // Get the current value of the slider
    const outputDiv = document.getElementById("output");
    const imgInOutput = outputDiv.querySelector("img"); // Select the <img> in #output
 
    // If an image exists in #output, adjust its height
    if (imgInOutput) {
        imgInOutput.style.height = `${size}em`; // Change the height based on slider value
    }
});
 
document.getElementById("tt-icon-position-input").addEventListener("change", function () {
    const position = this.value; // Get the selected position value
    const outputDiv = document.getElementById("output");
    const imgInOutput = outputDiv.querySelector("img"); // Select the <img> in #output
 
    // If an image exists in #output, adjust its position
    if (imgInOutput) {
        // Reset float and margin styles before applying new position
        imgInOutput.style.float = "none"; // Reset float
        imgInOutput.style.margin = "0"; // Reset margin
        outputDiv.innerHTML = "MyTextStudio"; // Clear the output text to reposition
 
        // Determine position based on selection
        switch (position) {
            case "left":
                imgInOutput.style.float = "left"; // Float to the left
                imgInOutput.style.marginRight = "10px"; // Add space between the icon and text
                break;
            case "right":
                imgInOutput.style.float = "right"; // Float to the right
                imgInOutput.style.marginLeft = "10px"; // Add space between the icon and text
                break;
            case "top":
                outputDiv.prepend(imgInOutput); // Place the image above text
                imgInOutput.style.marginBottom = "10px"; // Add space below the image
                break;
            case "bottom":
                outputDiv.appendChild(imgInOutput); // Place the image below the text
                imgInOutput.style.marginTop = "10px"; // Add space above the image
                break;
            case "center":
                imgInOutput.style.display = "block"; // Ensure it's block for centering
                imgInOutput.style.margin = "0 auto"; // Center the image
                break;
        }
 
        // Reinsert the text to keep the structure intact
        outputDiv.appendChild(imgInOutput);
    }
});
 
document.getElementById("tt-icon-offset-x-input").addEventListener("input", function () {
    const offsetX = this.value;
    // alert(offsetX);
    const outputDiv = document.getElementById("output");
    const imgInOutput = outputDiv.querySelector("img");
    console.log(outputDiv)// Get the current value of the slider
    // const imgInOutput = document.querySelector("img"); // Select the <img> in #output
    console.log(imgInOutput);
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
 
const compositeSelect = document.getElementById("tt-icon-composite-input");
 
compositeSelect.addEventListener("change", function () {
     
    const selectedOption = this.value;  // Get the selected option value (e.g., source-over, multiply, etc.)
 
    const outputDiv = document.getElementById("output");  // Get the output div
    const imgInOutput = outputDiv.querySelector("img");  // Get the image inside the output div
 
    if (imgInOutput) {
        // Apply the selected composite operation to the image
        imgInOutput.style.mixBlendMode = selectedOption;  // Set the CSS mix-blend-mode property
    }
});
 
 
 
 
// Get all the list items
document.addEventListener('DOMContentLoaded', function () {
    // Get the duration and pause select elements
    const durationSelect = document.getElementById('tt-animation-duration-input');
    const pauseSelect = document.getElementById('tt-animation-pause-input');
 
    let duration = durationSelect.value; // default duration in milliseconds
    let pause = pauseSelect.value; // default pause in milliseconds
 
    // Listen for changes in the duration input
    durationSelect.addEventListener('change', function () {
        duration = this.value;
    });
 
    // Listen for changes in the pause input
    pauseSelect.addEventListener('change', function () {
        pause = this.value;
    });
 
    document.querySelectorAll('ul li').forEach(function (item) {
        item.addEventListener('click', function () {
            var animationId = this.getAttribute('data-animation-id');
            var textElement = this.querySelector('.tt-name');
 
            // Remove any previous animation classes
            textElement.classList.remove('animate-beat', 'animate-blink'); // Add other animation classes as needed
 
            // Set the animation duration and pause dynamically based on the selected options
            let animationStyle = `
        animation-duration: ${duration}ms;
        animation-delay: ${pause}ms;
    `;
 
            // Add the appropriate animation class based on the animation id
            if (animationId === 'beat') {
                textElement.classList.add('animate-beat');
            } else if (animationId === 'blink') {
                textElement.classList.add('animate-blink');
            }
 
            // Apply the style to dynamically control the duration and pause
            textElement.style.cssText = animationStyle;
        });
    });
});
const gradientCheckbox = document.getElementById('tt-fill-gradient-active-input');
const colorsInput = document.getElementById('tt-fill-gradient-colors-input');
const angleInput = document.getElementById('tt-fill-gradient-angle-input');
const outputDiv = document.getElementById('output');
 
// Function to update gradient background
function updateGradient() {
    if (gradientCheckbox.checked) {
        const colors = colorsInput.value;
        const angle = angleInput.value;
        outputDiv.style.background = `linear-gradient(${angle}deg, ${colors})`;
    } else {
        outputDiv.style.background = '';
    }
}
 
// Event listeners
gradientCheckbox.addEventListener('change', updateGradient);
colorsInput.addEventListener('input', updateGradient);
angleInput.addEventListener('input', updateGradient);
 
 
 
document.getElementById("tt-fill-alpha-input").addEventListener("input", function () {
    const opacity = this.value; // Get the current opacity value from the slider
 
    const outputDiv = document.getElementById("output");
    // const imgInOutput = outputDiv.querySelector("img"); // Select the <img> inside #output
 
    if (outputDiv) {
        // Apply opacity to the image using CSS opacity property
        outputDiv.style.opacity = opacity;
    }
});
 
document.getElementById("tt-fill-texture-alpha-input").addEventListener("input", function () {
    const opacity = this.value; // Get the current opacity value from the slider
 
    const outputDiv = document.getElementById("output");
    // const imgInOutput = outputDiv.querySelector("img"); // Select the <img> inside #output
 
    if (outputDiv) {
        // Apply opacity to the image using CSS opacity property
        outputDiv.style.opacity = opacity;
    }
});
 
document.getElementById('tt-fill-texture-import-input').addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = function (e) {
            // Set the background image in the #output div
            document.getElementById('output').style.backgroundImage = `url(${e.target.result})`;
            document.getElementById('output').style.backgroundSize = 'cover'; // Adjust as needed
            document.getElementById('output').style.webkitBackgroundClip = 'text';
            document.getElementById('output').style.backgroundClip = 'text';
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
 
document.getElementById("tt-fill-texture-blendmode-input").addEventListener("change", function () {
    // Get the selected blend mode value
    const selectedBlendMode = this.value;
 
    // Apply the blend mode to the #output div
    const outputDiv = document.getElementById("output");
    outputDiv.style.backgroundBlendMode = selectedBlendMode;  // Set blend mode
 
    // Optionally: If thereâ€™s an image background already set, ensure it is displayed with the blend mode
    if (outputDiv.style.backgroundImage) {
        outputDiv.style.backgroundSize = 'cover';  // Adjust as needed
        outputDiv.style.webkitBackgroundClip = 'text'; // Apply text clipping for webkit browsers
        outputDiv.style.backgroundClip = 'text'; // Apply text clipping for other browsers
        outputDiv.style.color = 'transparent'; // Make text color transparent to show the background
    }
});
 
 
// Get the elements
 
 
// Function to apply the boggle effect
function applyBoggleEffect() {
 
    // Get the angle and amplitude values
 
}
// Store the original font size of the output div
 
 
document.getElementById("tt-lettering-boggle-angle-input").addEventListener("input", function () {
const outputDiv = document.getElementById("output");
const originalFontSize = window.getComputedStyle(outputDiv).fontSize;
const angle = parseInt(this.value, 10); // Get the angle from the slider input
 
// Split the text into individual letters if not already wrapped
const text = outputDiv.innerText;
outputDiv.innerHTML = ''; // Clear current content
text.split('').forEach((char, index) => {
const span = document.createElement('span');
span.innerText = char;
span.style.display = 'inline-block';
 
// Set the original font size for each letter
span.style.fontSize = originalFontSize;
 
// Apply rotation to each letter individually from 0 to 180 degrees
const rotation = angle; // Rotate by the exact slider angle, from 0 to 180 degrees
 
// Apply the rotation transform to each letter
span.style.transform = `rotate(${rotation}deg)`;
 
// Append the styled letter to the output div
outputDiv.appendChild(span);
});
});
 
 
 
// Function to change the font family of the #output div
function changeFontFamily(fontName) {
// Set the font family of #output to the selected font
document.getElementById('output').style.fontFamily = `"${fontName}", sans-serif`;
}
 
 
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
                console.log(`No match for: ${key}`);
                output.style.fontFamily = `"${fontName}"`;
            }
        });
    });
});

 
 
 
 
// Add an event listener for the range input
document.getElementById('tt-lettering-boggle-amplitude-input').addEventListener('input', (event) => {
const outputDiv = document.getElementById('output');
const value = event.target.value; // Get the current value of the slider
const text = outputDiv.textContent.trim();
const fontSize = parseFloat(window.getComputedStyle(outputDiv).fontSize);
 
 
// Split text into individual spans
outputDiv.innerHTML = text
.split("")
.map((letter, index) => `<span style="display: inline-block; transition: transform 0.1s;">${letter}</span>`)
.join("");
 
const letters = outputDiv.querySelectorAll("span");
const amplitude = value * 20; // Max up/down shift of 20px
 
// Apply transformation to each letter
letters.forEach((letter, index) => {
    letter.style.fontSize = `${fontSize}px`;
 
    const direction = index % 2 === 0 ? -1 : 1; // Alternate up and down
    const translateY = direction * amplitude;
    // console.log(translateY); // Calculate position shift
    letter.style.transform = `translateY(${translateY}px)`;
     
});
});
 
// Get the target element where changes will be applied
// const outputDiv = document.getElementById('output'); // Replace 'output' with the actual ID of your target element
 
// Helper function to update text shadow dynamically
function updateTextShadow() {
const size = parseFloat(document.getElementById('tt-lettering-shadow-size-input').value);
const opacity = parseFloat(document.getElementById('tt-lettering-shadow-fill-alpha-input').value);
const distance = parseFloat(document.getElementById('tt-lettering-shadow-distance-input').value);
const angle = parseFloat(document.getElementById('tt-lettering-shadow-angle-input').value);
const color = document.getElementById('tt-lettering-shadow-fill-color-input').value;
 
// Calculate shadow offset using angle and distance
const offsetX = Math.cos((angle * Math.PI) / 180) * distance;
const offsetY = Math.sin((angle * Math.PI) / 180) * distance;
 
// Apply text shadow
outputDiv.style.textShadow = `${offsetX}em ${offsetY}em ${size}em rgba(${hexToRgb(color)}, ${opacity})`;
}
 
// Helper function to convert hex color to RGB
function hexToRgb(hex) {
const bigint = parseInt(hex.slice(1), 16);
const r = (bigint >> 16) & 255;
const g = (bigint >> 8) & 255;
const b = bigint & 255;
return `${r}, ${g}, ${b}`;
}
 
// Event listeners for all input elements
document.getElementById('tt-lettering-shadow-size-input').addEventListener('input', updateTextShadow);
document.getElementById('tt-lettering-shadow-fill-alpha-input').addEventListener('input', updateTextShadow);
document.getElementById('tt-lettering-shadow-distance-input').addEventListener('input', updateTextShadow);
document.getElementById('tt-lettering-shadow-angle-input').addEventListener('input', updateTextShadow);
document.getElementById('tt-lettering-shadow-fill-color-input').addEventListener('input', updateTextShadow);
 
// Event listeners for reverse overlap checkboxes
document.getElementById('tt-lettering-reverse-overlap-letters-input').addEventListener('change', (event) => {
const isChecked = event.target.checked;
console.log(`Reverse overlap of letters: ${isChecked}`);
// Update overlap logic in your application if needed
});
 
document.getElementById('tt-lettering-reverse-overlap-lines-input').addEventListener('change', (event) => {
const isChecked = event.target.checked;
console.log(`Reverse overlap of lines: ${isChecked}`);
// Update overlap logic in your application if needed
});
 
// Event listener for blend mode
document.getElementById('tt-lettering-blendmode-input').addEventListener('change', (event) => {
const blendMode = event.target.value;
console.log(`Blend mode updated: ${blendMode}`);
outputDiv.style.mixBlendMode = blendMode; // Apply blend mode to the target element
});
 
// Initial setup to apply default styles
updateTextShadow();
 
 
document.getElementById("tt-depth-length-input").addEventListener("input", function () {
const length = this.value * 10; // Scale the length
const outputDiv = document.getElementById("output");
 
// Generate 3D projection with multiple layers
let textShadow = '';
for (let i = 1; i <= 10; i++) {
const opacity = (1 - i / 10).toFixed(2); // Gradual fade
textShadow += `${i * length}px ${i * length}px 0 rgba(0, 0, 0, ${opacity}), `;
}
 
// Remove trailing comma and apply the shadow
outputDiv.style.textShadow = textShadow.slice(0, -2);
});
 
 
const angleSlider = document.getElementById('tt-depth-angle-input');
const lengthSlider = document.getElementById('tt-depth-length-input');
const output = document.getElementById('output');
 
// Function to update shadow based on angle and length
function updateShadow() {
    const angle = parseInt(angleSlider.value, 10); // Angle in degrees
    const length = parseFloat(lengthSlider.value); // Length as multiplier
 
    // Calculate x and y offsets based on angle and length
    const radian = angle * (Math.PI / 180);
    const offsetX = (length * 15) * Math.cos(radian); // Scale factor of 15
    const offsetY = (length * 15) * Math.sin(radian);
 
    // Apply shadow to output
    output.style.textShadow = `
        ${offsetX}px ${offsetY}px 5px rgba(0, 0, 0, 0.7),
        ${offsetX * 2}px ${offsetY * 2}px 10px rgba(0, 0, 0, 0.5),
        ${offsetX * 3}px ${offsetY * 3}px 15px rgba(0, 0, 0, 0.3)
    `;
}
 
// Attach event listeners to sliders
angleSlider.addEventListener('input', updateShadow);
lengthSlider.addEventListener('input', updateShadow);
 
// Initialize shadow on page load
updateShadow();
 
 
 
 
 
document.getElementById('tt-depth-fill-color-input').addEventListener('input', (event) => {
 
 
const outputDiv = document.getElementById('output');
const selectedColor = event.target.value;
outputDiv.style.textShadow = `
${selectedColor} 8.85px 0px 5px,
${selectedColor} 17.7px 0px 10px,
${selectedColor} 26.55px 0px 15px
`;
});
 
 
document.getElementById('tt-depth-fill-texture-import-input').addEventListener('change', function(event) {
const fileInput = event.target;
const file = fileInput.files[0];
 
if (file && file.type.startsWith('image/')) {
const reader = new FileReader();
 
reader.onload = function(e) {
    // Find the img element and update its src attribute
    document.getElementById('output').style.textShadow = e.target.result;
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
 
 
 
 
document.getElementById('tt-outline-first-width-input').addEventListener('input', function () {
const text =  window.getComputedStyle(outputDiv).value// Text content
const outputDiv = document.getElementById('output');
 
// Get the font size from the output div
const fontSize = window.getComputedStyle(outputDiv).fontSize;
 
// Split the text into individual letters, wrap them in spans, and set the outputDiv innerHTML
outputDiv.innerHTML = text
.split('')  // Split text into individual characters
.map(char => `<span class="letter">${char}</span>`)  // Wrap each character in a span
.join('');  // Join back into a single string
 
const borderWidth = this.value;  // Get the value of the range slider
const letters = document.querySelectorAll('.letter');  // Get all the letter spans
 
// Update the font size and border width of each letter based on the slider value
letters.forEach(letter => {
letter.style.fontSize = fontSize; // Set the font size from the output div
letter.style.borderWidth = `${borderWidth}px`;  // Apply border width from slider
letter.style.borderStyle = 'solid';  // Ensure a solid border
});
});
 
 
// Update border color dynamically
document.getElementById('tt-outline-first-fill-color-input').addEventListener('input', function () {
const outputDiv = document.getElementById('output');
const borderColor = this.value; // Get the selected color value
outputDiv.style.borderColor = borderColor; // Update the border color
});
 
 
document.getElementById("tt-background-fill-image-import-input").addEventListener("change", function (event) {
    const file = event.target.files[0];
 
    if (file) {
        const reader = new FileReader();
 
        // When the file is loaded, set it as the background image
        reader.onload = function (e) {
            const imageUrl = e.target.result; // Base64 image URL
            const backgroundDiv = document.querySelector(".tt-background-image");
            backgroundDiv.style.backgroundImage = `url('${imageUrl}')`;
            const previewDiv = document.getElementById("tt-background-fill-image-preview-img");
            previewDiv.style.backgroundImage = `url('${imageUrl}')`;
 
        };
 
        reader.readAsDataURL(file); // Read file as data URL
    }
});
 
// document.querySelector('[data-animation-id="blink"]').addEventListener('click', function() {
//     const outputDiv = document.getElementById('output');
//     outputDiv.classList.add('ld', 'ld-blink');
// });
// Select all list items with data-animation-id
const animationItems = document.querySelectorAll('#tt-animation-list li[data-animation-id]');
 
// Add click event listeners to each animation list item
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
// Select the dropdowns
const durationInput = document.getElementById('tt-animation-duration-input');
const pauseInput = document.getElementById('tt-animation-pause-input');
 
// Function to apply the selected animation options
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
 
// Add event listeners to the dropdowns
durationInput.addEventListener('change', applyAnimationSettings);
pauseInput.addEventListener('change', applyAnimationSettings);
 
// Apply settings initially
applyAnimationSettings();
 
 
document.getElementById('tt-animation-active-input').addEventListener('change', function () {
const animationList = document.getElementById('tt-animation-fieldset');
 
if (this.checked) {
animationList.classList.remove('disabled'); // Enable
} else {
animationList.classList.add('disabled'); // Disable
}
});
 
 
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





// Function to update text-shadow dynamically
document.getElementById('tt-outline-first-width-input').addEventListener('input', function () {
    const value = parseFloat(this.value); // Get the slider value
    const outputDiv = document.getElementById('output'); 
    const color = document.getElementById('tt-outline-first-fill-color-input').value;// Get the output div

    outputDiv.style.webkitTextStrokeWidth = `${value}px`;
    outputDiv.style.webkitTextStrokeColor = color;
    outputDiv.style.color = "transparent"; 
});

document.getElementById('tt-outline-first-fill-color-input').addEventListener('input', function () {
    const value = this.value; // Get the slider value
    console.log(value);
    const outputDiv = document.getElementById('output'); 
    const width = document.getElementById('tt-outline-first-width-input').value;// Get the output div

    outputDiv.style.webkitTextStrokeWidth = `${width}px`;
    outputDiv.style.webkitTextStrokeColor = value;
    outputDiv.style.color = "transparent"; 
});

document.getElementById('tt-outline-first-dash-input').addEventListener('input', function () {
    
    const value = parseFloat(this.value); // Slider value
    const outputDiv = document.getElementById('output');
    const color = document.getElementById('tt-outline-first-fill-color-input').value; // Target text element

    // Generate a dotted effect by creating a repeating text-shadow pattern
    outputDiv.style.textShadow = `
        ${value}px 0 ${color},
        -${value}px 0 ${color},
        0 ${value}px ${color},
        0 -${value}px ${color},
        ${value / 2}px ${value / 2}px ${color},
        -${value / 2}px -${value / 2}px ${color},
        ${value / 2}px -${value / 2}px ${color},
        -${value / 2}px ${value / 2}px ${color}
    `;

    outputDiv.style.color = "transparent";
});



document.getElementById('tt-outline-first-fill-alpha-input').addEventListener('input', function () {
    const opacity = parseFloat(this.value); // Get opacity value from slider
    const outputDiv = document.getElementById('output'); // Target text element
    const color = document.getElementById('tt-outline-first-fill-color-input').value;
    
    // Set the RGBA color for the outline (e.g., black with variable opacity)
    outputDiv.style.webkitTextStrokeColor = `${color}, ${opacity}`;
});



// Get the file input and target output div
const fileInput = document.getElementById('tt-outline-first-fill-texture-import-input');


document.getElementById('tt-outline-first-fill-texture-import-input').addEventListener('change', function(event) {
    const file = event.target.files[0]; // Get the selected file
    const outputDiv = document.getElementById('output');
    
    if (file) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            const imageUrl = e.target.result; // Get the Base64 URL of the image

            console.log(imageUrl); // Log the Base64 URL for debugging
            
            // Apply the image as a texture to the outline using text-shadow
            outputDiv.style.textShadow = `0 0 10px ${imageUrl}, 0 0 20px ${imageUrl}`;
            outputDiv.style.color = "transparent"; // Make the text transparent to show only the outline

            // Set the texture preview image src to show the uploaded image in the preview
            const previewImage = document.querySelector('.tt-texture-preview-image');
            if (previewImage) {
                previewImage.src = imageUrl; // Show the image in the preview
            }
        };

        // Read the image as a Base64 data URL
        reader.readAsDataURL(file);
    }
});



// Get the range input and the output div


// Add an event listener for input changes on the range slider
// document.getElementById('tt-outline-second-width-input').addEventListener('input', function () {
//     const value = parseFloat(this.value); // Get the range slider value
//     const outputDiv = document.getElementById('output');
//     const color = document.getElementById('tt-outline-second-fill-color-input').value;// Get the output div
//     outputDiv.style.webkitTextStrokeWidth = `${value}px`;
//     outputDiv.style.webkitTextStrokeColor = color;
//     outputDiv.style.color = "transparent";  // First outline (White for contrast)
// });

document.getElementById('tt-outline-second-width-input').addEventListener('input', function () {
    
    const value = parseFloat(this.value); // Slider value
    const outputDiv = document.getElementById('output');
    const color = document.getElementById('tt-outline-second-fill-color-input').value; // Target text element

    // Generate a dotted effect by creating a repeating text-shadow pattern
    const dotSize = value * 10; // Scale dot size based on slider value
    const shadow = [];
    console.log(dotSize);
    // Generate text-shadow dots with spacing
    for (let i = -10; i <= 10; i++) {
        for (let j = -10; j <= 10; j++) {
            if (i % 2 === 0 && j % 2 === 0) { // Control dot positions
                shadow.push(`${i * dotSize}px ${j * dotSize}px ${color}`);
            }
        }
    }

    // Apply the dotted text-shadow effect
    outputDiv.style.textShadow = shadow.join(", ");
});
document.getElementById('tt-outline-second-fill-color-input').addEventListener('input', function () {
    const value = this.value; // Get the slider value
    console.log(value);
    const outputDiv = document.getElementById('output'); 
    const width = document.getElementById('tt-outline-second-width-input').value;// Get the output div

    outputDiv.style.webkitTextStrokeWidth = `${width}px`;
    outputDiv.style.webkitTextStrokeColor = value;
    outputDiv.style.color = "transparent"; 
});

document.getElementById('tt-outline-first-active-input').addEventListener('change', function () {
    const fillDiv = document.getElementById('tt-outline-first-fieldset');
    const fieldset1 = document.getElementById('tt-outline-first-fill-gradient-fieldset');
    const fieldset2 = document.getElementById('tt-outline-first-fill-texture-fieldset');
 
    // Check if the checkbox is checked
    if (this.checked) {
        fillDiv.removeAttribute('disabled');
        fieldset1.style.display = 'none'; 
        fieldset2.style.display = 'none'; 
         // Enable the div (if needed)
    } else {
        fillDiv.setAttribute('disabled', 'true'); // Disable the div (if needed)
    }
});


document.getElementById('tt-outline-first-fill-texture-active-input').addEventListener('change', function () {
    const fieldset = document.getElementById('tt-outline-first-fill-texture-fieldset');
 
    // Check if the checkbox is checked
    if (this.checked) {
        fieldset.style.display = 'block'; // Show the fieldset
    } else {
        fieldset.style.display = 'none'; // Hide the fieldset
    }
});
document.getElementById('tt-outline-first-fill-gradient-active-input').addEventListener('change', function () {
    const fieldset = document.getElementById('tt-outline-first-fill-gradient-fieldset');
 
    // Check if the checkbox is checked
    if (this.checked) {
        fieldset.style.display = 'block'; // Show the fieldset
    } else {
        fieldset.style.display = 'none'; // Hide the fieldset
    }
});

document.getElementById('tt-outline-second-active-input').addEventListener('change', function () {
    const fillDiv = document.getElementById('tt-outline-second-fieldset');
    const fieldset1 = document.getElementById('tt-outline-second-fill-gradient-fieldset');
    const fieldset2 = document.getElementById('tt-outline-second-fill-texture-fieldset');
 
    // Check if the checkbox is checked
    if (this.checked) {
        fillDiv.removeAttribute('disabled');
        fieldset1.style.display = 'none'; 
        fieldset2.style.display = 'none'; 
         // Enable the div (if needed)
    } else {
        fillDiv.setAttribute('disabled', 'true'); // Disable the div (if needed)
    }
});


document.getElementById('tt-outline-second-fill-gradient-active-input').addEventListener('change', function () {
    const fieldset = document.getElementById('tt-outline-second-fill-gradient-fieldset');
 
    // Check if the checkbox is checked
    if (this.checked) {
        fieldset.style.display = 'block'; // Show the fieldset
    } else {
        fieldset.style.display = 'none'; // Hide the fieldset
    }
});
document.getElementById('tt-outline-second-fill-texture-active-input').addEventListener('change', function () {
    const fieldset = document.getElementById('tt-outline-second-fill-texture-fieldset');
 
    // Check if the checkbox is checked
    if (this.checked) {
        fieldset.style.display = 'block'; // Show the fieldset
    } else {
        fieldset.style.display = 'none'; // Hide the fieldset
    }
});


