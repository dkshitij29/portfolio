/*
// Function to fetch visit count
async function fetchVisitCount() {
    try {
        const response = await fetch('https://lm3yhyeex2.execute-a  pi.us-east-2.amazonaws.com/prod/visit');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        document.getElementById('visit-count').innerText = data.visitCount;
        //document.getElementById('loading').style.display = 'none'; // Hide loading indicator
        document.getElementById('main-content').style.display = 'block'; // Show main content
    } catch (error) {
        console.error('Error fetching visit count:', error);
        document.getElementById('visit-count').innerText = 'Error';
    }
}

// Fetch visit count when the page loads
window.onload = fetchVisitCount;
*/
// Function to fetch visit count// Function to fetch visit count
async function fetchVisitCount() {
    try {
        console.log('Fetching visit count...');
        const response = await fetch('https://lm3yhyeex2.execute-api.us-east-2.amazonaws.com/prod/visit');
        console.log('Response received:', response);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Data received:', data);
        // Update the visitor count in the HTML
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

// Fetch visit count when the page loads
window.onload = fetchVisitCount;
