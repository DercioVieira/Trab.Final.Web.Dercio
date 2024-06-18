function mostrarAba(abaSelecionada){

    // 1- apanhar todos os elementos com a classe "aba"
    const abas = document.querySelectorAll(".aba");
    // 2 - Remover a classe "ativa" dos elemetos com a classe "aba"
    abas.forEach((aba)=>aba.classList.remove("ativa"));
    // 3 - Adicionar a classe "ativa" ao elemento que se deseja ativar 
    // O elemento que se deseja ativar é passado para a função através do atributo "abaSelecionada"
    document.getElementById(abaSelecionada).classList.add("ativa");

    //4 - apanhar todos os elementos com a classe "conteudo"
    const conteudos = document.querySelectorAll(".conteudo");
    // 5 - remover a classe "ativa" dos elementos com a classe "conteudo"
    conteudos.forEach((conteudo) => conteudo.classList.remove("ativa"));
    
    // 6 - apanhar o id do conteúdo que se deseja apresentar, através da propriedade "data-aba" do elemento referenciado pelo id abaSelecionada
    const abaConteudo = document.getElementById(abaSelecionada).getAttribute("data-aba");
    // 7 - adicona a classe "ativa" ao elemento que se deseja mostrar
    document.getElementById(abaConteudo).classList.add("ativa");


    //MODAL
    
}

function abrirModal(imgSrc, imgDescription){
    document.getElementById("modal-img").src = imgSrc;
    document.getElementById("modal-description").innerHTML = imgDescription;
    document.getElementById("myModal").style.display="block";
}

window.onclick = function(event){
    if(event.target == document.getElementById("myModal")){
        document.getElementById("myModal").style.display =  "none";
    }
}
function validateForm() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var comentario = document.getElementById('comentario').value;
    
    if (!nome.match(/[A-Za-z\s]{1,}/)) {
        alert('Por favor, insira um nome válido.');
        return false;
    }

    if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)) {
        alert('Por favor, insira um email válido.');
        return false;
    }
    
    if (comentario.trim() === '') {
        alert('Por favor, insira um comentário.');
        return false;
    }

    return true;
}