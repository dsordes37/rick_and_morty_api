var bt=document.querySelector('#bt')
var nome=document.querySelector('#nome')
var img=document.querySelector('img')
var id=document.querySelector("#idCha")


const url=(value)=>{
const result=fetch(`https://rickandmortyapi.com/api/character/${value}`)
.then((res)=>res.json())
.then((data)=>{ return data})
return result}



id.addEventListener('input', async (event)=>{
    event.preventDefault();
    img.src=`https://managedserver.it/wp-content/uploads/2023/07/css-loader.gif`
    const result= await url(id.value);
    nome.innerHTML=`${result.name} : ${result.status} : ${result.location.name}`;
    img.src=`${result.image}`
})