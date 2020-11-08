
  const Engine=Matter.Engine;
  const World=Matter.World;
  const Bodies=Matter.Bodies;
  const Constraint = Matter.Constraint;

  var gameState  = "onSling";

  function preload(){
    polyImg  = loadImage("hexa gon.png");
  }

  function setup() {
    createCanvas(1500,600);
    engine=Engine.create();
    world=engine.world;

    ground1 = new Ground(1200,480,290,12,"red");
    ground2 = new Ground(700,300,290,12,"blue");
    ground3 = new Ground(750,595,1500,10,"green");


    // bottom layer 
    box1 = new Box(602,265,45,55,"orange");
    box2 = new Box(600+box1.width+4,265,45,55,"orange");
    box3 = new Box(box2.body.position.x+box2.width+2.5,265,45,55,"orange");
    box4 = new Box(box3.body.position.x+box3.width+2.5,265,45,55,"orange");
    box5 = new Box(box4.body.position.x+box3.width+2,265,45,55,"orange");
  
    // middle layer
    box6 = new Box(box2.body.position.x,208,45,55,"purple");
    box7 = new Box(box6.body.position.x+box6.width+3,208,45,55,"purple");
    box8 = new Box(box7.body.position.x+box7.width+3,208,45,55,"purple");

    // upper layer
    box9 = new Box(box3.body.position.x+1,206-box5.height,45,55,"violet");

    // bottom layer 
    box10 = new Box(1102,445,45,55,"indigo");
    box11 = new Box(1102+box10.width+2,445,45,55,"indigo");
    box12 = new Box(box11.body.position.x+box10.width+2.5,445,45,55,"indigo");
    box13 = new Box(box12.body.position.x+box10.width+2.2,445,45,55,"indigo");
    box14 = new Box(box13.body.position.x+box10.width+2,445,45,55,"indigo");

    // middle layer
    box15 = new Box(box11.body.position.x,388,45,55,"pink");
    box16 = new Box(box12.body.position.x,388,45,55,"pink");
    box17 = new Box(box13.body.position.x,388,45,55,"pink");

    //uppermost layer  
    box18 = new Box(box12.body.position.x,388-box15.height,45,55,"lightgreen");

    // makinng the polygon 
    var options ={
      friction:10,
      density:0.8

    }
    polygon  = Bodies.circle(200,500,25,options);
    World.add(world,polygon);
/*
    making the sling shot
    mam here the sling having the error the code is correct 
    in Sling class*/
   // rope = new Rope(polygon.body,{x:190,y:490});


  }

  function draw() {
    background("skyblue");  
    Engine.update(engine);

    ground1.display();
    ground2.display();
    ground3.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();

    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();

    box15.display();
    box16.display();
    box17.display();

    box18.display();
    //rope.display();


    //ellipseMode(RADIUS);
    //ellipse(polygon.position.x,polygon.position.y,25,25);
    imageMode(CENTER);
    image(polyImg,polygon.position.x,polygon.position.y,40,40)

    /*textSize(20);
    fill("red");
    text(mouseX +":"+mouseY,200,200);
    */

   

    textSize(25);
    fill(200,100,23);
    text("Mam the sling is not working ",100,70);
    fill(100,100,23);
    text("I didn't know why  ",100,110);
    fill(10,10,23);
    text("But you can check the vanising effect! ",100,150);

    // mam you can check the vanising effect of the boxes by removing the comment
     Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY});


  }

  function mouseDragged(){
    if(gamestate=="onSling"){
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
    }
  }

  function mouseReleased(){
    rope.fly();
    gameState = "launched";

  }

  function keyPressed(){
    if(keyCode == 32){
      gameState = "onSling";
      rope.attach(polygon.body);
    }
  }