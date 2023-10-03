async function data(){
    return fetch("https://api.cricapi.com/v1/currentMatches?apikey=33f93dfc-1bd4-4eaa-80ff-0f3a2e8df86e&offset=0")
    .then(data=> data.json())
    .then((data)=>{
        if(data.status != 'success') return;
        const matchList = data.data;
        if(!matchList) return [];
        const relavantData = matchList.map(item => {
            return item.name +" "+ item.status;
        }
        )
        relavantData.forEach(element => {
            el = document.createElement('li');
            el.innerHTML = element;
            document.getElementById("messages").appendChild(el)
        });
        
    })
}

data();