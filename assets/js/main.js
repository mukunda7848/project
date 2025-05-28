/*----- MENU -----*/
const showMenu = (toggleId,navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*----- quantity -----*/

let currentSum = 0;
function changeSum(amount) {
    currentSum += amount;
    document.getElementById("sum").textContent = currentSum;
}

/*----- CAMBIO COLORS -----*/
const sizes = document.querySelectorAll('.size__tallas');

function changeSize(event){
    sizes.forEach(size => size.classList.remove('active'));
    event.currentTarget.classList.add('active');
}

sizes.forEach(size => size.addEventListener('click', changeSize));

