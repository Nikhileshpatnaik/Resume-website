document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default jump behavior

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

new FinisherHeader({
    "count": 12,
    "size": {
      "min": 1300,
      "max": 1500,
      "pulse": 0
    },
    "speed": {
      "x": {
        "min": 0.6,
        "max": 3
      },
      "y": {
        "min": 0.6,
        "max": 3
      }
    },
    "colors": {
      "background": "#030007",
      "particles": [
        "#0d0059",
        "#0f313e",
        "#0b094f",
        "#6d2262"
      ]
    },
    "blending": "lighten",
    "opacity": {
      "center": 0.6,
      "edge": 0
    },
    "skew": -2,
    "shapes": [
      "c"
    ]
  });