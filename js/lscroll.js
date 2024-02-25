(function() {
    // Create overlay1 element
    var overlay1 = document.createElement('div');
    overlay1.classList.add('overlay1');
    document.body.appendChild(overlay1);

    document.addEventListener('scroll', function() {
        var scrollPosition = window.scrollY || document.documentElement.scrollTop;
        var maxScrollHeight = Math.max(
            document.body.scrollHeight, document.body.offsetHeight,
            document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight
        ) - window.innerHeight;

        // Calculate the scroll percentage
        var scrollPercentage = (scrollPosition / maxScrollHeight * 0.8) ** 0.3;

        // Set the opacity of the overlay1 based on the scroll percentage
        overlay1.style.opacity = scrollPercentage;
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