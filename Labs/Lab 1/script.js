
const outputDiv = document.getElementById('output');
const currentLocation = 'Halifax';
const day = 19;
const min_day = 19;
const max_day = 50;


if (currentLocation != "Halifax"){
    if (day >= min_day && day <=max_day) {
        outputDiv.innerText = "I am traveling in Costa Rica";
    } else {
        outputDiv.innerText = "I am home in Halifax.";
    }
} else {
    outputDiv.innerText = "Currently at Halifax International Airport.\n Next Flight : XYZ"
}