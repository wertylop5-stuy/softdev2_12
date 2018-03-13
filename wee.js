"use strict";

function Country(g, s, b, n) {
	this.data = [g, s, b]
	this.name = n;
	Object.freeze(this);
};

function setAttr(elem, attrs) {
	for (let x in attrs) {
		elem.attr(x, attrs[x]);
	}
}

(() => {
	const JAPAN = new Country(4, 5, 4, "Japan");
	const GERMANY = new Country(14, 10, 7, "Germany");
	
	let svg = d3.select("#boi");
	let bronze = svg.select("#bronze");
	let silver = svg.select("#silver");
	let gold = svg.select("#gold");
	
	setAttr(bronze, {
		cx: 130,
		cy: 250,
		r: 10,
		fill: "brown"
	});
	setAttr(silver, {
		cx: 260,
		cy: 250,
		r: 10,
		fill: "gray"
	});
	setAttr(gold, {
		cx: 390,
		cy: 250,
		r: 10,
		fill: "goldenrod"
	});
	
	d3.select("form").selectAll("input").on("click", () => {
		//gets the currently targeted element's value
		let value = d3.event.target.value;
		if (value === JAPAN.name) {
			//ties medal data to circle radius
			svg.selectAll("circle").data(JAPAN.data)
				.attr("r", d => {
					return d*8;
				});
		}
		else if (value === GERMANY.name) {
			svg.selectAll("circle").data(GERMANY.data)
				.attr("r", d => {
					return d*8;
				});
		}
	});
})();

