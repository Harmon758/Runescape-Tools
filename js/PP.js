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
	var VOS_Checked = 0;
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
	if(document.getElementById("Iorwerth_VOS_Checkbox").checked){ Iorwerth_XP.innerHTML = (Math.round(Iorwerth_XP.innerHTML * 12) / 10).toFixed(1); VOS_Checked++; }
	if(document.getElementById("Ithell_VOS_Checkbox").checked){ Ithell_XP.innerHTML = (Math.round(Ithell_XP.innerHTML * 12) / 10).toFixed(1); VOS_Checked++; }
	if(document.getElementById("Cadarn_VOS_Checkbox").checked){ Cadarn_XP.innerHTML = (Math.round(Cadarn_XP.innerHTML * 12) / 10).toFixed(1); VOS_Checked++; }
	if(document.getElementById("Amlodd_VOS_Checkbox").checked){ Amlodd_XP.innerHTML = (Math.round(Amlodd_XP.innerHTML * 12) / 10).toFixed(1); VOS_Checked++; }
	if(document.getElementById("Trahaearn_VOS_Checkbox").checked){ Trahaearn_XP.innerHTML = (Math.round(Trahaearn_XP.innerHTML * 12) / 10).toFixed(1); VOS_Checked++; }
	if(document.getElementById("Hefin_VOS_Checkbox").checked){ Hefin_XP.innerHTML = (Math.round(Hefin_XP.innerHTML * 12) / 10).toFixed(1); VOS_Checked++; }
	if(document.getElementById("Crwys_VOS_Checkbox").checked){ Crwys_XP.innerHTML = (Math.round(Crwys_XP.innerHTML * 12) / 10).toFixed(1); VOS_Checked++; }
	if(document.getElementById("Meilyr_VOS_Checkbox").checked){ Meilyr_XP.innerHTML = (Math.round(Meilyr_XP.innerHTML * 12) / 10).toFixed(1); VOS_Checked++; }
	if(VOS_Checked > 2){ document.getElementById("VOS_Notification").innerHTML = "You have more than 2 VOS's checked"; }
	else{ document.getElementById("VOS_Notification").innerHTML = ""; }
	Save_Session();
}

function Save_Session(){
	localStorage.setItem("Ibis_Pieces", document.getElementById("Ibis_Pieces").value);
	localStorage.setItem("Clan_Avatar", document.getElementById("Clan_Avatar").value);
	localStorage.setItem("Iorwerth_VOS_Checkbox", document.getElementById("Iorwerth_VOS_Checkbox").checked);
	localStorage.setItem("Ithell_VOS_Checkbox", document.getElementById("Ithell_VOS_Checkbox").checked);
	localStorage.setItem("Cadarn_VOS_Checkbox", document.getElementById("Cadarn_VOS_Checkbox").checked);
	localStorage.setItem("Amlodd_VOS_Checkbox", document.getElementById("Amlodd_VOS_Checkbox").checked);
	localStorage.setItem("Trahaearn_VOS_Checkbox", document.getElementById("Trahaearn_VOS_Checkbox").checked);
	localStorage.setItem("Hefin_VOS_Checkbox", document.getElementById("Hefin_VOS_Checkbox").checked);
	localStorage.setItem("Crwys_VOS_Checkbox", document.getElementById("Crwys_VOS_Checkbox").checked);
	localStorage.setItem("Meilyr_VOS_Checkbox", document.getElementById("Meilyr_VOS_Checkbox").checked);
	localStorage.setItem("VOS_Notification", document.getElementById("VOS_Notification").innerHTML);
	localStorage.setItem("Iorwerth_XP", document.getElementById("Iorwerth_XP").innerHTML);
	localStorage.setItem("Ithell_XP", document.getElementById("Ithell_XP").innerHTML);
	localStorage.setItem("Cadarn_XP", document.getElementById("Cadarn_XP").innerHTML);
	localStorage.setItem("Amlodd_XP", document.getElementById("Amlodd_XP").innerHTML);
	localStorage.setItem("Trahaearn_XP", document.getElementById("Trahaearn_XP").innerHTML);
	localStorage.setItem("Hefin_XP", document.getElementById("Hefin_XP").innerHTML);
	localStorage.setItem("Crwys_XP", document.getElementById("Crwys_XP").innerHTML);
	localStorage.setItem("Meilyr_XP", document.getElementById("Meilyr_XP").innerHTML);
	localStorage.setItem("Uncheck_Noticed", document.getElementById("Uncheck_Noticed").checked);
	localStorage.setItem("Iorwerth_Noticed_Checkbox", document.getElementById("Iorwerth_Noticed_Checkbox").checked);
	localStorage.setItem("Ithell_Noticed_Checkbox", document.getElementById("Ithell_Noticed_Checkbox").checked);
	localStorage.setItem("Cadarn_Noticed_Checkbox", document.getElementById("Cadarn_Noticed_Checkbox").checked);
	localStorage.setItem("Amlodd_Noticed_Checkbox", document.getElementById("Amlodd_Noticed_Checkbox").checked);
	localStorage.setItem("Trahaearn_Noticed_Checkbox", document.getElementById("Trahaearn_Noticed_Checkbox").checked);
	localStorage.setItem("Hefin_Noticed_Checkbox", document.getElementById("Hefin_Noticed_Checkbox").checked);
	localStorage.setItem("Crwys_Noticed_Checkbox", document.getElementById("Crwys_Noticed_Checkbox").checked);
	localStorage.setItem("Meilyr_Noticed_Checkbox", document.getElementById("Meilyr_Noticed_Checkbox").checked);
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
	Save_Session();
}

function Clear_Notifications(){
	document.getElementById("Notifications").innerHTML = "";
	localStorage.setItem("Notifications", document.getElementById("Notifications").innerHTML);
}

function Update_Noticed_Timer(Clan){
	if(document.getElementById(Clan.value + "_Noticed_Checkbox").checked){
		CreateTimer(Clan.value + "_Noticed_Timer", 5);
	}else{
		StopTimer(Clan.value + "_Noticed_Timer");
		document.getElementById(Clan.value + "_Noticed_Timer").innerHTML = "00:00";
		document.getElementById(Clan.value + "_Noticed_Timer").style.color = "green";
	}
	Save_Session();
}

function Load_Session(){
	if(localStorage.getItem("Ibis_Pieces") != null){ document.getElementById("Ibis_Pieces").value = localStorage.getItem("Ibis_Pieces"); }
	if(localStorage.getItem("Clan_Avatar") != null){ document.getElementById("Clan_Avatar").value = localStorage.getItem("Clan_Avatar"); }
	if(localStorage.getItem("Iorwerth_VOS_Checkbox") != null){ document.getElementById("Iorwerth_VOS_Checkbox").checked = (localStorage.getItem("Iorwerth_VOS_Checkbox") === "true"); }
	if(localStorage.getItem("Ithell_VOS_Checkbox") != null){ document.getElementById("Ithell_VOS_Checkbox").checked = (localStorage.getItem("Ithell_VOS_Checkbox") === "true"); }
	if(localStorage.getItem("Cadarn_VOS_Checkbox") != null){ document.getElementById("Cadarn_VOS_Checkbox").checked = (localStorage.getItem("Cadarn_VOS_Checkbox") === "true"); }
	if(localStorage.getItem("Amlodd_VOS_Checkbox") != null){ document.getElementById("Amlodd_VOS_Checkbox").checked = (localStorage.getItem("Amlodd_VOS_Checkbox") === "true"); }
	if(localStorage.getItem("Trahaearn_VOS_Checkbox") != null){ document.getElementById("Trahaearn_VOS_Checkbox").checked = (localStorage.getItem("Trahaearn_VOS_Checkbox") === "true"); }
	if(localStorage.getItem("Hefin_VOS_Checkbox") != null){ document.getElementById("Hefin_VOS_Checkbox").checked = (localStorage.getItem("Hefin_VOS_Checkbox") === "true"); }
	if(localStorage.getItem("Crwys_VOS_Checkbox") != null){ document.getElementById("Crwys_VOS_Checkbox").checked = (localStorage.getItem("Crwys_VOS_Checkbox") === "true"); }
	if(localStorage.getItem("Meilyr_VOS_Checkbox") != null){ document.getElementById("Meilyr_VOS_Checkbox").checked = (localStorage.getItem("Meilyr_VOS_Checkbox") === "true"); }
	if(localStorage.getItem("VOS_Notification") != null){ document.getElementById("VOS_Notification").innerHTML = localStorage.getItem("VOS_Notification"); }
	if(localStorage.getItem("Iorwerth_XP") != null){ document.getElementById("Iorwerth_XP").innerHTML = localStorage.getItem("Iorwerth_XP"); }
	if(localStorage.getItem("Ithell_XP") != null){ document.getElementById("Ithell_XP").innerHTML = localStorage.getItem("Ithell_XP"); }
	if(localStorage.getItem("Cadarn_XP") != null){ document.getElementById("Cadarn_XP").innerHTML = localStorage.getItem("Cadarn_XP"); }
	if(localStorage.getItem("Amlodd_XP") != null){ document.getElementById("Amlodd_XP").innerHTML = localStorage.getItem("Amlodd_XP"); }
	if(localStorage.getItem("Trahaearn_XP") != null){ document.getElementById("Trahaearn_XP").innerHTML = localStorage.getItem("Trahaearn_XP"); }
	if(localStorage.getItem("Hefin_XP") != null){ document.getElementById("Hefin_XP").innerHTML = localStorage.getItem("Hefin_XP"); }
	if(localStorage.getItem("Crwys_XP") != null){ document.getElementById("Crwys_XP").innerHTML = localStorage.getItem("Crwys_XP"); }
	if(localStorage.getItem("Meilyr_XP") != null){ document.getElementById("Meilyr_XP").innerHTML = localStorage.getItem("Meilyr_XP"); }
	if(localStorage.getItem("Uncheck_Noticed") != null){ document.getElementById("Uncheck_Noticed").checked = (localStorage.getItem("Uncheck_Noticed") === "true"); }
	if(localStorage.getItem("Iorwerth_Noticed_Checkbox") != null){ document.getElementById("Iorwerth_Noticed_Checkbox").checked = (localStorage.getItem("Iorwerth_Noticed_Checkbox") === "true"); }
	if(localStorage.getItem("Ithell_Noticed_Checkbox") != null){ document.getElementById("Ithell_Noticed_Checkbox").checked = (localStorage.getItem("Ithell_Noticed_Checkbox") === "true"); }
	if(localStorage.getItem("Cadarn_Noticed_Checkbox") != null){ document.getElementById("Cadarn_Noticed_Checkbox").checked = (localStorage.getItem("Cadarn_Noticed_Checkbox") === "true"); }
	if(localStorage.getItem("Amlodd_Noticed_Checkbox") != null){ document.getElementById("Amlodd_Noticed_Checkbox").checked = (localStorage.getItem("Amlodd_Noticed_Checkbox") === "true"); }
	if(localStorage.getItem("Trahaearn_Noticed_Checkbox") != null){ document.getElementById("Trahaearn_Noticed_Checkbox").checked = (localStorage.getItem("Trahaearn_Noticed_Checkbox") === "true"); }
	if(localStorage.getItem("Hefin_Noticed_Checkbox") != null){ document.getElementById("Hefin_Noticed_Checkbox").checked = (localStorage.getItem("Hefin_Noticed_Checkbox") === "true"); }
	if(localStorage.getItem("Crwys_Noticed_Checkbox") != null){ document.getElementById("Crwys_Noticed_Checkbox").checked = (localStorage.getItem("Crwys_Noticed_Checkbox") === "true"); }
	if(localStorage.getItem("Meilyr_Noticed_Checkbox") != null){ document.getElementById("Meilyr_Noticed_Checkbox").checked = (localStorage.getItem("Meilyr_Noticed_Checkbox") === "true"); }
	if(localStorage.getItem("Notifications") != null){ document.getElementById("Notifications").innerHTML = localStorage.getItem("Notifications"); }
	document.getElementById("Notifications").scrollTop = document.getElementById("Notifications").scrollHeight;
}