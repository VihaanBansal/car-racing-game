canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

car1_width=12;
car1_height=70;
car1_image="car1.png";
car1_x=10;
car1_y=10;

car2_width=12;
car2_height=70;
car2_image="car2.png";
car2_x=10;
car2_y=100;
background_image="car racing.gif";

function add(){
    background_imgtag=new Image();
    background_imgtag.onload=uploadBackground;
    background_imgtag.src= backgroundimage;
    
    car1_imgtag=new Image();
    car1_imgtag.onload=uploadcar1;
    car1_imgtag.src= car1_image;

    car2_imgtag=new Image();
    car2_imgtag.onload=uploadcar2;
    car2_imgtag.src= car2_image;
    }

    function uploadBackground(){
        ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);
    }
    
    function uploadcar1(){
        ctx.drawImage(car1_imgtag,car1_x,car1_y,car1_width,car1_height);
    }

    function uploadcar2(){
        ctx.drawImage(car2_imgtag,car2_x,car2_y,car2_width,car2_height);
    }

    window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    key_pressed=e.keyCode;
    console.log(key_pressed);

    if (key_pressed == '38'){
        car1_up();
        console.log("up");
    }
    if (key_pressed == '40'){
        car1_down();
        console.log("down");
    }
    if (key_pressed == '37'){
        car1_left();
        console.log("left");
    }
    if (key_pressed == '39'){
        car1_right();
        console.log("right");
    } 
    

    if (key_pressed == '88'){
        car2_up();
        console.log("key w");
    }
    if (key_pressed == '83'){
        car2_down();
        console.log("key s");
    }
    if (key_pressed == '65'){
        car2_left();
        console.log("key a");
    }
    if (key_pressed == '68'){
        car2_right();
        console.log("key d");
    } 
    if (car1_x > 700)
    {
      console.log("car1 won");
      document.getElementById('game status').innerHTML = "Car 1 Won!!!"
    }
    if (car2_x > 700)
    {
      console.log("car2 won");
      document.getElementById('game status').innerHTML = "Car 2 Won!!!"
    }
}

function car1_up(){
    if (car1_y >=0){
        car1_y= car1_y - 10;
        console.log(car1_y,car1_x);
        uploadBackground();
        uploadRover();
    }

    
}
      
function car1_down(){
    if(car1_y <=500){
        car1_y= car1_y + 10;
        console.log(car1_y,car1_x);
        uploadBackground();
        uploadRover();
    }
    
}

function car1_left(){
    if(car1_x >=0){
        car1_x= car1_x - 10
        console.log(car1_x,car1_y);
        uploadBackground();
        uploadRover();
    }

}

function car1_right(){
    if(car1_x <=700){
        car1_x= car1_x + 10
        console.log(car1_x,car1_y);
        uploadBackground();
        uploadRover();
    }

}



function car2_up(){
    if (car2_y >=0){
        car2_y= car2_y - 10;
        console.log(car2_y,car2_x);
        uploadBackground();
        uploadRover();
    }

    
}
      
function car2_down(){
    if(car2_y <=500){
        car2_y= car2_y + 10;
        console.log(car2_y,car2_x);
        uploadBackground();
        uploadRover();
    }
    
}

function car2_left(){
    if(car2_x >=0){
        car2_x= car2_x - 10
        console.log(car2_x,car2_y);
        uploadBackground();
        uploadRover();
    }

}

function car2_right(){
    if(car2_x <=700){
        car2_x= car2_x + 10
        console.log(car2_x,car2_y);
        uploadBackground();
        uploadRover();
    }

}