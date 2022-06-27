//Buscar os links salvos no LocalStorage
export async function getLinksSave(key){
    const myLinks = await localStorage.getItem(key)

    let linksSaves = JSON.parse(myLinks) || [];

    return linksSaves;
}


//Salvar um link no LocalStorage
export async function saveLink(key, newLink){
    let linksStored = await getLinksSave(key);

    //conferindo se ja tem o link para nao duplicar
    const hasLink = linksStored.some(link => link.id === newLink.id)

    if(hasLink){
        console.log("Voce ja possui esse link salvo!");
        return;
    }

    //Adicionar esse novo link na lista
    linksStored.push(newLink)
    await localStorage.setItem(key, JSON.stringify(linksStored))

}

//Deletar algum link salvo
//vai retornar na variavel myLinks todos os links na lista, menos o que foi clicado para deletar 
export function deleteLink(links, id){
    let myLinks = links.filter(item =>{
        return(item.id !== id)
    })

    localStorage.setItem("@encurtaLink", JSON.stringify(myLinks));
    console.log("link deletado com sucesso")

    return myLinks;
}