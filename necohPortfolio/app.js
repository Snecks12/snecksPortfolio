document.addEventListener('DOMContentLoaded', function() {
    // Navigation functionality
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links and sections
            navLinks.forEach(l => l.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');

            // Show corresponding section
            const sectionId = this.getAttribute('data-section');
            document.getElementById(sectionId).classList.add('active');
            
            // Reset and animate progress bars if showing skill or stats
            if (sectionId === 'skill' ||  sectionId === 'stats') {
                resetAndAnimateProgressBars();
            }
        });
    });
    
    // Function to reset and animate progress bars
    function resetAndAnimateProgressBars() {
        const progressFills = document.querySelectorAll('.progress-fill');
        
        // First reset all progress bars to 0
        progressFills.forEach(fill => {
            fill.style.width = '0';
            fill.textContent = '0%';
        });
        
        // Then animate them after a small delay to allow reset to complete
        setTimeout(() => {
            progressFills.forEach(fill => {
                const percent = fill.getAttribute('data-percent');
                fill.style.width = percent + '%';
                fill.textContent = percent + '%';
            });
        }, 50);
    }
});


        
const textElement = document.getElementById('typing-text');
const textToType = "I'm a Web Developer";
let index = 0;
let isDeleting = false;
let typingSpeed = 100;
let pauseBetweenCycles = 1000; // 2 seconds pause before restarting

function typeText() {
    const currentText = textElement.textContent;
    
    if (!isDeleting && index < textToType.length) {
        // Typing phase
        textElement.textContent = textToType.substring(0, index + 1);
        index++;
        typingSpeed = 100; // Normal typing speed
    } else if (isDeleting && index > 0) {
        // Deleting phase
        textElement.textContent = textToType.substring(0, index - 1);
        index--;
        typingSpeed = 50; // Faster deletion speed
    } else {
        // Switch between typing and deleting
        isDeleting = !isDeleting;
        
        // If we just finished typing, pause before deleting
        if (!isDeleting) {
            typingSpeed = pauseBetweenCycles;
        }
    }
    
    setTimeout(typeText, typingSpeed);
}

// Start typing automatically when page loads
window.addEventListener('load', typeText);

//form//
emailjs.init('PlHqZk2iiAKyUFtyL'); // Replace with your EmailJS user ID
        
        document.getElementById('contactForm').addEventListener('submit', function(event) {
            event.preventDefault();
            
            const status = document.getElementById('status');
            status.className = '';
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                message: document.getElementById('message').value
            };

            let bott = document.getElementsByClassName("pindut");
           
            // Send email using EmailJS
            emailjs.send('service_kmpvv6o', 'template_aktsple', formData)
                .then(function(response) {
                    alert('Message sent successfully!');
                    status.className = 'success';
                    document.getElementById('contactForm').reset();
                }, function(error) {
                    alert('Failed to send message. Please try again');
                    status.className = 'error';
                    console.error('EmailJS Error:', error);
                });
        });



