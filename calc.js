var numField1 = document.getElementById("numfield1");
var numField2 = document.getElementById("numfield2");
var resultField = document.getElementById("resultfield");
var form = document.getElementById("percent");
var actionToPerform = document.getElementById("select-action");

form.addEventListener("submit", function(event){
    var x = Number(numField1.value);
    var y = Number(numField2.value);
    var result;
    var percent;
        
    if(!numField1.value || !numField2.value){
        alert("Number fields are empty!!");
    }else if(actionToPerform.value == "action1"){
         result = x/y;
         percent = result * 100;
         resultField.innerText = percent + "%";
         event.preventDefault();
        
    }else if(actionToPerform.value == "action2"){
        result = (x * 100)/y;
        resultField.innerText = result;
        event.preventDefault();
        
    }else if(actionToPerform.value == "action3"){
        result = (x * y) / 100;
        resultField.innerText = result + "%";
        event.preventDefault();
        
    }else if(actionToPerform.value == "action4"){
         result = x/y;
         percent = result * 100;
         resultField.innerText = percent + "%";
         event.preventDefault();
        
    }else if(actionToPerform.value == "action5"){
        result = (x * y) / 100;
        resultField.innerText = result;
        event.preventDefault();
    }
});
//difference between input submit type & button, number & parsefloat