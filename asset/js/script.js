document.addEventListener('DOMContentLoaded', () => {
    // Initialize OpenCV.js canvas
    const canvas = document.getElementById('canvasOutput');
    const ctx = canvas.getContext('2d');

    // Load an initial blank image
    let src = new cv.Mat(canvas.height, canvas.width, cv.CV_8UC3, new cv.Scalar(255, 255, 255));  // White color initialization
  // Initialize with black (zero) color
    let dst = new cv.Mat();  // If it's going to be used later for storing results
    

    // Fill the canvas with white
    cv.rectangle(src, new cv.Point(0, 0), new cv.Point(canvas.width, canvas.height), [255, 255, 255, 255], -1);
    cv.imshow('canvasOutput', src);

    // Text-related properties
    const defaultText = "MyTextStudio";
    let text = defaultText;
    let textColor = new cv.Scalar(0, 0, 0);
    let fontSize = 1;
    let fontWeight = cv.FONT_HERSHEY_SIMPLEX;
    let textAlign = 'center';
    let letterSpacing = 0;
    let lineHeight = 1;

    // Helper function to render text
    function renderText() {
        src.setTo(new cv.Scalar(255, 255, 255, 255)); // Clear canvas

        const x = textAlign === 'center' ? canvas.width / 2 : (textAlign === 'right' ? canvas.width - 50 : 50);
        const lines = text.split('\n');
        let y = 100;
        lines.forEach((line, index) => {
            let currentX = x;
            line.split('').forEach((char) => {
                cv.putText(src, char, new cv.Point(currentX, y + index * lineHeight * 20), fontWeight, fontSize, textColor, 2);
                currentX += letterSpacing * 10;
            });
        });
        cv.imshow('canvasOutput', src);
    }

    // Initialize controls
    document.getElementById('tt-text-textarea').addEventListener('input', (e) => {
        text = e.target.value || defaultText;
        renderText();
    });

    document.getElementById('tt-font-size-input').addEventListener('input', (e) => {
        fontSize = parseFloat(e.target.value) / 10;
        renderText();
    });

    document.getElementById('tt-fill-color-input').addEventListener('input', (e) => {
        const hex = e.target.value;
        textColor = new cv.Scalar(
            parseInt(hex.substr(1, 2), 16),
            parseInt(hex.substr(3, 2), 16),
            parseInt(hex.substr(5, 2), 16)
        );
        renderText();
    });

    document.querySelectorAll('.tt-align-list li').forEach((alignBtn) => {
        alignBtn.addEventListener('click', () => {
            textAlign = alignBtn.getAttribute('data-id');
            renderText();
        });
    });

    document.querySelector('[data-selected="bold"]').addEventListener('click', () => {
        fontWeight = fontWeight === cv.FONT_HERSHEY_SIMPLEX ? cv.FONT_HERSHEY_DUPLEX : cv.FONT_HERSHEY_SIMPLEX;
        renderText();
    });

    document.getElementById('tt-letter-spacing-input').addEventListener('input', (e) => {
        letterSpacing = parseFloat(e.target.value);
        renderText();
    });

    document.getElementById('tt-line-height-input').addEventListener('input', (e) => {
        lineHeight = parseFloat(e.target.value);
        renderText();
    });

    document.getElementById('tt-rotate-input').addEventListener('input', (e) => {
        let angle = parseFloat(e.target.value);
        let center = new cv.Point(src.cols / 2, src.rows / 2);
        let matrix = cv.getRotationMatrix2D(center, angle, 1);
        cv.warpAffine(src, dst, matrix, new cv.Size(src.cols, src.rows), cv.INTER_LINEAR, cv.BORDER_CONSTANT);
        cv.imshow('canvasOutput', dst);
        matrix.delete();
    });

    document.getElementById('tt-fill-gradient-active-input').addEventListener('change', (e) => {
        if (e.target.checked) {
            let gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
            gradient.addColorStop(0, 'red');
            gradient.addColorStop(1, 'yellow');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        } else {
            renderText();
        }
    });

    document.getElementById('tt-fill-gradient-angle-input').addEventListener('input', (e) => {
        if (document.getElementById('tt-fill-gradient-active-input').checked) {
            const angle = parseFloat(e.target.value);
            const gradient = ctx.createLinearGradient(0, 0, Math.cos(angle) * canvas.width, Math.sin(angle) * canvas.height);
            gradient.addColorStop(0, 'red');
            gradient.addColorStop(1, 'yellow');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
    });

    document.getElementById('tt-background-fill-image-import-input').addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const img = new Image();
                img.onload = () => {
                    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                };
                img.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });

    document.getElementById('tt-icon-size-input').addEventListener('input', (e) => {
        const size = parseFloat(e.target.value);
        const img = new Image();
        img.onload = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, 50, 50, size, size);
            renderText();
        };
        img.src = 'icon.png'; // Replace with dynamic image loading logic
    });

    document.getElementById('tt-icon-rotate-input').addEventListener('input', (e) => {
        const angle = parseFloat(e.target.value);
        const img = new Image();
        img.onload = () => {
            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.save();
            ctx.translate(centerX, centerY);
            ctx.rotate((angle * Math.PI) / 180);
            ctx.drawImage(img, -img.width / 2, -img.height / 2);
            ctx.restore();
            renderText();
        };
        img.src = 'icon.png'; // Replace with dynamic image loading logic
    });

    document.getElementById('tt-download-format-list').addEventListener('click', (e) => {
        if (e.target.tagName === 'LI') {
            const format = e.target.dataset.format;
            const canvasElement = document.querySelector('#canvasOutput');

            if (format === 'png' || format === 'jpg') {
                const link = document.createElement('a');
                link.href = canvasElement.toDataURL(`image/${format}`);
                link.download = `output.${format}`;
                link.click();
            } else if (format === 'textstudio') {
                const jsonData = {
                    text: text,
                    fontSize: fontSize,
                    textAlign: textAlign,
                    textColor: textColor,
                };
                const blob = new Blob([JSON.stringify(jsonData, null, 2)], { type: 'application/json' });
                const link = document.createElement('a');
                link.href = URL.createObjectURL(blob);
                link.download = 'output.textstudio';
                link.click();
            }
        }
    });

    // Final clean-up on page unload
    window.addEventListener('beforeunload', () => {
        src.delete();
        dst.delete();
    });
});
