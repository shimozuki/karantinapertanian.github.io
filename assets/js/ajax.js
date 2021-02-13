//window.setTimeout("pushSubmit()",50000);
function pushSubmit() {
	document.getElementById('btnSend').click();
}

function pagination(page,kx){
	var dataString;
	var start = $("#start").val();
	var end = $("#end").val();
	var key = $("#key").val();
	var cat = $("#cat").val();
	
	dataString = 'starting='+page+'&p='+kx+'&period1='+start+'&period2='+end+'&key='+key+'&cat='+cat+'&random='+Math.random();
	
	$.ajax({
		url:"getListDok.php",
		type:"GET",
		data: dataString,
		success: function(data){
			$('#divPageData').html(data);
		}
	});
}

function loadKomoditi(){
	var dataString;
	var kat = $("#kat").val();
	
	dataString = 'act=getkom&kat='+kat+'&random='+Math.random();
	
	$.ajax({
		url: "./proses.php",
		type: "GET",
		data: dataString,
		success: function(data){
			$('#divKomoditi').html(data);
		}
	});
}

function loadSatuan(){
	var dataString;
	var komoditi = $("#komoditi").val();
	
	dataString = 'act=getsat&kom='+komoditi+'&random='+Math.random();
	
	$.ajax({
		url: "./proses.php",
		type: "GET",
		data: dataString,
		success: function(data){
			$("#vol").attr("placeholder", "Volume dalam "+data);
			//$('#divSatuan').html(data);
		}
	});
}

function hitungTarif(){
	var dataString;
	var kegiatan = $("#kegiatan").val();
	var kat = $("#kat").val();
	var komoditi = $("#komoditi").val();
	var vol = $("#vol").val();
	
	dataString = 'act=gettarif&keg='+kegiatan+'&kat='+kat+'&kom='+komoditi+'&vol='+vol+'&random='+Math.random();
	
	$.ajax({
		url: "./proses.php",
		type: "GET",
		data: dataString,
		//$("#loadinghitung").css('display') = "block";
		//document.getElementById("loadinghitung").style.display = "block";  // show the loading message.
		success: function(data){
			$('#divHitung').html(data);
			//$("#loadinghitung").css('display') = "none";
		}
	});
}

function cekSertifikat(dok,noKw,ntb){
	var dataString;
	//var dok = $("#cert").val();
	//var noKw = $("#no_kwitansi").val();
	//var ntb = $("#ntb").val();
	
	dataString = 'act=print&dok='+dok+'&nokw='+noKw+'&ntb='+ntb;
	
	$.ajax({
		url: "proses.php",
		type: "GET",
		data: dataString,
		//$("#loadingcetak").css('display') = "block";
		//$("#loadingcetak").style.display = "block";  // show the loading message.
		//beforeSend: function(){
			//$('loadingcetak').html('loading...');
		//},
		success: function(data){
			$('#divSertifikat').html(data);
			//$("#loadingcetak").css('display') = "none";
			$("#vol").attr("placeholder", "Volume dalam "+data);
			//$('#loadingcetak').html('loading...');
		}
	});
}

var mikExp = /[^0-9.,]/;
function dodacheck(val) {
	var strPass = val.value;
	var strLength = strPass.length;
	var lchar = val.value.charAt((strLength) - 1);
	
	if(lchar.match(mikExp)) {
		var tst = val.value.substring(0, (strLength) - 1);
		val.value = tst;
	}
}