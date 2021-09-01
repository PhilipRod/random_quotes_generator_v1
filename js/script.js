 /************************************************
Treehouse Techdegree:
Project 4 - Random Quote Generator
*************************************************/

// For assistance: 
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community

/*** 
 * `quotes` array 
 * stores quotes objects
***/



var quotes = [
  {
    quote: "Lisp isn't a language, it's a building material.",
    source: "Alan Kay"
  },

  {
    quote: "They don't make bugs like Bunny anymore.",
    source: "Olav Mjelde"
  },

  {
    quote: "A programming language is low level when its programs require attention to the irrelevant.",
    source: "Alan J. Perlis"
  },

  {
    quote: "I think Microsoft named .Net so it wouldn’t show up in a Unix directory listing.",
    source: "Oktal"
  },

  {
    quote: "Love for all, Hatred for none.",
    source: " Hazrat Mirza Nasir Ahmad",
    citation: "The muslimstime",
    year: "2013"
  }
];




/***
 * `getRandomQuote` function
 * generates random number
 * return random quote object
***/

function getRandomQuote() {
  let randomNum = Math.floor(Math.random() * quotes.length);
  return quotes[randomNum];
}






/***
 * `printQuote` function
 * run the getrandomQuote function to get a random quotes object
 * create html string and update it with quote properties
 * 
***/


function printQuote(){
  
  let randomQuote = getRandomQuote();
  let htmlString =  `<p class = "quote"> ${randomQuote.quote}</p> <p class = "source">${randomQuote.source}`

  if(randomQuote.citation){
    htmlString = htmlString+`<span class="citation">${randomQuote.citation}</span>`;
  }
  
  if(randomQuote.year){
    htmlString = htmlString+`<span class="year">${randomQuote.year}</span>`;
  }
    
  htmlString=htmlString+"</p>";

 

  document.getElementById('quote-box').innerHTML = htmlString;
  
}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);