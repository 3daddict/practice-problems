// find middle of string
// Build a function, find_middle_letters, that finds the middle of a string. If the string is an odd number of characters, it returns 1 letter. If it is an even number of characters, it returns 2 characters. It takes a string as a parameter

// Example:
// find_middle_letters('seven')
// Return: 'v'
// find_middle_letters('dish')
// Return: 'is'

var stringsToCheck = ['wonderful', 'needy', 'fancy', 'zesty', 'futuristic'];

 function extractMiddle(str) {
        var position;
        var length;
        if(str.length % 2 == 1) {
            position = str.length / 2;
            length = 1;
        } else {
            position = str.length / 2 - 1;
            length = 2;
        }
        return str.substring(position, position + length)
    }

    console.log(extractMiddle("hand"));
    console.log(extractMiddle("hands"));
    console.log(extractMiddle("cookie"));
    console.log(extractMiddle("cookies"));

    //https://stackoverflow.com/questions/39001373/extracting-middle-of-string-javascript