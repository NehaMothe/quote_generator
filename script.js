let quoteContainer = document.getElementById('Quote-container');
let quoteText = document.getElementById('quoteText');
let authorText = document.getElementById('auhtorName');
let twitterBtn = document.getElementById('twitter-button');
let newQuoteBtn = document.getElementById('new-quote');
function newQuote() {
    //pick  a random quote
    let quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    //if author if unknown
    if (!quote.author) {
        authorText.textContent = 'Unknown';
    }
    else {
        authorText.textContent = quote.author;
    }
    //quote length for fint size
    if (quote.text.length > 100) {
        quoteText.classList.add('long-quote');
    }
    else {
        quoteText.classList.remove('long-quote');
    }
    quoteText.textContent = quote.text;
}
function shareQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

//event listner
newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", shareQuote);
newQuote();
