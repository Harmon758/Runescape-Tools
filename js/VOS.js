function VOS(Clan){
	if(Clan == document.getElementById("Iorwerth_VOS_Checkbox")){ var XP = document.getElementById("Iorwerth_XP"); }
	if(Clan == document.getElementById("Ithell_VOS_Checkbox")){ var XP = document.getElementById("Ithell_XP"); }
	if(Clan == document.getElementById("Cadarn_VOS_Checkbox")){ var XP = document.getElementById("Cadarn_XP"); }
	if(Clan == document.getElementById("Amlodd_VOS_Checkbox")){ var XP = document.getElementById("Amlodd_XP"); }
	if(Clan == document.getElementById("Trahaearn_VOS_Checkbox")){ var XP = document.getElementById("Trahaearn_XP"); }
	if(Clan == document.getElementById("Hefin_VOS_Checkbox")){ var XP = document.getElementById("Hefin_XP"); }
	if(Clan == document.getElementById("Crwys_VOS_Checkbox")){ var XP = document.getElementById("Crwys_XP"); }
	if(Clan == document.getElementById("Meilyr_VOS_Checkbox")){ var XP = document.getElementById("Meilyr_XP"); }
	if(Clan.checked){
		XP.innerHTML = (Math.round(XP.innerHTML * 12) / 10).toFixed(1);
	}else{
		XP.innerHTML = (Math.round(XP.innerHTML / .12) / 10).toFixed(1);
	}
	
	/*
	var Count = 0;
	*/
}

function Ibis(){
	var Iorwerth_XP = document.getElementById("Iorwerth_XP");
	var Ithell_XP = document.getElementById("Ithell_XP");
	var Cadarn_XP = document.getElementById("Cadarn_XP");
	var Amlodd_XP = document.getElementById("Amlodd_XP");
	var Trahaearn_XP = document.getElementById("Trahaearn_XP");
	var Hefin_XP = document.getElementById("Hefin_XP");
	var Crwys_XP = document.getElementById("Crwys_XP");
	var Meilyr_XP = document.getElementById("Meilyr_XP");
	var Ibis_Pieces = document.getElementById("Ibis_Pieces").value;
	if(Ibis_Pieces == 4){
		var XP_Multiplier = 1.05
	}else{
		var XP_Multiplier = 1 + Ibis_Pieces * 0.01;
	}
	Iorwerth_XP.innerHTML = (Math.floor(1250 * XP_Multiplier) / 10).toFixed(1);
	Ithell_XP.innerHTML = (Math.floor(1300 * XP_Multiplier) / 10).toFixed(1);
	Cadarn_XP.innerHTML = (Math.floor(1350 * XP_Multiplier) / 10).toFixed(1);
	Amlodd_XP.innerHTML = (Math.floor(1400 * XP_Multiplier) / 10).toFixed(1);
	Trahaearn_XP.innerHTML = (Math.floor(1450 * XP_Multiplier) / 10).toFixed(1);
	Hefin_XP.innerHTML = (Math.floor(1500 * XP_Multiplier) / 10).toFixed(1);
	Crwys_XP.innerHTML = (Math.floor(1550 * XP_Multiplier) / 10).toFixed(1);
	Meilyr_XP.innerHTML = (Math.floor(1700 * XP_Multiplier) / 10).toFixed(1);
	if((document.getElementById("Iorwerth_VOS_Checkbox")).checked){ Iorwerth_XP.innerHTML = (Math.round(Iorwerth_XP.innerHTML * 12) / 10).toFixed(1); }
	if((document.getElementById("Ithell_VOS_Checkbox")).checked){ Ithell_XP.innerHTML = (Math.round(Ithell_XP.innerHTML * 12) / 10).toFixed(1); }
	if((document.getElementById("Cadarn_VOS_Checkbox")).checked){ Cadarn_XP.innerHTML = (Math.round(Cadarn_XP.innerHTML * 12) / 10).toFixed(1); }
	if((document.getElementById("Amlodd_VOS_Checkbox")).checked){ Amlodd_XP.innerHTML = (Math.round(Amlodd_XP.innerHTML * 12) / 10).toFixed(1); }
	if((document.getElementById("Trahaearn_VOS_Checkbox")).checked){ Trahaearn_XP.innerHTML = (Math.round(Trahaearn_XP.innerHTML * 12) / 10).toFixed(1); }
	if((document.getElementById("Hefin_VOS_Checkbox")).checked){ Hefin_XP.innerHTML = (Math.round(Hefin_XP.innerHTML * 12) / 10).toFixed(1); }
	if((document.getElementById("Crwys_VOS_Checkbox")).checked){ Crwys_XP.innerHTML = (Math.round(Crwys_XP.innerHTML * 12) / 10).toFixed(1); }
	if((document.getElementById("Meilyr_VOS_Checkbox")).checked){ Meilyr_XP.innerHTML = (Math.round(Meilyr_XP.innerHTML * 12) / 10).toFixed(1); }
}