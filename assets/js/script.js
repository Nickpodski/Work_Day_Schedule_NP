var workHours = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
var dt = luxon.DateTime.local();
var timeBlocks = $(".time-blocks");
var currentHour = dt.hour.toLocaleString();
var eventOne = "";
var eventTwo = "";
var eventThree = "";
var eventFour = "";
var eventFive = "";
var eventSix = "";
var eventSeven = "";
var eventEight = "";
var eventNine = "";

function init() {
  // Display Today's date on top of page.
  var today = luxon.DateTime.local().toLocaleString(luxon.DateTime.DATE_HUGE);
  $("#currentDay").text(today);
  renderTables(workHours);
  renderSavedEvents();
};

function renderTables(arr) {
  timeBlocks.empty();
  var newTable = $("<table></table>");
  newTable.addClass("table");
  timeBlocks.append(newTable);
  var tBody = $("<tbody></tbody>");
  newTable.append(tBody);
  var text = "";
  for (var i = 0; i < arr.length; i++) {
    var tRow = $("<tr></tr>");
    var tH = $("<th></th>");
    var tD = $("<td></td>");
    var tDTwo = $("<td></td>");
    var btn = $("<button>");
    var svg = $("<svg></svg>");
    var path = $("<path></path>")
    var input = $("<textarea></textarea>");
    input.attr("id", "input" + i);
    btn.attr("id", i)
    if (arr[i] > 12) {
      text = arr[i] - 12 + "PM";
    }
    if (arr[i] < 13) {
      text = arr[i] + "AM";
    }
    tH.text(text);
    tH.css({"border-color": "#ededed", "border-top-style": "solid", "border-right-style": "solid", "border-bottom-style": "solid", "border-left-style": "none", "text-align": "right"});
    tRow.append(tH);
    input.attr("type", "text");
    input.addClass("form-control no-border")
    tD.append(input);
    a = parseInt(arr[i]);
    b = parseInt(currentHour);
    if (a === b) {
      tD.addClass("present");
      input.addClass("present");
    };
    if (a > b) {
      tD.addClass("future");
      input.addClass("future");    
    }
    if (a < b) {
      tD.addClass("past");
      input.addClass("past");
    }
    tRow.append(tD);
    btn.addClass("saveBtn");
    btn.attr({
      type: "button",
    })
    svg.attr({
      xmlns: "http://www.w3.org/2000/svg",
      fill: "currentColor",
    })
    svg.addClass("bi bi-save");
    path.attr("d", "M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z");
    svg.append(path);
    btn.append(svg);
    tDTwo.append(btn);
    tRow.append(tDTwo);
    tBody.append(tRow);
  };
};

function renderSavedEvents() {
var eventOne = JSON.parse(localStorage.getItem("eventOne"));
eventTwo = JSON.parse(localStorage.getItem("eventTwo"));
eventThree = JSON.parse(localStorage.getItem("eventThree"));
eventFour = JSON.parse(localStorage.getItem("eventFour"));
eventFive = JSON.parse(localStorage.getItem("eventFive"));
eventSix = JSON.parse(localStorage.getItem("eventSix"));
eventSeven = JSON.parse(localStorage.getItem("eventSeven"));
eventEight = JSON.parse(localStorage.getItem("eventEight"));
eventNine = JSON.parse(localStorage.getItem("eventNine"));
if (eventOne !== null) {
  $("#input0").text(eventOne);
}
if (eventTwo !== null) {
  $("#input1").text(eventTwo);
}
if (eventThree !== null) {
  $("#input2").text(eventThree);
}
if (eventFour !== null) {
  $("#input3").text(eventFour);
}
if (eventFive !== null) {
  $("#input4").text(eventFive);
}
if (eventSix !== null) {
  $("#input5").text(eventSix);
}
if (eventSeven !== null) {
  $("#input6").text(eventSeven);
}
if (eventEight !== null) {
  $("#input7").text(eventEight);
}
if (eventNine !== null) {
  $("#input8").text(eventNine);
}
}

init();

$(".saveBtn").click(function() {
  var idNumber = $(this).attr("id");
  // console.log(idNumber);
  var inputId = $("#input" + idNumber);
  var userInput = $(inputId).val();
  // console.log(userInput);
  var a = parseInt(idNumber);
  console.log
  if (a === 0) {
    eventOne = userInput;
    console.log(eventOne);
    localStorage.setItem("eventOne", JSON.stringify(eventOne));
  }
  if (a === 1) {
    eventTwo = userInput;
    localStorage.setItem("eventTwo", JSON.stringify(eventTwo));
  }
  if (a === 2) {
    eventThree = userInput;
    localStorage.setItem("eventThree", JSON.stringify(eventThree));
  }
  if (a === 3) {
    eventFour = userInput;
    localStorage.setItem("eventFour", JSON.stringify(eventFour));
  }
  if (a === 4) {
    eventFive = userInput;
    localStorage.setItem("eventFive", JSON.stringify(eventFive));
  }
  if (a === 5) {
    eventSix = userInput;
    localStorage.setItem("eventSix", JSON.stringify(eventSix));
  }
  if (a === 6) {
    eventSeven = userInput;
    localStorage.setItem("eventSeven", JSON.stringify(eventSeven));
  }
  if (a === 7) {
    eventEight = userInput;
    localStorage.setItem("eventEight", JSON.stringify(eventEight));
  }
  if (a === 8) {
    eventNine = userInput;
    localStorage.setItem("eventNine", JSON.stringify(eventNine));
  }
  
});

