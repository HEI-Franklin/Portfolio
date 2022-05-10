new PageScroll('#pagescroll', {
    animDuration: 500, // 2 seconds
    easing: 'cubic-bezier(.17,.67,.83,.67)', //animation easing
    nav: [
        document.getElementById('home'),
        document.getElementById('xp'),
        document.getElementById('skills'),
        document.getElementById('projet'),
        document.getElementById('contact')
    ] // array of links selectors
});

VANTA.NET({
  el: "#body",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0xffffff,
  backgroundColor: 0x121212
});