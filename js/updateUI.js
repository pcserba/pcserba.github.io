function showData(res) {
	//update the text
	//build the string
	txt = 'We detected a <B>' + res[0].results[0].mh + ' </B> <B>'+res[0].results[0].Cn_short+'</B> with <B>'+Math.round(fromCarnet[0].probability*100)+'%</B> confidence.<P><B>Registrations in Europe ('+res[0].results[0].year+'):</B> '+res[0].results[0].countVIN+' vehicles<P><B>Average specific CO<sub>2</sub> Emissions</B>: '+res[0].results[0].avgEWLTP+' g/km<P><B>Average engine capacity:</B> '+res[0].results[0].avgEc+'cm<sup>3</sup><P><B>Average engine power:</B> '+res[0].results[0].avgEp+'kwh<P><B>Average mass in running order:</B> '+res[0].results[0].avgM+'kg';
document.getElementById('caption TL').innerHTML=txt;
document.getElementById('BR').innerHTML='<img src=img/close-window.png width=10px><a href=#>[Registrations of '+ res[0].results[0].mh +' '+res[0].results[0].Cn_short+' by year]</A></P></div>';
document.getElementById('BR1').innerHTML='<a href=#>[Registrations of '+ res[0].results[0].mh +' '+res[0].results[0].Cn_short+' by country in 2020]</A></P></div>';
document.getElementById('BR2').innerHTML='<a href=#>[Avg Ewltp for '+res[0].results[0].mh+' by year]</A></P></div>';

document.getElementById('BR').addEventListener('click', function(){
   showYear(res[2].results);  });
document.getElementById('BR1').addEventListener('click', function(){
   showMS(res[1].results);  });
document.getElementById('BR2').addEventListener('click', function(){
   showManufacturer(res[3].results);  });


	//transition opacity
	document.getElementById('caption TL').classList.toggle('show');
	document.getElementById('BR').classList.toggle('show');
	document.getElementById('BR1').classList.toggle('show');
	document.getElementById('BR2').classList.toggle('show');
	};


function showMS(res) {
	chartByCountry(res);
	//transition opacity
	document.getElementById('caption BL').classList.add('show');

}

function showYear(res) {
	chartByYear(res);
	//transition opacity
	document.getElementById('caption BL').classList.add('show');

}

function showManufacturer(res) {
	chartByManufacturer(res);
	//transition opacity
	document.getElementById('caption BL').classList.add('show');

}

function showAll() {
	showData();
	showYear();	
}
