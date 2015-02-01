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
		XP.innerHTML *= 1.2;
	}else{
		XP.innerHTML /= 1.2;
	}
	
	/*
	var Count = 0;
	*/
}