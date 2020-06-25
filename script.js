function bloquear(e){return false}
function desbloquear(){return true}
document.onselectstart=new Function (false)
if (window.sidebar){document.onmousedown=bloquear
document.onclick=desbloquear}

//---- Baixar -----------------

function downloadtable(){
	var node = document.getElementById("element");

	domtoimage.toPng(node)
		.then(function(dataUrl){
			var img = new Image();
			img.src = dataUrl;
			downloadURI(dataUrl, "records.png")

			console.log("baixar", node);
		})
		.catch(function(error){
			console.log('oops, someting went wrong! ', error);
		});
}

function downloadURI(uri, name){
	var link = document.createElement("a");
	link.download = name;
	link.href = uri;
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
	delete link;
}
//======================================


//---- Mostrar desenho na tela--------
let resp = document.getElementById("mostrar");

let resp2 = document.getElementById("show");

let respNariz = document.getElementById("showNariz");

let respCabelo = document.getElementById("showCabelo");

let respCabelo2 = document.getElementById("showCabelo2");

let respCabelo3 = document.getElementById("showCabelo3");

let respCabelo4 = document.getElementById("showCabelo4");

let respCabelo5 = document.getElementById("showCabelo5");

let respCabelo6 = document.getElementById("showCabelo6");

let respCabelo7 = document.getElementById("showCabelo7");

let respCabelo8 = document.getElementById("showCabelo8");

let respCabelo9 = document.getElementById("showCabelo9");

let respCabelo10 = document.getElementById("showCabelo10");

let respCabelo11 = document.getElementById("showCabelo11");

let respCabelo12 = document.getElementById("showCabelo12");

let respCabelo13 = document.getElementById("showCabelo13");

let respCabelo14 = document.getElementById("showCabelo14");

let respCabelo15 = document.getElementById("showCabelo15");

let respCabelo16 = document.getElementById("showCabelo16");

let respCilios = document.getElementById("showCilios");

let respSardas = document.getElementById("showSardas");

let respOculos01 = document.getElementById("showOculos01");

let respOculos02 = document.getElementById("showOculos02");

let respBigode = document.getElementById("showBigode");

let respBarbixa = document.getElementById("showBarbixa");

let respBarba = document.getElementById("showBarba");

let respCamisa01 = document.querySelector("#showCamisa01");


let valor = document.getElementById("campo");
//===========================================

//---- Pele ----------------------------------
let btn = document.getElementById("pele01");

let btnPele02 = document.getElementById("pele02");

let btnPele03 = document.getElementById("pele03");

let btnPele04 = document.getElementById("pele04");

let btnPele05 = document.getElementById("pele05");

let btnPele06 = document.getElementById("pele06");

let btnPele07 = document.getElementById("pele07");

let btnPele08 = document.getElementById("pele08");

let btnPele09 = document.getElementById("pele09");
//================================================

//---- Boca -------------------------------------
let btn2 = document.getElementById("botao2");

let btnBoca02 = document.getElementById("boca02");

let btnBoca03 = document.getElementById("boca03");

let btnBoca04 = document.getElementById("boca04");
//================================================

//---- Nariz -------------------------------------
let btnNariz01 = document.getElementById("nariz01");
let btnNariz02 = document.getElementById("nariz02");
//================================================

//---- Cabelo -------------------------------------
let btnCabelo01 = document.getElementById("cabelo01");

let btnCabelo02 = document.getElementById("cabelo02");

let btnCabelo03 = document.getElementById("cabelo03");

let btnCabelo04 = document.getElementById("cabelo04");

let btnCabelo05 = document.getElementById("cabelo05");

let btnCabelo06 = document.getElementById("cabelo06");

let btnCabelo07 = document.getElementById("cabelo07");

let btnCabelo08 = document.getElementById("cabelo08");

let btnCabelo09 = document.getElementById("cabelo09");

let btnCabelo10 = document.getElementById("cabelo10");

let btnCabelo11 = document.getElementById("cabelo11");

let btnCabelo12 = document.getElementById("cabelo12");

let btnCabelo13 = document.getElementById("cabelo13");

let btnCabelo14 = document.getElementById("cabelo14");

let btnCabelo15 = document.getElementById("cabelo15");

let btnCabelo16 = document.getElementById("cabelo16");
//=================================================

//---- Detalhes ---------------------------------------
let btnCilios = document.getElementById("cilios");
let btnSardas = document.getElementById("sardas");
//====================================================

//---- Oculos ------------------------------------------
let btnOculos01 = document.getElementById("oculos01");
let btnOculos02 = document.getElementById("oculos02");
//======================================================

//---- Barba ---------------------------------------------
let btnBigode = document.getElementById("bigode");
let btnBigode02 = document.getElementById("bigode02");

let btnBarbixa = document.getElementById("barbixa");
let btnBarbixa02 = document.getElementById("barbixa02");

let btnBarba = document.getElementById("barba");
let btnBarba02 = document.getElementById("barba02");
//========================================================

//---- Camisa ---------------------------------------------
let btnCamisa01 = document.getElementById("camisa01");
let btnCamisa02 = document.getElementById("camisa02");
let btnCamisa03 = document.getElementById("camisa03");
let btnCamisa04 = document.getElementById("camisa04");
let btnCamisa05 = document.getElementById("camisa05");
//=========================================================

//---- Excluir ---------------------------------------
let btnexc = document.getElementById("botaoexc");

let btnexcBoca = document.getElementById("botaoexcBoca");

let btnexcCabelo = document.getElementById("exclCabelo");

let btnexcCilios = document.getElementById("excCilios");

let btnexcSardas = document.getElementById("excSardas");

let btnexcOculos = document.getElementById("exclOculos");

let btnexcBigode = document.getElementById("exclBigode");

let btnexcBarbixa = document.getElementById("exclBarbixa");

let btnexcBarba = document.getElementById("exclBarba");
//======================================================

//-------Cores-------------------------------------
let btnCor = document.getElementById("cor01");
let btnCor02 = document.getElementById("cor02");
let btnCor03 = document.getElementById("cor03");
//=================================================

//----------EVENTOS------------------------------

let base = document.querySelector("#corpo");

let orelha = document.querySelector("#orelha");

//console.log(valor);

base.innerHTML = "<object type='image/svg+xml' data='base.svg' width='350' height='350' />";
//base.innerHTML = "<img src=\'base.png'>";
//orelha.innerHTML = "<img src=\'orelha.png'>";

function clicou(){
	document.getElementById("mostrar").innerHTML = valor;
}

btnexc.addEventListener('click', () =>{
	resp.innerHTML = "";
});

btnexcBoca.addEventListener('click', () =>{
	resp2.innerHTML = "";
});

//-------------BOCA------------------------
btn2.addEventListener('click', () =>{
	resp2.innerHTML = "<object type='image/svg+xml' data='boca01.svg' width='40' height='40' />";
});

btnBoca02.addEventListener('click', () =>{
	resp2.innerHTML = "<object type='image/svg+xml' data='boca02.svg' width='40' height='40' />";
});

btnBoca03.addEventListener('click', () =>{
	resp2.innerHTML = "<object type='image/svg+xml' data='boca03.svg' width='40' height='40' />";
});

btnBoca04.addEventListener('click', () =>{
	resp2.innerHTML = "<object type='image/svg+xml' data='boca04.svg' width='40' height='40' />";
});
//===========================================

//-------------PELE--------------------------
btn.addEventListener('click', () =>{
	resp.innerHTML = "<object type='image/svg+xml' data='pele01.svg' width='350' height='350' />";
});

btnPele02.addEventListener('click', () =>{
	resp.innerHTML = "<object type='image/svg+xml' data='pele02.svg' width='350' height='350' />";
});

btnPele03.addEventListener('click', () =>{
	resp.innerHTML = "<object type='image/svg+xml' data='pele03.svg' width='350' height='350' />";;
});

btnPele04.addEventListener('click', () =>{
	resp.innerHTML = "<object type='image/svg+xml' data='pele04.svg' width='350' height='350' />";
});

btnPele05.addEventListener('click', () =>{
	resp.innerHTML = "<object type='image/svg+xml' data='pele05.svg' width='350' height='350' />";
});

btnPele06.addEventListener('click', () =>{
	resp.innerHTML = "<object type='image/svg+xml' data='pele06.svg' width='350' height='350' />";
});

btnPele07.addEventListener('click', () =>{
	resp.innerHTML = "<object type='image/svg+xml' data='pele07.svg' width='350' height='350' />";
});

btnPele08.addEventListener('click', () =>{
	resp.innerHTML = "<object type='image/svg+xml' data='pele08.svg' width='350' height='350' />";
});

btnPele09.addEventListener('click', () =>{
	resp.innerHTML = "<object type='image/svg+xml' data='pele09.svg' width='350' height='350' />";
});
//===========================================

//-----------------NARIZ---------------------
btnNariz01.addEventListener('click', () =>{
	respNariz.innerHTML = "<object type='image/svg+xml' data='nariz01.svg' width='20' height='20' />";
});

btnNariz02.addEventListener('click', () =>{
	respNariz.innerHTML = "<object type='image/svg+xml' data='nariz02.svg' width='20' height='20' />";
});
//================================================


//--------------------CABELO-----------------------
btnCabelo01.addEventListener('click', () =>{
	respCabelo.innerHTML = "<object type='image/svg+xml' data='cabelo01.svg' width='250' height='250' />";
	respCabelo.style.filter = "brightness(0%)";
	respCabelo2.innerHTML = "";
	respCabelo3.innerHTML = "";
	respCabelo4.innerHTML = "";
	respCabelo5.innerHTML = "";
	respCabelo6.innerHTML = "";
	respCabelo7.innerHTML = "";
	respCabelo8.innerHTML = "";
	respCabelo9.innerHTML = "";
	respCabelo10.innerHTML = "";
	respCabelo11.innerHTML = "";
	respCabelo12.innerHTML = "";
	respCabelo13.innerHTML = "";
	respCabelo14.innerHTML = "";
	respCabelo15.innerHTML = "";
	respCabelo16.innerHTML = "";
});

btnCabelo02.addEventListener('click', () =>{
	respCabelo2.innerHTML = "<object type='image/svg+xml' data='cabelo02.svg' width='255' height='255' />";
	respCabelo2.style.filter = "brightness(0%)";
	respCabelo.innerHTML = "";
	respCabelo3.innerHTML = "";
	respCabelo4.innerHTML = "";
	respCabelo5.innerHTML = "";
	respCabelo6.innerHTML = "";
	respCabelo7.innerHTML = "";
	respCabelo8.innerHTML = "";
	respCabelo9.innerHTML = "";
	respCabelo10.innerHTML = "";
	respCabelo11.innerHTML = "";
	respCabelo12.innerHTML = "";
	respCabelo13.innerHTML = "";
	respCabelo14.innerHTML = "";
	respCabelo15.innerHTML = "";
	respCabelo16.innerHTML = "";
});

btnCabelo03.addEventListener('click', () =>{
	respCabelo3.innerHTML = "<object type='image/svg+xml' data='cabelo03.svg' width='300' height='300' />";
	respCabelo3.style.filter = "brightness(0%)";
	respCabelo.innerHTML = "";
	respCabelo2.innerHTML = "";
	respCabelo4.innerHTML = "";
	respCabelo5.innerHTML = "";
	respCabelo6.innerHTML = "";
	respCabelo7.innerHTML = "";
	respCabelo8.innerHTML = "";
	respCabelo9.innerHTML = "";
	respCabelo10.innerHTML = "";
	respCabelo11.innerHTML = "";
	respCabelo12.innerHTML = "";
	respCabelo13.innerHTML = "";
	respCabelo14.innerHTML = "";
	respCabelo15.innerHTML = "";
	respCabelo16.innerHTML = "";
});

btnCabelo04.addEventListener('click', () =>{
	respCabelo4.innerHTML = "<object type='image/svg+xml' data='cabelo04.svg' width='320' height='320' />";
	respCabelo4.style.filter = "brightness(0%)";
	respCabelo.innerHTML = "";
	respCabelo2.innerHTML = "";
	respCabelo3.innerHTML = "";
	respCabelo5.innerHTML = "";
	respCabelo6.innerHTML = "";
	respCabelo7.innerHTML = "";
	respCabelo8.innerHTML = "";
	respCabelo9.innerHTML = "";
	respCabelo10.innerHTML = "";
	respCabelo11.innerHTML = "";
	respCabelo12.innerHTML = "";
	respCabelo13.innerHTML = "";
	respCabelo14.innerHTML = "";
	respCabelo15.innerHTML = "";
	respCabelo16.innerHTML = "";
});

btnCabelo05.addEventListener('click', () =>{
	respCabelo5.innerHTML = "<object type='image/svg+xml' data='cabelo05.svg' width='240' height='240' />";
	respCabelo5.style.filter = "brightness(0%)";
	respCabelo.innerHTML = "";
	respCabelo2.innerHTML = "";
	respCabelo3.innerHTML = "";
	respCabelo4.innerHTML = "";
	respCabelo6.innerHTML = "";
	respCabelo7.innerHTML = "";
	respCabelo8.innerHTML = "";
	respCabelo9.innerHTML = "";
	respCabelo10.innerHTML = "";
	respCabelo11.innerHTML = "";
	respCabelo12.innerHTML = "";
	respCabelo13.innerHTML = "";
	respCabelo14.innerHTML = "";
	respCabelo15.innerHTML = "";
	respCabelo16.innerHTML = "";
});

btnCabelo06.addEventListener('click', () =>{
	respCabelo6.innerHTML = "<object type='image/svg+xml' data='cabelo06.svg' width='275' height='275' />";
	respCabelo6.style.filter = "brightness(0%)";
	respCabelo.innerHTML = "";
	respCabelo2.innerHTML = "";
	respCabelo3.innerHTML = "";
	respCabelo4.innerHTML = "";
	respCabelo5.innerHTML = "";
	respCabelo7.innerHTML = "";
	respCabelo8.innerHTML = "";
	respCabelo9.innerHTML = "";
	respCabelo10.innerHTML = "";
	respCabelo11.innerHTML = "";
	respCabelo12.innerHTML = "";
	respCabelo13.innerHTML = "";
	respCabelo14.innerHTML = "";
	respCabelo15.innerHTML = "";
	respCabelo16.innerHTML = "";
});

btnCabelo07.addEventListener('click', () =>{
	respCabelo7.innerHTML = "<object type='image/svg+xml' data='cabelo07.svg' width='255' height='255' />";
	respCabelo7.style.filter = "brightness(0%)";
	respCabelo.innerHTML = "";
	respCabelo2.innerHTML = "";
	respCabelo3.innerHTML = "";
	respCabelo4.innerHTML = "";
	respCabelo5.innerHTML = "";
	respCabelo6.innerHTML = "";
	respCabelo8.innerHTML = "";
	respCabelo9.innerHTML = "";
	respCabelo10.innerHTML = "";
	respCabelo11.innerHTML = "";
	respCabelo12.innerHTML = "";
	respCabelo13.innerHTML = "";
	respCabelo14.innerHTML = "";
	respCabelo15.innerHTML = "";
	respCabelo16.innerHTML = "";
});

btnCabelo08.addEventListener('click', () =>{
	respCabelo8.innerHTML = "<object type='image/svg+xml' data='cabelo08.svg' width='270' height='270' />";
	respCabelo8.style.filter = "brightness(0%)";
	respCabelo.innerHTML = "";
	respCabelo2.innerHTML = "";
	respCabelo3.innerHTML = "";
	respCabelo4.innerHTML = "";
	respCabelo5.innerHTML = "";
	respCabelo6.innerHTML = "";
	respCabelo7.innerHTML = "";
	respCabelo9.innerHTML = "";
	respCabelo10.innerHTML = "";
	respCabelo11.innerHTML = "";
	respCabelo12.innerHTML = "";
	respCabelo13.innerHTML = "";
	respCabelo14.innerHTML = "";
	respCabelo15.innerHTML = "";
	respCabelo16.innerHTML = "";
});

btnCabelo09.addEventListener('click', () =>{
	respCabelo9.innerHTML = "<object type='image/svg+xml' data='cabelo09.svg' width='310' height='310' />";
	respCabelo9.style.filter = "brightness(0%)";
	orelha.innerHTML = "";
	respCabelo.innerHTML = "";
	respCabelo2.innerHTML = "";
	respCabelo3.innerHTML = "";
	respCabelo4.innerHTML = "";
	respCabelo5.innerHTML = "";
	respCabelo6.innerHTML = "";
	respCabelo7.innerHTML = ""
	respCabelo8.innerHTML = "";
	respCabelo10.innerHTML = "";
	respCabelo11.innerHTML = "";
	respCabelo12.innerHTML = "";
	respCabelo13.innerHTML = "";
	respCabelo14.innerHTML = "";
	respCabelo15.innerHTML = "";
	respCabelo16.innerHTML = "";
});

btnCabelo10.addEventListener('click', () =>{
	respCabelo10.innerHTML = "<object type='image/svg+xml' data='cabelo10.svg' width='240' height='240' />";
	respCabelo10.style.filter = "brightness(0%)";
	respCabelo.innerHTML = "";
	respCabelo2.innerHTML = "";
	respCabelo3.innerHTML = "";
	respCabelo4.innerHTML = "";
	respCabelo5.innerHTML = "";
	respCabelo6.innerHTML = "";
	respCabelo7.innerHTML = ""
	respCabelo8.innerHTML = "";
	respCabelo9.innerHTML = "";
	respCabelo11.innerHTML = "";
	respCabelo12.innerHTML = "";
	respCabelo13.innerHTML = "";
	respCabelo14.innerHTML = "";
	respCabelo15.innerHTML = "";
	respCabelo16.innerHTML = "";
});

btnCabelo11.addEventListener('click', () =>{
	respCabelo11.innerHTML = "<object type='image/svg+xml' data='cabelo11.svg' width='365' height='365' />";
	respCabelo11.style.filter = "brightness(0%)";
	respCabelo.innerHTML = "";
	respCabelo2.innerHTML = "";
	respCabelo3.innerHTML = "";
	respCabelo4.innerHTML = "";
	respCabelo5.innerHTML = "";
	respCabelo6.innerHTML = "";
	respCabelo7.innerHTML = "";
	respCabelo8.innerHTML = "";
	respCabelo9.innerHTML = "";
	respCabelo10.innerHTML = "";
	respCabelo12.innerHTML = "";
	respCabelo13.innerHTML = "";
	respCabelo14.innerHTML = "";
	respCabelo15.innerHTML = "";
	respCabelo16.innerHTML = "";
});

btnCabelo12.addEventListener('click', () =>{
	respCabelo12.innerHTML = "<object type='image/svg+xml' data='cabelo12.svg' width='300' height='300' />";
	respCabelo12.style.filter = "brightness(0%)";
	respCabelo.innerHTML = "";
	respCabelo2.innerHTML = "";
	respCabelo3.innerHTML = "";
	respCabelo4.innerHTML = "";
	respCabelo5.innerHTML = "";
	respCabelo6.innerHTML = "";
	respCabelo7.innerHTML = "";
	respCabelo8.innerHTML = "";
	respCabelo9.innerHTML = "";
	respCabelo10.innerHTML = "";
	respCabelo11.innerHTML = "";
	respCabelo13.innerHTML = "";
	respCabelo14.innerHTML = "";
	respCabelo15.innerHTML = "";
	respCabelo16.innerHTML = "";
});

btnCabelo13.addEventListener('click', () =>{
	respCabelo13.innerHTML = "<object type='image/svg+xml' data='cabelo13.svg' width='250' height='250' />";
	respCabelo13.style.filter = "brightness(0%)";
	respCabelo.innerHTML = "";
	respCabelo2.innerHTML = "";
	respCabelo3.innerHTML = "";
	respCabelo4.innerHTML = "";
	respCabelo5.innerHTML = "";
	respCabelo6.innerHTML = "";
	respCabelo7.innerHTML = "";
	respCabelo8.innerHTML = "";
	respCabelo9.innerHTML = "";
	respCabelo10.innerHTML = "";
	respCabelo11.innerHTML = "";
	respCabelo12.innerHTML = "";
	respCabelo14.innerHTML = "";
	respCabelo15.innerHTML = "";
	respCabelo16.innerHTML = "";
});

btnCabelo14.addEventListener('click', () =>{
	respCabelo14.innerHTML = "<object type='image/svg+xml' data='cabelo14.svg' width='210' height='210' />";
	respCabelo14.style.filter = "brightness(0%)";
	respCabelo.innerHTML = "";
	respCabelo2.innerHTML = "";
	respCabelo3.innerHTML = "";
	respCabelo4.innerHTML = "";
	respCabelo5.innerHTML = "";
	respCabelo6.innerHTML = "";
	respCabelo7.innerHTML = "";
	respCabelo8.innerHTML = "";
	respCabelo9.innerHTML = "";
	respCabelo10.innerHTML = "";
	respCabelo11.innerHTML = "";
	respCabelo12.innerHTML = "";
	respCabelo13.innerHTML = "";
	respCabelo15.innerHTML = "";
	respCabelo16.innerHTML = "";
});

btnCabelo15.addEventListener('click', () =>{
	respCabelo15.innerHTML = "<object type='image/svg+xml' data='cabelo15.svg' width='290' height='290' />";
	respCabelo15.style.filter = "brightness(0%)";
	respCabelo.innerHTML = "";
	respCabelo2.innerHTML = "";
	respCabelo3.innerHTML = "";
	respCabelo4.innerHTML = "";
	respCabelo5.innerHTML = "";
	respCabelo6.innerHTML = "";
	respCabelo7.innerHTML = "";
	respCabelo8.innerHTML = "";
	respCabelo9.innerHTML = "";
	respCabelo10.innerHTML = "";
	respCabelo11.innerHTML = "";
	respCabelo12.innerHTML = "";
	respCabelo13.innerHTML = "";
	respCabelo14.innerHTML = "";
	respCabelo16.innerHTML = "";
});

btnCabelo16.addEventListener('click', () =>{
	respCabelo16.innerHTML = "<object type='image/svg+xml' data='cabelo16.svg' width='275' height='275' />";
	respCabelo16.style.filter = "brightness(0%)";
	respCabelo.innerHTML = "";
	respCabelo2.innerHTML = "";
	respCabelo3.innerHTML = "";
	respCabelo4.innerHTML = "";
	respCabelo5.innerHTML = "";
	respCabelo6.innerHTML = "";
	respCabelo7.innerHTML = "";
	respCabelo8.innerHTML = "";
	respCabelo9.innerHTML = "";
	respCabelo10.innerHTML = "";
	respCabelo11.innerHTML = "";
	respCabelo12.innerHTML = "";
	respCabelo13.innerHTML = "";
	respCabelo14.innerHTML = "";
	respCabelo15.innerHTML = "";
});

btnexcCabelo.addEventListener('click', () =>{
	respCabelo.innerHTML = "";
	respCabelo2.innerHTML = "";
	respCabelo3.innerHTML = "";
	respCabelo4.innerHTML = "";
	respCabelo5.innerHTML = "";
	respCabelo6.innerHTML = "";
	respCabelo7.innerHTML = "";
	respCabelo8.innerHTML = "";
	respCabelo9.innerHTML = "";
	respCabelo10.innerHTML = "";
	respCabelo11.innerHTML = "";
	respCabelo12.innerHTML = "";
	respCabelo13.innerHTML = "";
	respCabelo14.innerHTML = "";
	respCabelo15.innerHTML = "";
	respCabelo16.innerHTML = "";
});
//==================================================

//------------------DETALHES--------------------------
btnCilios.addEventListener('click', ()=>{
	respCilios.innerHTML = "<object type='image/svg+xml' data='cilios.svg' width='117' height='117' />";
});

btnexcCilios.addEventListener('click', ()=>{
	respCilios.innerHTML = "";
});

btnSardas.addEventListener('click', ()=>{
	respSardas.innerHTML = "<object type='image/svg+xml' data='sardas.svg' width='117' height='117' />";
});

btnexcSardas.addEventListener('click', ()=>{
	respSardas.innerHTML = "";
})
//=======================================================

//--------------------OCULOS------------------------------
btnOculos01.addEventListener('click', ()=>{
	respOculos01.innerHTML = "<object type='image/svg+xml' data='oculos01.svg' width='220' height='220' />";
	respOculos01.style.filter = "brightness(0%)";
	respOculos02.innerHTML = "";
});
btnOculos02.addEventListener('click', ()=>{
	respOculos02.innerHTML = "<object type='image/svg+xml' data='oculos02.svg' width='220' height='220' />";
	respOculos02.style.filter = "brightness(0%)";
	respOculos01.innerHTML = "";
});

btnexcOculos.addEventListener('click', ()=>{
	respOculos01.innerHTML = "";
	respOculos02.innerHTML = "";
});
//========================================================

//-------------------BARBA--------------------------------
btnBigode.addEventListener('click', ()=>{
	respBigode.innerHTML = "<object type='image/svg+xml' data='bigode.svg' width='100' height='100' />";
});

btnBigode02.addEventListener('click', ()=>{
	respBigode.innerHTML = "<object type='image/svg+xml' data='bigode02.svg' width='100' height='100' />";
});


btnexcBigode.addEventListener('click', ()=>{
	respBigode.innerHTML = "";
});

btnBarbixa.addEventListener('click', ()=>{
	respBarbixa.innerHTML = "<object type='image/svg+xml' data='barbixa.svg' width='100' height='100' />";
});

btnBarbixa02.addEventListener('click', ()=>{
	respBarbixa.innerHTML = "<object type='image/svg+xml' data='barbixa02.svg' width='100' height='100' />";
});

btnexcBarbixa.addEventListener('click', ()=>{
	respBarbixa.innerHTML = "";
});


btnBarba.addEventListener('click', ()=>{
	respBarba.innerHTML = "<object type='image/svg+xml' data='barba.svg' width='220' height='220' />";
});

btnBarba02.addEventListener('click', ()=>{
	respBarba.innerHTML = "<object type='image/svg+xml' data='barba02.svg' width='220' height='220' />";
});

btnexcBarba.addEventListener('click', ()=>{
	respBarba.innerHTML = "";
});

//========================================================

//-------------------CAMISAS--------------------------------
btnCamisa01.addEventListener('click', ()=>{
	respCamisa01.innerHTML = "<object type='image/svg+xml' data='camisa01.svg' width='240' height='240' />";
});

btnCamisa02.addEventListener('click', ()=>{
	respCamisa01.innerHTML = "<object type='image/svg+xml' data='camisa02.svg' width='240' height='240' />";
});

btnCamisa03.addEventListener('click', ()=>{
	respCamisa01.innerHTML = "<object type='image/svg+xml' data='camisa03.svg' width='240' height='240' />";
});

btnCamisa04.addEventListener('click', ()=>{
	respCamisa01.innerHTML = "<object type='image/svg+xml' data='camisa04.svg' width='240' height='240' />";
});

btnCamisa05.addEventListener('click', ()=>{
	respCamisa01.innerHTML = "<object type='image/svg+xml' data='camisa05.svg' width='240' height='240' />";
});
//==========================================================

//-----------------------COR-----------------------
btnCor.addEventListener('click', () =>{
	respCabelo.style.filter = "brightness(700%) hue-rotate(0deg) invert(0%)";
	respCabelo2.style.filter = "brightness(700%) hue-rotate(0deg) invert(0%)";
	respCabelo3.style.filter = "brightness(700%) hue-rotate(0deg) invert(0%)";
	respCabelo4.style.filter = "brightness(700%) hue-rotate(0deg) invert(0%)";
	respCabelo5.style.filter = "brightness(700%) hue-rotate(0deg) invert(0%)";
	respCabelo6.style.filter = "brightness(700%) hue-rotate(0deg) invert(0%)";
	respCabelo7.style.filter = "brightness(700%) hue-rotate(0deg) invert(0%)";
	respCabelo8.style.filter = "brightness(700%) hue-rotate(0deg) invert(0%)";
	respCabelo9.style.filter = "brightness(700%) hue-rotate(0deg) invert(0%)";
	respCabelo10.style.filter = "brightness(700%) hue-rotate(0deg) invert(0%)";
	respCabelo11.style.filter = "brightness(700%) hue-rotate(0deg) invert(0%)";
	respCabelo12.style.filter = "brightness(700%) hue-rotate(0deg) invert(0%)";
	respCabelo13.style.filter = "brightness(700%) hue-rotate(0deg) invert(0%)";
	respCabelo14.style.filter = "brightness(700%) hue-rotate(0deg) invert(0%)";
	respCabelo15.style.filter = "brightness(700%) hue-rotate(0deg) invert(0%)";
	respCabelo16.style.filter = "brightness(700%) hue-rotate(0deg) invert(0%)";
});

btnCor02.addEventListener('click', () =>{
	respCabelo.style.filter = "brightness(300%) hue-rotate(300deg) invert(5%) hue-rotate(30deg)";
	respCabelo2.style.filter = "brightness(300%) hue-rotate(300deg) invert(5%) hue-rotate(30deg)";
	respCabelo3.style.filter = "brightness(300%) hue-rotate(300deg) invert(5%) hue-rotate(30deg)";
	respCabelo4.style.filter = "brightness(300%) hue-rotate(300deg) invert(5%) hue-rotate(30deg)";
	respCabelo5.style.filter = "brightness(300%) hue-rotate(300deg) invert(5%) hue-rotate(30deg)";
	respCabelo6.style.filter = "brightness(300%) hue-rotate(300deg) invert(5%) hue-rotate(30deg)";
	respCabelo7.style.filter = "brightness(300%) hue-rotate(300deg) invert(5%) hue-rotate(30deg)";
	respCabelo8.style.filter = "brightness(300%) hue-rotate(300deg) invert(5%) hue-rotate(30deg)";
	respCabelo9.style.filter = "brightness(300%) hue-rotate(300deg) invert(5%) hue-rotate(30deg)";
	respCabelo10.style.filter = "brightness(300%) hue-rotate(300deg) invert(5%) hue-rotate(30deg)";
	respCabelo11.style.filter = "brightness(300%) hue-rotate(300deg) invert(5%) hue-rotate(30deg)";
	respCabelo12.style.filter = "brightness(300%) hue-rotate(300deg) invert(5%) hue-rotate(30deg)";
	respCabelo13.style.filter = "brightness(300%) hue-rotate(300deg) invert(5%) hue-rotate(30deg)";
	respCabelo14.style.filter = "brightness(300%) hue-rotate(300deg) invert(5%) hue-rotate(30deg)";
	respCabelo15.style.filter = "brightness(300%) hue-rotate(300deg) invert(5%) hue-rotate(30deg)";
	respCabelo16.style.filter = "brightness(300%) hue-rotate(300deg) invert(5%) hue-rotate(30deg)";
});

btnCor03.addEventListener('click', () =>{
	respCabelo.style.filter = "brightness(500%) hue-rotate(400deg) invert(5%) hue-rotate(30deg) invert(100%) hue-rotate(420deg)";
	respCabelo2.style.filter = "brightness(500%) hue-rotate(400deg) invert(5%) hue-rotate(30deg) invert(100%) hue-rotate(420deg)";
	respCabelo3.style.filter = "brightness(500%) hue-rotate(400deg) invert(5%) hue-rotate(30deg) invert(100%) hue-rotate(420deg)";
	respCabelo4.style.filter = "brightness(500%) hue-rotate(400deg) invert(5%) hue-rotate(30deg) invert(100%) hue-rotate(420deg)";
	respCabelo5.style.filter = "brightness(500%) hue-rotate(400deg) invert(5%) hue-rotate(30deg) invert(100%) hue-rotate(420deg)";
	respCabelo6.style.filter = "brightness(500%) hue-rotate(400deg) invert(5%) hue-rotate(30deg) invert(100%) hue-rotate(420deg)";
	respCabelo7.style.filter = "brightness(500%) hue-rotate(400deg) invert(5%) hue-rotate(30deg) invert(100%) hue-rotate(420deg)";
	respCabelo8.style.filter = "brightness(500%) hue-rotate(400deg) invert(5%) hue-rotate(30deg) invert(100%) hue-rotate(420deg)";
	respCabelo9.style.filter = "brightness(500%) hue-rotate(400deg) invert(5%) hue-rotate(30deg) invert(100%) hue-rotate(420deg)";
	respCabelo10.style.filter = "brightness(500%) hue-rotate(400deg) invert(5%) hue-rotate(30deg) invert(100%) hue-rotate(420deg)";
	respCabelo11.style.filter = "brightness(500%) hue-rotate(400deg) invert(5%) hue-rotate(30deg) invert(100%) hue-rotate(420deg)";
	respCabelo12.style.filter = "brightness(500%) hue-rotate(400deg) invert(5%) hue-rotate(30deg) invert(100%) hue-rotate(420deg)";
	respCabelo13.style.filter = "brightness(500%) hue-rotate(400deg) invert(5%) hue-rotate(30deg) invert(100%) hue-rotate(420deg)";
	respCabelo14.style.filter = "brightness(500%) hue-rotate(400deg) invert(5%) hue-rotate(30deg) invert(100%) hue-rotate(420deg)";
	respCabelo15.style.filter = "brightness(500%) hue-rotate(400deg) invert(5%) hue-rotate(30deg) invert(100%) hue-rotate(420deg)";
	respCabelo16.style.filter = "brightness(500%) hue-rotate(400deg) invert(5%) hue-rotate(30deg) invert(100%) hue-rotate(420deg)";
});