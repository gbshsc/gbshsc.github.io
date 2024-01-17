(function() {
    // Create overlay element
    var overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.appendChild(overlay);

    document.addEventListener('scroll', function() {
        var scrollPosition = window.scrollY || document.documentElement.scrollTop;
        var maxScrollHeight = Math.max(
            document.body.scrollHeight, document.body.offsetHeight,
            document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight
        ) - window.innerHeight;

        // Calculate the scroll percentage
        var scrollPercentage = (scrollPosition / maxScrollHeight * 0.3) ** 0.5;

        // Set the opacity of the overlay based on the scroll percentage
        overlay.style.opacity = scrollPercentage;
    });
})();


$(function(){
    $("#nav-placeholder").load("nav.html");
  });

const toggleButton = document.getElementById('toggleButton');
const sideMenu = document.getElementById('sideMenu');
const closeButton = document.getElementById('closeButton');

toggleButton.addEventListener('click', () => {
sideMenu.classList.toggle('hidden');
});

closeButton.addEventListener('click', () => {
sideMenu.classList.add('hidden');
});