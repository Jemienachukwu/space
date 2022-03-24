function show(first, second, third, fourth, fifth, sixth, seventh, eight) {
  document.getElementById(first).style.display = "block";
  document.getElementById(second).style.display = "block";

  document.getElementById(third).style.display = "none";
  document.getElementById(fourth).style.display = "none";
  document.getElementById(fifth).style.display = "none";

  document.getElementById(sixth).style.display = "none";
  document.getElementById(seventh).style.display = "none";
  document.getElementById(eight).style.display = "none";
}

function btnmoon() {
  show(
    "changeMoon",
    "imgmoon",
    "imgmars",
    "imgeuropa",
    "imgtitan",
    "changeMars",
    "changeEuropa",
    "changeTitan"
  );
}

function btnmars() {
  show(
    "changeMars",
    "imgmars",
    "imgmoon",
    "imgeuropa",
    "imgtitan",
    "changeMoon",
    "changeEuropa",
    "changeTitan"
  );
}

function btneuropa() {
  show(
    "changeEuropa",
    "imgeuropa",
    "imgmoon",
    "imgmars",
    "imgtitan",
    "changeMoon",
    "changeMars",
    "changeTitan"
  );
}

function btntitan() {
  show(
    "changeTitan",
    "imgtitan",
    "imgmoon",
    "imgmars",
    "imgeuropa",
    "changeMoon",
    "changeMars",
    "changeEuropa"
  );
}

// crew
function buttonColor(first, second, third, fourth) {
  document.getElementById(first).style.color = "#fff";
  document.getElementById(second).style.color = "#818181";
  document.getElementById(third).style.color = "#818181";
  document.getElementById(fourth).style.color = "#818181";
}

function pilot() {
  show(
    "pilot",
    "pilotImg",
    "engineer",
    "command",
    "specialist",
    "engineerImg",
    "commandImg",
    "specialistImg"
  );
  buttonColor("pil", "com", "eng", "spc");
}

function command() {
  show(
    "command",
    "commandImg",
    "engineer",
    "pilot",
    "specialist",
    "engineerImg",
    "pilotImg",
    "specialistImg"
  );
  buttonColor("com", "pil", "eng", "spc");
}

function engineer() {
  show(
    "engineer",
    "engineerImg",
    "command",
    "pilot",
    "specialist",
    "commandImg",
    "pilotImg",
    "specialistImg"
  );
  buttonColor("eng", "com", "pil", "spc");
}

function specialist() {
  show(
    "specialist",
    "specialistImg",
    "command",
    "pilot",
    "engineer",
    "commandImg",
    "pilotImg",
    "engineerImg"
  );
  buttonColor("spc", "com", "eng", "pil");
}

// technology

// function display(first, second, third, fourth, fifth, sixth, seventh, eight, nine, ten, eleven, twelve) {
//     document.getElementById("first").style.display="block";
//     document.getElementById("second").style.display="block";
//     document.getElementById("third").style.background="white"
//     document.getElementById("fourth").style.color="black"

//     document.getElementById("fifth").style.display="none"
//     document.getElementById("sixth").style.display="none"
//     document.getElementById('seventh').style.background="transparent";
//     document.getElementById("eighth").style.color="white"

//     document.getElementById("nine").style.display="none"
//     document.getElementById("ten").style.display="none"
//     document.getElementById('eleven').style.background="transparent";
//     document.getElementById("twelve").style.color="white"
// }

function one() {
  document.getElementById("vehicle").style.display = "block";
  document.getElementById("veh").style.display = "block";
  document.getElementById("vehMobile").style.display = "block";
  document.getElementById("no1").style.background = "white";
  document.getElementById("no1").style.color = "black";

  document.getElementById("spaceport").style.display = "none";
  document.getElementById("port").style.display = "none";
  document.getElementById("portMobile").style.display = "none";
  document.getElementById("no2").style.background = "transparent";
  document.getElementById("no2").style.color = "white";

  document.getElementById("capsule").style.display = "none";
  document.getElementById("cap").style.display = "none";
  document.getElementById("capMobile").style.display = "none";
  document.getElementById("no3").style.background = "transparent";
  document.getElementById("no3").style.color = "white";
}

function two() {
  document.getElementById("spaceport").style.display = "block";
  document.getElementById("port").style.display = "block";
  document.getElementById("portMobile").style.display = "block";
  document.getElementById("no2").style.background = "white";
  document.getElementById("no2").style.color = "black";

  document.getElementById("vehicle").style.display = "none";
  document.getElementById("veh").style.display = "none";
  document.getElementById("vehMobile").style.display = "none";
  document.getElementById("no1").style.background = "transparent";
  document.getElementById("no1").style.color = "white";

  document.getElementById("capsule").style.display = "none";
  document.getElementById("cap").style.display = "none";
  document.getElementById("capMobile").style.display = "none";
  document.getElementById("no3").style.background = "transparent";
  document.getElementById("no3").style.color = "white";
}

function three() {
  document.getElementById("capsule").style.display = "block";
  document.getElementById("cap").style.display = "block";
  document.getElementById("capMobile").style.display = "block";
  document.getElementById("no3").style.background = "white";
  document.getElementById("no3").style.color = "black";

  document.getElementById("vehicle").style.display = "none";
  document.getElementById("veh").style.display = "none";
  document.getElementById("vehMobile").style.display = "none";
  document.getElementById("no1").style.background = "transparent";
  document.getElementById("no1").style.color = "white";

  document.getElementById("spaceport").style.display = "none";
  document.getElementById("port").style.display = "none";
  document.getElementById("portMobile").style.display = "none";
  document.getElementById("no2").style.background = "transparent";
  document.getElementById("no2").style.color = "white";
}

function openNav() {
  document.getElementById("mySidenav").style.width = "300px";
  document.getElementById("ham").style.display = "none";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("ham").style.display = "block";
}
