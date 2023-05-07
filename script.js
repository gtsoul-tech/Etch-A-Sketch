let dimension= 16;
function drawRgb(){
    const container = document.querySelector("#container");
    container.replaceChildren();
    for(let j=0;j<dimension;j++){
        const row = document.createElement('div');
        row.classList.add("row");
        for(let i=0;i<dimension;i++){
            const col = document.createElement('div');
            col.classList.add("col");
            col.style.backgroundColor= "rgb(255, 255, 255)";
            row.appendChild(col);
            col.addEventListener('mouseover', () =>{ addRgbColor(col);});
        }
        container.appendChild(row);
    }
}
function draw(){
    const container = document.querySelector("#container");
    container.replaceChildren();
    for(let j=0;j<dimension;j++){
        const row = document.createElement('div');
        row.classList.add("row");
        for(let i=0;i<dimension;i++){
            const col = document.createElement('div');
            col.classList.add("col");
            col.style.backgroundColor= "rgb(255, 255, 255)";
            row.appendChild(col);
            col.addEventListener('mouseover', () =>{ blackToWhite(col);});
        }
        container.appendChild(row);
    }
}
function addRgbColor(column){
    if(column.style.backgroundColor === "rgb(255, 255, 255)"){
        column.style.backgroundColor= getRandomRgb();
    }else{
        let r = /\d+/;
        if(column.style.filter === ""){
            column.style.filter = "brightness(100%)";
        }else{
            let previousBrightness = parseInt(column.style.filter.match(r).join(),10);
            column.style.filter = `brightness( ${previousBrightness-10}%)`;
        }
    }
}
function blackToWhite(column){
    column.style.backgroundColor = "rgb(0,0,0)";
}
function getDimensionRgb(){
    dimension = parseInt(prompt("Give me the dimensions:"),10);
    if(isNaN(dimension) || dimension > 100){
        alert("You didnt give a number or it was greater than 100(default 16)");
        dimension=16;
        drawRgb();
    }else{
        drawRgb();
    }
}
function getDimensionBlack(){
    dimension = parseInt(prompt("Give me the dimensions:"),10);
    if(isNaN(dimension) || dimension > 100){
        alert("You didnt give a number or it was greater than 100(default 16)");
        dimension=16;
        draw();
    }else{
        draw();
    }
}
drawRgb();

function getRandomRgb(){
    let red= Math.floor(Math.random() * 256);
    let green= Math.floor(Math.random() * 256);
    let blue= Math.floor(Math.random() * 256);
    return  "rgb(" + red + "," + green + "," + blue + ")";
}