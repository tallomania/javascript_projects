const quote = document.querySelector(".quote"),
    author = document.querySelector(".quote"),
    quoteTag = document.querySelector(".quote-tag span"),
    soundBtn = document.querySelector(".sound"),
    copyBtn = document.querySelector(".copy"),
    twitterBtn = document.querySelector(".twitter"),
    igBtn = document.querySelector(".ig"),
    whatsappBtn = document.querySelector(".whatsapp"),
    fbBtn = document.querySelector(".fb"),
    tgBtn = document.querySelector(".tg"),
    prevBtn = document.querySelector(".btn .prev"),
    nextBtn = document.querySelector(".btn .next");

const  quoteLink = `https://api.quotable.io/random`;
const twitterLink = `https://twitter.com/intent/tweet?url=`;
const igLink = `https://instagram.com/intent/tweet?url=`;
const whatsappLink = `https://whatsapp.com/intent/tweet?url=`;
const fbLink = `https://facebook.com/intent/tweet?url=`;
const tgLink = `https://telegram.com/intent/tweet?url=`;

// const links = {
//     quoteLink : `https://api.quotable.io/random`,
//     twitterLink : `https://twitter.com/intent/tweet?url=`,
//     igLink : `https://instagram.com/intent/tweet?url=`,
//     whatsappLink : `https://whatsapp.com/intent/tweet?url=`,
//     fbLink : `https://facebook.com/intent/tweet?url=`,
//     fbLink : `https://telegram.com/intent/tweet?url=`
// }

let quoteGen = () => {
    // nextBtn.innerHTML = "Loading...";
    fetch(quoteLink).then(req => req.json()).then(res => {
        quote.innerHTML = res.content;
        quoteTag.innerHTML = res.tags;
        author.innerHTML = res.author;
        nextBtn.innerHTML = "Next Quote";
        console.log(nextBtn);
    })
}
soundBtn.addEventListener("click", () => {
    let pitch = new speechSynthesisPitch(`${quote.innerHTML} by ${author.innerHTML} ` );
    speechSynthesis.speak(pitch);
});
copyBtn.addEventListener("click",() => {
    navigator.clipboard.writeText(quote.innerHTML);
});
twitterBtn.addEventListener("click", () => {
    let tweet = `twitterlink${quote.innerHTML}`;
    window.open(tweet, "_blank");
});

quoteGen();
nextBtn.addEventListener("click", quoteGen);
