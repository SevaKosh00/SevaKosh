// Number animation for statistics block
function animateStats() {
  const statNumbers = document.querySelectorAll('.stat-number');
  const speed = 200; // Animation speed (lower is faster)
  
  statNumbers.forEach(stat => {
    const target = parseInt(stat.getAttribute('data-target'));
    const count = parseInt(stat.innerText);
    const increment = target / speed;
    
    if (count < target) {
      stat.innerText = Math.ceil(count + increment);
      setTimeout(animateStats, 1);
    } else {
      stat.innerText = target;
    }
  });
}

// Intersection Observer for scroll trigger
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateStats();
      statsObserver.unobserve(entry.target); // Only animate once
    }
  });
}, {threshold: 0.5});

// Observe statistics block
const statsBlock = document.querySelector('.statistics-block');
if (statsBlock) {
  statsObserver.observe(statsBlock);
}
// Select the menu button and expanded menu elements
const menuButton = document.getElementById('menu-button'); // The hamburger menu button
const expandedMenu = document.getElementById('expanded-menu'); // The expandable menu

// Add a click event listener to the menu button
menuButton.addEventListener('click', function () {
  // Toggle the 'active' class on the expanded menu
  expandedMenu.classList.toggle('active');

  // Optional: Rotate the menu button icon for visual feedback
  menuButton.classList.toggle('rotate'); // Adds/removes a rotation effect to the button
});

// Make entire expanded menu items clickable
const menuItems = document.querySelectorAll('#expanded-menu li');
menuItems.forEach(item => {
  item.addEventListener('click', function(e) {
    const link = this.querySelector('a');
    if (link) {
      window.location.href = link.href;
    }
  });
});

// Select all quote blocks
const quoteBlocks = document.querySelectorAll('.quote-block');

// Create an Intersection Observer
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add the 'animate' class when the block comes into view
        entry.target.classList.add('animate');
      } else {
        // Remove the 'animate' class when the block leaves the viewport
        entry.target.classList.remove('animate');
      }
    });
  },
  {
    threshold: 0.5, // Trigger when 50% of the block is visible
  }
);

// Observe each quote block
quoteBlocks.forEach((block) => {
  observer.observe(block);
});
