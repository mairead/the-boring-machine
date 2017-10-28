function getItemFromList(mutableObject){
	var upperLimit = mutableObject.cloned_array.length;
	if(upperLimit === 0){
		mutableObject.cloned_array = mutableObject.original.slice(0);
		upperLimit = mutableObject.cloned_array.length;
	}
	var lowerLimit = 0;
	var randomIndex = Math.floor(Math.random() * (upperLimit - lowerLimit) + lowerLimit);
	return mutableObject.cloned_array.splice(randomIndex, 1); //Remove an object each time
}


function buildActivityList(listContainer){
	listContainer.empty();
	var compiledList = [];
	var activities = [];

	//Get three indoor
	activities.push(getItemFromList(indoor_obj));
	activities.push(getItemFromList(indoor_obj));
	activities.push(getItemFromList(indoor_obj));
	//Get three outdoor
	activities.push(getItemFromList(outdoor_obj));
	activities.push(getItemFromList(outdoor_obj));
	activities.push(getItemFromList(outdoor_obj));
	//Get one making suggestion
	activities.push(getItemFromList(making_obj));

	//Get one Outings suggestion
	activities.push(getItemFromList(outings_obj));

	activities.forEach(function(element, index){
		if(index === 0){
			compiledList.push("<li class='fruit-heading'>INDOORS</li>");
		}
		if(index === 3){
			compiledList.push("<li class='fruit-heading'>OUTDOORS</li>");
		}
		if(index === 6){
			compiledList.push("<li class='fruit-heading'>MAKING GAME</li>");
		}
		if(index === 7){
			compiledList.push("<li class='fruit-heading'>OUTING</li>");
		}
		compiledList.push("<li>"+element+"</li>");

	})

	listContainer.append(compiledList);
}

$(function() {
	$("#getBoringIdeas").click(function(e){
		buildActivityList($("#boringList"));
		e.preventDefault();
	});
});

var mystery_outings = [
	"Tyntesfield",
	"Goblin Coombe",
	"Sand Bay",
	"Cheddar lake",
	"Bristol museum",
	"Weston museum",
	"Bishops palace, Wells",
	"Arnos Vale cemetery",
	"Helicopter museum",
	"Hestercombe gardens",
	"Nailsea swimming pool",
	"Kewstoke woods",
	"Clevedon SaltHouse fields",
	"Walk on Clevedon pier",
	"Walk on Portishead Prom",
	"M Shed museum",
	"SS Great Britain",

];

// Ideas to google
// - Nearby beaches
// - Nearby woodland
// - Waterpark or adventure swimming pool
// - Soft play, trampoling or indoor jungle gym
// - Museums and libraries
// - Stately homes and gardens
// - Playparks in Bristol area


//Need 48 examples of each indoor/outdoor
var outdoor_activities = [
	"Watering the garden",
	"Painting",
	"Hula hoops",
	"Mud kitchen",
	"Sand pit",
	"Balance bike",
	"Take frisbee to park",
	"Take scooter to park",
	"Bubbles",
	"Football",
	"Croquet",
	"Kick leaves in the park",
	"Giant floor chalk",
	"Build a tee pee",
	"Build a wooden den",
	"Pond dipping",
	"Lawn mower",
	"Roller ball painting",
	"Homemade sprinkler",
	"Pouring station",
	"Look for minibeasts",
];

// TODO
// - Type out all ideas from index cards
// - Write up all new toy acquisitions

var indoor_activities = [
	"Watering the garden",
	"Play doh",
	"Wooden toys",
	"Plastic toys",
	"Toy garage",
	"Wheelie bug",
	"Ball pit",
	"Toddler bags",
	"Random toys",
	"Duplo",
	"Homemade toys",
	"Brio",
	"Playmobil",
	"Noah's ark",
	"Pencils and crayons",
	"Chalkboard paint",
	"Soft toy tub",
	"Space station",
	"Read a book",
	"Listen to music",
	"Do a dance",
	"Alphabet cards",
	"Make a fort",
	"Build a tower",
	"Play with the cats",
	"Threading set",
	"Busy board",
	"Light up toys",
	"Balloons",
	"Alphabet fishing",
	"Skittles",
	"Music makers",
	"Build a tower",
];

// Ideas to google
// - Toddler craft activities
// - Making projects
// - Homemade toy ideas from list

var making_games = [
	"Ball run",
	"water run",
	"Ball sorting coloured tubes",
	"Build a tower of recycling",
	"Baking",
	"Rice bin sensory ideas",
	"Coloured rice",
	"Making coloured popsicle and velcro",
	"Art box ideas",
	"Kitchen plastic",
	"Hand and feet painting",
	"Sponge painting",
	"Bicarb and vinegar painting",
	"Bubble painting",
];

// TODO use cloned mutable lists and when list runs out re-clone original. Need to pass reference to original
function makeMutableObjects(arrayName){
	return {
		original: arrayName,
		cloned_array: arrayName.slice(0)
	}
}

var outings_obj = makeMutableObjects(mystery_outings);
var outdoor_obj = makeMutableObjects(outdoor_activities);
var indoor_obj = makeMutableObjects(indoor_activities);
var making_obj = makeMutableObjects(making_games);
