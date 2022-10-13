
const canvas = document.getElementById('canvas');
/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext('2d');
let count = 0, x = 0, y = 0;

// 900 400



function down(){
    ctx.fillRect(x, y, 150, count);
    if (count === 400){
        x += 150;
        count = 0;
        if (x === 900){
            return
        }
    }
    count += 4;
    console.log(count);
    requestAnimationFrame(down);
}

down();




