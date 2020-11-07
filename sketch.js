const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var platform1, platform2;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16;
var blocks1, block2, block3, block4, block5, blocks6, blocks7, blocks8, block9;
var polygon, slinger;
var polypic;

var score = 0;

var hour, backgroundColor = "deepskyblue";

function preload() {
    polypic = loadImage("polygon.png");
}

function setup() {
    var canvas = createCanvas(1200, 600);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
    platform1 = new Floor(500, 550, 280, 10);
    block1 = new Box(520 - 140, 515, 40, 60);
    block2 = new Box(560 - 140, 515, 40, 60);
    block3 = new Box(600 - 140, 515, 40, 60);
    block4 = new Box(640 - 140, 515, 40, 60);
    block5 = new Box(680 - 140, 515, 40, 60);
    block6 = new Box(720 - 140, 515, 40, 60);
    block7 = new Box(760 - 140, 515, 40, 60);

    block8 = new Box(560 - 140, 435, 40, 60);
    block9 = new Box(600 - 140, 435, 40, 60);
    block10 = new Box(640 - 140, 435, 40, 60);
    block11 = new Box(680 - 140, 435, 40, 60);
    block12 = new Box(720 - 140, 435, 40, 60);

    block13 = new Box(600 - 140, 405, 40, 60);
    block14 = new Box(640 - 140, 405, 40, 60);
    block15 = new Box(680 - 140, 405, 40, 60);

    block16 = new Box(640 - 140, 375, 40, 60);

    //NextTower
    platform2 = new Floor(820, 425, 200, 10);
    blocks1 = new Box(740, 380, 40, 60);
    blocks2 = new Box(780, 380, 40, 60);
    blocks3 = new Box(820, 380, 40, 60);
    blocks4 = new Box(860, 380, 40, 60);
    blocks5 = new Box(900, 380, 40, 60);
    //level two
    blocks6 = new Box(780, 320, 40, 60);
    blocks7 = new Box(820, 320, 40, 60);
    blocks8 = new Box(860, 320, 40, 60);
    //top
    blocks9 = new Box(820, 260, 40, 60);
    Engine.run(engine);

    polygon = Bodies.circle(200, 350, 20, { 'restitution': 0, 'friction': 1, 'density': 5 });
    World.add(world, polygon);

    slinger = new Sling(this.polygon, { x: 200, y: 350 });
}

function draw() {
    getTime();
    background(backgroundColor)

    push();
    textSize(40);
    textAlign(RIGHT);
    fill("yellow");


    text("Score: " + score, width - 10, 50);
    pop();

    //Engine.update(engine);

    platform1.display();
    fill("purple");
    block1.display();
    fill("cyan");
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    fill("purple");
    block7.display();
    block8.display();
    fill("cyan")
    block9.display();
    block10.display();
    fill("cyan");
    block11.display();
    fill("purple");
    block12.display();
    block13.display();
    // Engine.update(engine);
    fill("cyan")
    block14.display();
    fill("purple");
    block15.display();
    block16.display();
    slinger.display();
    imageMode(CENTER);
    image(polypic, polygon.position.x, polygon.position.y, 40, 40);
    /*mouseDragged();
    mouseReleased();
    keyPressed();*/
    platform2.display();
    fill("purple");
    blocks1.display();
    blocks5.display();
    blocks6.display();
    blocks8.display();
    blocks9.display();

    fill("cyan");
    blocks2.display();
    blocks3.display();
    blocks4.display();





    blocks7.display();
    fill("purple")

    fill("green");
    textSize(50);
    text("Press '\Space'\ to try again.", 200, 50);

}



function mouseDragged() {
    Matter.Body.setPosition(this.polygon, { x: mouseX, y: mouseY });


}

function mouseReleased() {
    slinger.fly();
}

function keyPressed() {
    if (keyCode === 32) {
        slinger.attach(polygon.body);
        Body.setPosition(this.polygon, { x: 200, y: 350 });
        Body.setVelocity(this.polygon, { x: 0, y: 0 })
        slinger = new Sling(this.polygon, { x: 200, y: 350 });
    }
}

async function getTime() {
    var response = await fetch("http://worldtimeapi.org/api/timezone/America/new_york");
    var responseJson = await response.json();
    var datetime = responseJson.datetime;
    hour = datetime.slice(11, 13);
    if (hour >= 6 && hour <= 18) {
        backgroundColor = "deepskyblue"
    } else {
        backgroundColor = "midnightblue"
    }
}