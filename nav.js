document.querySelector('.nav-toggle').onclick = () => {
  document.querySelector('.nav-links').classList.toggle('active');
};
document.addEventListener("DOMContentLoaded", () => {
  const thumbs = document.querySelectorAll('.flyer-thumb');
  const modal = document.getElementById('flyer-modal');
  const modalImg = document.getElementById('flyer-full');
  const closeBtn = document.querySelector('.close');

  thumbs.forEach(thumb => {
    thumb.onclick = () => {
      modal.style.display = "block";
      modalImg.src = thumb.src;
    };
  });

  closeBtn.onclick = () => {
    modal.style.display = "none";
  };

  modal.onclick = (e) => {
    if (e.target === modal) modal.style.display = "none";
  };
});
// Auto-highlight active nav link
const path = window.location.pathname;

document.querySelectorAll('.nav-links a').forEach(link => {
  link.classList.remove('active');
  const href = link.getAttribute('href');
  
  if (href === 'index.html' && (path === '/' || path.endsWith('/') || path.endsWith('/index.html'))) {
    link.classList.add('active');
  } else if (href !== 'index.html' && path.endsWith(href)) {
    link.classList.add('active');
  }
});