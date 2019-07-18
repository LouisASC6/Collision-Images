// declare variables
let myposX = 25;
let myposY = 25;
let myspeed = 5;
let enemyX;
let enemyY;
let enemyPosX, enemyPosY;
let enemywidth = 50, enemyheight = 50;

let myLeft, myRight, myTop, myBottom;
let enemyLeft, enemyRight, enemyTop, enemyBottom; 

let points = 0

function setup() {
    createCanvas(500, 500);
    background(0);
    textSize(15);

    //switch rectangle
    rectMode(CENTER);

    // determine the random starting postiton of enemy
    enemyPosX = random(25, 475);
    enemyPosY = random(100, 475);

}
    
function draw() {
    // refresh the background
    background(0);
    
    // draw the enemy 
    fill(255, 0, 0);
    rect(enemyPosX, enemyPosY, enemywidth, enemyheight);
    
    // draw myself
    fill(0, 0, 255);
    rect(myposX, myposY, 50, 50);

    // if the LEFT_ARROW is pressed 
    if(keyIsDown(LEFT_ARROW)) {
        myposX -= myspeed;
    }

    // if the RIGHT_ARROW is pressed
    if(keyIsDown(RIGHT_ARROW)) {
        myposX += myspeed;
    }

    // if UP_ARROW is pressed
    if(keyIsDown(UP_ARROW)) {
        myposY -= myspeed;
    }

    // if DOWN_ARROW is pressed
    if(keyIsDown(DOWN_ARROW)) {
        myposY += myspeed;
    }

    // restrict myself within the canvas
    if(myposX <= 25) {
       myposX = 25;
    }
    
    if(myposX >= 475) {
       myposX = 475;
    }

    if(myposY <= 25) {
       myposY = 25;
    }

    if(myposY >= 475) {
       myposY = 475;
    }

    // know my edge
    myLeft = myposX - 25;
    myRight = myposX + 25;
    myTop = myposY - 25;
    myBottom = myposY - 25; 

    // define enemy edges
    enemyLeft = enemyPosX - 25;
    enemyRight = enemyPosX + 25;
    enemyTop = enemyPosY - 25;
    enemyBottom = enemyPosY + 25; 

    // detect collision ( or rather, detect non-collision)
    if (myLeft > enemyRight || myRight < enemyLeft || myTop > enemyBottom || myBottom < enemyTop) {
        // do nothing 
    }

    else {
        // there is collision!!!
        console.log("Collision!");
        // fill random(255), random(255), random(255)); 
        // text("I'm colliding with my enemy. Ouch!", 255, 400) 

        //incrase pionts by 1
        points++;

        // generate new enemy position
        enemyX = random(25, 475);
        enemyY = random(150, 450);
    }

    fill(255);
    text("Enemies collected: ", + points, 340, 25);
}