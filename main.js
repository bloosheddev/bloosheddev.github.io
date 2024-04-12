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
function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar.style.display == 'none') {
        sidebar.style.display = 'flex'
    } else {
        sidebar.style.display = 'none'
    }
}

setInterval(function() {
    const sidebar = document.querySelector('.sidebar');

    if (window.matchMedia('(min-width: 636px)').matches) {
        sidebar.style.display = 'none';
    }
}, 1)