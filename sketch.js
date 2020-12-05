const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
const Constraint= Matter.Constraint;
var ground1,ground2;
var polygon1;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,
block16,block17,block18,block19,block20,block21,block22,block23,block24,block25;
var chain;
function setup(){
    var canvas=createCanvas(1200,400);
    engine=Engine.create();
    world=engine.world;
    polygon1 = new Pentagon(150,250);
    ground1= new Ground(570,370,260,10);
    ground2= new Ground(982,200,185,10);
    //1 ground level 1
    block1 = new Blocklightblue(480,348);
    block2 = new Blocklightblue(510,348);
    block3 = new Blocklightblue(540,348);
    block4 = new Blocklightblue(570,348);
    block5 = new Blocklightblue(600,348);
    block6 = new Blocklightblue(630,348);
    block7 = new Blocklightblue(660,348);
    //1 ground level 2
    block8 = new Blockpink(510,300);
    block9 = new Blockpink(540,300);
    block10 = new Blockpink(570,300);
    block11 = new Blockpink(600,300);
    block12 = new Blockpink(630,300);
    //1 ground level 3
    block13 = new Blockcyan(540,252);
    block14 = new Blockcyan(570,252);
    block15 = new Blockcyan(600,252);
    //1 ground level 4
    block16 = new Blockbrown(570,204);
    //2 ground level 1
    block17 = new Blocklightblue(920,178);
    block18 = new Blocklightblue(950,178);
    block19 = new Blocklightblue(980,178);
    block20 = new Blocklightblue(1010,178);
    block21 = new Blocklightblue(1040,178);
    //2 ground level 2
    block22 = new Blockcyan(950,130);
    block23 = new Blockcyan(980,130);
    block24 = new Blockcyan(1010,130);
    //2 ground level 3
    block25 = new Blockpink(980,82);

    chain= new Chain(polygon1.body,{x:130,y:205});
    Engine.run(engine);
}
function draw(){
    background(56,44,44);
    Engine.update(engine);
    ground1.display();
    ground2.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    polygon1.display();
    chain.display();
    drawSprites();
    fill(206,202,181);
    textSize(25);
    text("Drag The Hexagonal Stone And Release It, to launch it towards the blocks",200,30);
}
function mouseDragged(){
Matter.Body.setPosition(polygon1.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
chain.fly();
}