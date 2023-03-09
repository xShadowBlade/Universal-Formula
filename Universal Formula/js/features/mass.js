window.addEventListener("load", function() {
    const newElemMassEquation = document.createElement("p")
    newElemMassEquation.id = "newElemMassEquation";
    newElemMassEquation.innerHTML = "Mass = at * (1 + (bt ^ c))";
    d_ID("content").appendChild(newElemMassEquation);
    Game.static.mass.html = {
        equation: new Element("newElemMassEquation")
    };
});