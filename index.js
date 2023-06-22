// const voltar = () => {
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
// }
67
function voltar() {
    document.getElementById("meio").scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.getElementById("certi").style.backgroundColor = "#606b72";
    document.getElementById("about").style.backgroundColor = "#808080";
}
const mudarcorcerti = () => {
    document.getElementById("certi").style.backgroundColor = "#808080";
    document.getElementById("about").style.backgroundColor = "#606b72";
}

const mudarcorabout = () => {
    document.getElementById("certi").style.backgroundColor = "#606b72";
    document.getElementById("about").style.backgroundColor = "#808080";
}
const localizacao = () => {
    const div = document.getElementById("meio");
    if (div.scrollTop <= 300) {
        document.getElementById("certi").style.backgroundColor = "#606b72";
        document.getElementById("about").style.backgroundColor = "#808080";
    } if (div.scrollTop >= 882) {
        document.getElementById("certi").style.backgroundColor = "#808080"
        document.getElementById("about").style.backgroundColor = "#606b72";
    }
}


window.onload = () => {
    document.getElementById('top').addEventListener('click', voltar);
    document.getElementById("about").style.backgroundColor = "#808080";
    document.getElementById("certi").addEventListener('click', mudarcorcerti);
    document.getElementById("about").addEventListener('click', mudarcorabout);
    document.getElementById("meio").addEventListener('scroll', localizacao)
}