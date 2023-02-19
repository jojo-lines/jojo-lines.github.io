function btntog(id) {
	var button = document.getElementById(id);
	if (button.value == "off") {
		button.value = "on";
		button.style.backgroundColor = "#3366cc";
		button.style.borderColor = "#3366cc";
		button.style.color = "#ffffff";
	}
	else{
		button.value = "off";
		button.style.backgroundColor = "#d0d0d7";
		button.style.borderColor = "#d0d0d7";
		button.style.color = "#000000";
	}
}