// Mobile Menu

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Counter Animation

const counters = document.querySelectorAll(".counter");

const animateCounter = (counter) => {

    const target = +counter.dataset.target;

    let count = 0;

    const updateCounter = () => {

        const increment = target / 100;

        if(count < target){
            count += increment;
            counter.innerText = Math.floor(count);
            requestAnimationFrame(updateCounter);
        }
        else{
            counter.innerText = target;
        }
    };

    updateCounter();
};

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            animateCounter(entry.target);

            observer.unobserve(entry.target);
        }
    });

},{
    threshold:0.5
});

counters.forEach(counter => {
    observer.observe(counter);
});

// Navbar Background on Scroll

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){
        navbar.style.background = "rgba(11,17,32,0.95)";
    }
    else{
        navbar.style.background = "rgba(11,17,32,0.7)";
    }
});