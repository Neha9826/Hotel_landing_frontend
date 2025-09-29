// Smooth scroll for all nav links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
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
