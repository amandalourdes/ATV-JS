const body = document.querySelector(`body`);
body.style.height = `100vh`;
body.style.overflow = `hidden`
body.style.backgroundColor = `black`;
body.style.flexDirection = "column";
body.style.display = `flex`;
body.style.justifyContent = `space-between`;
body.style.alignItems = `center`;
body.style.margin = "0";

const sonho2 = document.createElement("header");
sonho2.style.color = "black";
sonho2.style.backgroundColor = "gray";
sonho2.style.width = "100%";
sonho2.style.height = "50px";
sonho2.style.display = "flex";
sonho2.style.alignItems = "center";
sonho2.style.justifyContent = "space-evenly";
body.appendChild(sonho2);

const button2 = document.createElement("button");
button2.style.backgroundColor = "black";
button2.style.color = "white";
button2.textContent = ("Reset");
button2.addEventListener("click", function(){
    window.location = "https://thaianysantos.github.io/AVT.JS/";
})
sonho2.appendChild(button2)

const button3 = document.createElement("button");
button3.style.backgroundColor = "black";
button3.style.color = "white";
button3.textContent = ("Git");
button3.addEventListener("click", function(){
    window.open("https://github.com/ThaianySantos/AVT.JS.git","_blank")
})
sonho2.appendChild(button3)

const div = document.createElement(`div`);
div.style.height = `500px`;
div.style.width = `900px`;
div.style.flexDirection = "column";
div.style.backgroundColor = `gray`;
div.style.display = `flex`;
div.style.justifyContent = `center`;
div.style.alignItems = `center`;
body.appendChild(div);

const texto = document.createElement("h1");
texto.style.color = "black"
texto.textContent = "Atividade de Programação WEB";
div.appendChild(texto);

const input1 = document.createElement("input");
input1.type = "text";
input1.placeholder = "Digite seu nome";
input1.style.textAlign = "center";
input1.style.margin = "20px";
input1.style.width = "300px";
input1.style.height = "20px";
div.appendChild(input1);

const input2 = document.createElement("input");
input2.type = "number";
input2.placeholder = "Digite sua primeira nota";
input2.style.textAlign = "center";
input2.style.margin = "20px";
input2.style.width = "300px";
input2.style.height = "20px";
div.appendChild(input2);

const input3 = document.createElement("input");
input3.type = "number";
input3.placeholder = "Digite sua segunda nota";
input3.style.textAlign = "center";
input3.style.margin = "20px";
input3.style.width = "300px";
input3.style.height = "20px";
div.appendChild(input3);

const input4 = document.createElement("input");
input4.type = "number";
input4.placeholder = "Digite sua terceira nota";
input4.style.textAlign = "center";
input4.style.margin = "20px";
input4.style.width = "300px";
input4.style.height = "20px";
div.appendChild(input4);



const button = document.createElement("button");
button.style.backgroundColor = "black";
button.style.color = "white";
button.textContent = ("Calcular a média");
button.addEventListener("click", function calcular() {
    const nome = input1.value;
    const nota1 = parseFloat(input2.value);
    const nota2 = parseFloat(input3.value);
    const nota3 = parseFloat(input4.value);

    const media = (nota1 + nota2 + nota3) / 3;

    if (media < 3) {
        resultado.textContent = `${nome} você foi reprovado(a) sua média foi ${media.toFixed(1)}`;

    }
    else if (media >= 3 && media < 6) {
        resultado.textContent = `${nome} você ficou em recuperação sua média foi ${media.toFixed(1)}`;
    }
    else {
        resultado.textContent = `${nome} você foi aprovado(a) sua média foi ${media.toFixed(1)}`;
    }
});
div.appendChild(button);

const resultado = document.createElement("div");
resultado.style.marginTop = "20px";
resultado.style.color = "blue";
resultado.style.fontSize = "18px";
resultado.style.alignItems = `center`
div.appendChild(resultado);

const sonho = document.createElement("footer");
sonho.style.color = "black";
sonho.style.backgroundColor = "gray";
sonho.style.width = "100%";
sonho.style.height = "50px";
sonho.style.display = "flex";
sonho.style.alignItems = "center";
sonho.style.justifyContent = "center";
sonho.textContent = "Não estrague meu sonho, me dê nota MÁXIMA!";
body.appendChild(sonho);










