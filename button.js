function enablePart(id) {
	var button = document.getElementById(id);
	if (button.value == "off") {
		button.value = "on";
		button.style.backgroundColor = "#3366cc";
		button.style.borderColor = "#3366cc";
		button.style.color = "#ffffff";
		
		p = document.getElementById("storyArcs"+id);
		p.removeAttribute("hidden");

	}
	else{
		button.value = "off";
		button.style.backgroundColor = "#e9e9ed";
		button.style.borderColor = "#e9e9ed";
		button.style.color = "#000000";
		
		p = document.getElementById("storyArcs"+id);
		p.setAttribute("hidden", "");
	}
}

function callbackFunc(result) {
	storyArcList = result;
	count = Object.keys(storyArcList).length;
	part = storyArcList["part"];
	for (var arc = 1; arc < count; arc++) {
		var element = document.createElement("button");
		element.textContent = storyArcList[arc.toString()];
		element.id = part+"Arc"+(arc);
		element.classList.add('arc');
		element.value = "off";
		document.getElementById('storyArcsp'+part).appendChild(element);
	}
}

function initializeStoryArcs() {
	$.getJSON("story_arcs/p1.json", callbackFunc);
	$.getJSON("story_arcs/p2.json", callbackFunc);
	$.getJSON("story_arcs/p3.json", callbackFunc);
	$.getJSON("story_arcs/p4.json", callbackFunc);
	$.getJSON("story_arcs/p5.json", callbackFunc);
	$.getJSON("story_arcs/p6.json", callbackFunc);
	$.getJSON("story_arcs/p7.json", callbackFunc);
	$.getJSON("story_arcs/p8.json", callbackFunc);
}

function changeTab(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

initializeStoryArcs();
