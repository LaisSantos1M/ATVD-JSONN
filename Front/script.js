const resultsDiv = document.getElementById("results")

async function fetchKoenigsegg(){
    resultsDiv.innerHTML = "<p>Carregando...</p>"

    try {
        const response = await fetch('../Dados/data.json')
        const data = await response.json()
     

        if(data.error){
            resultsDiv.innerHTML="<p>Erro ao buscar dados!<p>"
            return
        }
        resultsDiv.innerHTML = ""

        data.forEach(item => {
            const card = document.createElement("div")
            card.className = "card"
            card.innerHTML =  `
            <img src="${item.Imagem}" alt= "${item.nome}"
            <h2>${item.nome}</h2>
            <h3>${item.descricao}</h3>
            <h4>${item.categoria}</h4>
            <p>${item.setor}</p>
        `
        resultsDiv.appendChild(card)
        });

    } catch (error) {
          resultsDiv.innerHTML = "<p>Erro ao buscar produtos!</p>"
    }
}

fetchKoenigsegg()
