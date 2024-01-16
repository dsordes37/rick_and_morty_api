var bt=document.querySelector('#bt')
var nome=document.querySelector('#nome')
var img=document.querySelector('img')
var id=document.querySelector("#idCha")


const url=(value)=>{
const result=fetch(`https://rickandmortyapi.com/api/character/${value}`)
.then((res)=>res.json())
.then((data)=>{ return data})
return result}



bt.addEventListener('click', async (event)=>{
    event.preventDefault();
    const result= await url(id.value);
    nome.innerHTML=`${result.name} : ${result.status}`;
    img.src=`${result.image}`
})