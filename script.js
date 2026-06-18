const perguntas = [

{
pergunta:"Qual linguagem cria a estrutura de um site?",
opcoes:["CSS","HTML","Java"],
resposta:"HTML"
},


{
pergunta:"Qual linguagem adiciona interatividade?",
opcoes:["Python","CSS","JavaScript"],
resposta:"JavaScript"
},


{
pergunta:"Qual ferramenta salva códigos online?",
opcoes:["GitHub","Word","Excel"],
resposta:"GitHub"
},


{
pergunta:"CSS é usado para:",
opcoes:["Estilizar páginas","Criar banco de dados","Fazer cálculos"],
resposta:"Estilizar páginas"
},


{
pergunta:"Um site responsivo funciona em:",
opcoes:["Só computador","Só celular","Vários dispositivos"],
resposta:"Vários dispositivos"
}


];


let atual = 0;

let pontos = 0;



function carregarQuiz(){


let p = perguntas[atual];


document.getElementById("pergunta").innerHTML =
p.pergunta;



let area = document.getElementById("opcoes");

area.innerHTML="";



p.opcoes.forEach(opcao=>{


let botao=document.createElement("button");


botao.innerHTML=opcao;


botao.onclick=function(){


if(opcao == p.resposta){

pontos++;

alert("✅ Resposta correta!");

}

else{

alert("❌ Resposta errada!");

}


};


area.appendChild(botao);


});


}



function proximaPergunta(){


atual++;


if(atual >= perguntas.length){


document.getElementById("resultado").innerHTML =
"🎉 Finalizado! Pontos: "+pontos+"/"+perguntas.length;


return;


}


carregarQuiz();


}



carregarQuiz();





// virar card clicando

document.querySelectorAll(".card").forEach(card=>{


card.onclick=function(){

card.querySelector(".card-inner")
.classList.toggle("virado");

}


});
