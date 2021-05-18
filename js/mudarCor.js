const seletorDeCores = document.querySelector('#colors');
seletorDeCores.classList.add('blue');
seletorDeCores.addEventListener('click', function(){
    const color = seletorDeCores.options[seletorDeCores.selectedIndex].text;
    seletorDeCores.classList = [];
    seletorDeCores.classList.add(color);
});