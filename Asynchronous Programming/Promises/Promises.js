document.addEventListener("DOMContentLoaded",() =>{
    const Submit = document.getElementById("Submit"); //Submit Button 
    const Messages = document.getElementById("Messages"); //The container in which it will be displayed
    function YourPromise(){ //Function which will generate the promise
        const Promising = new Promise((res,rej) =>{
            const Rejection = setTimeout(() =>{ //The timeout function
                rej("Time is UP");
            },5000);
            fetch('https://dummyjson.com/quotes').then((response) =>{ //Fetching the Data
                if(!response.ok){
                    rej("Error in the response");
                }
                else{
                    clearTimeout(Rejection);
                    return response.json();
                }
            }).then((data) =>{
              res(data);
            }).catch((error) =>{
                rej(error);
            });
        });
        return Promising; //Returning the Promise
    }
    Submit.addEventListener("click",() =>{ //Adding event listener to the Submit button
        Messages.textContent = "Loading";
        YourPromise().then((data) =>{
            const Quotes = data.quotes;
            Messages.textContent = "";
            const h2 = document.createElement("h2");
            h2.innerHTML = "Quotes:";
            Messages.appendChild(h2);
            for(let i = 0; i < Quotes.length; i++){
                const num1 = Quotes[i].quote;
                const p = document.createElement("p");
                p.className = "Data";
                p.textContent = num1;
                Messages.append(p);
            };
        }).catch((err) =>{ //Error handling
            console.error(err);
            Messages.textContent = `Error:${err.message}`;
        })
    })
});