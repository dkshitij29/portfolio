// Function to fetch visit count
async function fetchVisitCount() {
    try {
        //console.log('Fetching visit count...');
        const response = await fetch('https://lm3yhyeex2.execute-api.us-east-2.amazonaws.com/prod/visit');
        //console.log('Response received:', response);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        //console.log('Data received:', data);
        
        const visitCountElement = document.getElementById('visit-count');
        const visitCountElementMobile = document.getElementById('visit-count-mobile');

        if (visitCountElement) {
            visitCountElement.innerText = data.visitCount;
        } else {
            console.error('Element with ID "visit-count" not found.');
        }

        if (visitCountElementMobile) {
            visitCountElementMobile.innerText = data.visitCount;
        } else {
            console.error('Element with ID "visit-count-mobile" not found.');
        }
    } catch (error) {
        console.error('Error fetching visit count:', error);
        const visitCountElement = document.getElementById('visit-count');
        const visitCountElementMobile = document.getElementById('visit-count-mobile');

        if (visitCountElement) {
            visitCountElement.innerText = 'Error';
        }
        if (visitCountElementMobile) {
            visitCountElementMobile.innerText = 'Error';
        }
    }
}

function toggleNav() {
    var x = document.getElementById("myHeaderNav");
    if (x.className === "header-nav") {
        x.className += " responsive";
        fetchVisitCount();  // Fetch the visit count when the menu is opened
    } else {
        x.className = "header-nav";
    }

    
}

function toggleNav_mode(){
    // Toggle dark-mode class on the body element
    document.body.classList.toggle('dark-mode');
    
    // Toggle dark-mode class on specific elements
    document.querySelectorAll('header, nav, .container, .nested-container, .work-experience-container, .project-box, footer, .skills-container, .skill').forEach(element => {
        element.classList.toggle('dark-mode');
    });

    // Toggle dark-mode class on download links and their hover states
    document.querySelectorAll('nav a.download-link, nav a.download-link:hover, footer a.download-link, footer a.download-link:hover').forEach(element => {
        element.classList.toggle('dark-mode-link');
    });
}


// Check the saved mode in localStorage on page load
window.onload = function() {
    fetchVisitCount(); // Fetch visit count when the page loads
    if (localStorage.getItem('mode') === 'dark') {
        document.body.classList.add('dark-mode');
    }
};
