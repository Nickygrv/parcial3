window.addEventListener('scroll', function() {
    var cartButton = document.getElementById('cartButton');
    if (window.scrollY > 100) {
      cartButton.style.transform = 'translateY(100px)';
    } else {
      cartButton.style.transform = 'translateY(0)';
    }
  });
  