function Recalculate_XP(){
	var Iorwerth_XP = document.getElementById("Iorwerth_XP");
	var Ithell_XP = document.getElementById("Ithell_XP");
	var Cadarn_XP = document.getElementById("Cadarn_XP");
	var Amlodd_XP = document.getElementById("Amlodd_XP");
	var Trahaearn_XP = document.getElementById("Trahaearn_XP");
	var Hefin_XP = document.getElementById("Hefin_XP");
	var Crwys_XP = document.getElementById("Crwys_XP");
	var Meilyr_XP = document.getElementById("Meilyr_XP");
	var Ibis_Pieces = document.getElementById("Ibis_Pieces").value;
	var Ava_Multiplier = 1 + document.getElementById("Clan_Avatar").value / 100;
	if(Ibis_Pieces == 4){
		var VOS_Multiplier = 1.05
	}else{
		var VOS_Multiplier = 1 + Ibis_Pieces * 0.01;
	}
	Iorwerth_XP.innerHTML = (Math.floor(1250 * VOS_Multiplier * Ava_Multiplier) / 10).toFixed(1);
	Ithell_XP.innerHTML = (Math.floor(1300 * VOS_Multiplier * Ava_Multiplier) / 10).toFixed(1);
	Cadarn_XP.innerHTML = (Math.floor(1350 * VOS_Multiplier * Ava_Multiplier) / 10).toFixed(1);
	Amlodd_XP.innerHTML = (Math.floor(1400 * VOS_Multiplier * Ava_Multiplier) / 10).toFixed(1);
	Trahaearn_XP.innerHTML = (Math.floor(1450 * VOS_Multiplier * Ava_Multiplier) / 10).toFixed(1);
	Hefin_XP.innerHTML = (Math.floor(1500 * VOS_Multiplier * Ava_Multiplier) / 10).toFixed(1);
	Crwys_XP.innerHTML = (Math.floor(1550 * VOS_Multiplier * Ava_Multiplier) / 10).toFixed(1);
	Meilyr_XP.innerHTML = (Math.floor(1700 * VOS_Multiplier * Ava_Multiplier) / 10).toFixed(1);
	if(document.getElementById("Iorwerth_VOS_Checkbox").checked){ Iorwerth_XP.innerHTML = (Math.round(Iorwerth_XP.innerHTML * 12) / 10).toFixed(1); }
	if(document.getElementById("Ithell_VOS_Checkbox").checked){ Ithell_XP.innerHTML = (Math.round(Ithell_XP.innerHTML * 12) / 10).toFixed(1); }
	if(document.getElementById("Cadarn_VOS_Checkbox").checked){ Cadarn_XP.innerHTML = (Math.round(Cadarn_XP.innerHTML * 12) / 10).toFixed(1); }
	if(document.getElementById("Amlodd_VOS_Checkbox").checked){ Amlodd_XP.innerHTML = (Math.round(Amlodd_XP.innerHTML * 12) / 10).toFixed(1); }
	if(document.getElementById("Trahaearn_VOS_Checkbox").checked){ Trahaearn_XP.innerHTML = (Math.round(Trahaearn_XP.innerHTML * 12) / 10).toFixed(1); }
	if(document.getElementById("Hefin_VOS_Checkbox").checked){ Hefin_XP.innerHTML = (Math.round(Hefin_XP.innerHTML * 12) / 10).toFixed(1); }
	if(document.getElementById("Crwys_VOS_Checkbox").checked){ Crwys_XP.innerHTML = (Math.round(Crwys_XP.innerHTML * 12) / 10).toFixed(1); }
	if(document.getElementById("Meilyr_VOS_Checkbox").checked){ Meilyr_XP.innerHTML = (Math.round(Meilyr_XP.innerHTML * 12) / 10).toFixed(1); }
	// Count
}

function Clear_VOS(){
	document.getElementById("Iorwerth_VOS_Checkbox").checked = false;
	document.getElementById("Ithell_VOS_Checkbox").checked = false;
	document.getElementById("Cadarn_VOS_Checkbox").checked = false;
	document.getElementById("Amlodd_VOS_Checkbox").checked = false;
	document.getElementById("Trahaearn_VOS_Checkbox").checked = false;
	document.getElementById("Hefin_VOS_Checkbox").checked = false;
	document.getElementById("Crwys_VOS_Checkbox").checked = false;
	document.getElementById("Meilyr_VOS_Checkbox").checked = false;
	Recalculate_XP();
}

function Clear_Noticed(){
	document.getElementById("Iorwerth_Noticed_Checkbox").checked = false;
	document.getElementById("Ithell_Noticed_Checkbox").checked = false;
	document.getElementById("Cadarn_Noticed_Checkbox").checked = false;
	document.getElementById("Amlodd_Noticed_Checkbox").checked = false;
	document.getElementById("Trahaearn_Noticed_Checkbox").checked = false;
	document.getElementById("Hefin_Noticed_Checkbox").checked = false;
	document.getElementById("Crwys_Noticed_Checkbox").checked = false;
	document.getElementById("Meilyr_Noticed_Checkbox").checked = false;
	Update_Noticed_Timer(document.getElementById("Iorwerth_Noticed_Checkbox"));
	Update_Noticed_Timer(document.getElementById("Ithell_Noticed_Checkbox"));
	Update_Noticed_Timer(document.getElementById("Cadarn_Noticed_Checkbox"));
	Update_Noticed_Timer(document.getElementById("Amlodd_Noticed_Checkbox"));
	Update_Noticed_Timer(document.getElementById("Trahaearn_Noticed_Checkbox"));
	Update_Noticed_Timer(document.getElementById("Hefin_Noticed_Checkbox"));
	Update_Noticed_Timer(document.getElementById("Crwys_Noticed_Checkbox"));
	Update_Noticed_Timer(document.getElementById("Meilyr_Noticed_Checkbox"));
}

function Clear_Notifications(){
	document.getElementById("Notifications").innerHTML = "";
}

function Update_Noticed_Timer(Clan){
	if(document.getElementById(Clan.value + "_Noticed_Checkbox").checked == true){
		CreateTimer(Clan.value + "_Noticed_Timer", 1200);
	}else{
		StopTimer(Clan.value + "_Noticed_Timer");
		document.getElementById(Clan.value + "_Noticed_Timer").innerHTML = "00:00";
		document.getElementById(Clan.value + "_Noticed_Timer").style.color = "green";
	}
}
