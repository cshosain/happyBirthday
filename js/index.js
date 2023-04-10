let popup = document.getElementById("popup");
let hoverBtn = document.getElementById("hoverBtn");
let thanksFor = document.getElementById("thanksFor");
  
  

const pOne = document.getElementById("pOne");
const pTwo = document.getElementById("pTwo");
const pThree = document.getElementById("pThree");
const pFour = document.getElementById("pFour");
const textDiv = [pOne, pTwo, pThree];
let loaded = 1;
function myText() {
  // Define the encryption key
  const key = "23";

  // Define the decryption function
  function decrypt(cipherText) {
      const bytes = CryptoJS.AES.decrypt(cipherText, key);
      const plainText = bytes.toString(CryptoJS.enc.Utf8);
      return plainText;
  }

  // Encrypt the plain text array
  // const cipherTextArray = plainTextArray.map((plainText) => encrypt(plainText));
  const cipherTextArray = ["U2FsdGVkX1/7JqufHTlr19S/iPAjTBcFjiG8syJIhRB+gJRRCBpokyEofV2pC7bpxeJLDUcCyFBAQzA5dASN8Wj8ubtJjM7pd+nJj7ICtWs=", "U2FsdGVkX1+MpZKHEHsTAjaWphZRu/Q+JjaiXIjs0sMZe+fk7md4j2aORFYVAO7WwcXdfdQRm910asRZm2GbVrLnFwpm9McYTFDNOO8mcFPZ45oQeBRpOi2BS6u/iLPNzQ2o1O1Ni3XaqsM7qcrOlB/PHSBTOxCAD15cz+AUpKg1G8+Cv1T9xG14xufSAgQXrrtxKez6SMMVEGhlFZcvPgGQAODBv59Obpax/JYwJ1Y=", "U2FsdGVkX1+D0txjXMEwnT1Btm1CwrMlAN8FRHPdX40M+pgLM8w0rfjeHrB9qgat511yIvixj/Jw8n3CBqEd9IO6jRIcLT+dl9KKJzwnET0sz/tgIfrWC8/KAb+LXaMAS7S5dq8HmhkOIEsTWdBYHH0El12ix8JIxlU6jlDQgrj/x7j7IfrlLQGdo1lvGFgRcfeNj+YpJC9kgZJ8ecLvG7HPGGMkHpSb7hcySkCjUC7a/mKQ3EogN6fmU16KCYZKs5T2enx/X4Am4xb3TLMjFtz8R6wr4VCFiWt6DRCiGDaqeIKYs7svk4NUMdsUecKkw/98pfm5I++D0CKoZrw2Kw77bpIgZrfRgug40H3k2T40riJmQE47Jc63yiDrcE34Yy+7WFWCNkLP/pUCWSB7f+O9KgQ3+b/1oHcRKh6CQRUCC080iDjCcnbyuPG97Ho6+E2ky1giS0sUAvqmIObxqvjeMxmfEL0bIKdMcGdDe3AqqT8eW4MKMzJoT5BnOEib4uMOO028SHZDJMjOQgVmhHFW3Bm1ToTzJ47MqpBCm74="
  ]

  const decryptedTextArray = cipherTextArray.map((everyCipher) => decrypt(everyCipher));
  return decryptedTextArray;

}
const text = myText();

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
    // card.setAttribute('class', 'open-half');
    // if (timer) clearTimeout(timer);
    // timer = setTimeout(function () {
    //   card.setAttribute('class', 'open-fully');
    //   timer = null;
    // }, 1000);
    // represent();
    // when i replace the function task the open button click by thanks instead of open card
    showImage(thanksFor, true);
    
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



