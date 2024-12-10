document.addEventListener("DOMContentLoaded",() =>{
    const Submit = document.getElementById("Submit"); //Submit Button
    const Messages = document.getElementById("Messages") // The container in which it is displayed
    function Callback(){ //The callback function
        Messages.textContent = "Clicked result will be generated after 5s";
        setTimeout(() =>{ //The timeout function
            fetch("https://dummyjson.com/quotes").then((response) =>{
                if (!response.ok) {
                    throw new Error("Response is not ok");
                } else {
                    return response.json();
                }
            }).then((data) =>{
                Messages.textContent = "";
                const h2 = document.createElement("h2");
                h2.innerHTML = "Quotes:";
                Messages.appendChild(h2);
                const Quotes = data.quotes;
                for(let i = 0; i < Quotes.length; i++){
                    const p = document.createElement("p");
                    p.className = "Data";
                    p.textContent = Quotes[i].quote;
                    Messages.appendChild(p);
                }
            }).catch((error) =>{
                Messages.textContent = `Error ${error.message}`;
                console.error(error);
            })
            },5000);
        
    }
    Submit.addEventListener("click",Callback);
});
