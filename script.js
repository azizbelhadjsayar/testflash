document.querySelectorAll('.flip-card').forEach(function(card) {
    card.addEventListener('touchstart', function() {
        this.classList.toggle('flipped');
    });
});