function encryption() {
    let text = document.getElementById("mytext").value;
    let key = document.getElementById("key").value

    if("pranav"===key){
    // document.getElementById("output").innerHTML = text;

    let n = text.length
    let result = "#" 

    for(let i=0;i<n;i++) {
        let charCode = text.charCodeAt(i)
        
        if(i%2==0){
            let encrypetChar = String.fromCharCode((charCode)+10)
            result  = result + encrypetChar
        }
        else{
            let encrypetChar = String.fromCharCode((charCode)-10)
            result  = result + encrypetChar
        }
    }

    // document.getElementById("output").innerHTML = result;
    document.getElementById("output").value = result;
    }
    else if(""===text){
        document.getElementById("output").value = "";
    }
    else{
    document.getElementById("output").value = "Wrong Key";
    }
}

function dscription(){
    let text = document.getElementById("mytext").value;
    let key = document.getElementById("key").value

    if(key==="gupta"){

    let n = text.length
    let result = "" 

    for(let i=1;i<n;i++) {
        let charCode = text.charCodeAt(i)
        
        if(i%2==0){
            let encrypetChar = String.fromCharCode((charCode)+10)
            result  = result + encrypetChar
        }
        else{
            let encrypetChar = String.fromCharCode((charCode)-10)
            result  = result + encrypetChar
        }
        
    }
    document.getElementById("output").value = result;
    }
    else if(""===text){
        document.getElementById("output").value = "";
    }
    else{
    document.getElementById("output").value = "Wrong Key";
    }
}

function clearField() {
    document.getElementById("mytext").value = ''
    document.getElementById("key").value = ''
    document.getElementById("output").value = ""
}