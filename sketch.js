let sound1, sound2, sound3;
let displayText = '';
let bgColor;  // 新增背景顏色變數

function preload() {
  // 載入音效檔案
  sound1 = loadSound('sound/clap.mp3');    // 修正路徑寫法
  sound2 = loadSound('sound/wow.mp3');      // 修正路徑寫法
  sound3 = loadSound('sound/aww.mp3');      // 修正路徑寫法
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont('Helvetica-Bold');  // 改為 Helvetica 粗體
  textSize(300);
  textAlign(CENTER, CENTER);
  textLeading(280);
  bgColor = color(0);  // 預設背景為黑色
}

function draw() {
  background(bgColor);  // 使用儲存的背景顏色
  
  // 在畫面中央顯示文字
  if (displayText !== '') {
    fill(255);
    text(displayText, width/2, height/2);
  }
}

function keyPressed() {
  if (key === '1') {
    bgColor = color(0);  // 黑色111
    displayText = ' ';
  }

  // 當按下1時播放拍手聲，背景變紅色
  if (key === '2') {
    sound1.play();
    displayText = 'NOW\nCLAP';
    bgColor = color(255, 0, 0);  // 紅色
  }
  // 當按下2時播放笑聲，背景變綠色
  else if (key === '3') {
    sound2.play();
    displayText = 'NOW\nWOW';
    bgColor = color(0,180, 0);  // 綠色
  }
  // 當按下3時播放驚嘆聲，背景變藍色
  else if (key === '4') {
    sound3.play();
    displayText = 'NOW\nAWWW';
    bgColor = color(0, 0, 255);  // 藍色
  }
}
