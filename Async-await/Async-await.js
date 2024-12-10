document.addEventListener("DOMContentLoaded",() =>{
    const Submit = document.getElementById("Submit"); //Submit Button
    const Messages = document.getElementById("Messages"); //The container in which the message will be displayed
    async function getData(){//Async function
        Messages.textContent = "Loading...";
        try {
            const response =  await fetch("https://dummyjson.com/quotes");
            if(!response.ok){
                throw new Error("Error in the API or network");
            }
            else{
                const Data = await response.json();
                const Quotes = Data.quotes;
                Messages.textContent = "";
                const h2 = document.createElement("h2");
                h2.innerHTML = "Quotes:";
                Messages.appendChild(h2);
                for(let i = 0; i < Quotes.length; i++){
                    const p = document.createElement("p");
                    p.className = "Data";
                    p.textContent = Quotes[i].quote;
                    Messages.append(p);
                }
            }
        } catch (error) {
            console.error(error);
            Messages.textContent = `Error:${error.message}`;
        }
    } 
    Submit.addEventListener("click",getData) //Passing the function as callback
})