canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

rover_x = 10;
rover_y = 10;

rover_height= 100;
rover_width= 100;

mars_backgrounds = ["mars.jpg", "mars-1.jpg", "mars-2.jpg", "mars-3.jpg", "mars-4.jpg"];

random_img = Math.floor(Math.random() * 5)
console.log(random_img);

background_img= mars_backgrounds[random_img];
rover_img= "rover.png";

function add(){
    bg_img= new Image();
    bg_img.onload= uploadbackground;
    bg_img.src= background_img;

    rover_image= new Image();
    rover_image.onload= uploadrover;
    rover_image.src= rover_img;
}

function uploadbackground(){
    ctx.drawImage(bg_img, 0, 0, canvas.width, canvas.height);
}

function uploadrover(){
    ctx.drawImage(rover_image, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keypressed= e.keyCode;
    console.log(keypressed);

    if(keypressed=="38"){
        up();
        console.log("up");
    }

    if(keypressed=="40"){
        down();
        console.log("down");
    }
    
    if(keypressed=="37"){
        left();
        console.log("left");
    }

    if(keypressed=="39"){
        right();
        console.log("right");
    }
}

function up(){
    if (rover_y > 0){
        rover_y = rover_y - 20;
        console.log("When up arrow key is pressed, x = " + rover_x + " And y = " + rover_y);
        uploadbackground();
        uploadrover();
    }
}

function down(){
    if (rover_y <=500){
        rover_y = rover_y + 20;
        console.log("When down arrow key is pressed, x = " + rover_x + " And y = " + rover_y);
        uploadbackground();
        uploadrover();
    }
}

function left(){
    if (rover_x > 0){
        rover_x = rover_x - 20;
        console.log("When left arrow key is pressed, x = " + rover_x + " And y = " + rover_y);
        uploadbackground();
        uploadrover();
    }
}

function right(){
    if (rover_x <=700){
        rover_x = rover_x + 20;
        console.log("When right arrow key is pressed, x = " + rover_x + " And y = " + rover_y);
        uploadbackground();
        uploadrover();
    }
}