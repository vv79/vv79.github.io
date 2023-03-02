document.addEventListener("DOMContentLoaded", function () {
    var buttons = document.querySelectorAll("button.collapsible");

    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            var content = this.nextElementSibling;

            this.classList.toggle('active');

            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });
});