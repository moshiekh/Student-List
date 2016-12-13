var html = '<table style="width:100%">';
var student;

function print(message) {
	document.write(message);
}

function getList () {
	html += '<tr><th>Name</th>';
	html += '<th>Age</th>';
	html += '<th>Track</th>';
	html += '<th>Score</th>';
	html += '</tr></th>';
	
	for (var i=0; i<students.length; i+=1) {
		student = students[i];
		html += '<tr><th>' + students[i].name + '</th>';
		html += '<th>' + students[i].age + '</th>';
		html += '<th>' + students[i].track + '</th>';
		html += '<th>' + students[i].score + '</th>';
		html += '</tr>'
	}
	html += '</table>';
	print(html);
}

getList();
