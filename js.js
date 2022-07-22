const container = $("#container");
let boxes = [];

const addBox = () => {
	boxes.push({ box: boxes.length });
	renderBoxes("add");
};

const removeBox = () => {
	boxes.splice(-1, 1);
	renderBoxes("res");
};

const renderBoxes = (action) => {
	const element = document.createElement("div");
	for (const box of boxes) {
		element.className = "box";
		element.innerHTML = boxes.length;
	}
	action === "add"
		? container.append($(element))
		: $(container).find(":last-child").remove();
};

const applyJustify = (event) => {
	container.css("justify-content", `${event.target.innerHTML}`);
};

const applyAlign = (event) => {
	container.css("align-items", `${event.target.innerHTML}`);
};

const applyDirection = (event) => {
	container.css("flex-direction", `${event.target.innerHTML}`);
};

const applyGap = (event) => {
	container.css("gap", `${event.target.value}px`);
};

const applyWrap = (event) => {
	container.css("flex-wrap", "");
	container.css("flex-wrap", `${event.target.innerHTML}`);
};
