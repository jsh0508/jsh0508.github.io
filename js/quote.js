const quotes = [
    {
        quote: "What you risk reveals what you value.",
        author: "Jeanette Winterson"
    },
    {
        quote: "The past is a source of knowledge, and the future is a source of hope. Love of the past implies faith in the future.",
        author: "Stephen Ambrose"
    },
    {
        quote: "Reading is sometimes an ingenious device for avoiding thought.",
        author: "Sir Arthur Helps"
    },
    {
        quote: "I don't know the key to success, but the key to failure is trying to please everybody.",
        author: "Bill Cosby"
    },
    {
        quote: "Wish not so much to live long as to live well.",
        author: "Benjamin Franklin"
    },
    {
        quote: "For one human being to love another; that is perhaps the most difficult of all our tasks, the ultimate, the last test and proof, the work for which all other work is but preparation.",
        author: "Rainer Maria Rilke"
    },
    {
        quote: "Never regret anything that made you smile.",
        author: "Mark Twain"
    },
    {
        quote: "Yesterday you said tomorrow. Just do it.",
        author: "Nike"
    },
    {
        quote: "And still, I rise.",
        author: "Maya Angelou"
    },
    {
        quote: "What is a friend? A single soul dwelling in two bodies.",
        author: "Aristotle"
    },

];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const random1 = Math.floor(Math.random() * quotes.length);

quote.innerText = quotes[random1].quote;
author.innerText = quotes[random1].author;

