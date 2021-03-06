function getPercentage(givenData) {
    let data = [];
    let arr = givenData;
        let anyNumber = Math.floor(Math.random() * 100);
        let prob = 71;
        if(anyNumber > 5 && anyNumber%arr.length != 0 && anyNumber % 2 != 0) {
            prob = anyNumber;
        }
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
        arr,
        prob    
    };

}





/* Get Dom Elements */
var input = document.getElementById('all');
var wrapper = document.getElementById('result');

function getInputData() {
    var result = '';
    if(input.value === '') {
        result += '<div class="alert alert-danger">All Inputs are required</div>';
       wrapper.innerHTML = result;
    } else {
        let all = getPercentage(input.value.split(','));
       let percentage = all.objPercentage;
       let players = all.arr;
       let maxIndex = percentage.indexOf(Math.max(...percentage));
       let maxPercenatge = Math.max(...percentage);
       let maxPercentagePlayer = players[maxIndex];
       let entropy = all.prob;


       result += `
        <ul class="list-group">
            <li class="list-group-item choosen text-center">Winner Is : <b>${maxPercentagePlayer}   -      ${maxPercenatge}% </b></li>
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


       result += `
        <div class="alert alert-info text-center">
            Number of Random Choices : <b>${entropy}</b>
        </div>
       `



       wrapper.innerHTML = result;




    }



}








