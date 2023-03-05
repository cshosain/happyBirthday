let popup = document.getElementById("popup");
let hoverBtn = document.getElementById("hoverBtn");
  
  

const pOne = document.getElementById("pOne");
const pTwo = document.getElementById("pTwo");
const pThree = document.getElementById("pThree");
const pFour = document.getElementById("pFour");
const textDiv = [pOne, pTwo, pThree];
let loaded = 1;

const text = [
  "Happy birthday to one of the most amazing person in my life!",
  "You might be wondering, I haven't talked to you for a long time, but now? Because it's your special day. So how do I stay without wishing your birthday?",
  "You were my best friend, my confidant, and the one who always knew how to make me smile. I admire your strength, your intelligence, and your beauty, and I can't imagine my life without a friend like you. I hope your birthday is as wonderful as you are. May this year bring you all the love and happiness you deserve. I was so grateful to have you in my life. Happy birthday, my dear friend! 😊😊"
];

const speed = 60;
const timeoutIds = [];

function writeText(textDiv, text, index) {
  if (index < text.length) {
    const currentText = textDiv.innerHTML;
    const nextChar = text.charAt(index);
    textDiv.innerHTML = currentText + nextChar;
    index++;
    timeoutIds.push(setTimeout(() => writeText(textDiv, text, index), speed));
  }
}

function writeLine(i) {
  writeText(textDiv[i], text[i], 0);
  if (i < textDiv.length - 1) {
    timeoutIds.push(setTimeout(() => writeLine(i + 1), text[i].length * speed + 1000));
  }
}
//their lines...
(function () {
  function $(id) {
    return document.getElementById(id);
  }

  var card = $('card'),
    openB = $('open'),
    closeB = $('close'),
    timer = null;
  openB.addEventListener('click', function () {
    card.setAttribute('class', 'open-half');
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', 'open-fully');
      timer = null;
    }, 1000);
    represent();
    
  });

  closeB.addEventListener('click', function () {
    card.setAttribute('class', 'close-half');
    if (timer) clearTimerout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', '');
      timer = null;
    }, 1000);
    textDiv.forEach(element => {
      element.innerHTML = "";
    });
    showImage(pFour, false);
  // Cancel all setTimeout calls
  timeoutIds.forEach(id => clearTimeout(id));
  });
  
}());




function represent() {
  writeLine(0);
  timeoutIds.push(setTimeout(() => {
    showImage(pFour, true)
  }, 42500));
  
}




// Start writing the text


function showImage(element, e) {
  if (e) {
    element.style.opacity = "1";
    element.classList.add("popup-transition");
  }
  else {
    element.style.opacity = "0";
    element.classList.add("popup-transition");
  }

}




hoverBtn.addEventListener("mouseenter", () => {
  showImage(popup, true);
});
hoverBtn.addEventListener("mouseleave", () => {
  showImage(popup, false);
});
hoverBtn.addEventListener("click", () => {
  showImage(popup, true);
  timeoutIds.push(setTimeout(() => {
    showImage(popup, false);
  }, 2500));
});



