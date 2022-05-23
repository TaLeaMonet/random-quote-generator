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
// let quotes = [{quote: 'In times of change, learners inherit the earth, while the learned find themselves beautifully equipped to deal with a world that no longer exists.', source: 'Eric Hoffer'},
//               {quote: 'My mission in life is not merely to survive, but to thrive; and to do so with some passion some compassion, some humor and some style.', source: 'Maya Angelou' , citation:'https://www.harperbazaar.com'},
//               {quote:'If you want to find the secrets of the universe, think in terms of energy, frequency and vibration.', source:'Nikola Tesla', citation:'https://www.goodreads.com', year:'Unknown'},
//               {quote:'Reality is wrong. Dreams are for real.', source:'Tupac Shakur', citation:'https://www.quoteambition.com'},
//               {quote:'I\'ll tell you what freedom is to me: no fear.', source:'Nina Simone', citation:'https://www.kidadl.com', year:'Unknown'}, 
//               {quote:'Nothing is absolute. Everything changes, everything moves, everything revolves, everythings flies and goes away.', source:'Frida Kahlo', citation:'https://www.goalcast.com'}, 
//               {quote:'Everything negative—pressure, challenges—is all an opportunity for me to rise.', source:'Kobe Bryant', citation:'https://www.parade.com', year:'Unknown'}];


/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
 //Array storing quotes objects.  
  let quotes = [{quote: 'In times of change, learners inherit the earth, while the learned find themselves beautifully equipped to deal with a world that no longer exists.', source: 'Eric Hoffer'},
              {quote: 'My mission in life is not merely to survive, but to thrive; and to do so with some passion some compassion, some humor and some style.', source: 'Maya Angelou' , citation:'harperbazaar.com', year:2015},
              {quote:'If you want to find the secrets of the universe, think in terms of energy, frequency and vibration.', source:'Nikola Tesla', citation:'goodreads.com'},
              {quote:'Reality is wrong. Dreams are for real.', source:'Tupac Shakur', citation:'quoteambition.com'},
              {quote:'I\'ll tell you what freedom is to me: no fear.', source:'Nina Simone', citation:'kidadl.com', year:1970}, 
              {quote:'Nothing is absolute. Everything changes, everything moves, everything revolves, everything flies and goes away.', source:'Frida Kahlo', citation:'goalcast.com'}, 
              {quote:'Everything negative—pressure, challenges—is all an opportunity for me to rise.', source:'Kobe Bryant', citation:'parade.com', year:2018},
              {quote:'Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.', source:'Patrick McKenzie', citation:'Twitter', year:2016}];
  //Variable storing logic to randomize quotes.           
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
  let htmlString = `<p class = "quote">${randomQuote.quote}</p> 
                   <p class = "source">${randomQuote.source}` 

  //conditional checking if citation property exists                  
  if(randomQuote.citation) {
      htmlString = `<p class = "quote">${randomQuote.quote}</p> 
                   <p class = "source">${randomQuote.source}
                  <span class="citation">${randomQuote.citation}</span>` 
  } 
  //conditional checking if year property exists
  if(randomQuote.year) {
    htmlString = `<p class = "quote">${randomQuote.quote}</p> 
    <p class = "source">${randomQuote.source}
    <span class="citation">${randomQuote.citation}</span>
   <span class="year">${randomQuote.year}</span>` 
  }

//Append closing paragraph to the end of the HTML string 
htmlString += '</p>'

//Return final HTML string
return document.getElementById('quote-box').innerHTML = htmlString;
}
printQuote();


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);