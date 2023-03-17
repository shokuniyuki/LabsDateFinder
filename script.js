const inputDate = document.getElementById("inputDate");
const calculateBtn = document.getElementById("calculateBtn");
const outputDiv = document.getElementById("output");

calculateBtn.addEventListener("click", function() {
	// Get the input date value
	const dateValue = inputDate.value;
	
	// Calculate the first set of dates
	const date1 = new Date(dateValue);
	date1.setDate(date1.getDate() + 45);
	const date1Weekday = getWeekday(date1);
	
	const date2 = new Date(date1);
	date2.setDate(date2.getDate() + 30);
	const date2Weekday = getWeekday(date2);
	
	const date3 = new Date(date2);
	date3.setDate(date3.getDate() + 30);
	const date3Weekday = getWeekday(date3);
	
	// Calculate the second set of dates
	const date4 = new Date(dateValue);
	date4.setDate(date4.getDate() + 21);
	const date4Weekday = getWeekday(date4);
	
	const date5 = new Date(date4);
	date5.setDate(date5.getDate() + 7);
	const date5Weekday = getWeekday(date5);
	
	// Calculate the third set of dates
	const date6 = new Date(date2);
	date6.setDate(date6.getDate() + 21);
	const date6Weekday = getWeekday(date6);
	
	const date7 = new Date(date6);
	date7.setDate(date7.getDate() + 7);
	const date7Weekday = getWeekday(date7);
	
	// Display the results
	outputDiv.innerHTML = `
		<h2>Results</h2>
		<ul>
			<li>${formatDate(date1)} (${date1Weekday})</li>
			<li>${formatDate(date2)} (${date2Weekday})</li>
			<li>${formatDate(date3)} (${date3Weekday})</li>
			<li>${formatDate(date4)} (${date4Weekday})</li>
			<li>${formatDate(date5)} (${date5Weekday})</li>
			<li>${formatDate(date6)} (${date6Weekday})</li>
			<li>${format
