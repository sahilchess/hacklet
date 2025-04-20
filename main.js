javascript: (function () {
  let s = prompt("Enter a season you want:");
  let season = s.toLowerCase  
  if (season == "summer") {
      console.log("So Much Sun, So Little Time");
    
    } else if (season == "winter") {
      console.log("Catching Snowflakes And Feelings");
    
    }  else if (season == "fall") {
      console.log("pumpkin spice and everything nice");
    
    }  else if (season == "spring") {
      console.log("Spring has sprung");
  
    }  else {
      console.log("User broke the server.");
    
    }
})();
