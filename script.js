// Add JavaScript to toggle the 'flipped' class on tap
document.querySelectorAll('.flip-card').forEach(function(card) {
    card.addEventListener('click', function() {
        this.classList.toggle('flipped');
    });
});
