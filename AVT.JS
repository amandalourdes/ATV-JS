const body = document.querySelector(`body`);
body.style.height = `100vh`;
body.style.overflow = `hidden`
body.style.backgroundColor = `black`;
body.style.flexDirection = "column";
body.style.display = `flex`;
body.style.justifyContent = `space-between`;
body.style.alignItems = `center`;
body.style.margin = "0";

const header = document.createElement("header");
header.style.backgroundColor = "brown";
header.style.width = "100%";
header.style.height = "50px";
header.style.display = "flex";
header.style.alignItems = "center";
header.style.justifyContent = "space-between";
body.appendChild(header);

const button2 = document.createElement("button");
button2.style.backgroundColor = "white";
button2.style.color = "black";
button2.textContent = ("Reset");
button2.style.marginLeft = `50px`
button2.addEventListener("click", function(){
    window.location = "https://amandalourdes.github.io/ATV-JS/";
})
header.appendChild(button2)

const button3 = document.createElement("button");
button3.style.backgroundColor = "white";
button3.style.color = "black";
button3.textContent = ("Git");
button3.style.marginRight = `50px`
button3.addEventListener("click", function(){
    window.open("https://github.com/amandalourdes/ATV-JS","_blank")
})
header.appendChild(button3)

const div = document.createElement(`div`);
div.style.height = `500px`;
div.style.width = `100%`;
div.style.flexDirection = "column";
div.style.backgroundColor = `brown`;
div.style.display = `flex`;
div.style.justifyContent = `center`;
div.style.alignItems = `center`;
body.appendChild(div);

const texto = document.createElement("h1");
texto.style.color = "black"
texto.textContent = "ATIVIDADE DE PROGRAMAÇÃO WEB";
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
button.style.backgroundColor = "white";
button.style.color = "black";
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
resultado.style.color = "black";
resultado.style.fontSize = "18px";
resultado.style.alignItems = `center`
div.appendChild(resultado);

const footer = document.createElement("footer");
footer.style.color = "black";
footer.style.backgroundColor = "brown";
footer.style.width = "100%";
footer.style.height = "50px";
footer.style.display = "flex";
footer.style.alignItems = "center";
footer.style.justifyContent = "center";
footer.textContent = "Obrigado(a) por utilizar nosso site, volte sempre.";
body.appendChild(footer);










