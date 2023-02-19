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

function test(result) {
	storyArcList = result;
	count = Object.keys(storyArcList).length;
	part = storyArcList["part"];
	for (var arc = 2; arc < count; arc++) {
		var element = document.createElement("button");
		element.textContent = storyArcList[arc.toString()];
		element.id = part+"Arc"+(arc-1);
		element.classList.add('arc');
		element.value = "off";
		document.getElementById('storyArcsp'+part).appendChild(element);
	}
}

function initializeStoryArcs() {
	$.getJSON("story_arcs/p1.json", test);
	$.getJSON("story_arcs/p2.json", test);
	$.getJSON("story_arcs/p3.json", test);
	$.getJSON("story_arcs/p4.json", test);
	$.getJSON("story_arcs/p5.json", test);
	$.getJSON("story_arcs/p6.json", test);
	$.getJSON("story_arcs/p7.json", test);
	$.getJSON("story_arcs/p8.json", test);
}

initializeStoryArcs();