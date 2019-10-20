var date = moment().format("MMM Do YYYY");
$(".date").html("Date: "+ date);
var time = moment().format('LT');
if (time.charAt(time.length-2) == "A"){
var timeHourInt = parseInt(moment().format("hh"));
}else{
    var timeHourInt = parseInt(moment().format("hh")+12);
}
var infoSlot = [];


    if(localStorage.array){
 
        infoSlot= JSON.parse(localStorage.getItem("array"));
        console.log(infoSlot)
    }else{
        for(i=0;i<9;i++){
        infoSlot[i]= "";
        }
    }
    console.log(infoSlot)





for (i = 9; i < 18; i++) {
  
    console.log(i)
    var mainDivRow = $("<div>");
    mainDivRow.attr("class", "row mainDivRow");

    var leftBox = $("<div>");
    leftBox.attr("class", "col-md-1 leftBox");
    
    var centerBox = $("<textarea>");
    centerBox.attr("class", "col-md-10 centerBox");
    centerBox.attr("type", "text");
    centerBox.attr("value",infoSlot[i-9]);
    console.log(centerBox.attr("value"))
    
    
  

    if(timeHourInt>i){
        centerBox.css("background-color","rgb(201, 201, 201)");
    }else if(timeHourInt === i){
        centerBox.css("background-color","rgb(199, 94, 94)");
    }


    var rightBox = $("<button>");
    rightBox.attr("class", "col-md-1 rightBox");
    rightBox.attr("index", (i-9));
    rightBox.html("Save")
   
    //Reset at 12
    if (i < 12) {
        leftBox.html(i + "AM")
    } else if (i == 12) {
        leftBox.html(i + "PM")
    } else {
        leftBox.html((i - 12) + "PM")
    }
   

    //Append Content
    mainDivRow.append(leftBox);
    mainDivRow.append(centerBox);
    mainDivRow.append(rightBox);
    $("#mainContent").append(mainDivRow);


}
for(i=0;i<infoSlot.length;i++){
    $(".centerBox").slice(i).val(infoSlot[i]);
}

$(".rightBox").on("click",saveCurrentTimeSlotInfo);

//
 //document.getElementsByClassName("rightBox")[1].addEventListener("click",function(){console.log("test")})
function saveCurrentTimeSlotInfo(event){
    console.log("working")
    var index = parseInt($(this).attr("index"));
    console.log(index);

var stringIn = $(this).parent().find(".centerBox").val();
console.log(stringIn);
infoSlot[index] = stringIn;
console.log(infoSlot)
localStorage.setItem("array", JSON.stringify(infoSlot));

console.log(localStorage)
}