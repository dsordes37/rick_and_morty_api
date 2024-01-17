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
    nome.innerHTML=`${result.name}`;
    especie.innerHTML=`espécie: ${result.species}`;
    sttz.innerHTML=`status: ${result.status}`;
    img.style.backgroundImage=`url(${result.image})`
    id.value=value;
}



const mais=()=>{
    if(id.value>=826){
        id.value=0
    }
    var value=parseInt(id.value)+1
    retorno(value)
}


const menos=()=>{
    if(id.value<=1){
        id.value=827
    }
    var value=parseInt(id.value)-1
    retorno(value)
}

retorno(1)


id.addEventListener('input', async (event)=>{
    
    var value=id.value
    event.preventDefault()
    retorno(value)
})

left.addEventListener('click', (event)=>{
    event.preventDefault();
    menos();
})

right.addEventListener('click', (event)=>{
    event.preventDefault();
    mais();
})


document.addEventListener('keydown', (event)=>{
    if(event.key=='ArrowRight'){
        event.preventDefault();
        mais();
    }else if(event.key=='ArrowLeft'){
        event.preventDefault();
        menos();
    };
})