let dimension= 16;
function draw(){
    const container = document.querySelector("#container");
    container.replaceChildren();
    for(let j=0;j<dimension;j++){
        const row = document.createElement('div');
        row.classList.add("row");
        for(let i=0;i<dimension;i++){
            const col = document.createElement('div');
            col.classList.add("col");
            row.appendChild(col);
            col.addEventListener('mouseover', () => {col.classList.add("black");});
        }
        container.appendChild(row);
    }
}
function getDimension(){
    dimension = parseInt(prompt("Give me the dimensions:"),10);
    if(isNaN(dimension) || dimension > 100){
        alert("You didnt give a number or it was greater than 100(default 16)");
        dimension=16;
        draw();
    }else{
        draw();
    }
}
draw();

function getRandomRgb(){
    return Math.floor(Math.random() * 256);
}