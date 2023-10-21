let days = document.querySelectorAll('.days li');
let amount = document.querySelectorAll('.days_bars span');
let bars = document.querySelectorAll('.days_bars div');









fetch('data.json').then(function(response) {

	return response.json();

}).then(function(obj) {
	getDays(obj);
});

// get days from json file
function getDays(day) {

	// loop through obj
	for(let i = 0; i < day.length; i++) {

		days[i].textContent = day[i].day;

		amount[i].textContent = '$' + day[i].amount;
	}
}

bars.forEach(bar => {
	// add active class to the bar
	bar.addEventListener('mouseenter', function(e) {
	e.target.querySelector('span').classList.add('active');
	});
	// remove active class from bar
	bar.addEventListener('mouseleave', function(e) {
		e.target.querySelector('span').classList.remove('active');
	});

});
