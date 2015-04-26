function CreateTimer(TimerID, Time){
	UpdateTimer(TimerID, Time);
	window[TimerID] = window.setInterval(function(){ UpdateTimer(TimerID, -1) }, 1000);
}

function UpdateTimer(TimerID, Time){
	var Timer = document.getElementById(TimerID);
	if(Time != -1){
		var Seconds = Time;
	}else{
		var Current_Time = Timer.innerHTML.split(":")
		var Seconds = parseInt(Current_Time[0]) * 60 + parseInt(Current_Time[1]);
	}
	Seconds -= 1;
	Timer.style.color = "red";
	if(Seconds <= 0){
		clearInterval(window[TimerID]);
		Timer.style.color = "green";
	}
	/*
	var Days = Math.floor(Seconds / 86400);
	Seconds -= Days * 86400;
	var Hours = Math.floor(Seconds / 3600);
	Seconds -= Hours * (3600);
	*/
	var Minutes = Math.floor(Seconds / 60);
	Seconds -= Minutes * (60);
	//var TimeStr = ((Days > 0) ? Days + " days " : "") + LeadingZero(Hours) + ":" + LeadingZero(Minutes) + ":" + LeadingZero(Seconds)
	var TimeStr = LeadingZero(Minutes) + ":" + LeadingZero(Seconds)
	Timer.innerHTML = TimeStr;
}

function StopTimer(TimerID){
	clearInterval(window[TimerID]);
}

function LeadingZero(Time) {
	return (Time < 10) ? "0" + Time : + Time;
}