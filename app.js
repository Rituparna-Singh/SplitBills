// function convert(){
//     let cm = document.getElementById('cm');
//     let m = cm.value * 100;
    
//     let result = "Converted value: " +m+"cm";
//     document.getElementById('result').innerText = result;
// }

function split(){
    let amt = document.getElementById('amount');
    let per = document.getElementById('person');

    let result = (amt.value / per.value).toFixed(2);

    if(result == "NaN"){
        document.getElementById('results').innerText = "No Data Entered";
    }
    else{
        document.getElementById('results').innerText = "Each share will be " + result;
    }
    
    console.log(result);

    amt.value ='';
    per.value ='';
}
