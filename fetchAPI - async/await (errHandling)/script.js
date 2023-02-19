// Fetch API using async/await with Error handling


const quote = document.querySelector("#quotes")
const btn = document.querySelector("#quotesBtn")


const quotes = async () =>{
    try{
        const setHeaders = {
            headers: {
                'X-RapidAPI-Key': 'd556b2775fmsh59515b77f027818p1a25c6jsn7753e74132aa',
                'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com'
                }
            }
            const res = await fetch('https://famous-quotes4.p.rapidapi.com/random?category=education&count=1',setHeaders)
            const data = await res.json();
            quote.innerHTML = data.map(a=>a.text);

    }
    catch (error) {
        console.log(`The error is ${error}`);

    }
}

    btn.addEventListener("click", quotes);
    quotes();
    
