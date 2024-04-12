if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('/sw.js');
    });
  };
  function itchio() {
    window.location.href = "https://blooshed-developer.itch.io/"
  };
  function github() {
    window.location.href = "https://github.com/BlooshedDev"
  }
  setInterval(function() {
  const my = document.querySelector('.my');
  my.style.transform = 'rotate(' + Math.random() * 360 + 'deg)';
  }, 1000);
