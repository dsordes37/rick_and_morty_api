var bt=document.querySelector('#bt')
var nome=document.querySelector('#nome')
var especie=document.querySelector('#especie')
var sttz=document.querySelector('#sttz')
var img=document.querySelector('#ima')
var id=document.querySelector("#idCha")

var right=document.querySelector('#right')
var left=document.querySelector('#left')




const url=(value)=>{
const result=fetch(`https://rickandmortyapi.com/api/character/${value}`)
.then((res)=>res.json())
.then((data)=>{ return data})
return result}

const retorno=async ( value)=>{
    img.style.backgroundImage=`url(https://managedserver.it/wp-content/uploads/2023/07/css-loader.gif)`
    const result= await url(value);
    nome.innerHTML=`nome: ${result.name}`;
    especie.innerHTML=`espécie: ${result.species}`;
    sttz.innerHTML=`status: ${result.status}`;
    img.style.backgroundImage=`url(${result.image})`
    console.log(result)
    id.value=value
}



retorno(1)


id.addEventListener('input', async (event)=>{
    
    var value=id.value
    event.preventDefault()
    retorno(value)
})

left.addEventListener('click', (event)=>{
    if(id.value==1){
        id.value=827
    }
    var value=parseInt(id.value)-1
    event.preventDefault()
    retorno(value)
})

right.addEventListener('click', (event)=>{
    if(id.value==826){
        id.value=0
    }
    var value=parseInt(id.value)+1
    event.preventDefault()
    retorno(value)
})