console.log('answer.js Loaded');
var inputArray1 = [5, 3, 2, 5, 1];
var inputArray2 = ['cat', 'dog', 'zebra', 'ocelot', 'dodo bird'];
var inputArray3 = [true, false, false, true, true, true, false];



function randomize_list(someArray) {
    var currentIndex = someArray.length;
    var temporaryIndex;
    var randomIndex;

    //While there remain elements to shuffle...
    while (currentIndex !== 0) {
        // generate random index numbers to current index
        randomIndex = Math.floor(Math.random() * currentIndex);
        //console.log('randomIndex = ' + randomIndex);
        currentIndex -= 1; // count down till index is zero
        //console.log('currentIndex = ' + currentIndex);

        //swap trick from bubble sort to randomize the array
        temporaryIndex = someArray[currentIndex];
        //console.log('temporaryIndex1 = ' + temporaryIndex);
        someArray[currentIndex] = someArray[randomIndex];
        someArray[randomIndex] = temporaryIndex;
        //console.log('temporaryIndex2 = ' + temporaryIndex);
    }
    console.log(someArray);
    return someArray;
}


randomize_list(inputArray1);
randomize_list(inputArray2);
randomize_list(inputArray3);