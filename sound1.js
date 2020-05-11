function preload(){
    fluteSound = loadSound('sound/flute.wav');
    beatSound = loadSound('sound/beat.wav');
    orchSound = loadSound('sound/orch.wav');
    gongSound = loadSound('sound/gong.mp3');
    convoSound = loadSound('sound/convo.wav');
  }
  
  function setup() {
    createCanvas(1250, 740);
    amplitude = new p5.Amplitude();
    background("#D9CCC4");
  }
  
  function draw() {
    
    let level = amplitude.getLevel();
    let size = map(level, 0, 1, 0, 200);
    fill("red");
    stroke("noStroke");
    ellipse(300, 350, size * 15, size * 15);
  }


  
  function playFlute(){
    if (fluteSound.isPlaying()) {    
        fluteSound.stop();

    } else {
        fluteSound.play();
    }
  }


  


  function playBeat(){
    if (beatSound.isPlaying()) {
        beatSound.stop();

    } else {
        beatSound.play();
    }
  }
  function playOrch(){
    if (orchSound.isPlaying()) {
        orchSound.stop();
    } else {
        orchSound.play();
    }
  }
  function playGong(){
    if (gongSound.isPlaying()) {
        gongSound.stop();
    } else {
        gongSound.play();
    }
  }
  function playConvo(){
    if (convoSound.isPlaying()) {
        convoSound.stop();
    } else {
        convoSound.play();
    }
  }