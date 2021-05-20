const seletorDeCores = document.querySelector('#colors');
var cores = ['rgb(0,0,255)','rgb(255, 153, 153)', 'rgb(102, 204, 255)','rgb(153, 255, 204)',
'rgb(153, 255, 102)','rgb(255, 255, 102)', 'rgb(255, 153, 204)']
function criaPalheta(select, cores){
    cores.forEach(cor => {
        const novaCor = document.createElement('option');
        novaCor.style.backgroundColor = cor;
        select.appendChild(novaCor);
    });
};
criaPalheta(seletorDeCores, cores);
seletorDeCores.style.backgroundColor = cores[0];
seletorDeCores.addEventListener('click', function(){
    const color =  cores[seletorDeCores.selectedIndex]
    seletorDeCores.classList = [];
    seletorDeCores.style.backgroundColor = color;
});