document.addEventListener("DOMContentLoaded", function () {
    console.log("page loaded");

    let btn = document.createElement("button");
    btn.innerText = "Add Square";
    document.body.appendChild(btn);
    let flexContainer = document.createElement("div");
    document.body.appendChild(flexContainer);
    let squareID = 1;


    btn.addEventListener("click", function () {
        console.log("adding div");
        let newSquare = document.createElement("div");
        newSquare.classList.add("square");
        newSquare.id = squareID;
        newSquare.innerText = squareID;

        newSquare.addEventListener("click", function() {
            newSquare.style.backgroundColor = getRandomColor();
        });
        newSquare.addEventListener("dblclick", function () {
            if (newSquare.id % 2 === 0) {
                if (newSquare.nextSibling !== null) {
                    newSquare.nextSibling.remove();
                } else {
                    alert("No Sqaure");
                }
            } else {
                if (newSquare.previousSibling !== null) {
                    newSquare.previousSibling.remove();
                } else {
                    alert("No Square");
                }
            };
        });

        flexContainer.appendChild(newSquare);
        squareID++
    });
});

function getRandomColor() {
    var color = '#' + Math.floor(Math.random()*16777215).toString(16);
    return color;
}
