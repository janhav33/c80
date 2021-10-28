var name_of_people = [];

function submit() {
	var Guest_name  =document.getElementById("name1").value;
	name_of_people.push(Guest_name);
	console.log(Guest_name);
	console.log(name_of_people);
	var length_of_people = name_of_people.length;
	console.log(length_of_people);
	
}
function show(){
	var i = name_of_people.join("<br>");
	console.log(name_of_people);
	document.getElementById("p1").innerHTML = i.toString();
	document.getElementById("sort_button").style.display="block";

}
function sorting() {
	name_of_people.sort();
	var i = name_of_people.join("<br>");
	console.log(name_of_people);
	document.getElementById("sorted").innerHTML = i.toString();
}
function searching(){
	var se = document.getElementById("s1").value;
	var find = 0;
	var j;

	for (j=0; j<name_of_people.length; j++){
		if(se == name_of_people[j]){
			find=find+1;
		}
	}
	document.getElementById("p2").innerHTML="name Found" +find+ "time";
	console.log("name Found" +find+ " time");

}