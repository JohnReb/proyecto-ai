var valor=0;
var pos ;
$(document).on('ready', function(){

	$(function() {
			$('.rango-preg > .indicator').hover(function() {
				$('.emoji').css('opacity', '1');
		  	}, function() {
				// vuelve a dejar el <div> como estaba al hacer el "mouseout"
				$('.emoji').css('opacity', '0');
		 	 });
		});

	function moveSlider(e){
		e.preventDefault();

		pos 	= $(e.currentTarget).offset()
		,	posX	= e.pageX - pos.left;
			valor	= (posX/$(e.currentTarget).outerWidth()).toFixed(1);
		switch (valor*10) {
			case 1:
				$('.emoji').css('background', 'url(img/1.png)');
				$('.emoji').css('background-size', 'cover');
			  break;
			case 2:
				$('.emoji').css('background', 'url(img/2.png)');
				$('.emoji').css('background-size', 'cover');
			  break;
			case 3:
				$('.emoji').css('background', 'url(img/3.png)');
				$('.emoji').css('background-size', 'cover');
			  break;
			case 4:
				$('.emoji').css('background', 'url(img/4.png)');
				$('.emoji').css('background-size', 'cover');
			  break;
			case 5:
				$('.emoji').css('background', 'url(img/5.png)');
				$('.emoji').css('background-size', 'cover');
			  break;
			case 6:
				$('.emoji').css('background', 'url(img/6.png)');
				$('.emoji').css('background-size', 'cover');
			  break;
			case 7:
				$('.emoji').css('background', 'url(img/7.png)');
				$('.emoji').css('background-size', 'cover');
			  break;
			case 8:
				$('.emoji').css('background', 'url(img/8.png)');
				$('.emoji').css('background-size', 'cover');
			  break;
			case 9:
				$('.emoji').css('background', 'url(img/9.png)');
				$('.emoji').css('background-size', 'cover');
			  break;
			case 10:
				$('.emoji').css('background', 'url(img/10.png)');
				$('.emoji').css('background-size', 'cover');
			  break;
		}
		
		if(posX >= 0 && posX <= $(e.currentTarget).outerWidth()){

			$('.rango-preg > .progress').css('width', posX+'px');
			$('.rango-preg > .indicator').css('left', posX+'px');

		}
	}

	$('.rango-preg').on('mousedown', function(e){
		
		moveSlider(e);

		$(this).on('mousemove', function(e){
			moveSlider(e);
		});

	}).on('mouseup', function(){
		$(this).off('mousemove');
	});

});
/*===============Sintomas=================*/
var sintoma = document.getElementById("pregunta");
var aux = 0;
var sintomasUser= [];
var newSintoma= ["Sintoma: Tos"," Sintoma:Dolor de garganta","Sintoma: Mucosidad nasal","Sintoma: Dolor muscular","Sintoma: Dolor de cabeza","Sintoma: Fatiga", "Sintoma: Falta de aire", "Sintoma: Dolor en el pecho", "Sintoma: Silbido al exhalar","Sintoma: Escalofríos","Sintoma: Sudoración excesiva" ,"Sintoma: Taquicardias", "Sintoma: Perdida de voz", "Sintoma: Flemas con sangre", "Sintoma: Perdida de peso", "Sintoma: Amigdalas/Ganglios inflamados","Haz concluido con el test"];
var gripeUser = [];
var asmaUser = [];
var neumoniaUser =	[];
var bronquitisUser = [];
var enficemaUser = [];
var faringitisUser = [];
var pleuritisUser = [];
var resfriadoUser = [];
var laringitisUser = [];
var tuberculosisUser = [];
var sinusitisUser = [];
var amigdalasUser = [];
var gripe = [0.9, 0.8, 0.8, 1, 0.7, 0.5, 0.8, 0, 0.1, 0, 0.1, 0.2, 0, 0.3, 0, 0.1, 0];
var asma = [0.2, 0.7, 0.4, 0.1, 0.5, 0.2, 0.5, 1, 0.9, 1, 0.1, 0, 0.2, 0, 0, 0, 0];
var neumonia =	[0.7, 0.8, 0.2, 0.4, 0.7, 0.1, 0.6, 0.1, 0.8, 0, 0.7, 0.9, 0.9, 0, 0, 0.2, 0];
var bronquitis = [0.4, 0.9, 0.7, 0.2, 0.1, 0, 0.8, 0.3, 0.9, 0.7, 0.4, 0, 0, 0.6, 0, 0, 0.8];
var enficema = [0, 0.9, 0.6, 0, 0.3, 0.2, 0.9, 1, 0.5, 0.9, 0, 0, 0, 0, 0.1, 0.7, 0];
var faringitis = [0.9, 0.1, 1, 0.1, 0.9, 0.1, 0.3, 0, 0.2, 0, 0, 0.1, 0, 0.7, 0, 0.1, 0.8];
var pleuritis = [0.5, 0.8, 0.2, 0, 0.2, 0, 0.2, 0.9, 1, 0, 0, 0, 0, 0, 0, 0, 0];
var resfriado = [0.8, 0.7, 0.7, 0.8, 0.7, 0.6, 0.7, 0, 0, 0, 0.7 , 0.1, 0, 0.3, 0, 0, 0.6];
var laringitis = [0.8, 1, 0.9, 0.3, 0.1, 0, 0.3, 0, 0, 0, 0.1, 0, 0, 1, 0.3, 0, 0.8];
var tuberculosis = [0.7, 0.8, 0.2, 0.1, 0.5, 0, 0.8, 0.8, 0.9, 0, 0.1, 0.9, 0, 0, 1, 1, 0.7];
var sinusitis = [ 0.8, 0.9, 0.3, 1, 0.2, 1, 0.8, 0.3, 0, 0, 0, 0, 0, 0, 0, 0,0.2];
var amigdalas = [ 0.8, 0.1, 1, 0.4, 0, 0.1, 0.7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
var sumaEnf = [6.3, 5.8, 7.1, 6.8, 6.1, 5.3, 3.8, 6.7, 5.6, 8.5, 5.5, 4.1];
var maxEnfUser = [0,0,0,0,0,0,0,0,0,0,0,0];
var resEnfUser = [0,0,0,0,0,0,0,0,0,0,0,0];
var enf=null;
var enf2=0;

function cambiarSintoma() {
	if(aux<16){
		sintomasUser[aux]=parseFloat(valor);
		sintomasUser[aux].toFixed(1);
		sintoma.innerHTML = newSintoma[aux];
		$('.rango-preg > .indicator').css('left', 0+'px');
		$('.rango-preg > .progress').css('width', 0+'px')
		aux++;	

	}else{
		sintoma.innerHTML = newSintoma[aux];
		sintomasUser[aux]=parseFloat(valor);
		sintomasUser[aux].toFixed(1);
			document.getElementById("botonPreg").innerHTML = "Finalizar";
			$('.rango-preg').css('opacity', 0);
			$('.bajo').css('opacity', 0);
			$('.alto').css('opacity', 0);
			aux++;
			var sumatoriaSint=0;
		if(aux>17){
			for(i=0;i<sintomasUser.length;i++){
				sumatoriaSint=sumatoriaSint+sintomasUser[i];
			}
		if(sumatoriaSint>1){

			for(j=0; j<=sintomasUser.length-1; j++){
				if(sintomasUser[j]>gripe[j]){
					gripeUser[j]=gripe[j];
					
				}else{
					gripeUser[j]=sintomasUser[j];
				}
				if(sintomasUser[j]>asma[j]){
					asmaUser[j]=asma[j];
				}else{
					asmaUser[j]=sintomasUser[j];
				}
				if(sintomasUser[j]>neumonia[j]){
					neumoniaUser[j]=neumonia[j];
				}else{
					neumoniaUser[j]=sintomasUser[j];
				}
				if(sintomasUser[j]>bronquitis[j]){
					bronquitisUser[j]=bronquitis[j];
				}else{
					bronquitisUser[j]=sintomasUser[j];
				}
				if(sintomasUser[j]>enficema[j]){
					enficemaUser[j]=enficema[j];
				}else{
					enficemaUser[j]=sintomasUser[j];
				}
				if(sintomasUser[j]>faringitis[j]){
					faringitisUser[j]=faringitis[j];
				}else{
					faringitisUser[j]=sintomasUser[j];
				}
				if(sintomasUser[j]>pleuritis[j]){
					pleuritisUser[j]=pleuritis[j];
				}else{
					pleuritisUser[j]=sintomasUser[j];
				}
				if(sintomasUser[j]>resfriado[j]){
					resfriadoUser[j]=resfriado[j];
				}else{
					resfriadoUser[j]=sintomasUser[j];
				}
				if(sintomasUser[j]>laringitis[j]){
					laringitisUser[j]=laringitis[j];
				}else{
					laringitisUser[j]=sintomasUser[j];
				}
				if(sintomasUser[j]>tuberculosis[j]){
					tuberculosisUser[j]=tuberculosis[j];
				}else{
					tuberculosisUser[j]=sintomasUser[j];
				}
				if(sintomasUser[j]>sinusitis[j]){
					sinusitisUser[j]=sinusitis[j];
				}else{
					sinusitisUser[j]=sintomasUser[j];
				}
				if(sintomasUser[j]>amigdalas[j]){
					amigdalasUser[j]=amigdalas[j];
				}else{
					amigdalasUser[j]=sintomasUser[j];
				}
			}

		
			for(i=0;i<maxEnfUser.length;i++){
				if (gripeUser[i]>maxEnfUser[i]){
					maxEnfUser[i] = gripeUser[i];
				 } 
			}
			for(i=0;i<maxEnfUser.length;i++){
				if (gripeUser[i]>maxEnfUser[i]){
					maxEnfUser[i] = gripeUser[i];
				 } 
			}
			for(i=0;i<maxEnfUser.length;i++){
				if (gripeUser[i]>maxEnfUser[i]){
					maxEnfUser[i] = gripeUser[i];
				 } 
			}
			for(i=0;i<maxEnfUser.length;i++){
				if (asmaUser[i]>maxEnfUser[i]){
					maxEnfUser[i] = asmaUser[i];
				 } 
			}
			for(i=0;i<maxEnfUser.length;i++){
				if (neumoniaUser[i]>maxEnfUser[i]){
					maxEnfUser[i] = neumoniaUser[i];
				 } 
			}
			for(i=0;i<maxEnfUser.length;i++){
				if (bronquitisUser[i]>maxEnfUser[i]){
					maxEnfUser[i] = bronquitisUser[i];
				 } 
			}
			for(i=0;i<maxEnfUser.length;i++){
				if (enficemaUser[i]>maxEnfUser[i]){
					maxEnfUser[i] = enficemaUser[i];
				 } 
			}
			for(i=0;i<maxEnfUser.length;i++){
				if (pleuritisUser[i]>maxEnfUser[i]){
					maxEnfUser[i] = pleuritisUser[i];
				 } 
			}
			for(i=0;i<maxEnfUser.length;i++){
				if (resfriadoUser[i]>maxEnfUser[i]){
					maxEnfUser[i] = resfriadoUser[i];
				 } 
			}
			for(i=0;i<maxEnfUser.length;i++){
				if (laringitisUser[i]>maxEnfUser[i]){
					maxEnfUser[i] = laringitisUser[i];
				 } 
			}
			for(i=0;i<maxEnfUser.length;i++){
				if (tuberculosisUser[i]>maxEnfUser[i]){
					maxEnfUser[i] = tuberculosisUser[i];
				 } 
			}
			for(i=0;i<maxEnfUser.length;i++){
				if (sinusitisUser[i]>maxEnfUser[i]){
					maxEnfUser[i] = sinusitisUser[i];
				 } 
			}
			for(i=0;i<maxEnfUser.length;i++){
				if (amigdalasUser[i]>maxEnfUser[i]){
					maxEnfUser[i] = amigdalasUser[i];
				 } 
			}

		for(j=0; j<=maxEnfUser.length-1; j++){
			if(gripe[j]==maxEnfUser[j]){
				resEnfUser[0]=resEnfUser[0]+1;
			}
			if(asma[j]==maxEnfUser[j]){
				resEnfUser[1]=resEnfUser[1]+1;
			}
			if(neumonia[j]==maxEnfUser[j]){
				resEnfUser[2]=resEnfUser[2]+1;
			}
			if(bronquitis[j]==maxEnfUser[j]){
				resEnfUser[3]=resEnfUser[3]+1;
			}
			if(enficema[j]==maxEnfUser[j]){
				resEnfUser[4]=resEnfUser[4]+1;
			}
			if(faringitis[j]==maxEnfUser[j]){
				resEnfUser[5]=resEnfUser[5]+1;
			}
			if(pleuritis[j]==maxEnfUser[j]){
				resEnfUser[6]=resEnfUser[6]+1;
			}
			if(resfriado[j]==maxEnfUser[j]){
				resEnfUser[7]=resEnfUser[7]+1;
			}
			if(laringitis[j]==maxEnfUser[j]){
				resEnfUser[8]=resEnfUser[8]+1;
			}
			if(tuberculosis[j]==maxEnfUser[j]){
				resEnfUser[9]=resEnfUser[9]+1;
			}
			if(sinusitis[j]==maxEnfUser[j]){
				resEnfUser[10]=resEnfUser[10]+1;
			}
			if(amigdalas[j]==maxEnfUser[j]){
				resEnfUser[11]=resEnfUser[11]+1;
			}

		}
		

		var enf=0;
		var menor = 0;
		for(i=0;i<resEnfUser.length;i++){
			if (resEnfUser[i]>menor){
				menor = resEnfUser[i];
				enf = i;
			 } 
		}
		localStorage.setItem('resEnfUser',  JSON.stringify(resEnfUser));
		window.location.href="resultados.html";



		//comparar con el original y cada que tengo coincidencia suma1
	}else{
		alert("Los datos no son confiables");
		window.location.href="pregunta.html";
	}
		
	}
	}
} 
var resEnfUserls;
var nmayotf;
function printChecked(){
	resEnfUserls = localStorage.getItem('resEnfUser');
	resEnfUserls=resEnfUserls.replace("]", "");
	resEnfUserls=resEnfUserls.replace("[", "");
	var aux= resEnfUserls.split(',');
	var items=document.getElementsByName('check[]');
	var selectedItems="";
	for(var i=0; i<items.length; i++){
		if(items[i].type=='checkbox' && items[i].checked==true)

		switch(items[i].value){
			case 'Gripe':
			
				if(enf==null){
					enfSel=items[i].value;
					enf=(aux[0]/12)*100;
					
				} else {
					enf2=(aux[0]/12)*100;
					enfSel2=items[i].value;
				}
			break;
			case 'Asma':
				if(enf==null){
					enfSel=items[i].value;
					enf=(aux[1]/12)*100;
				} else {
					enf2=(aux[1]/12)*100;
					enfSel2=items[i].value;
				}
			break;
			case 'Neumonia':
				if(enf==null){
					enfSel=items[i].value;
					enf=(aux[2]/12)*100;
				} else {
					enf2=(aux[2]/12)*100;
					enfSel2=items[i].value;
				}
			break;
			case 'Bronquitis':
				if(enf==null){
					enfSel=items[i].value;
					enf=(aux[3]/12)*100;
				} else {
					enf2=(aux[3]/12)*100;
					enfSel2=items[i].value;
				}
			break;
			case 'Enfisema':
				if(enf==null){
					enfSel=items[i].value;
					enf=(aux[4]/12)*100;
				} else {
					enf2=(aux[4]/12)*100;
					enfSel2=items[i].value;
				}
			break;
			case 'Faringitis':
				if(enf==null){
					enfSel=items[i].value;
					enf=(aux[5]/12)*100;
				} else {
					enf2=(aux[5]/12)*100;
					enfSel2=items[i].value;
				}
			break;
			case 'Pleuritis':
				if(enf==null){
					enfSel=items[i].value;
					enf=(aux[6]/12)*100;
				} else {
					enf2=(aux[6]/12)*100;
					enfSel2=items[i].value;
				}
			break;
			case 'Resfriado':
				if(enf==null){
					enfSel=items[i].value;
					enf=(aux[7]/12)*100;
				} else {
					enf2=(aux[7]/12)*100;
					enfSel2=items[i].value;
				}
			break;
			case 'Laringitis':
				if(enf==null){
					enfSel=items[i].value;
					enf=(aux[8]/12)*100;
				} else {
					enf2=(aux[8]/12)*100;
					enfSel2=items[i].value;
					
				}
			break;
			case 'Tuberculosis':
				if(enf==null){
					enfSel=items[i].value;
					enf=(aux[9]/12)*100;
				} else {
					enf2=(aux[9]/12)*100;
					enfSel2=items[i].value;
				}
			break;
			case 'Sinusitis':
				if(enf==null){
					enfSel=items[i].value;
					enf=(aux[10]/12)*100;
				} else {
					enf2=(aux[10]/12)*100;
					enfSel2=items[i].value;
				}
			break;
			case 'Amigdalitis':
				if(enf==null){
					enfSel=items[i].value;
					enf=(aux[11]/12)*100;
				} else {
					enf2=(aux[11]/12)*100;
					enfSel2=items[i].value;
				}
			break;
		}
			
	}
	var enf1 = document.getElementById("enf1");
	enf1.innerHTML = enfSel;
	var enf2d  = document.getElementById("enf2");
	enf2d.innerHTML = enfSel2;
	var enf1r = document.getElementById("probEnf1");
	enf1r.innerHTML = enf.toFixed(2);
	var enf2r  = document.getElementById("probEnf2");
	enf2r.innerHTML = enf2.toFixed(2);


	var contenedorCheck = document.getElementById("check-enf");
	contenedorCheck.style.visibility='hidden';
	contenedorCheck.style.opacity='0';
	resEnfUserls = localStorage.getItem('resEnfUser');
	resEnfUserls=resEnfUserls.replace("]", "");
	resEnfUserls=resEnfUserls.replace("[", "");
	resEnfUserls = resEnfUserls.split(',');
	nmayotf=calcMayor(resEnfUserls);
	var enfRU = "";
	var tratRU = "";
	var medRU = "";
	var origen="";
	switch(nmayotf){
		case 0:
			enfRU = "Gripe";
			tratRU = "En la mayor parte de los casos basta con un tratamiento sintomático de la fiebre, los dolores musculares y el dolor de cabeza, utilizando preferentemente paracetamol. Es aconsejable el reposo relativo y una buena hidratación. En los últimos años se han desarrollado algunos fármacos antivirales específicos para el virus de la gripe, primero amantadina y rimantadina, y, más recientemente, zanamivir y oseltamivir.";
			medRU = "Paracetamol, Antigripales";
			origen = "La gripe está causada por un grupo de virus llamados virus de la gripe o de la influenza, de los que existen tres tipos A, B, y C. La mayor parte de las epidemias de gripe se deben al virus de la gripe tipo A, mientras que el tipo B produce epidemias menos extensas y enfermedad más leve, y el tipo C causa muy raramente enfermedad. El virus de la gripe se transmite de persona a persona, habitualmente a través de las secreciones respiratorias, por la tos y el estornudo.";
			break;
		case 1:
			enfRU = "Asma";
			tratRU = "La prevención y el control a largo plazo son la clave para detener los ataques de asma antes de que se manifiesten. El tratamiento, generalmente, implica aprender a reconocer los desencadenantes, tomar medidas para evitarlos y controlar la respiración para garantizar que los medicamentos diarios para el asma mantengan los síntomas bajo control. En caso de un ataque de asma, es posible que necesites usar un inhalador de alivio rápido, como salbutamol";
			medRU = "Corticosteroides inhalados, Modificadores de leucotrienos, Agonistas beta de acción prolongada, Inhaladores de combinación, Teofilina";
			origen="El asma es una afección en la que se estrechan y se hinchan las vías respiratorias, lo cual produce mayor mucosidad. Esto podría dificultar la respiración y provocar tos, silbido al respirar y falta de aire.";
			break;
		case 2:
			enfRU = "Neumonia";
			tratRU = "El tratamiento para la neumonía implica la cura de la infección y la prevención de complicaciones. Las personas que presentan neumonía adquirida en la comunidad normalmente pueden recibir tratamiento en sus hogares con medicamentos. A pesar de que la mayoría de los síntomas se alivian en unos pocos días o semanas, la sensación de cansancio puede perdurar durante un mes o más.";
			medRU = "Antibióticos, Medicamentos para la tos, Antifebriles/analgésicos";
			origen="La neumonía es una infección que inflama los sacos aéreos de uno o ambos pulmones. Los sacos aéreos se pueden llenar de líquido o pus (material purulento), lo que provoca tos con flema o pus, fiebre, escalofríos y dificultad para respirar. Diversos microorganismos, como bacterias, virus y hongos, pueden provocar neumonía.			";
			break;
		case 3:
			enfRU = "Bronquitis";
			tratRU = "Generalmente no es necesario hacer exámenes ni radiografías para diagnosticar la bronquiolitis. El doctor puede identificar el problema observando al paciente y escuchando sus pulmones con un estetoscopio. Pero quizás sean necesarias más de una o dos visitas para distinguir este trastorno de un resfrío o de la influenza.";
			medRU = "Antiinflamatorio no esteroideo, Analgésico";
			origen="La bronquiolitis es una infección pulmonar común en bebés y niños pequeños. Causa inflamación y congestión en las vías respiratorias pequeñas (bronquiolos) del pulmón. Casi siempre, la causa de la bronquiolitis es un virus. Normalmente, el pico de la bronquiolitis es durante los meses de invierno.";
			break;	
		case 4:
			enfRU = "Enfisema pulmonar";
			tratRU = "El enfisema y la enfermedad pulmonar obstructiva crónica no pueden curarse, pero existen tratamientos que pueden ayudar a aliviar los síntomas y a desacelerar el avance de la enfermedad.";
			medRU = "Broncodilatadores, Corticosteroides inhalados, Antibióticos";
			origen="El enfisema es una afección pulmonar que causa dificultad para respirar. Las personas que padecen enfisema tienen dañados los sacos de aire de los pulmones (alvéolos). Con el correr del tiempo, las paredes internas de los sacos de aire se debilitan y se rompen, lo que crea espacios de aire más grandes en lugar de muchos espacios pequeños. Esto reduce la superficie de los pulmones y, a su vez, la cantidad de oxígeno que llega al torrente sanguíneo.			";
			break;
		case 5:
			enfRU = "Faringitis";
			tratRU = "Si el dolor de garganta está causado por una infección bacteriana, el especialista suele recetar un tratamiento con antibióticos. De este tipo de medicamentos el más comúnmente administrado es la penicilina: por vía oral durante 10 días. En el caso de padecer alergia a este antibiótico, se suele recetar uno alternativo. El paciente deberá completar el tratamiento para que resulte efectivo, según las indicaciones del especialista. Si no se toman todos los medicamentos, se puede producir un empeoramiento o que la infección se extienda a las regiones colindantes.";
			medRU = "Antibióticos, Penicilina";
			origen="Es la inflamación de la garganta o faringe a menudo causada por una infección bacteriana o vírica. Provoca molestia, dolor o carraspera en esta región, lo que a menudo da lugar a dificultades a la hora de tragar o hablar.			";
			break;
		case 6:
			enfRU = "Pleuritis";
			tratRU = "Los tratamientos utilizados en la pleuritis y el derrame pleural se concentran principalmente en la causa de fondo. Por ejemplo, si la causa es la neumonía bacteriana, un antibiótico controlará la infección. Si la causa es viral, la pleuresía se resolverá por sí sola.			";
			medRU = "Antiinflamatorio no esteroideo, Analgésico, Narcótico";
			origen="Es una enfermedad en la que se inflama la pleura, una membrana que consta de una capa de tejido que recubre el lado interno de la caja torácica y una capa de tejido que rodea los pulmones. También denominada pleuritis, la pleuresía causa un dolor agudo en el pecho (dolor pleurítico) que se intensifica durante la respiración.";
			break;
		case 7:
			enfRU = "Resfriado común";
			tratRU = "No hay una cura para el resfriado común. Los antibióticos no son útiles en contra de los virus del resfriado común y no deben utilizarse a menos de que se trate de una infección bacteriana. El tratamiento está dirigido a aliviar los signos y síntomas.";
			medRU = "Analgésicos, Atomizadores para descongestionar la nariz, Jarabes para la tos";
			origen="El resfriado común es una infección viral de tu nariz y garganta (vías respiratorias altas). Por lo general es inofensivo, aunque podría no sentirse como tal. Muchos tipos de virus pueden causar un resfriado común.";
			break;	
	  case 8:
			enfRU = "Laringitis";
			tratRU = "La laringitis aguda generalmente mejora por sí sola aproximadamente en una semana. Las medidas de cuidado personal pueden ayudar a mejorar los síntomas. Los tratamientos para la laringitis crónica están orientados a tratar las causas ocultas, como ardor de estómago, tabaquismo o uso excesivo de alcohol.";
			medRU = "Antibióticos, Corticoesteroides";
			origen="La laringitis es la inflamación de la glotis (laringe) por uso excesivo, irritación o infección. Dentro de la laringe se encuentran las cuerdas vocales, dos pliegues de membrana mucosa que cubren el músculo y el cartílago. Normalmente, las cuerdas vocales se abren y cierran suavemente, formando así sonidos a partir del movimiento y la vibración";
			break;
		case 9:
			enfRU = "Tuberculosis";
			tratRU = "La medicación es el fundamento del tratamiento para la tuberculosis. Pero el tratamiento de esta enfermedad lleva mucho más tiempo que tratar otras clases de infecciones bacterianas. Para la tuberculosis activa, debes tomar antibióticos por lo menos durante seis a nueve meses. La medicación exacta y la duración del tratamiento dependen de tu edad, estado de salud general, posibilidad de resistencia a la medicación y la ubicación de la infección en el cuerpo.";
			medRU = "Isoniacida, Rifampicina, Etambutol, Pirazinamida";
			origen = "La tuberculosis (TB) es una enfermedad infecciosa potencialmente grave que afecta principalmente a los pulmones. Las bacterias que causan la tuberculosis se propagan de una persona a otra a través de pequeñas gotitas liberadas en el aire a través de la tos y los estornudos.";
			break;
		case 10:
			enfRU = "Sinusitis";
			tratRU = "La mayoría de los casos de sinusitis aguda, causada por una infección viral, se resuelven solos. Generalmente, todo lo que necesitas para aliviar los síntomas son técnicas de cuidado personal.";
			medRU = "Irrigación salina nasal, Corticosteroides nasales, Analgésicos de venta libre";
			origen="La sinusitis provoca la inflamación de las cavidades que rodean las fosas nasales (senos). Esto obstaculiza el drenaje y causa acumulación de mucosidad. Cuando padeces sinusitis, puedes sentir dificultad para respirar por la nariz. Es posible que se te hinche la cara la zona que rodea los ojos y que sientas dolor facial y de cabeza palpitantes.";
			break;
		case 11:
			enfRU = "Amigdalitis";
			tratRU = "Independientemente de que la amigdalitis esté provocada por una infección viral o bacteriana.";
			medRU = "Antiinflamatorio no esteroideo, Analgésico, Antibiótico de penicilina";
			origen="La amigdalitis es la inflamación de las amígdalas, dos masas de tejido de forma ovalada situadas a ambos lados de la parte posterior de la garganta. Los signos y síntomas de la amigdalitis comprenden hinchazón de las amígdalas, dolor de garganta, dificultad para tragar y sensibilidad de los ganglios linfáticos a los lados del cuello.";
			break;	
	}
	var enfR = document.getElementById("enfR");
			enfR.innerHTML = enfRU;
			var tratR  = document.getElementById("tratR");
			tratR.innerHTML = tratRU;
			var medR = document.getElementById("medR");
			medR.innerHTML = medRU;
			var medR = document.getElementById("origen");
			medR.innerHTML = origen;

}

function calcMayor (arreglo){
	menorarr = 0;
	enfarr = 0;
	for(i=0;i<arreglo.length;i++){
		if (parseInt(arreglo[i])>menorarr){
			menorarr = arreglo[i];
			enfarr = i;
		 } 
	}
	return enfarr;
}