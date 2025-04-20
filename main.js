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
    const imageURL = "https://example.com/winter.jpg";
    replaceTextWithEmojis(emojis);
    replaceImages(imageURL);
    alert("Catching Snowflakes And Feelings");

  } else if (season === "fall") {
    const emojis = ["🍂", "🎃", "🍁", "🌰", "🦃"];
    const imageURL = "https://example.com/fall.jpg";
    replaceTextWithEmojis(emojis);
    replaceImages(imageURL);
    alert("pumpkin spice and everything nice");

  } else if (season === "spring") {
    const emojis = ["🌸", "🌷", "☔", "🐣", "🐝"];
    const imageURL = "https://example.com/spring.jpg";
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
