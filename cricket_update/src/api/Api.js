const API_KEY = "Fx3WcgVaF8c79WV6BXG9QlUAipe2"


 const getMatches =()=> {
    const url = `https://cricapi.com/api/matches?apikey=${API_KEY}`;
    return fetch(url) 
            .then((res)=>res.json())
            .catch((error)=> console.log("Error in calling specified url :",error))
}

export default getMatches