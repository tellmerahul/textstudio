document.addEventListener('DOMContentLoaded', () => {
    const output = document.getElementById('output');
    output.style.textShadow = 'none'; // Completely disable text-shadow
});




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
 
 
});
 
 
document.querySelectorAll('#tt-options-menu li').forEach(item => {
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
        console.log()
        if(selectedName == "custom")
        {
            document.getElementById('tt-fill-fieldset').setAttribute('disabled', 'true');
            document.getElementById('tt-lettering-fieldset').setAttribute('disabled', 'true');
            document.getElementById('tt-depth-fieldset').setAttribute('disabled', 'true');
            document.getElementById('custom_column1').style.display = 'block';
            document.getElementById('custom_column2').style.display = 'block';
            document.getElementById('custom_column3').style.display = 'block';

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
            console.log("hello");
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
            document.getElementById('tt-shadow-inner2-fieldset').style.display = 'none';
            document.getElementById('tt-shadow-outer2-fieldset').style.display = 'none';

                   




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
    // outputDiv.style.backgroundImage = "none";
});
document.getElementById('tt-lettering-boggle-active-input').addEventListener('change', function () {
    const fieldset = document.getElementById('tt-lettering-boggle-fieldset');
    const outputDiv = document.getElementById('output');
    const letters = outputDiv.querySelectorAll('span');
    
//  console.log(letters.style.transform);
    // Check if the checkbox is checked
    if (this.checked) {
        fieldset.style.display = 'block'; // Show the fieldset
    } else {
        fieldset.style.display = 'none'; // Hide the fieldset
        // letters.style.transform: ro
        letters.forEach(letter => {
            letter.style.transform = `rotate(0deg)`;
            letter.style.transform = `translateY(0px)`;
          });
          

    }
});
document.getElementById('tt-lettering-shadow-active-input').addEventListener('change', function () {
    const fieldset = document.getElementById('tt-lettering-shadow-fieldset');
    const outputDiv = document.getElementById('output');
    
 
    // Check if the checkbox is checked
    if (this.checked) {
        fieldset.style.display = 'block'; // Show the fieldset
    } else {
        fieldset.style.display = 'none'; // Hide the fieldset
        outputDiv.style.textShadow = 'none';
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
    const outputDiv = document.getElementById('output');

 
    // Check if the checkbox is checked
    if (this.checked) {
        fillDiv.removeAttribute('disabled');
         // Enable the div (if needed)
    } else {
        fillDiv.setAttribute('disabled', 'true'); 
        outputDiv.style.color="black";
        outputDiv.style.backgroundImage="";

        // Disable the div (if needed)
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
        content = outputDiv.innerText;
 
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
 

 
document.getElementById("tt-icon-composite-input").addEventListener("change", function () {
     
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
const opacityDiv = document.getElementById("tt-fill-alpha-input");
 
// Function to update gradient background
function updateGradient() {
    
    if (gradientCheckbox.checked) {
        outputDiv.style.setProperty('text-shadow', 'none', 'important');
        const groupPreview = document.querySelector(".grp-preview");
        const currentBackgroundImage = getComputedStyle(groupPreview).backgroundImage;
        const colors = colorsInput.value;
        const angle = angleInput.value;
        const newGradient = currentBackgroundImage.replace(/linear-gradient\([^,]+,/, `linear-gradient(${angle}deg,`);
        console.log(newGradient);
        // outputDiv.style.setProperty('text-shadow', 'none', 'important');
        outputDiv.style.backgroundImage = newGradient;
        outputDiv.style.webkitBackgroundClip = 'text'; // Clip the background to the text
        outputDiv.style.webkitTextFillColor = 'transparent';
        outputDiv.style.textShadow = 'unset';
    } else {
          outputDiv.style.backgroundImage = '';
        outputDiv.style.webkitBackgroundClip = '';
        outputDiv.style.webkitTextFillColor = '';
    }
    
    
}
 
// Event listeners
gradientCheckbox.addEventListener('change', updateGradient);
colorsInput.addEventListener('input', updateGradient);
// angleInput.addEventListener('input', updateGradient);
opacityDiv.addEventListener('input',updateGradient);
 

 
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
  
    // Retrieve computed styles for the output div
    const computedStyle = window.getComputedStyle(outputDiv);
    const originalFontSize = parseFloat(computedStyle.fontSize); // Convert to number
    const originalBackgroundImage = computedStyle.backgroundImage;
    const originalBackgroundSize = computedStyle.backgroundSize;
    const originalBackgroundPosition = computedStyle.backgroundPosition;
  
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
      span.style.webkitTextFillColor = 'transparent';
  
      // Apply rotation and vertical translation
      const translateY = (index % 2 === 0 ? -1 : 1) * amplitude * originalFontSize * 0.2; // Scale translation
      span.style.transform = `translateY(${translateY}px) rotate(${angle}deg)`;
  
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
const computedStyle = window.getComputedStyle(outputDiv);
const originalBackgroundImage = computedStyle.backgroundImage;
const originalBackgroundSize = computedStyle.backgroundSize;
const originalBackgroundPosition = computedStyle.backgroundPosition;
 
 
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
     letter.style.webkitTextFillColor = 'transparent';
 
   const direction = index % 2 === 0 ? -1 : 1; // Alternate up and down
     const translateY = direction * amplitude;
     // console.log(translateY); // Calculate position shift
    const rotateAngle = angleSlider.value; // Maintain the rotation
    letter.style.transform = `translateY(${translateY}px) rotate(${rotateAngle}deg)`;
     
});
 });

 

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
            const container =  document.getElementById("tt-canvas-wrapper");
            container.style.backgroundImage =`url('${imageUrl}')`;
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

document.getElementById('tt-outline-global-active-input').addEventListener('change', function () {
    const fillDiv = document.getElementById('tt-outline-global-fieldset');
    const fieldset1 = document.getElementById('tt-outline-global-fill-gradient-fieldset');
    const fieldset2 = document.getElementById('tt-outline-global-fill-texture-fieldset');
 
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



// document.getElementById("tt-import-preset-input").addEventListener("change", function (event) {
//     const file = event.target.files[0];
  
//     if (file) {
//       const reader = new FileReader();
  
//       reader.onload = function (e) {
//         try {
//           const jsonData = JSON.parse(e.target.result);
//         //  console.log(jsonData.styles);
//          console.log(jsonData);

//           // Extract properties from JSON
//             const text = jsonData.text ? jsonData.text : (jsonData.content ? jsonData.content : "Default Value");
//             const fontSize = jsonData.font && jsonData.font.size ? jsonData.font.size : 48;
//             const fontWeight = jsonData.font && jsonData.font.weight ? jsonData.font.weight : "bold";
//             const fontName = jsonData.font && jsonData.font.name ? jsonData.font.name : "Arial";
//             // const color = jsonData.fill && jsonData.fill.color ? jsonData.fill.color: (jsonData.attributes && jsonData.attributes.style && jsonData.attributes.style.color? jsonData.attributes.style.color: { r: 0, g: 0, b: 0 });
//             const outline = jsonData.outline && jsonData.outline.global ? jsonData.outline.global : {};
//             const gradient = jsonData.background && jsonData.background.fill && jsonData.background.fill.gradient ? jsonData.background.fill.gradient : {};
//             // const textshadow = jsonData.attributes && jsonData.attributes.style && jsonData.attributes.style.textshadow ? jsonData.attributes.style.textshadow : "";
//             const color = jsonData.styles.color;
//             const textShadow = jsonData.styles["text-shadow"]|| "";
//             const imageUrl = jsonData.backgroundImage || "";
//           // Set background style
//           const outputDiv = document.getElementById('output');
          
          
//           outputDiv.style.textStroke = "none";
//           outputDiv.style.background = "none";
//           outputDiv.style.webkitBackgroundClip = "unset";
//           outputDiv.style.webkitTextStroke = "unset";
//           outputDiv.style.webkitTextFillColor = "unset";
//           outputDiv.style.color = "unset";

  
//           // Apply main text style
//           console.log(text);
//           console.log(fontSize);
//           console.log(fontWeight);
//           console.log(fontName);
//           console.log(color);
//         //   console.log(textShadow);
//         //   console.log(text);

//           outputDiv.textContent = text;
//           outputDiv.style.fontSize = `${fontSize}px`;
//           outputDiv.style.fontWeight = fontWeight;
//           outputDiv.style.fontFamily = fontName;
//           outputDiv.style.color = color
//           outputDiv.style.textTransform = "none";


//           if (imageUrl) {
//             document.querySelector('.tt-background-image').style.backgroundImage = `url('${imageUrl}')`;
           
//           }

  
//         //   // Apply outline style if active
//           if (outline.active) {
//             const outlineWidth = (outline.width || 0) * 100 + "px";
//             const outlineColor = outline.fill?.color
//               ? `rgb(${outline.fill.color.r}, ${outline.fill.color.g}, ${outline.fill.color.b})`
//               : "transparent";
  
//             if (outline.fill?.gradient?.active) {
//               const gradientColors = outline.fill.gradient.colors
//                 .map(
//                   (gradientColor) =>
//                     `rgb(${gradientColor.r}, ${gradientColor.g}, ${gradientColor.b}) ${gradientColor.pos * 100}%`
//                 )
//                 .join(", ");
//               const gradientAngle = outline.fill.gradient.angle || 0;
  
//               outputDiv.style.webkitTextStroke = `${outlineWidth} transparent`;
//               outputDiv.style.background = `linear-gradient(${gradientAngle}deg, ${gradientColors})`;
//               outputDiv.style.webkitBackgroundClip = "text";
//               outputDiv.style.webkitTextFillColor = "transparent";
//             } else {
//               outputDiv.style.webkitTextStroke = `${outlineWidth} ${outlineColor}`;
//             }
//           }
//           if(gradient.active){
            
//             const gradientStyle = gradient.active === 1
//             ? `${gradient.type}-gradient(${gradient.angle}deg, rgb(${gradient.colors[0].r}, ${gradient.colors[0].g}, ${gradient.colors[0].b}) ${gradient.colors[0].pos * 100}%, rgb(${gradient.colors[1].r}, ${gradient.colors[1].g}, ${gradient.colors[1].b}) ${gradient.colors[1].pos * 100}%)`
//             : `rgb(${jsonData.background.color.r}, ${jsonData.background.color.g}, ${jsonData.background.color.b})`;

//             console.log(gradientStyle);
//             outputDiv.style.background = gradientStyle;
//           }
//           if (textShadow) {
//             outputDiv.style.textShadow = textShadow;
//           }
//           if (jsonData.content) {
//             const contentDiv = document.createElement('div');
//             contentDiv.innerHTML = jsonData.content;
      
//             const images = contentDiv.querySelectorAll('img');
//             images.forEach(img => {
//               const imageElement = new Image();
//               imageElement.src = img.src;
//               imageElement.style.cssText = img.style.cssText;
//               contentDiv.replaceChild(imageElement, img);
//             });
      
//             // Append the modified content to outputDiv
//             outputDiv.innerHTML = contentDiv.innerHTML;
//           }

//         // Append modified content
//         outputDiv.innerHTML = contentDiv.innerHTML
          
//         } catch (error) {
//           console.error("Invalid JSON file", error);
//           console.log("The uploaded file is not a valid .textstudio JSON file.");
//         }
//       };
  
//       reader.readAsText(file);
//     }
//   });
  
document.getElementById('tt-import-preset-input').addEventListener('change', function(event) {
    const file = event.target.files[0];

    // Check if file is provided and has the correct file extension
    if (file && file.name.endsWith('.textstudio')) {
        const reader = new FileReader();

        // Event listener for when the file is read
        reader.onload = function(e) {
            try {
                // Parse the JSON data
                const jsonData = JSON.parse(e.target.result);
                console.log(jsonData);  // This will show the whole JSON object

                // Clear the previous content of the output div
                const outputDiv = document.getElementById('output');
                const background = document.getElementById('tt-background-image');
                outputDiv.innerHTML = ''; // Clear the container

                // Iterate over the JSON object and apply each key-value pair as CSS
                for (const key in jsonData) {
                    console.log(key);
                    if (jsonData.hasOwnProperty(key)) {
                        const value = jsonData[key];
                        const valuedata = JSON.stringify(value);

                        // Log each key-value pair to the console
                        // console.log(`Key: ${key}, Value: ${JSON.stringify(value)}`); 
                        if (key === 'text') {
                            const text = jsonData[key];
                            outputDiv.innerHTML = text; 
                        }
                        if (key === 'font') {
                            const font = jsonData[key]; // Assuming jsonData[key] contains the font object
                        
                            if (font.name === "Activity Regular") {
                                // Change the font.src URL if the font name is "Activity Regular"
                                font.src = "https://cdn.textstudio.com/output/font/preview/9/9/7/4/14799.webp";
                                console.log("Updated font src:", font.src); // Logs the updated font src URL
                        
                                // Create a <link> element to include the font in the document
                                const link = document.createElement("link");
                                link.rel = "stylesheet"; // Set rel attribute to stylesheet
                                link.href = font.src; // Set the href to the font source URL
                        
                                // Append the <link> element to the document <head>
                                document.head.appendChild(link);
                        
                                // Optionally, apply the font-family to the outputDiv
                                outputDiv.style.fontFamily = `"Activity"`; // Applies the font name to outputDiv
                            } else {
                                // If the font name is not "Activity Regular", retain the original font.src
                                console.log("Original font src:", font.src); // Logs the original font src URL
                            }
                        }
                        if (key === 'lettering') {
                            const lettering = jsonData[key]; // Get the lettering object
                        
                            // Apply general styles based on lettering properties
                            if (lettering.blendmode) {
                                outputDiv.style.blendMode = lettering.blendmode; // Apply the blend mode
                            }
                        
                            // Apply boggle properties if active
                            if (lettering.boggle && lettering.boggle.active === 1) {
                                // Example of how to apply boggle related properties (angle, amplitude)
                                outputDiv.style.transform = `rotate(${lettering.boggle.angle}deg)`;
                                outputDiv.style.opacity = lettering.boggle.amplitude; // Assuming amplitude is related to opacity (adjust as needed)
                            }
                        
                            // Apply reverse overlap properties (if any)
                            if (lettering.reverseOverlap) {
                                if (lettering.reverseOverlap.letters) {
                                    outputDiv.style.letterSpacing = '1px'; // Apply letter spacing (adjust value as necessary)
                                }
                                if (lettering.reverseOverlap.lines) {
                                    outputDiv.style.lineHeight = '1.5'; // Apply line height (adjust value as necessary)
                                }
                            }
                        
                            // Apply shadow properties if active
                            if (lettering.shadow && lettering.shadow.active === 1) {
                                const shadowSize = lettering.shadow.size || 0;
                                const shadowDistance = lettering.shadow.distance || 0;
                                const shadowAngle = lettering.shadow.angle || 180;
                                const shadowColor = lettering.shadow.fill ? `rgb(${lettering.shadow.fill.color.r}, ${lettering.shadow.fill.color.g}, ${lettering.shadow.fill.color.b})` : 'black';
                                const shadowAlpha = lettering.shadow.fill ? lettering.shadow.fill.alpha : 1;
                        
                                // Convert angle to radians for shadow offset calculation
                                const radianAngle = shadowAngle * (Math.PI / 180);
                                const shadowX = shadowDistance * Math.cos(radianAngle);
                                const shadowY = shadowDistance * Math.sin(radianAngle);
                        
                                outputDiv.style.textShadow = `${shadowX}px ${shadowY}px ${shadowSize}px ${shadowColor}`;
                                outputDiv.style.color = `rgba(${lettering.shadow.fill.color.r}, ${lettering.shadow.fill.color.g}, ${lettering.shadow.fill.color.b}, ${shadowAlpha})`;
                            }
                        
                            // Apply any other relevant properties from the lettering object as styles
                            // Add additional styling logic as needed
                        }
                        if (key === 'fill') {
                            console.log("bekaar chhotu")
                            const fill = jsonData[key]; // Get the fill object
                            
                            // Apply color if active and alpha is provided
                            if (fill.active === 1) {
                                if (fill.alpha && fill.color) {
                                    // Apply color with alpha
                                    const rgbaColor = `rgba(${fill.color.r}, ${fill.color.g}, ${fill.color.b}, ${fill.alpha})`;
                                    console.log(rgbaColor);
                                    outputDiv.style.backgroundColor = rgbaColor; // Set background color
                                    outputDiv.style.color = rgbaColor; // Set text color (if applicable)
                                }
                            }
                            
                            // Apply texture properties if active
                            if (fill.texture && fill.texture.active === 1 && fill.texture.src) {
                                const texture = fill.texture;
                        
                                // Apply texture properties (e.g., background image, repeating, etc.)
                                outputDiv.style.backgroundImage = `url(${texture.src})`; // Set texture image
                                outputDiv.style.backgroundRepeat = texture.repeat; // Apply texture repeat
                                outputDiv.style.backgroundPosition = texture.position; // Apply texture position
                                outputDiv.style.backgroundSize = texture.size; // Apply texture size
                                outputDiv.style.mixBlendMode = texture.blendmode; // Apply texture blend mode
                                outputDiv.style.opacity = texture.alpha; // Apply texture transparency
                            }
                        
                            // Apply gradient if active
                            if (fill.gradient && fill.gradient.active === 1) {
                                const gradient = fill.gradient;
                        
                                // Construct gradient CSS
                                const gradientColors = gradient.colors.map(color => {
                                    return `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a}) ${color.pos * 100}%`;
                                }).join(", ");
                        console.log(`linear-gradient(${gradient.angle}deg, ${gradientColors})`);
                                // Apply gradient background
                                outputDiv.style.color = `linear-gradient(${gradient.angle}deg, ${gradientColors})`;
                            }
                        
                            // Handle palette if active
                            if (fill.palette && fill.palette.active === 1) {
                                // Example of handling the palette's lettering property (assuming it's related to font or text styling)
                                if (fill.palette.lettering && fill.palette.lettering.method === "letter") {
                                    // You can apply styles related to the lettering method here
                                    // For example, you could apply a specific font-family, letter-spacing, etc.
                                    outputDiv.style.letterSpacing = "1px"; // Example, adjust based on your needs
                                }
                            }
                        }
                        if (key === 'depth') {
                            const depth = jsonData[key]; // Get the depth object
                        
                            // Only proceed if depth.active is 1
                            if (depth.active === 1) {
                        
                                // Apply depth length as a 3D effect (if needed)
                                if (depth.length) {
                                    outputDiv.style.transform = `perspective(${depth.length * 100}px)`; // Example of applying the length to perspective
                                }
                        
                                // Apply depth angle as a rotation (if angle exists)
                                if (depth.angle) {
                                    outputDiv.style.transform += ` rotate(${depth.angle}deg)`; // Apply angle rotation
                                }
                        
                                // Apply the fill properties inside depth
                                if (depth.fill) {
                                    // Apply color with alpha
                                    if (depth.fill.alpha && depth.fill.color) {
                                        const rgbaColor = `rgba(${depth.fill.color.r}, ${depth.fill.color.g}, ${depth.fill.color.b}, ${depth.fill.alpha})`;
                                        outputDiv.style.backgroundColor = rgbaColor; // Set background color
                                    }
                        
                                    // Apply gradient if active
                                    if (depth.fill.gradient && depth.fill.gradient.active === 1) {
                                        const gradient = depth.fill.gradient;
                        
                                        // Construct gradient CSS
                                        const gradientColors = gradient.colors.map(color => {
                                            return `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a}) ${color.pos * 100}%`;
                                        }).join(", ");
                        
                                        // Apply gradient background
                                        outputDiv.style.backgroundImage = `linear-gradient(${gradient.angle}deg, ${gradientColors})`;
                                    }
                        
                                    // Apply texture if active (texture properties like src, alpha, etc.)
                                    if (depth.fill.texture && depth.fill.texture.active === 1 && depth.fill.texture.src) {
                                        const texture = depth.fill.texture;
                        
                                        // Apply texture properties (e.g., background image, repeating, etc.)
                                        outputDiv.style.backgroundImage = `url(${texture.src})`; // Set texture image
                                        outputDiv.style.backgroundRepeat = texture.repeat; // Apply texture repeat
                                        outputDiv.style.backgroundPosition = texture.position; // Apply texture position
                                        outputDiv.style.backgroundSize = texture.size; // Apply texture size
                                        outputDiv.style.mixBlendMode = texture.blendmode; // Apply texture blend mode
                                        outputDiv.style.opacity = texture.alpha; // Apply texture transparency
                                    }
                                }
                            }
                        }
                        if (key === 'depth2') {
                            const depth2 = jsonData[key]; // Get the depth2 object
                        
                            // Only proceed if depth2.active is 1
                            if (depth2.active === 1) {
                        
                                // Apply depth2 length as a 3D effect (if needed)
                                if (depth2.length) {
                                    outputDiv.style.transform = `perspective(${depth2.length * 100}px)`; // Apply the perspective to create a 3D effect
                                }
                        
                                // Apply depth2 angle as a rotation (if angle exists)
                                if (depth2.angle) {
                                    outputDiv.style.transform += ` rotate(${depth2.angle}deg)`; // Apply angle rotation
                                }
                        
                                // Apply the fill properties inside depth2
                                if (depth2.fill) {
                                    // Apply color with alpha
                                    if (depth2.fill.alpha && depth2.fill.color) {
                                        const rgbaColor = `rgba(${depth2.fill.color.r}, ${depth2.fill.color.g}, ${depth2.fill.color.b}, ${depth2.fill.alpha})`;
                                        outputDiv.style.backgroundColor = rgbaColor; // Set background color
                                    }
                        
                                    // Apply gradient if active
                                    if (depth2.fill.gradient && depth2.fill.gradient.active === 1) {
                                        const gradient = depth2.fill.gradient;
                        
                                        // Construct gradient CSS
                                        const gradientColors = gradient.colors.map(color => {
                                            return `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a}) ${color.pos * 100}%`;
                                        }).join(", ");
                        
                                        // Apply gradient background
                                        outputDiv.style.backgroundImage = `linear-gradient(${gradient.angle}deg, ${gradientColors})`;
                                    }
                        
                                    // Apply texture if active (texture properties like src, alpha, etc.)
                                    if (depth2.fill.texture && depth2.fill.texture.active === 1 && depth2.fill.texture.src) {
                                        const texture = depth2.fill.texture;
                        
                                        // Apply texture properties (e.g., background image, repeating, etc.)
                                        outputDiv.style.backgroundImage = `url(${texture.src})`; // Set texture image
                                        outputDiv.style.backgroundRepeat = texture.repeat; // Apply texture repeat
                                        outputDiv.style.backgroundPosition = texture.position; // Apply texture position
                                        outputDiv.style.backgroundSize = texture.size; // Apply texture size
                                        outputDiv.style.mixBlendMode = texture.blendmode; // Apply texture blend mode
                                        outputDiv.style.opacity = texture.alpha; // Apply texture transparency
                                    }
                                }
                            }
                        }
                        if (key === 'outline') {
                            const outline = jsonData[key]; // Get the outline object
                        
                            // Function to apply the outline properties to outputDiv
                            function applyOutlineProperties(outlineSection) {
                                // Only proceed if the section is active
                                if (outlineSection.active === 1) {
                                    // Apply width (e.g., border width)
                                    if (outlineSection.width) {
                                        outputDiv.style.borderWidth = `${outlineSection.width * 10}px`; // Multiply by 10 for scaling
                                    }
                        
                                    // Apply border join (e.g., border style join type)
                                    if (outlineSection.join) {
                                        outputDiv.style.borderRadius = outlineSection.join === 'round' ? '50%' : '0'; // Example, apply rounded border if 'round'
                                    }
                        
                                    // Apply fill (color or gradient)
                                    if (outlineSection.fill) {
                                        // Apply color with alpha
                                        if (outlineSection.fill.alpha && outlineSection.fill.color) {
                                            const rgbaColor = `rgba(${outlineSection.fill.color.r}, ${outlineSection.fill.color.g}, ${outlineSection.fill.color.b}, ${outlineSection.fill.alpha})`;
                                            outputDiv.style.borderColor = rgbaColor; // Set border color
                                        }
                        
                                        // Apply gradient if active
                                        if (outlineSection.fill.gradient && outlineSection.fill.gradient.active === 1) {
                                            const gradient = outlineSection.fill.gradient;
                        
                                            // Construct gradient CSS
                                            const gradientColors = gradient.colors.map(color => {
                                                return `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a}) ${color.pos * 100}%`;
                                            }).join(", ");
                        
                                            // Apply gradient border (using border-image)
                                            outputDiv.style.borderImage = `linear-gradient(${gradient.angle}deg, ${gradientColors})`;
                                            outputDiv.style.borderImageSlice = 1; // Ensure the gradient is applied correctly
                                        }
                        
                                        // Apply texture if active
                                        if (outlineSection.fill.texture && outlineSection.fill.texture.active === 1 && outlineSection.fill.texture.src) {
                                            const texture = outlineSection.fill.texture;
                        
                                            // Apply texture properties (e.g., background image, repeating, etc.)
                                            outputDiv.style.backgroundImage = `url(${texture.src})`; // Set texture image
                                            outputDiv.style.backgroundRepeat = texture.repeat; // Apply texture repeat
                                            outputDiv.style.backgroundPosition = texture.position; // Apply texture position
                                            outputDiv.style.backgroundSize = texture.size; // Apply texture size
                                            outputDiv.style.mixBlendMode = texture.blendmode; // Apply texture blend mode
                                            outputDiv.style.opacity = texture.alpha; // Apply texture transparency
                                        }
                                    }
                        
                                    // Apply shadow if active (applies to box-shadow)
                                    if (outlineSection.shadow && outlineSection.shadow.active === 1) {
                                        const shadow = outlineSection.shadow;
                                        const rgbaShadow = `rgba(${shadow.color.r}, ${shadow.color.g}, ${shadow.color.b}, ${shadow.color.a})`;
                                        outputDiv.style.boxShadow = `${shadow.size}px ${shadow.size}px ${shadow.size * 2}px ${rgbaShadow}`; // Adjust shadow size as needed
                                    }
                                }
                            }
                        
                            // Apply properties for each section
                            if (outline.first) {
                                applyOutlineProperties(outline.first);
                            }
                            if (outline.second) {
                                applyOutlineProperties(outline.second);
                            }
                            if (outline.global) {
                                applyOutlineProperties(outline.global);
                            }
                            if (outline.global2) {
                                applyOutlineProperties(outline.global2);
                            }
                        }
                        if (key === 'bevel') {
                            const bevel = jsonData[key]; // Get the bevel object
                        
                            // Function to apply bevel properties
                            function applyBevelProperties(bevelSection) {
                                // Only proceed if the section is active
                                if (bevelSection.active === 1) {
                        
                                    // Apply size (e.g., bevel depth)
                                    if (bevelSection.size) {
                                        // Use transform to simulate depth by scaling the element
                                        outputDiv.style.transform = `scale(${1 + bevelSection.size})`;
                                    }
                        
                                    // Apply smoothing (apply a box-shadow to soften edges)
                                    if (bevelSection.smoothing) {
                                        const shadowSize = bevelSection.smoothing * 10; // Scale smoothing factor
                                        outputDiv.style.boxShadow = `0 0 ${shadowSize}px rgba(0, 0, 0, 0.5)`;
                                    }
                        
                                    // Apply soften (similar to smoothing, but may adjust visual softening of edges)
                                    if (bevelSection.soften) {
                                        const softenSize = bevelSection.soften * 10; // Scale soften factor
                                        outputDiv.style.filter = `blur(${softenSize}px)`; // Apply blur for softening effect
                                    }
                        
                                    // Apply highlight (e.g., light effect along the edges)
                                    if (bevelSection.highlight) {
                                        const highlight = bevelSection.highlight;
                                        if (highlight.alpha && highlight.color) {
                                            const rgbaHighlight = `rgba(${highlight.color.r}, ${highlight.color.g}, ${highlight.color.b}, ${highlight.alpha})`;
                                            outputDiv.style.boxShadow += ` inset 0 0 10px ${rgbaHighlight}`; // Add inset highlight effect
                                            outputDiv.style.mixBlendMode = highlight.blendmode; // Apply the blend mode to the highlight
                                        }
                                    }
                        
                                    // Apply shadow (e.g., dark shadow along the edges)
                                    if (bevelSection.shadow) {
                                        const shadow = bevelSection.shadow;
                                        if (shadow.alpha && shadow.color) {
                                            const rgbaShadow = `rgba(${shadow.color.r}, ${shadow.color.g}, ${shadow.color.b}, ${shadow.alpha})`;
                                            outputDiv.style.boxShadow += ` 0 0 10px ${rgbaShadow}`; // Add shadow effect
                                            outputDiv.style.mixBlendMode = shadow.blendmode; // Apply the blend mode to the shadow
                                        }
                                    }
                                }
                            }
                        
                            // Apply properties for the 'inner' section
                            if (bevel.inner) {
                                applyBevelProperties(bevel.inner);
                            }
                        }
                        if (key === 'shadow') {
                            const shadow = jsonData[key]; // Get the shadow object
                        
                            // Function to calculate shadow offset based on angle and distance
                            function calculateShadowOffset(distance, angle) {
                                const radians = (Math.PI / 180) * angle;
                                const xOffset = distance * Math.cos(radians);
                                const yOffset = distance * Math.sin(radians);
                                return { x: xOffset, y: yOffset };
                            }
                        
                            // Function to apply shadow properties
                            function applyShadow(shadowSection) {
                                if (shadowSection.active === 1) {
                                    const { size, distance, angle, fill } = shadowSection;
                        
                                    // Calculate shadow offset
                                    const offset = calculateShadowOffset(distance * 100, angle); // Convert distance to pixels
                        
                                    // Extract color and alpha
                                    const color = fill.color || { r: 0, g: 0, b: 0 }; // Default to black
                                    const alpha = fill.alpha !== undefined ? fill.alpha : 1; // Default to 1 (fully opaque)
                                    const rgbaColor = `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha})`;
                        
                                    // Combine into a box-shadow string
                                    const shadowStyle = `${offset.x}px ${offset.y}px ${size * 100}px ${rgbaColor}`;
                        
                                    // Apply the shadow to the element
                                    if (outputDiv.style.boxShadow) {
                                        // Append if there are already shadows
                                        outputDiv.style.boxShadow += `, ${shadowStyle}`;
                                    } else {
                                        outputDiv.style.boxShadow = shadowStyle;
                                    }
                                }
                            }
                        
                            // Apply shadow for each section
                            if (shadow.outer) {
                                applyShadow(shadow.outer);
                            }
                            if (shadow.outer2) {
                                applyShadow(shadow.outer2);
                            }
                            if (shadow.inner) {
                                applyShadow(shadow.inner);
                            }
                            if (shadow.inner2) {
                                applyShadow(shadow.inner2);
                            }
                        }
                        if (key === 'icon') {
                            const icon = jsonData[key];
                            if (icon.src) {
                                console.log("Icon source:", icon.src);

                                const iconImage = document.createElement("img");
                                iconImage.src = icon.src;
                                iconImage.alt = "Icon";
                                iconImage.style.opacity = icon.alpha || 1;

                                outputDiv.appendChild(iconImage);
                            }
                        }
                        if (key === 'background') {
                            const background = jsonData[key];
                
                            // Extract properties
                            const { fill } = background;
                            const { color, image, gradient } = fill;
                
                            // Update the background color
                            if (color) {
                                const rgbColor = `rgb(${color.r}, ${color.g}, ${color.b})`;
                                outputDiv.style.backgroundColor = rgbColor;
                                console.log("Updated background color:", rgbColor);
                            }
                
                            // Update the background image if active
                            if (image && image.active) {
                                outputDiv.style.backgroundImage = `url(${image.src})`;
                                outputDiv.style.backgroundSize = image.size;
                                outputDiv.style.backgroundRepeat = image.repeat;
                                console.log("Updated background image:", image.src);
                            }
                
                            // Handle gradients if active
                            if (gradient && gradient.active) {
                                const gradientColors = gradient.colors.map(colorObj =>
                                    `rgba(${colorObj.r}, ${colorObj.g}, ${colorObj.b}, ${colorObj.a}) ${colorObj.pos * 100}%`
                                );
                                const gradientStyle = `radial-gradient(${gradient.angle}deg, ${gradientColors.join(", ")})`;
                                outputDiv.style.backgroundImage = gradientStyle;
                                console.log("Updated gradient:", gradientStyle);
                            }
                        }
                        if (key === 'animation') {
                            const animation = jsonData[key];
                
                            // Check if the animation is active
                            if (animation.active) {
                                const { pause, duration } = animation;
                
                                // Apply animation to the `outputDiv`
                                outputDiv.style.animationName = "fadeIn"; // Example animation name
                                outputDiv.style.animationDuration = `${duration}ms`;
                                outputDiv.style.animationDelay = `${pause}ms`;
                                outputDiv.style.animationFillMode = "forwards";
                
                                console.log("Applied animation:", {
                                    animationName: "fadeIn",
                                    animationDuration: `${duration}ms`,
                                    animationDelay: `${pause}ms`,
                                });
                
                                // Optional: Add keyframes dynamically
                                const styleSheet = document.styleSheets[0] || document.createElement("style");
                                const keyframes = `
                                    @keyframes fadeIn {
                                        0% { opacity: 0; }
                                        100% { opacity: 1; }
                                    }
                                `;
                                if (styleSheet.insertRule) {
                                    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
                                } else if (styleSheet.appendRule) {
                                    styleSheet.appendRule(keyframes);
                                }
                            } else {
                                console.log("Animation is not active.");
                            }
                        }
                        
                        
                        
                        
                        
                        // Apply the key-value pair as CSS style on outputDiv
                        outputDiv.style[key] = valuedata;
                    }
                }

            } catch (error) {
                console.error('Error parsing JSON:', error);
            }
        };

        // Read the file as text
        reader.readAsText(file);
    } else {
        console.error('Invalid file type. Please select a .textstudio file.');
    }
});

  






document.getElementById("tt-download-format-list").addEventListener("click", (e) => {
    if (e.target.tagName === "LI" && e.target.style.display !== "none") {
        const format = e.target.dataset.format;
        
        if (format) {
            console.log(format);
            const element = document.getElementById("tt-canvas-center");
            const backgroundDiv = document.querySelector(".tt-background-image");
            const backgroundImageStyle = getComputedStyle(backgroundDiv).backgroundImage;
            const backgroundImageUrl = backgroundImageStyle.slice(5, -2).replace(/['"]/g, "");
            console.log(backgroundImageUrl);
            // Load the background image
            const img = new Image();
            img.crossOrigin = "anonymous"; // Enable cross-origin handling
            img.src = backgroundImageUrl;

            img.onload = () => {
                const canvas = document.createElement("canvas");
                canvas.width = element.offsetWidth;
                canvas.height = element.offsetHeight;
                const ctx = canvas.getContext("2d");

                // Draw the background image first
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

                html2canvas(element, {
                    backgroundColor: null,
                    useCORS: true,
                }).then((htmlCanvas) => {
                    // Draw the HTML content on top
                    ctx.drawImage(htmlCanvas, 0, 0);

                    if (format === "png" || format === "jpg") {
                        const link = document.createElement("a");
                        link.href = canvas.toDataURL(`image/${format}`);
                        link.download = `download.${format}`;
                        link.click();
                    } else if (format === "pdf") {
                        const { jsPDF } = window.jspdf;

                        // Adjust PDF page dimensions
                        const pdfWidth = canvas.width;
                        const pdfHeight = canvas.height;
                        const orientation = pdfWidth > pdfHeight ? "l" : "p"; // Landscape if width > height

                        const pdf = new jsPDF(orientation, "px", [pdfWidth, pdfHeight]);

                        // Convert canvas to an image
                        const imgData = canvas.toDataURL("image/png");

                        // Add the image to the PDF
                        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

                        // Save the PDF
                        pdf.save("download.pdf");
                    } else if (format === "gif") {
                        const gif = new GIF({
                            workers: 2,
                            quality: 10,
                        });

                        // Add multiple frames to create a GIF
                        for (let i = 0; i < 10; i++) {
                            gif.addFrame(canvas, { delay: 200 });
                        }

                        // Render and download the GIF
                        gif.on("finished", (blob) => {
                            const link = document.createElement("a");
                            link.href = URL.createObjectURL(blob);
                            link.download = "download.gif";
                            link.click();
                        });

                        gif.render();
                    } else if (format === "transparent-png") {
                        // PNG with transparency
                        console.log("hello");
                        const transparentCanvas = document.createElement("canvas");
                        transparentCanvas.width = canvas.width;
                        transparentCanvas.height = canvas.height;

                        const transparentCtx = transparentCanvas.getContext("2d");
                        transparentCtx.drawImage(canvas, 0, 0);

                        // Transparent text logic (optional: apply effects if needed)
                        transparentCtx.globalCompositeOperation = "destination-in";

                        // Download transparent PNG
                        const pngDataUrl = transparentCanvas.toDataURL("image/png");
                        const link = document.createElement("a");
                        link.href = pngDataUrl;
                        link.download = `download-transparent.png`;
                        link.click();
                    } else if(format === "clipboard")
                    {
                        canvas.toBlob((blob) => {
                            const clipboardItem = new ClipboardItem({ "image/png": blob });
                            navigator.clipboard.write([clipboardItem]).then(() => {
                                alert("Text copied as an image to clipboard!");
                            }).catch((err) => {
                                console.error("Error copying to clipboard: ", err);
                            });
                        });
                    } else  if (format === "preset") {
                        console.log("Starting background export...");
                        const outputDiv = document.getElementById("output");
                    
                        if (!outputDiv) {
                            alert("The output div is not found.");
                            return;
                        }
                    
                        // Collect the required data
                        const data = {
                            content: outputDiv.innerHTML, // Save the inner HTML
                            styles: {}, // Placeholder for explicit styles
                            attributes: Array.from(outputDiv.attributes).reduce((acc, attr) => {
                                acc[attr.name] = attr.value;
                                return acc;
                            }, {}),
                            timestamp: new Date().toISOString(), // Add metadata
                            format: "textstudio",
                            animations: {}, // Placeholder for animation styles
                            images: [],
                            background : backgroundImageUrl // Placeholder for image details
                        };
                    
                        // Extract only explicitly defined styles
                        const inlineStyles = outputDiv.style; // This contains styles set in the "style" attribute
                        for (let i = 0; i < inlineStyles.length; i++) {
                            const styleName = inlineStyles[i];
                            data.styles[styleName] = inlineStyles.getPropertyValue(styleName);
                    
                            // Extract animation-related styles
                            if (styleName.startsWith("animation-")) {
                                data.animations[styleName] = inlineStyles.getPropertyValue(styleName);
                            }
                        }
                    
                        // Extract animation-related class names
                        const classes = outputDiv.className.split(" ").filter((cls) => cls.startsWith("ld-"));
                        if (classes.length > 0) {
                            data.animations.classes = classes;
                        }
                    
                        // Extract image information
                        const images = outputDiv.querySelectorAll("img");
                        images.forEach((img) => {
                            const imgData = {
                                src: img.src,
                                alt: img.alt,
                                style: img.getAttribute("style") || "",
                            };
                            data.images.push(imgData);
                        });
                    
                        console.log(data);
                    
                        // Convert the data to JSON format
                        const jsonData = JSON.stringify(data, null, 2); // Beautified JSON
                    
                        // Create a Blob from the JSON
                        const blob = new Blob([jsonData], { type: "application/json" });
                    
                        // Create a download link
                        const link = document.createElement("a");
                        link.href = URL.createObjectURL(blob);
                        link.download = "download.textstudio"; // Add the .textstudio extension
                        link.click();
                    }
                     
                    else {
                        alert(`Format ${format} is not supported yet.`);
                    }
                });
            };

            img.onerror = () => {
                console.error("Background image not found. Applying gradient instead.");
            console.log(element);
                const canvas = document.createElement("canvas");
                canvas.width = element.offsetWidth;
                canvas.height = element.offsetHeight;
                const ctx = canvas.getContext("2d");
            
                // Draw gradient background
                const gradient = ctx.createRadialGradient(
                    canvas.width / 2, canvas.height / 2, 0, // Start
                    canvas.width / 2, canvas.height / 2, canvas.width / 2 // End
                );
                gradient.addColorStop(0, "rgb(0, 211, 255)");
                gradient.addColorStop(1, "rgb(0, 117, 255)");
                ctx.fillStyle = gradient;
                ctx.fillRect(0, 0, canvas.width, canvas.height);
            
                html2canvas(element, {
                    backgroundColor: null,
                    useCORS: true,
                }).then((htmlCanvas) => {
                    ctx.drawImage(htmlCanvas, 0, 0);
            
                    if (format === "png" || format === "jpg") {
                        const link = document.createElement("a");
                        link.href = canvas.toDataURL(`image/${format}`);
                        link.download = `download.${format}`;
                        link.click();
                    } else if (format === "pdf") {
                        const { jsPDF } = window.jspdf;

                        // Adjust PDF page dimensions
                        const pdfWidth = canvas.width;
                        const pdfHeight = canvas.height;
                        const orientation = pdfWidth > pdfHeight ? "l" : "p"; // Landscape if width > height

                        const pdf = new jsPDF(orientation, "px", [pdfWidth, pdfHeight]);

                        // Convert canvas to an image
                        const imgData = canvas.toDataURL("image/png");

                        // Add the image to the PDF
                        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

                        // Save the PDF
                        pdf.save("download.pdf");
                    } else if (format === "gif") {
                        const gif = new GIF({
                            workers: 2,
                            quality: 10,
                        });

                        // Add multiple frames to create a GIF
                        for (let i = 0; i < 10; i++) {
                            gif.addFrame(canvas, { delay: 200 });
                        }

                        // Render and download the GIF
                        gif.on("finished", (blob) => {
                            const link = document.createElement("a");
                            link.href = URL.createObjectURL(blob);
                            link.download = "download.gif";
                            link.click();
                        });

                        gif.render();
                    } else if (format === "preset") {
                        console.log("Starting export...");
                        const outputDiv = document.getElementById("output");
                    
                        if (!outputDiv) {
                            alert("The output div is not found.");
                            return;
                        }
                    
                        // Collect the required data
                        const data = {
                            content: outputDiv.innerHTML, // Save the inner HTML
                            styles: {}, // Placeholder for explicit styles
                            attributes: Array.from(outputDiv.attributes).reduce((acc, attr) => {
                                acc[attr.name] = attr.value;
                                return acc;
                            }, {}),
                            timestamp: new Date().toISOString(), // Add metadata
                            format: "textstudio",
                            animations: {}, // Placeholder for animation styles
                            images: [] // Placeholder for image details
                        };
                    
                        // Extract only explicitly defined styles
                        const inlineStyles = outputDiv.style; // This contains styles set in the "style" attribute
                        for (let i = 0; i < inlineStyles.length; i++) {
                            const styleName = inlineStyles[i];
                            data.styles[styleName] = inlineStyles.getPropertyValue(styleName);
                    
                            // Extract animation-related styles
                            if (styleName.startsWith("animation-")) {
                                data.animations[styleName] = inlineStyles.getPropertyValue(styleName);
                            }
                        }
                    
                        // Extract animation-related class names
                        const classes = outputDiv.className.split(" ").filter((cls) => cls.startsWith("ld-"));
                        if (classes.length > 0) {
                            data.animations.classes = classes;
                        }
                    
                        // Extract image information
                        const images = outputDiv.querySelectorAll("img");
                        images.forEach((img) => {
                            const imgData = {
                                src: img.src,
                                alt: img.alt,
                                style: img.getAttribute("style") || "",
                            };
                            data.images.push(imgData);
                        });
                    
                        console.log(data);
                    
                        // Convert the data to JSON format
                        const jsonData = JSON.stringify(data, null, 2); // Beautified JSON
                    
                        // Create a Blob from the JSON
                        const blob = new Blob([jsonData], { type: "application/json" });
                    
                        // Create a download link
                        const link = document.createElement("a");
                        link.href = URL.createObjectURL(blob);
                        link.download = "download.textstudio"; // Add the .textstudio extension
                        link.click();
                    } else if (format === "transparent-png") {
                        // PNG with transparency
                        console.log("hello");
                        const transparentCanvas = document.createElement("canvas");
                        transparentCanvas.width = canvas.width;
                        transparentCanvas.height = canvas.height;

                        const transparentCtx = transparentCanvas.getContext("2d");
                        transparentCtx.drawImage(canvas, 0, 0);

                        // Transparent text logic (optional: apply effects if needed)
                        transparentCtx.globalCompositeOperation = "destination-in";

                        // Download transparent PNG
                        const pngDataUrl = transparentCanvas.toDataURL("image/png");
                        const link = document.createElement("a");
                        link.href = pngDataUrl;
                        link.download = `download-transparent.png`;
                        link.click();
                    }
                    else if(format === "clipboard")
                    {
                        canvas.toBlob((blob) => {
                            const clipboardItem = new ClipboardItem({ "image/png": blob });
                            navigator.clipboard.write([clipboardItem]).then(() => {
                                alert("Text copied as an image to clipboard!");
                            }).catch((err) => {
                                console.error("Error copying to clipboard: ", err);
                            });
                        });
                    }
                    else {
                        alert(`Format ${format} is not supported yet.`);
                    }
                    // Continue with other format handling as above...
                });
            }
        }
    }
});

// Function to handle multiple file uploads and display content
// document.getElementById('tt-download-format-list').addEventListener('change', function (event) {
//     const files = event.target.files;
//     console.log(files);
//     const outputDiv = document.getElementById('output');

//     // Clear the output div whenever a new file is selected
//     outputDiv.innerHTML = '';

//     // If no files are selected, do nothing
//     if (!files.length) return;

//     Array.from(files).forEach(file => {
//         const reader = new FileReader();

//         reader.onload = function (e) {
//             try {
//                 // Parse the JSON content
//                 const jsonData = JSON.parse(e.target.result);

//                 // Create a new div for the file and display its content
//                 const jsonDiv = document.createElement('div');
//                 jsonDiv.classList.add('json-output');

//                 // Add the file name as a header for the file
//                 const fileHeader = document.createElement('h2');
//                 fileHeader.textContent = `File: ${file.name}`;
//                 jsonDiv.appendChild(fileHeader);

//                 // Display the JSON data in a readable format
//                 jsonDiv.innerHTML += `<pre>${JSON.stringify(jsonData, null, 2)}</pre>`;

//                 // Append this file's content to the output div
//                 outputDiv.appendChild(jsonDiv);

//             } catch (error) {
//                 // If JSON parsing fails, display an error message for this file
//                 const errorDiv = document.createElement('div');
//                 errorDiv.classList.add('json-output');
//                 errorDiv.style.backgroundColor = '#f8d7da';
//                 errorDiv.innerHTML = `<strong>Error parsing JSON in file: ${file.name}</strong>`;
//                 outputDiv.appendChild(errorDiv);
//             }
//         };

//         // Read the file as text
//         reader.readAsText(file);
//     });
// });






const updateOutline = () => {
    const preview = document.getElementById("output");

    // Get values for each outline
    const outlines = [
      {
        width: parseInt(document.getElementById("tt-outline-first-width-input").value),
        color: document.getElementById("tt-outline-first-fill-color-input").value
      },
      {
        width: parseInt(document.getElementById("tt-outline-second-width-input").value),
        color: document.getElementById("tt-outline-second-fill-color-input").value
      },
      {
        width: parseInt(document.getElementById("tt-outline-global-width-input").value),
        color: document.getElementById("tt-outline-global-fill-color-input").value
      },
      {
        width: parseInt(document.getElementById("tt-outline-global2-width-input").value),
        color: document.getElementById("tt-outline-global2-fill-color-input").value
      }
    ];

    
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

    // Combine shadows for layered outlines
    const shadows = outlines
      .filter(outline => outline.width > 0) // Only include outlines with non-zero width
      .map(outline => createUniformShadow(outline.width, outline.color));

    // Apply shadows to the text
    preview.style.textShadow = shadows.join(", ");
  };

  // Add event listeners to inputs
  document.querySelectorAll("input").forEach(input => {
    input.addEventListener("input", updateOutline);
  });

  // Initialize the preview
  updateOutline();

  document.getElementById('tt-bevel-inner-active-input').addEventListener('change', function () {
    const fillDiv = document.getElementById('tt-bevel-inner-fieldset');
 
    // Check if the checkbox is checked
    if (this.checked) {
        fillDiv.removeAttribute('disabled'); // Enable the div (if needed)
    } else {
        fillDiv.setAttribute('disabled', 'true'); // Disable the div (if needed)
    }
});
document.getElementById('tt-bevel-inner-size-input').addEventListener('input', function () {
    const value = parseFloat(this.value); // Get the current slider value
  const outputdiv = document.getElementById('output');
  
 
  const shadowSize = Math.round(value * 10); // Scale the shadow size
  outputdiv.style.textShadow = `
    ${shadowSize}px ${shadowSize}px ${shadowSize * 2}px #aaa,
    -${shadowSize}px -${shadowSize}px ${shadowSize * 2}px #fff
  `;
  });

document.getElementById('tt-bevel-inner-angle-input').addEventListener('input', function () {
    const angle = parseInt(this.value, 10); // Get the angle value
    const outputDiv = document.getElementById('output');
    
    // Convert the angle to radians
    const radians = (angle * Math.PI) / 180;
  
    // Calculate the shadow offset based on the angle
    const shadowOffsetX = Math.round(Math.cos(radians) * 10); // Scale by 10 for noticeable effect
    const shadowOffsetY = Math.round(Math.sin(radians) * 10);
  
    // Apply the shadow to the text
    outputDiv.style.textShadow = `
      ${shadowOffsetX}px ${shadowOffsetY}px 6px #aaa,
      ${-shadowOffsetX}px ${-shadowOffsetY}px 6px #fff
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
const colorPickerDiv = document.getElementById('color-picker');

// Create a hidden input element of type 'color'
const colorInput = document.createElement('input');
colorInput.type = 'color';
colorInput.style.position = 'absolute'; // Position it absolutely
colorInput.style.display = 'none'; // Hide the input element

// Append the hidden input to the body
document.body.appendChild(colorInput);
document.getElementById('color-picker').addEventListener('click', () => {
    const rect = colorPickerDiv.getBoundingClientRect();

    // Position the hidden color input just above the colorPickerDiv
    colorInput.style.left = `${rect.left}px`;
    colorInput.style.top = `${rect.top - colorInput.offsetHeight}px`; // Adjust to position it above
    colorInput.style.display = 'block'; // Temporarily display to trigger the picker

    // Trigger the color input click event
    colorInput.click();
});

colorInput.addEventListener('input', (event) => {
    const selectedColor = colorInput.value; // Get the selected color
    const gradient = `linear-gradient(to right, ${selectedColor} 0%, rgb(255, 255, 255) 100%)`; // Create the linear gradient

    const previewElements = document.querySelectorAll('.grp-preview'); // Select all elements with the class 'grp-preview'

    // Update the background image with the gradient for each element
    previewElements.forEach(element => {
        element.style.backgroundImage = gradient;
    });
    const outputDiv = document.getElementById('output');
    if (outputDiv) {
         // Set the text content
        
         outputDiv.style.backgroundImage = gradient; // Apply the gradient as a background
        outputDiv.style.webkitBackgroundClip = 'text'; // Clip the background to the text
        outputDiv.style.webkitTextFillColor = 'transparent';
        outputDiv.style.textShadow = 'none'
    }
    colorInput.style.display = 'none';
    ;// Set a preview color
    // Set a preview color
});





 // The container
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

    // Add drag functionality to the new handler
    addDragFunctionality(newHandler);

    // Append the new handler to the container
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
    dragHandle.addEventListener('click', (e) => {
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



    document.getElementById('tt-fill-texture-repeat-input').addEventListener('change', function() {
        const repeatOption = this.value; // Get the selected value
        const outputDiv = document.getElementById('output'); // Get the target div
        
        // Set the background repeat style based on the selected option
        outputDiv.style.backgroundImage = "url('path/to/your/image.jpg')"; // Replace with the actual image path
        outputDiv.style.backgroundRepeat = repeatOption; // Apply repeat or no-repeat
    });


    document.getElementById('tt-fill-texture-position-input').addEventListener('change', function() {
        const positionOption = this.value;
        console.log(positionOption); // Get the selected value
        const outputDiv = document.getElementById('output'); // Get the target div
        
        // Set the background position style based on the selected option
        outputDiv.style.backgroundPosition = positionOption; // Apply selected position
    });

    

    

    const output1 = document.getElementById('output');
    const sizeInput = document.getElementById('tt-lettering-shadow-size-input');
    const opacityInput = document.getElementById('tt-lettering-shadow-fill-alpha-input');
    const distanceInput = document.getElementById('tt-lettering-shadow-distance-input');
    const angleInput1 = document.getElementById('tt-lettering-shadow-angle-input');
    const colorInput1 = document.getElementById('tt-lettering-shadow-fill-color-input');

    function updateShadow1() {
        console.log("hello");
        const size = parseFloat(sizeInput.value); // Shadow blur size
        const opacity = parseFloat(opacityInput.value); // Shadow opacity
        const distance = parseFloat(distanceInput.value); // Shadow offset distance
        const angle = parseFloat(angleInput1.value) * (Math.PI / 180); // Convert angle to radians
        const color = colorInput1.value; // Shadow color

        // Calculate shadow offsets
        const offsetX = Math.cos(angle) * distance * 100;
        const offsetY = Math.sin(angle) * distance * 100;

        // Convert color to rgba with opacity
        const shadowColor = hexToRgba(color, opacity);

        // Apply the shadow to the text
        output1.style.textShadow = `${offsetX}px ${offsetY}px ${size * 100}px ${shadowColor}`;
    }

    function hexToRgba(hex, alpha) {
        const bigint = parseInt(hex.slice(1), 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }

    // Add event listeners to sliders
    sizeInput.addEventListener('input', updateShadow1);
    opacityInput.addEventListener('input', updateShadow1);
    distanceInput.addEventListener('input', updateShadow1);
    angleInput1.addEventListener('input', updateShadow1);
    colorInput1.addEventListener('input', updateShadow1);

    // Initialize shadow on page load
    


   
   
    
    // Listen for changes on the range slider
    document.getElementById('tt-fill-gradient-angle-input').addEventListener('input', () => {
        const output = document.getElementById('output');
        // Remove the text shadow

        output.style.textShadow = 'none';
    });

    
    
    

  
