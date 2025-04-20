javascript:(function () {
  let s = prompt("Enter a season you want (e.g., summer, winter, fall, spring):");
  let season = s.toLowerCase();

  if (season === "summer") {
    const emojis = ["☀️", "🏖️", "🍹", "🌴", "🌊"];
    const imageURL = "https://content.thriveglobal.com/wp-content/uploads/2020/06/summer.jpg";
    replaceTextWithEmojis(emojis);
    replaceImages(imageURL);
    alert("So Much Sun, So Little Time");

  } else if (season === "winter") {
    const emojis = ["❄️", "⛄", "🔥", "🎄", "🦌"];
    const imageURL = "https://t3.ftcdn.net/jpg/02/98/03/22/360_F_298032209_YD4pFLDyzMyqBzso5xF5USR05hxqGuXf.jpg";
    replaceTextWithEmojis(emojis);
    replaceImages(imageURL);
    alert("Catching Snowflakes And Feelings");

  } else if (season === "fall") {
    const emojis = ["🍂", "🎃", "🍁", "🌰", "🦃"];
    const imageURL = "https://www.servpro.com/cs-images/0870b5907c331f2884eccbb69ea7bef2d0264cb0_Orange_and_Yellow_Fall_Leaves_shutterstock_1802809684.jpg.webp";
    replaceTextWithEmojis(emojis);
    replaceImages(imageURL);
    alert("pumpkin spice and everything nice");

  } else if (season === "spring") {
    const emojis = ["🌸", "🌷", "☔", "🐣", "🐝"];
    const imageURL = "https://ktla.com/wp-content/uploads/sites/4/2022/03/GettyImages-1130636356.jpg?strip=1";
    replaceTextWithEmojis(emojis);
    replaceImages(imageURL);
    alert("Spring has sprung");

  } else {
    const emojis = ["❌", "⚠️", "🚫"];
    const imageURL = "https://www.elegantthemes.com/blog/wp-content/uploads/2020/08/000-http-error-codes.png";
    replaceTextWithEmojis(emojis);
    replaceImages(imageURL);
    alert("User broke the server.");
    alert("abort task, server will blow up");
  }

  function replaceTextWithEmojis(emojis) {
    const textNodes = [];
    function getTextNodes(node) {
      if (node.nodeType === Node.TEXT_NODE) {
        textNodes.push(node);
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        for (let child of node.childNodes) {
          getTextNodes(child);
        }
      }
    }
    getTextNodes(document.body);
    textNodes.forEach((node) => {
      node.textContent = node.textContent.replace(/./g, (char) => {
        return char === " " ? " " : emojis[Math.floor(Math.random() * emojis.length)];
      });
    });
  }

  function replaceImages(imageURL) {
    const images = document.getElementsByTagName("img");
    for (let i = 0; i < images.length; i++) {
      images[i].src = imageURL;
    }
  }
})();
