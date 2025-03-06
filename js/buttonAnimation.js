document.getElementById('downloadBtn').addEventListener('click', function(event) {
    let progressBar = document.getElementById('progressBar');
    progressBar.style.width = '100%';
    setTimeout(() => {
        progressBar.style.width = '0%';
    }, 3000);
});
