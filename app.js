function pesquisar() {
    let section = document.getElementById("resultados-pesquisa")
   

    let campoPesquisa = document.getElementById 
    ("campo-pesquisa").value 

    if(!campoPesquisa) {''
        section.innerHTML = "Nada foi encontrado. Você precisa digitar o nome do cantor"
        return 
    }


    campoPesquisa = campoPesquisa.toLowerCase()

    console.log(campoPesquisa)
    
    let resultado =  "";
    let titulo = "";
    let descricao = "";
    let tags = "";
    
    
    for (let dado of dados) {
        titulo = dado.titulo.toLocaleLowerCase()
        descricao = dado.descricao.toLocaleLowerCase()
         tags  = dado.tags.toLocaleLowerCase()
        if (titulo.includes(campoPesquisa) ||
         descricao.includes(campoPesquisa) || 
            tags.includes(campoPesquisa)) 
         {
         resultado += `
        <div class="item-resultado"> 
                <h2>
                    <a href="#" target="_blank">${dado.titulo} </a>
                </h2> 
                <p class="descricao-meta">${dado.descricao}</p>
                <a href= ${dado.link} target="_blank">Mais informações</a>
                    </div>
    `
          ;
    
        }
       
    }
    
    if (!resultado) {
        resultado = "<p> Nada foi encontrado</p>"
    }
   
        
    
     section.innerHTML = resultado
}




