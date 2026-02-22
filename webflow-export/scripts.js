/* ============================================
   OptiGrowth Static - Scripts
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* ------------------------------------------
     1. Scroll-reveal (Intersection Observer)
     ------------------------------------------ */
  const revealEls = document.querySelectorAll('.scroll-reveal');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    // Fallback: reveal everything immediately
    revealEls.forEach(function (el) { el.classList.add('revealed'); });
  }

  /* ------------------------------------------
     2. Smooth scroll for CTA buttons
     ------------------------------------------ */
  var ctaButtons = document.querySelectorAll('.btn-cta-scroll');
  ctaButtons.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      var target = document.getElementById('typeform-section');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  /* ------------------------------------------
     3. Slack image modal
     ------------------------------------------ */
  var modal = document.getElementById('slack-modal');
  var modalImg = document.getElementById('slack-modal-img');
  var modalClose = document.getElementById('slack-modal-close');
  var modalBackdrop = modal;

  // Open modal on image click
  var slackImages = document.querySelectorAll('.slack-img');
  slackImages.forEach(function (img) {
    img.addEventListener('click', function () {
      modalImg.src = this.src;
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  // Close modal
  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', function (e) {
      if (e.target === modalBackdrop) closeModal();
    });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeModal();
  });

  /* ------------------------------------------
     4. Footer dynamic year
     ------------------------------------------ */
  var yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

});
