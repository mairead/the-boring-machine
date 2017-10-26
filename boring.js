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

function getZebraStripe(index){
	return (index%2) ? "odd" : "even";
}

function isTermTime(dayOfMonth){

	//specify date ranges
	//Need to look up North Somerset holidays
	//christmas holidays
	//Spring Half term
	//Easter holidays
	//summer half term
	//summer holidays
	return true;
}

//TODO Spin again button which will hook into day method and spit out new suggestions from mutable list
//Incase the weather is bad, am too broke, not appropriate

function isMessyPlayWeek(dayOfMonth){
	var weekOfMonth = getWeekOfMonth(dayOfMonth);
	return (weekOfMonth === 2 || weekOfMonth === 4) ? true : false;
}

function getWeekOfMonth(unformattedDate){
	var weekOfMonth = 1;
	var ordinals = [0, 1, 2, 3, 4, 5];
	var actualDay = moment(unformattedDate).format('D');
	weekOfMonth = ordinals[Math.ceil(parseInt(actualDay, 10)/7)];
	return weekOfMonth;
}

function getTwoActivities(){
	var activityString = getItemFromList(indoor_obj);
	activityString += " / ";
	activityString += getItemFromList(outdoor_obj);
	return activityString;
}

function getMondays(dayOfMonth){
	var activityString = "<span class='morning'>" + (isTermTime(dayOfMonth) ? "Preschool / Soft play" : getItemFromList(outings_obj)) + "</span><span class='afternoon'>";
	activityString += isMessyPlayWeek(dayOfMonth) ? "Messy play artwork" : getItemFromList(making_obj);
	return activityString;
}
function getTuesdays(){
	return "<span class='morning'>Nursery";
}
function getWednesdays(){
	return "<span class='morning'>Nursery";
}
function getThursdays(unformattedDate){
	var activityString;
	var weekOfMonth = getWeekOfMonth(unformattedDate);
	switch(weekOfMonth){
		case 1: activityString = "<span class='morning'>Make a Mess, Bristol</span><span class='afternoon'>" + getTwoActivities();
		break;
		case 2: activityString = "<span class='morning'>Messy Play, Blagdon</span><span class='afternoon'>" + getTwoActivities();
		break;
		case 3: activityString = "<span class='morning'>Bristol zoo </span><span class='afternoon'>" + getTwoActivities();
		break;
		case 4: activityString = "<span class='morning'>Messy Play, Blagdon</span><span class='afternoon'>" + getTwoActivities();
		break;
		case 5: activityString = "<span class='morning'>"+ getItemFromList(outings_obj) +"</span><span class='afternoon'>"+ getTwoActivities();
		break;
	}
	return activityString;
}

function getFridays(dayOfMonth){
	var activityString = "<span class='morning'>" + (isTermTime(dayOfMonth) ? "Preschool / Swimming" : getItemFromList(outings_obj)) + "</span><span class='afternoon'>";
	activityString +=  getTwoActivities();
	return activityString;
}

function getSaturdays(){
	var activityString = "<span class='morning'>" + getItemFromList(outings_obj) + "</span><span class='afternoon'>";
	activityString += getTwoActivities();
	return activityString;
}

function getSundays(){
	var activityString = "<span class='morning'>Bike ride</span><span class='afternoon'>";
	activityString += getTwoActivities();
	return activityString;
}

function getDate(index){
	return {
		unformattedDate: moment(new Date()).add(index, 'days'),
		dayOfWeek: moment(new Date()).add(index, 'days').format("ddd"),
		dayOfMonth: moment(new Date()).add(index, 'days').format("MMM Do YY")
	}
}

function buildActivityList(listContainer){
	var compiledList = [];
	var activities = Array.apply(null, Array(100));

	activities.forEach(function(element, index){
		var date = getDate(index);
		var dayListItem = "<li class='"+getZebraStripe(index)+" "+ date.dayOfWeek +"'>";
		var activityString = "";

		switch (date.dayOfWeek){
			case "Mon":
				activityString = getMondays(date.unformattedDate);
				break;
			case "Tue":
				activityString = getTuesdays();
				break;
			case "Wed":
				activityString = getWednesdays();
				break;
			case "Thu":
				activityString = getThursdays(date.unformattedDate);
				break;
			case "Fri":
				activityString = getFridays(date.unformattedDate);
				break;
			case "Sat":
				activityString = getSaturdays();
				break;
			case "Sun":
				activityString = getSundays();
				break;
		};

		dayListItem += "<span class='day-of-week'>" + date.dayOfWeek + "</span><span class='day-of-month'>" + date.dayOfMonth + "</span> " + activityString + "</span></li>";
		compiledList.push(dayListItem);
	});
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