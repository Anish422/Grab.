function changeButton(){
    var T = document.getElementById("startBTN").innerHTML;

    if (T != "Stop"){
        document.getElementById("startBTN").innerHTML = "Stop"; 
        getText();
    }

    else if (document.getElementById("startBTN").innerHTML = "Stop"){
        document.getElementById("startBTN").innerHTML = "Start";
       
    }

}


function getText(){
    textBox2.addEventListener("mouseup", function(event){
        var selectedText = document.textForm.textBox.value;

            if (window.getSelection){
                selectedText = selectedText+ window.getSelection()   + "\n";
                document.textForm.textBox.value = selectedText;
            }
    
            else if (document.getSelection){
                selectedText = selectedText + document.getSelection() + "\n";
                document.textForm.textBox.value = selectedText;
            }

        else {return;}
    }, false);
    return;
}

function copy() {
    var text2Copy = document.getElementById("textBox");
    text2Copy.select();
    navigator.clipboard.writeText(text2Copy.value);
    alert("Copied to Clipboard!");
}

function makePDF(){
    var text2Copy = document.getElementById("textBox").value;
    html2pdf().from(text2Copy).save();
}
