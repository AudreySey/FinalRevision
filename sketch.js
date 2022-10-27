// partial code credited to re71

let colArray = []; //make an empty array
let colorPicker;
let sel;

var slider;
var inp;
var b; // space between x value


function setup() {
  createCanvas(windowWidth, windowHeight, SVG);
  //define color in the array
  colArray[0] = color("#FD841F");
  colArray[1] = color("#E14D2A");
  colArray[2] = color("#fffff");
  colArray[3] = color("#9C2C77");
  frameRate(1); //lower the frame rate
  
  colorPicker = createColorPicker('#fffff');
  colorPicker.position(120,0);
  colorPicker.style("width", "80px");
  colorPicker.addClass('color');
  
  
  sel = createSelect();
  sel.addClass('fonts');
  sel.position(215, 0);
  sel.option("Optima");
  sel.option("Avenir");
  sel.option("Courier New");
  sel.option("Rockwell");
  sel.option("Broadway");
  sel.option("Palatino");
  sel.selected("Optima");
  sel.style("width", "100px");

  button = createButton("Download");
  button.position(450, 0);
  button.mousePressed(saveit);
  button.style("width", "100px");
    
  inp = createInput('HEY');
  inp.addClass('input');
  inp.position(0, 0);
  inp.size(100);
  
  slider = createSlider(1, 200, 45, 1);
  slider.addClass('slider');
  slider.position(330, 0);
  slider.style("width", "100px");

}

function draw() {
  // background(255);
  background(colorPicker.color());
  
  var textW = slider.value();;
  //draw a grid of circles, change to letters
  for(let x = 20; x<width; x+=textW){
    for (let y = 20; y<height; y+=textW){
      fill(random(colArray)); //fill each text a random color 
      text(inp.value(), x,y,40);
      textSize(20);
      // textFont('Optima');
    }
  }

  textFont(sel.value());
  
  let val3 = slider.value();
  b = val3;
  
}



function saveit() {
  save("colorchangingA.svg"); // give file name
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
