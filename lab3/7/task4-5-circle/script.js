document.addEventListener("mousemove", function(event) {
    let circle = document.getElementById("circle");
    circle.style.left = event.clientX + "px";
    circle.style.top = event.clientY + "px";
});
