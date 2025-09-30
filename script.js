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



async function fetchGoogleReviews() {
  const placeId = "YOUR_PLACE_ID"; // Replace with your retreat's Google Place ID
  const apiKey = "YOUR_GOOGLE_API_KEY"; // Replace with your API key

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews&key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.result && data.result.reviews) {
      const reviewsContainer = document.querySelector('.reviews-container');
      reviewsContainer.innerHTML = ''; // Clear placeholder reviews

      data.result.reviews.forEach(review => {
        const stars = '★'.repeat(Math.floor(review.rating)) + '☆'.repeat(5 - Math.floor(review.rating));

        const reviewCard = `
          <div class="review-card">
            <h3 class="reviewer-name">${review.author_name}</h3>
            <div class="review-rating">${stars}</div>
            <p class="review-text">"${review.text.substring(0, 150)}..."</p>
          </div>
        `;

        reviewsContainer.insertAdjacentHTML('beforeend', reviewCard);
      });
    }
  } catch (error) {
    console.error("Error fetching reviews:", error);
  }
}

fetchGoogleReviews();

const container = document.querySelector('.butterflies');

// Example butterfly images (replace with your corrected paths)
const butterflies = [
  ['img/butterfly-open1.png', 'img/butterfly-close1.png'],
  ['img/butterfly-open2.png', 'img/butterfly-close2.png'],
  ['img/butterfly-open3.png', 'img/butterfly-close3.png']
];

function createButterfly() {
  const b = document.createElement('div');
  b.classList.add('butterfly');

  // Random butterfly type
  const typeIndex = Math.floor(Math.random() * butterflies.length);
  const [openImg, closedImg] = butterflies[typeIndex];
  b.dataset.open = openImg;
  b.dataset.closed = closedImg;
  b.style.backgroundImage = `url(${openImg})`;

  // Random size
  const size = Math.random() * 30 + 40; // 40px - 70px
  b.style.width = size + 'px';
  b.style.height = size + 'px';

  // Random spawn position along screen edges
  const edges = ['top', 'bottom', 'left', 'right'];
  const spawnEdge = edges[Math.floor(Math.random() * edges.length)];

  let startX, startY, endX, endY;

  switch (spawnEdge) {
    case 'top':
      startX = Math.random() * 100;
      startY = -10;
      endX = Math.random() * 100;
      endY = 110;
      break;
    case 'bottom':
      startX = Math.random() * 100;
      startY = 110;
      endX = Math.random() * 100;
      endY = -10;
      break;
    case 'left':
      startX = -10;
      startY = Math.random() * 100;
      endX = 110;
      endY = Math.random() * 100;
      break;
    case 'right':
      startX = 110;
      startY = Math.random() * 100;
      endX = -10;
      endY = Math.random() * 100;
      break;
  }

  b.style.left = startX + 'vw';
  b.style.top = startY + 'vh';

  container.appendChild(b);

  // Wing flap
  let flap = true;
  const flapInterval = setInterval(() => {
    b.style.backgroundImage = flap ? `url(${openImg})` : `url(${closedImg})`;
    flap = !flap;
  }, 200);

  // Animate along curved path
  const duration = Math.random() * 10 + 10; // 10-20s
  const curveX = Math.random() * 30 - 15;
  const curveY = Math.random() * 30 - 15;

  let startTime = null;

  function animate(time) {
    if (!startTime) startTime = time;
    const elapsed = (time - startTime) / 1000;
    const progress = elapsed / duration;

    if (progress < 1) {
      // Linear interpolation + sine curve for natural movement
      const x = startX + (endX - startX) * progress + Math.sin(progress * Math.PI * 2) * curveX;
      const y = startY + (endY - startY) * progress + Math.sin(progress * Math.PI * 2) * curveY;
      const rotation = Math.sin(progress * Math.PI * 4) * 15;
      b.style.transform = `translate(${x - startX}vw, ${y - startY}vh) rotate(${rotation}deg)`;
      requestAnimationFrame(animate);
    } else {
      clearInterval(flapInterval);
      b.remove();
    }
  }

  requestAnimationFrame(animate);
}

// Spawn 3–5 butterflies every 2-3 seconds
setInterval(() => {
  const count = Math.floor(Math.random() * 3) + 3;
  for (let i = 0; i < count; i++) {
    createButterfly();
  }
}, 2500);
