const houses = [
	{
		code: "ST",
		name: "Stark",
	},
	{
		code: "LA",
		name: "Lannister",
	},
	{
		code: "BA",
		name: "Baratheon",
	},
	{
		code: "TA",
		name: "Targaryen",
	},
];

// Return an array of characters belonging to a house
const getCharacters = (houseCode) => {
	switch (houseCode) {
		case "ST":
			return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
		case "LA":
			return ["Tywin", "Cersei", "Jaime", "Tyrion"];
		case "BA":
			return ["Robert", "Stannis", "Renly"];
		case "TA":
			return ["Aerys", "Daenerys", "Viserys"];
		default:
			return []; // Empty array
	}
};

const house = document.getElementById("house");

house.addEventListener("change", function handleChange(event) {
	const characters = document.getElementById("characters");
	document.querySelectorAll("#characters > li").forEach(($el) => $el.remove());
	getCharacters(event.target.value).map((val) => {
		console.log(val);
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(val));
		characters.appendChild(li);
	});
});
