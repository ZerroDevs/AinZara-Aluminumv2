/**
 * AinZara-Aluminum - Main Interactivity Script
 * Handles Products Tabs / Accordion switching and Gallery Lightbox
 */

document.addEventListener('DOMContentLoaded', function () {
  // ==========================================
  // 1. Products Section Accordion / Tab Switch
  // ==========================================
  const triggers = document.querySelectorAll('.accordion-trigger a');
  const contents = document.querySelectorAll('.accordion-content');

  triggers.forEach(function (trigger) {
    trigger.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('aria-controls');
      if (!targetId) return;

      // Update trigger active states
      triggers.forEach(function (t) {
        t.classList.remove('active');
        t.setAttribute('aria-expanded', 'false');
      });

      this.classList.add('active');
      this.setAttribute('aria-expanded', 'true');

      // Update content visibility
      contents.forEach(function (content) {
        if (content.id === targetId) {
          content.style.display = 'flex';
          content.classList.remove('animation-initial');
        } else {
          content.style.display = 'none';
          content.classList.add('animation-initial');
        }
      });
    });
  });

  // ==========================================
  // 2. Responsive Gallery Lightbox Modal
  // ==========================================
  const galleryLinks = Array.from(document.querySelectorAll('.ed-gallery-thumb a'));

  if (galleryLinks.length > 0) {
    // Create Lightbox DOM elements
    const lightbox = document.createElement('div');
    lightbox.id = 'az-lightbox';
    lightbox.style.cssText = `
      display: none;
      position: fixed;
      top: 0; left: 0; width: 100vw; height: 100vh;
      background: rgba(0, 0, 0, 0.88);
      z-index: 999999;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      backdrop-filter: blur(4px);
      transition: opacity 0.25s ease;
      opacity: 0;
    `;

    lightbox.innerHTML = `
      <div style="position: relative; max-width: 90vw; max-height: 88vh; display: flex; align-items: center; justify-content: center;">
        <img id="az-lightbox-img" src="" alt="" style="max-width: 100%; max-height: 85vh; border-radius: 8px; box-shadow: 0 10px 30px rgba(0,0,0,0.5); object-fit: contain;"/>
        <button id="az-lightbox-close" style="position: absolute; top: -45px; right: -10px; background: transparent; border: none; color: #fff; font-size: 36px; cursor: pointer; line-height: 1; padding: 4px 10px;">&times;</button>
        <button id="az-lightbox-prev" style="position: absolute; left: -50px; background: rgba(255,255,255,0.2); border: none; color: #fff; font-size: 28px; width: 44px; height: 44px; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center;">&#10094;</button>
        <button id="az-lightbox-next" style="position: absolute; right: -50px; background: rgba(255,255,255,0.2); border: none; color: #fff; font-size: 28px; width: 44px; height: 44px; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center;">&#10095;</button>
      </div>
    `;

    document.body.appendChild(lightbox);

    const lightboxImg = document.getElementById('az-lightbox-img');
    const closeBtn = document.getElementById('az-lightbox-close');
    const prevBtn = document.getElementById('az-lightbox-prev');
    const nextBtn = document.getElementById('az-lightbox-next');

    let currentLinks = [];
    let currentIndex = 0;

    function openLightbox(links, index) {
      currentLinks = links;
      currentIndex = index;
      lightboxImg.src = currentLinks[currentIndex].getAttribute('href');
      lightbox.style.display = 'flex';
      setTimeout(() => { lightbox.style.opacity = '1'; }, 10);
      document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
      lightbox.style.opacity = '0';
      setTimeout(() => {
        lightbox.style.display = 'none';
        lightboxImg.src = '';
        document.body.style.overflow = '';
      }, 250);
    }

    function showNext() {
      if (currentLinks.length === 0) return;
      currentIndex = (currentIndex + 1) % currentLinks.length;
      lightboxImg.src = currentLinks[currentIndex].getAttribute('href');
    }

    function showPrev() {
      if (currentLinks.length === 0) return;
      currentIndex = (currentIndex - 1 + currentLinks.length) % currentLinks.length;
      lightboxImg.src = currentLinks[currentIndex].getAttribute('href');
    }

    // Attach click to all gallery links
    document.querySelectorAll('.ed-gallery').forEach(gallery => {
      const items = Array.from(gallery.querySelectorAll('.ed-gallery-thumb a'));
      items.forEach((item, idx) => {
        item.addEventListener('click', function (e) {
          e.preventDefault();
          openLightbox(items, idx);
        });
      });
    });

    closeBtn.addEventListener('click', closeLightbox);
    nextBtn.addEventListener('click', showNext);
    prevBtn.addEventListener('click', showPrev);

    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });

    document.addEventListener('keydown', function (e) {
      if (lightbox.style.display === 'flex') {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') showNext();
        if (e.key === 'ArrowLeft') showPrev();
      }
    });
  }

  // ==========================================
  // 3. Smooth Scroll for Navigation Links
  // ==========================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href && href.length > 1 && !href.startsWith('#!')) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
});
