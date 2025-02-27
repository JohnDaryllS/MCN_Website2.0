document.getElementById('loading-video').addEventListener('ended', function() {
    document.getElementById('loader').classList.add('fade-out');
    setTimeout(() => document.getElementById('loader').style.display = 'none', 1000);
});
