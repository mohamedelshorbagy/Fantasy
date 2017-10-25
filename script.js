function getPercentage(first,second,third) {
    let data = [];
    let arr = [first , second , third]; 
    const prob = 7;
    for(let i = 0 ; i < prob ; i++) {
        let randomIndex = Math.floor(Math.random() * arr.length);
        data.push(arr[randomIndex]);
    }

    let count = [];

        for(var j = 0 ; j < arr.length ; j++) {
         let counter = 0;
         for(var i = 0; i < data.length;i++) {
            if(arr[j] === data[i]) {
                counter++;
            }
        }
        count[j] = counter;
        counter = 0;
    }

    let objPercentage = [];

    for(let i = 0 ; i < count.length;i++) {
        objPercentage[i] = Math.floor((count[i] / prob) * 100);
    }

    return {
        objPercentage,
        arr    
    };

}





/* Get Dom Elements */
var first = document.getElementById('first');
var second = document.getElementById('second');
var third = document.getElementById('third');
var wrapper = document.getElementById('result');

function getInputData() {
    var result = '';
    if(first.value === '' || second.value === '' || third.value === '') {
        result += '<div class="alert alert-danger">All Inputs are required</div>';
       wrapper.innerHTML = result;
    } else {
       let percentage = getPercentage(first.value, second.value, third.value).objPercentage;
       let players = getPercentage(first.value, second.value, third.value).arr;
       let maxIndex = percentage.indexOf(Math.max(...percentage));
       let maxPercenatge = Math.max(...percentage);
       let maxPercentagePlayer = players[maxIndex];

       result += `
        <ul class="list-group">
            <li class="list-group-item choosen text-center">${maxPercentagePlayer}   -      ${maxPercenatge}%</li>
        </ul>
       `

       result += '<ul class="list-group"></ul>';

       for(let i = 0 ; i < players.length;i++) {
           if(i !== maxIndex) {
            result += `
                    <li class="list-group-item">${players[i]}    -    ${percentage[i]}%</li>
                `;

           }


       }

       wrapper.innerHTML = result;




    }



}








