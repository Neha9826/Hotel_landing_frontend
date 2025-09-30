const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('active');
  hamburger.classList.toggle('active');
});

 document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.querySelector('.navbar-toggler'); 
  const navMenu = document.querySelector('.navbar-collapse');  
  const closeBtn = document.querySelector('.nav-close');       

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', function (e) {
      e.preventDefault();
      navMenu.classList.add('show');
      document.body.style.overflow = "hidden"; // prevent background scroll
    });
  }

  if (closeBtn && navMenu) {
    closeBtn.addEventListener('click', function (e) {
      e.preventDefault();
      navMenu.classList.remove('show');
      document.body.style.overflow = ""; // restore background scroll
    });
  }
});

// Smooth scroll for all nav links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      nav.classList.remove('active');
      hamburger.classList.remove('active'); // Close menu on click
    }
  });
});


// // Smooth scroll for all nav links
// document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
//   anchor.addEventListener('click', function (e) {
//     e.preventDefault();
//     const target = document.querySelector(this.getAttribute('href'));
//     if (target) {
//       target.scrollIntoView({ behavior: 'smooth' });
//     }
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  const queryForm = document.getElementById("queryForm");
  if (queryForm) {
    queryForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thank you! Your query has been submitted.");
      queryForm.reset();
    });
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("simpleSlider");
  if (!slider) return;

  const slides = slider.querySelector(".slides");
  const slideItems = slider.querySelectorAll(".slide");
  const prevBtn = slider.querySelector(".prev");
  const nextBtn = slider.querySelector(".next");
  let index = 0;
  let autoTimer = null;

  function showSlide(i) {
    index = (i + slideItems.length) % slideItems.length;
    slides.style.transform = `translateX(-${index * 100}%)`;
  }

  function next() { showSlide(index + 1); }
  function prev() { showSlide(index - 1); }

  nextBtn.addEventListener("click", () => { next(); resetAuto(); });
  prevBtn.addEventListener("click", () => { prev(); resetAuto(); });

  // Auto-play
  function startAuto() {
    stopAuto();
    autoTimer = setInterval(next, 3000);
  }
  function stopAuto() {
    if (autoTimer) clearInterval(autoTimer);
  }
  function resetAuto() {
    stopAuto();
    startAuto();
  }

  // Drag/swipe
  let startX = 0;
  let dragging = false;
  slider.addEventListener("mousedown", (e) => {
    dragging = true;
    startX = e.clientX;
    stopAuto();
  });
  slider.addEventListener("mouseup", (e) => {
    if (!dragging) return;
    dragging = false;
    if (e.clientX - startX > 50) prev();
    else if (e.clientX - startX < -50) next();
    resetAuto();
  });

  // Touch for mobile
  slider.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
    stopAuto();
  });
  slider.addEventListener("touchend", (e) => {
    const diff = e.changedTouches[0].clientX - startX;
    if (diff > 50) prev();
    else if (diff < -50) next();
    resetAuto();
  });

  // Init
  showSlide(0);
  startAuto();
});


// Booking Modal
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('bookingModal');
  const bookBtns = document.querySelectorAll('.book-btn'); // Navbar Book Now
  const closeBtn = document.querySelector('.close-btn');

  // Open modal when any "Book Now" button is clicked
  bookBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.style.display = 'flex'; // Show modal
    });
  });

  // Close modal when "X" is clicked
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Close modal when clicking outside modal content
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

  // Booking form submission
  const bookingForm = document.getElementById('bookingForm');
  bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Booking request submitted successfully!');
    modal.style.display = 'none';
    bookingForm.reset();
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('bookingModal');
  const bookBtns = document.querySelectorAll('.book-btn'); // Navbar Book Now
  const closeBtn = document.querySelector('.close-btn');

  // Open modal when any "Book Now" button is clicked
  bookBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.style.display = 'flex'; // Show modal
    });
  });

  // Close modal when "X" is clicked
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Close modal when clicking outside modal content
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

  // Booking form submission
  const bookingForm = document.getElementById('bookingForm');
  bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Booking request submitted successfully!');
    modal.style.display = 'none';
    bookingForm.reset();
  });
});
