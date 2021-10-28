console.log("connected!")

const sage = document.getElementById('name');
const wisdom = document.getElementById('quote');

async function getQuotes() {
    const url = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}

async function pickQuote() {
    const quotes = await getQuotes();
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return await quotes[randomIndex];
}

async function showQuote() {
    const quote = await pickQuote();
    sage.innerHTML = quote.author;
    wisdom.innerHTML = quote.text;
}

document.onkeypress = event => {
    if (event.key === " ") {
        showQuote();
    }
};