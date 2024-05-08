function run() {
    let htmlCode = document.getElementById("html-code").value;
    let cssCode = document.getElementById("css-code").value;
    let jsCode = document.getElementById("js-code").value;
    let output = document.getElementById("output");
    output.contentDocument.body.innerHTML = htmlCode + "<style>" + cssCode + "</style>";
    output.contentWindow.eval(jsCode);
}

function load() {
    console.log("Loading code...");
    let htmlCode = localStorage.getItem("html-code");
    let cssCode = localStorage.getItem("css-code");
    let jsCode = localStorage.getItem("js-code");
    console.log("Retrieved HTML code:", htmlCode);
    console.log("Retrieved CSS code:", cssCode);
    console.log("Retrieved JS code:", jsCode);
    document.getElementById("html-code").value = htmlCode;
    document.getElementById("css-code").value = cssCode;
    document.getElementById("js-code").value = jsCode;
}


function save() {
    let htmlCode = document.getElementById("html-code").value;
    let cssCode = document.getElementById("css-code").value;
    let jsCode = document.getElementById("js-code").value;

    // Save code to local storage
    localStorage.setItem("html-code", htmlCode);
    localStorage.setItem("css-code", cssCode);
    localStorage.setItem("js-code", jsCode);

    // Create blobs for each file
    let htmlBlob = new Blob([htmlCode], { type: 'text/html' });
    let cssBlob = new Blob([cssCode], { type: 'text/css' });
    let jsBlob = new Blob([jsCode], { type: 'text/javascript' });

    // Create download links
    let htmlLink = document.createElement("a");
    htmlLink.href = URL.createObjectURL(htmlBlob);
    htmlLink.download = "index.html";
    document.body.appendChild(htmlLink);
    htmlLink.click();
    document.body.removeChild(htmlLink);

    let cssLink = document.createElement("a");
    cssLink.href = URL.createObjectURL(cssBlob);
    cssLink.download = "styles.css";
    document.body.appendChild(cssLink);
    cssLink.click();
    document.body.removeChild(cssLink);

    let jsLink = document.createElement("a");
    jsLink.href = URL.createObjectURL(jsBlob);
    jsLink.download = "script.js";
    document.body.appendChild(jsLink);
    jsLink.click();
    document.body.removeChild(jsLink);
}

function clearCode() {
    document.getElementById("html-code").value = "";
    document.getElementById("css-code").value = "";
    document.getElementById("js-code").value = "";
    let output = document.getElementById("output");
    output.contentDocument.body.innerHTML = "";
    localStorage.clear();
   
}

function newProject() {
    clearCode(); // Clear existing code
    incrementProjectCounter(); // Increment project counter
}

// Initialize project counter
let projectCounter = 0;

// Function to increment project counter and update display
function incrementProjectCounter() {
    projectCounter++;
    document.getElementById("project-counter").textContent = "New Projects: " + projectCounter;
}

