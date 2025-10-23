// script.js - Enhanced Version

// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('i');

themeToggle.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.body.setAttribute('data-theme', newTheme);
    themeIcon.className = newTheme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
    
    // Save theme preference
    localStorage.setItem('theme', newTheme);
});

// Load saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.body.setAttribute('data-theme', savedTheme);
    themeIcon.className = savedTheme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
}

// Preloader
const preloader = document.getElementById('preloader');
window.addEventListener('load', () => {
    setTimeout(() => {
        preloader.classList.add('hidden');
    }, 2000);
});

// Particles.js Configuration
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#dc2626"
        },
        shape: {
            type: "circle"
        },
        opacity: {
            value: 0.5,
            random: true
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#dc2626",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "grab"
            },
            onclick: {
                enable: true,
                mode: "push"
            }
        }
    }
});

// Typing Animation
const typed = new Typed('.typing-text', {
    strings: ['Steven Ricky Lie', 'a Fullstack Developer', 'a Data Scientist', 'a Problem Solver'],
    typeSpeed: 70,
    backSpeed: 50,
    backDelay: 2000,
    loop: true
});

// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('mainNav');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    nav.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        nav.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Active navigation highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });

    // Header background effect
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(15, 23, 42, 0.95)';
        if (document.body.getAttribute('data-theme') === 'light') {
            header.style.background = 'rgba(248, 250, 252, 0.95)';
        }
    } else {
        header.style.background = 'rgba(15, 23, 42, 0.9)';
        if (document.body.getAttribute('data-theme') === 'light') {
            header.style.background = 'rgba(248, 250, 252, 0.9)';
        }
    }

    // Back to top button visibility
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    }
});

// Back to top functionality
const backToTop = document.getElementById('backToTop');
if (backToTop) {
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Skill Progress Bars Animation
const skillProgressBars = document.querySelectorAll('.skill-progress');
const skillsSection = document.getElementById('skills');

const animateSkillBars = () => {
    skillProgressBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.width = width + '%';
    });
};

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            
            // Animate skill bars when skills section is in view
            if (entry.target.id === 'skills') {
                animateSkillBars();
            }
        }
    });
}, observerOptions);

// Observe elements for animations
document.querySelectorAll('.project-card, .timeline-item').forEach(el => {
    observer.observe(el);
});
observer.observe(skillsSection);

// Project Data
const projects = [
    {
        id: 1,
        title: "Eternal Bird Nest",
        category: "web",
        description: "International e-commerce platform for premium bird nest products with secure payment integration and inventory management.",
        technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
        image: "https://via.placeholder.com/400x250",
        liveUrl: "https://eternalbirdnest.com/",
        githubUrl: null,
        details: {
            challenge: "Create a sophisticated e-commerce platform for international customers with multi-currency support and secure transactions.",
            solution: "Developed a responsive web application with integrated payment gateways, multi-language support, and real-time inventory tracking.",
            features: ["Product catalog", "Shopping cart", "Payment processing", "Order management", "Admin dashboard"],
            results: "Increased online sales by 40% and expanded customer base to 5 new countries."
        }
    },
    {
        id: 2,
        title: "Uncle Wang Kopi Tiam",
        category: "web",
        description: "Restaurant website with online ordering system, menu management, and customer reservation features.",
        technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
        image: "https://via.placeholder.com/400x250",
        liveUrl: "https://stevericky.github.io/UncleWang-Kopi-tiam/",
        githubUrl: "https://github.com/stevericky/UncleWang-Kopi-tiam",
        details: {
            challenge: "Modernize the restaurant's online presence and streamline the ordering process.",
            solution: "Created a visually appealing website with online ordering capabilities and table reservation system.",
            features: ["Online menu", "Order system", "Table reservation", "Location map", "Contact form"],
            results: "Reduced phone orders by 60% and improved customer satisfaction with streamlined ordering process."
        }
    },
    {
        id: 3,
        title: "Fintech Mobile App",
        category: "mobile",
        description: "Gojek-inspired financial application with payment processing, wallet management, and transaction history.",
        technologies: ["React Native", "Firebase", "Node.js", "MongoDB"],
        image: "https://via.placeholder.com/400x250",
        liveUrl: null,
        githubUrl: "https://github.com/axltavideus/uas_fintech.git",
        details: {
            challenge: "Develop a secure and user-friendly mobile payment application for everyday transactions.",
            solution: "Built a cross-platform mobile app with biometric authentication, QR code payments, and real-time transaction tracking.",
            features: ["Digital wallet", "QR payments", "Bill splitting", "Transaction history", "Security features"],
            results: "Successfully processed over 1,000 transactions during testing phase with zero security incidents."
        }
    },
    {
        id: 4,
        title: "Lifestyle Blog Platform",
        category: "web",
        description: "Comprehensive lifestyle website featuring articles, product reviews, and community engagement features.",
        technologies: ["HTML", "CSS", "JavaScript", "Vue.js", "Express.js"],
        image: "https://via.placeholder.com/400x250",
        liveUrl: null,
        githubUrl: "https://github.com/RandyParker7/FRONTEND_UAS_LIFESTYLE.git",
        details: {
            challenge: "Create an engaging platform for lifestyle content with social features and content management.",
            solution: "Developed a modern blog platform with user authentication, content categorization, and social sharing capabilities.",
            features: ["Content management", "User profiles", "Social sharing", "Comment system", "Search functionality"],
            results: "Attracted over 500 monthly active users and generated 200+ pieces of user-generated content."
        }
    },
    {
        id: 5,
        title: "Gym Management System",
        category: "web",
        description: "Comprehensive gym management system for tracking member activities, schedules, and progress visualization.",
        technologies: ["HTML", "CSS", "JavaScript", "Python", "SQLite"],
        image: "https://via.placeholder.com/400x250",
        liveUrl: "https://stevericky.github.io/Stevenrickylie-535230086/",
        githubUrl: "https://github.com/stevericky/Stevenrickylie-535230086",
        details: {
            challenge: "Streamline gym operations and improve member engagement through digital solutions.",
            solution: "Created a web-based management system with member tracking, class scheduling, and progress analytics.",
            features: ["Member management", "Class scheduling", "Progress tracking", "Payment processing", "Reporting"],
            results: "Reduced administrative workload by 30% and increased member retention by 15%."
        }
    },
     {
        id: 6,
        title: "Skin Classification Research",
        category: "data",
        description: "Research project on skin classification using grayscale, PCA, RGB, and GLCM with MATLAB for image processing.",
        technologies: ["MATLAB", "Image Processing", "Machine Learning", "Statistical Analysis"],
        image: "images/matlab.png",
        liveUrl: null,
        githubUrl: null,
        hasMatlabVisualization: true,
        details: {
            challenge: "Develop accurate skin classification algorithms using various image processing techniques.",
            solution: "Implemented and compared multiple classification methods including grayscale conversion, PCA, RGB analysis, and GLCM texture features.",
            features: ["Image preprocessing", "Feature extraction", "Classification algorithms", "Performance evaluation", "Visualization"],
            results: "Achieved 92% classification accuracy and identified optimal feature combinations for different skin types."
        }
    }
];


// Populate Projects Grid
const projectsGrid = document.querySelector('.projects-grid');
const filterButtons = document.querySelectorAll('.filter-btn');

function renderProjects(filter = 'all') {
    projectsGrid.innerHTML = '';
    
    const filteredProjects = filter === 'all' 
        ? projects 
        : projects.filter(project => project.category === filter);
    
    filteredProjects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.setAttribute('data-category', project.category);
        projectCard.setAttribute('data-aos', 'fade-up');
        
        projectCard.innerHTML = `
            <div class="project-image">
                <div class="project-placeholder">
                    <i class="fas fa-${project.category === 'web' ? 'globe' : project.category === 'mobile' ? 'mobile-alt' : project.category === 'data' ? 'chart-line' : 'code'}"></i>
                </div>
                <div class="project-overlay">
                    <div class="project-links">
                        ${project.liveUrl ? `<a href="${project.liveUrl}" target="_blank" class="project-link"><i class="fas fa-external-link-alt"></i></a>` : ''}
                        ${project.githubUrl ? `<a href="${project.githubUrl}" target="_blank" class="project-link"><i class="fab fa-github"></i></a>` : ''}
                        <button class="project-link view-details" data-project="${project.id}">
                            <i class="fas fa-eye"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tech">
                    ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
                </div>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
    
    // Re-initialize AOS for new elements
    AOS.refresh();
    
    // Add event listeners to view details buttons
    document.querySelectorAll('.view-details').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const projectId = parseInt(button.getAttribute('data-project'));
            openProjectModal(projectId);
        });
    });
}

// Project Filter
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-filter');
        renderProjects(filterValue);
    });
});

// Project Modal
const projectModal = document.getElementById('projectModal');
const closeModal = document.querySelector('.close');

function openProjectModal(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;
    
    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = `
        <h2>${project.title}</h2>
        <p class="project-description">${project.description}</p>
        
        <div class="project-details">
            <div class="detail-section">
                <h3><i class="fas fa-bullseye"></i> Challenge</h3>
                <p>${project.details.challenge}</p>
            </div>
            
            <div class="detail-section">
                <h3><i class="fas fa-lightbulb"></i> Solution</h3>
                <p>${project.details.solution}</p>
            </div>
            
            <div class="detail-section">
                <h3><i class="fas fa-star"></i> Key Features</h3>
                <ul>
                    ${project.details.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>
            
            <div class="detail-section">
                <h3><i class="fas fa-chart-line"></i> Results</h3>
                <p>${project.details.results}</p>
            </div>
        </div>
        
        <div class="project-technologies">
            <h3>Technologies Used</h3>
            <div class="tech-tags">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
        </div>
        
        <div class="project-links-modal">
            ${project.liveUrl ? `<a href="${project.liveUrl}" target="_blank" class="btn btn-primary"><i class="fas fa-external-link-alt"></i> Live Demo</a>` : ''}
            ${project.githubUrl ? `<a href="${project.githubUrl}" target="_blank" class="btn btn-secondary"><i class="fab fa-github"></i> View Code</a>` : ''}
        </div>
    `;
    
    projectModal.style.display = 'block';
}

closeModal.addEventListener('click', () => {
    projectModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === projectModal) {
        projectModal.style.display = 'none';
    }
});

// Initialize projects on load
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
});