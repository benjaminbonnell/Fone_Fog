let MAPWIDTH = 20
let MAPHEIGHT = 40
let parameters_form = document.getElementById("parameters");
let save_form = document.getElementById("save");
console.log("hahahahah")

document.getElementById("map_height").value = MAPHEIGHT;
document.getElementById("map_width").value = MAPWIDTH;
createGrid(MAPHEIGHT, MAPWIDTH)

parameters_form.addEventListener("submit", (e) => {
    e.preventDefault(); // prevent the form from refreshing the page

    // get the desired dimensions from the form inputs
    MAPHEIGHT = document.getElementById("map_height").value;
    MAPWIDTH = document.getElementById("map_width").value;



    // create a new grid with the desired dimensions
    createGrid(MAPHEIGHT, MAPWIDTH);
});

save_form.addEventListener("submit", (e) => {
    e.preventDefault(); // prevent the form from refreshing the page
    saveGrid();
});

function createGrid(height, width) {
    let container = document.getElementById("grid_container");

    //clear any grid that could already be there...
    container.innerHTML = "";

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++){
            let box = document.createElement("div")

            box.classList.add("box")

            box.addEventListener("click", () => {
                box.classList.toggle("active");
            });

            container.appendChild(box)
            
        }
        container.appendChild(document.createElement("br"));
    }

}

function saveGrid(){
    let totalBoxes = document.getElementsByClassName("box");
    console.log(totalBoxes)
    let map_height = Number(MAPHEIGHT)
    let map_width = Number(MAPWIDTH)
    let map_array = []

    for (let row = 0; row < map_height; row++) {
        let thisRow = ""
        for (let box = 0; box < map_width; box++){
            let current_box = totalBoxes[(row * map_width) + box]
            if (current_box.classList.contains("active")){
                thisRow += 1
            }
            else{
                thisRow += 0
            }
        }
        map_array.push(thisRow)
    }
    console.log(map_array)
}

//gotem