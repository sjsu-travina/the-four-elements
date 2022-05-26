// elements name
let elements = [{
  name: "WATER"
}, {
  name: "EARTH"
}, {
  name: "FIRE"
}, {
  name: "WIND"
}];

// element description
let descript = [{
  element: "Is known as the universal solvent and is vital for all known forms of life. It is composed of the chemical elements hydrogen and oxygen. It is the inorganic, odorless, chemical substance and is the main component of Earth. "
}, {
  element: "From plants and trees to minerals and rocks, Earth provides the soil to grow vegetation and support life. This element is the solid nature of matter and is the element that gives form to the human body and all creation."
}, {
  element: "This element is closely linked to Air. In order for Fire to exist this element is made up from a rapid chemical reaction between oxygen, fuel and heat. This allows Fire to create sources of light, heat, and smoke."
}, {
  element: "(or Air) is considered the “pure” element as though it is made up of gases; primarily of nitrogen and oxygen. As the Air is another life source for the human body, we inhale oxygen and exhale carbon dioxide  – which plants need to manufacture their food through photosynthesis."


}]
let randomIndex;
let animating = false;
let e_images = [];
let img;
let backgd = [];
let button;
let cnv;

function preload() {
  img = loadImage('assets/background_main.jpg');

  for (let i = 0; i <= 3; i++){
    e_images[i] = loadImage("assets/Element_" + i + ".jpg")
  }

  for (let i = 0; i <= 3; i++){
    backgd[i] = loadImage("assets/background_" + i + ".jpg")
  }
}

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  cnv.parent("#canvasDiv");
  background(img);
  imageMode(CENTER);

  // noStroke();
  // fill('#248DE4');
  // rect(298, 295, 200, 50, 50);

  fill('#FAF8F5');
  textAlign (CENTER, TOP);
  textSize(60);
  text("The Four Elements", 660, 200)


  fill('#FAF8F5');
  textAlign (CENTER, TOP);
  textSize(30);
  text('Click below to learn about the Elements!', 660, 520)

  fill('#FAF8F5');
  textAlign (CENTER, TOP);
  textSize(20);
  text("Travina Torres", 660, 300)

  // textAlign(CENTER, CENTER);
  // textSize(25);
  // text("Click to view", 400, 320);

 // button = createButton("click to randomize");
  button = select("#randButton")
  button.mousePressed(buttonPressed);
  button.class("randomizerButton");
}
function draw() {

}

function randomizer(){
   animating = false;
   if (elements[0]) {

    // display of random names & images
    background(random(200, 255));
    randomIndex = int(random(elements.length), random(e_images.length), random(backgd.length), random(descript.length));

    imageMode(CENTER);
    image(backgd[randomIndex], 800, 300, 1650, 725);

    noStroke();
    fill('#FFFFFF');
    rect(548, 133, 225, 235, 50);

    imageMode(CENTER);
    image(e_images[randomIndex], 660, 250, 200, 200);

    textSize(50)
    textAlign(CENTER, CENTER);
    text(elements[randomIndex].name, 660, 100);

//     noStroke();
//     fill('#248DE4');
//     rect(355, 387, 90, 35, 50);

//     fill('#FAF8F5');
//     textAlign(CENTER, CENTER);
//     textSize(18);
//     text("Click", 400, 405);

    noStroke();
    fill('#FFFFFF');
    rect(310, 400, 700, 100, 50);

    textSize(15)
    fill(10);
    text(descript[randomIndex].element, 335, 432, 650);
   }
}
function buttonPressed() {
  animating = true;
  setTimeout(randomizer, 0);

}
