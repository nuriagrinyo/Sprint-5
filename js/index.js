//Vincular amb el botó
const carregarApibtn = document.querySelector('#carregarApi');
carregarApibtn.addEventListener('click', obtenirDades);
//Vincular amb el div on hi ha el text de l'acudit
const acuditText = document.querySelector('#acudit');


//funció per a obtenir les dades de la API d'acudits
async function obtenirDades() {
    const dataAcudits = await fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    });
    //objecte de l'acudit
    const acuditObj = await dataAcudits.json();

    //exercici 1: mostrar per consola l'acudit
    //console.log(jokeObj.joke);

    //exercici 2: mostrar per pantalla l'acudit
    const acudit = acuditText.innerHTML = acuditObj.joke;


    //exercici 3
    //imprimir text de l'acudit per a comprovar que funciona
    console.log(acudit);

    //puntuacio
    let puntuacio = 0;

    //generar data
    const data = new Date();

    //botons score: quan l'usuari clica farem que es mostri per consola l'array reportAcudits
    const boto1 = document.querySelector('#boto1');
    const boto2 = document.querySelector('#boto2');
    const boto3 = document.querySelector('#boto3');

    //array d'acudits
    let reportAcudits = [];

    acuditObjNou = {
        joke: acudit, 
        score: 0, 
        date: data.toISOString()
    }

    boto1.addEventListener('click', canviarScore1);
    function canviarScore1(){
        acuditObjNou.score = 1;
    }

    boto2.addEventListener('click', canviarScore2);
    function canviarScore2(){
        acuditObjNou.score = 2;
    }

    boto3.addEventListener('click', canviarScore3);
    function canviarScore3(){
        acuditObjNou.score = 3;
    }

    boto1.addEventListener('click', imprimirReportAcudits,);
    boto2.addEventListener('click', imprimirReportAcudits,);
    boto3.addEventListener('click', imprimirReportAcudits,);

  
    //funció per a imprimir l'array quan l'usuari clica a un dels botons de puntuació
    function imprimirReportAcudits() {
        reportAcudits.push(acuditObjNou);
        console.log(reportAcudits);
    }
    
}





    
