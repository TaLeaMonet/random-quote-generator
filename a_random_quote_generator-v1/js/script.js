/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
// Array storing quotes objects 
let quotes = [{quote: 'In times of change, learners inherit the earth, while the learned find themselves beautifully equipped to deal with a world that no longer exists.', source: 'Eric Hoffer', tag:'inspirational'},
              {quote: 'My mission in life is not merely to survive, but to thrive; and to do so with some passion some compassion, some humor and some style.', source: 'Maya Angelou' , citation:'harperbazaar.com', year:2015, tag:'inspirational'},
              {quote:'If you want to find the secrets of the universe, think in terms of energy, frequency and vibration.', source:'Nikola Tesla', citation:'goodreads.com', tag:'theory'},
              {quote:'Reality is wrong. Dreams are for real.', source:'Tupac Shakur', citation:'quoteambition.com'},
              {quote:'I\'ll tell you what freedom is to me: no fear.', source:'Nina Simone', citation:'kidadl.com', year:1970}, 
              {quote:'Nothing is absolute. Everything changes, everything moves, everything revolves, everything flies and goes away.', source:'Frida Kahlo', citation:'goalcast.com'}, 
              {quote:'Everything negative—pressure, challenges—is all an opportunity for me to rise.', source:'Kobe Bryant', citation:'parade.com', year:2018, tag:'motivational'},
              {quote:'Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.', source:'Patrick McKenzie', citation:'Twitter', year:2016, tag:'inspirational'}];
/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  //Variable storing logic to randomize quotes           
  let randomizeQuote = Math.floor(Math.random() * quotes.length);
 return quotes[randomizeQuote];
}


/***
 * `printQuote` function
***/
function printQuote() {
  //Variable calling the getRandomQuote function
  let randomQuote = getRandomQuote();
  //Variable that will display source and quote properties
  let htmlString = `<p class= "quote">${randomQuote.quote}</p> 
                   <p class= "source">${randomQuote.source}` 

  //conditional checking if citation property exists                  
  if(randomQuote.citation) {
      htmlString +=  `<span class="citation">${randomQuote.citation}</span>`              
  } 
  //conditional checking if year property exists
  if(randomQuote.year) {
    htmlString += `<span class="year">${randomQuote.year}</span>` 
  }
  //conditional checking if tag property exists
  if(randomQuote.tag) {
    htmlString += `<span class="tag">, ${randomQuote.tag}</span>`
  }

//Append closing paragraph to the end of the HTML string 
htmlString += '</p>'

//Return final HTML string
return document.getElementById('quote-box').innerHTML = htmlString;
}
printQuote();

//Extra Credit!!!
//1. Random background colors
//Function using .floor and .random method to randomize background's color using hexadecimal values
function changeBackgroundColor() {
  let randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.getElementById('background-color').style.backgroundColor = '#' + randomColor;
  return randomColor; 
}
//Event listener for color randomization 
document.getElementById('load-quote').addEventListener("click", changeBackgroundColor);

//2. Auto-refreshed quotes
//Using the setInterval method to call the printQuote and changeBackgroundColor functions every 10 seconds
setInterval(printQuote, 10000);
setInterval(changeBackgroundColor, 10000);


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
