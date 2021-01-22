var workHours = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
var dt = luxon.DateTime.local();
timeBlocks = $(".time-blocks");
currentHour = dt.hour.toLocaleString();

function init() {
  // Display Today's date on top of page.
  var today = luxon.DateTime.local().toLocaleString(luxon.DateTime.DATE_HUGE);
  $("#currentDay").text(today);

  renderTables(workHours);
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
    input.attr("id", i);
    btn.attr("id", i);
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



init();

