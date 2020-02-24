(function IIFE() {
    let root = document.getElementById("root");
    let button = document.getElementById("add");

    button.addEventListener("click", add);

    function add() {
        console.time("start");

        for (let i = 0; i < 1000000; i++){
            let element = document.createElement("div");

            element.className = "box";

            root.appendChild(element);
        }

        console.timeEnd("start");
    }
})();
