// Get elements
const loginBtn = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');
const closeBtn = document.querySelector('.close-modal');

// Open Modal
loginBtn.addEventListener('click', () => {
    loginModal.style.display = 'flex';
});

// Close Modal when clicking (X)
closeBtn.addEventListener('click', () => {
    loginModal.style.display = 'none';
});

// Close Modal when clicking outside the box
window.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        loginModal.style.display = 'none';
    }
});

// Handle Form Submission
document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Login attempted! (In a real site, this would connect to a database).');
});


function checkAuth() {
    const email = document.getElementById('loginEmail').value;
    const pass = document.getElementById('loginPass').value;

    if (email === "user@test.com" && pass === "123") {
        // Hide the gate and show the site
        document.getElementById('auth-gate').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
        
        // Remove blur from body if you added it
        document.body.style.overflow = 'auto'; 
    } else {
        alert("Access Denied");
    }
}