/* funções basicas*/
function searchIn(elem,array){
    let saida=false
    for(i of array){
        if(i===elem){
            saida=true
        }
    }
    return saida
}
function removeItem(elem,array){
    let saida=[]
    for(i of array){
        if(i!==elem){
            saida.push(i)    
        }
    }
    return saida
}

function populateUFs(){
    const ufSelect=document.querySelector("select[name=uf]")
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then((res)=>{return res.json()})
    .then( (states)=>{
        for(state of states){
            ufSelect.innerHTML=ufSelect.innerHTML+`<option value="${state.id}">${state.nome}</option>`
            }        
        }
    )
}

function getCities(event){
    const citySelect = document.querySelector("select[name=city]")
    const ufValue = event.target.value/*pegando valor do uf selecionado*/
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`
    citySelect.innerHTML=""
    citySelect.disabled=true
    fetch(url).then((res)=>{return res.json()}).then((cities)=>{
        for (city of cities){
            citySelect.innerHTML=citySelect.innerHTML+`<option value="${city.nome}">${city.nome}</option>`
            }
        citySelect.disabled=false    
        }
    )
}

function writeState(sel){
    const stateInput=document.querySelector("input[name=state]")
    stateInput.value=(sel.options[sel.selectedIndex].text)
}
// Itens de coleta

let selectItems=[]
function handleSelectItem(event){
    
    const itemLi = event.target
    //adicionar ou remover um classe com JS
    itemLi.classList.toggle("selected")
    //console.log(itemLi.dataset.id)

    if(searchIn(itemLi.dataset.id,selectItems)){
        //selectItems.splice(itemLi.dataset.id)
        selectItems=(removeItem(itemLi.dataset.id,selectItems))
    }
    else{
        selectItems.push(itemLi.dataset.id)
    }
    console.log(selectItems)
}

const itemsToCollect = document.querySelectorAll(".items-grid li")
for(const item of itemsToCollect){
    item.addEventListener("click",handleSelectItem)
}

function enviarItems(){
    const itemsInput=document.querySelector("input[name=items]")
    itemsInput.value=selectItems
}


populateUFs()
document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities)