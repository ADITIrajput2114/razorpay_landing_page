// Minimal interactivity: mobile menu, modal, and simple analytics placeholder
document.addEventListener('DOMContentLoaded', function(){
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  const modal = document.getElementById('modal');
  const watchBtn = document.getElementById('watchBtn');
  const closeModal = document.getElementById('closeModal');
  const demoBtn = document.getElementById('demoBtn');

  hamburger && hamburger.addEventListener('click', function(){
    if(navLinks.style.display === 'flex'){
      navLinks.style.display = '';
    } else {
      navLinks.style.display = 'flex';
      navLinks.style.flexDirection = 'column';
      navLinks.style.position = 'absolute';
      navLinks.style.right = '18px';
      navLinks.style.top = '64px';
      navLinks.style.background = 'rgba(3,7,18,0.95)';
      navLinks.style.padding = '10px';
      navLinks.style.borderRadius = '10px';
    }
  });

  watchBtn && watchBtn.addEventListener('click', function(){
    modal.setAttribute('aria-hidden','false');
    // analytics placeholder
    console.log('Demo watched (placeholder)');
  });

  demoBtn && demoBtn.addEventListener('click', function(){
    alert('Demo request submitted — we will contact you (mock).');
  });

  closeModal && closeModal.addEventListener('click', function(){
    modal.setAttribute('aria-hidden','true');
  });

  // Close modal on outside click
  modal && modal.addEventListener('click', function(e){
    if(e.target === modal) modal.setAttribute('aria-hidden','true');
  });

  // Accessibility: ESC to close modal
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape') modal.setAttribute('aria-hidden','true');
  });
});
