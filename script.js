let Nome = document.getElementById("nome")
let text = document.getElementById("Nome2")

function texto()
{
    text.innerHTML = "Olá, " + Nome.value + ", tudo bem?"
} 

let bla3 = document.getElementById("bla3");
let bla1 = document.getElementById("bla1");

function bla2()
{
    bla1.innerHTML = parseInt(bla3.value) *100 + "cm";
}

let numero = document.getElementById("numero")
let proximo = document.getElementById("proximo")
let anterior = document.getElementById("anterior")

function calcular()
{
    proximo.innerHTML = parseInt(numero.value) + 1 + "- sucessor";
    anterior.innerHTML = parseInt(numero.value) - 1 + "- antecessor";
}

let numero1 = document.getElementById("numero1")
let numero2 = document.getElementById("numero2")
let result = document.getElementById("result")

function comparar()
{
if(numero1.value > numero2.value)
    {
        result.innerHTML = numero1.value
    }
    else
    {
        result.innerHTML = numero2.value
    }
} 

// if e else 

let salario = document.getElementById("salario");
let revelar = document.getElementById("revelar");

function exibir()
{
    if(salario.value > 1250)
    {
        revelar.innerHTML = " O salario é de R$1375" + (parseInt(salario.value));
    }
    else
    {
        revelar.innerHTML = " o salario é de R$1437.50" + (parseInt(salario.value));
    }
}

//Repetição


var c = 1;
while(c < 101)
    {
        console.log(c)
        c = c + 1;
    }

var c = 0;
while(c < 51 )
    {
        console.log(c)
        c = c + 5;
    }

var c = 100;
while(c > -1 )
    {
        console.log(c)
        c = c - 10;
    }
 