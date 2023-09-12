const area= document.getElementById('area')
const clrbutton= document.getElementById('clear')

area.value=localStorage.getItem('area');
area.oninput=()=>{
    localStorage.setItem('area',area.value)
}
clrbutton.addEventListener('click',()=>{
    localStorage.removeItem('area');
    area.value=''
})