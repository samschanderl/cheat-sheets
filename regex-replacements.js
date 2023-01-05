// example string
let styleString = `
    body {
        background: #e9e9e9;
        position: relative;
        height: 100vh;
    }
    .container {
        background: white;
        position: absolute;
        width: 100%;
        height: 100%;
    }
`;

// replace/remove all white space in a string
let noWhiteSpace = styleString.replace(/\s/g, "");

// replace/remove all new line characters in a string
let noLineBreaks = styleString.replace(/\r?\n|\r/g, "");

// example string 2
let upperAndLowerCase = 'This String has Upper and Lower Case';

// remove all lowercase to only keep upper case letters
let onlyUpper1 = str.replace(/[a-z]/g, '')
let onlyUpper2 = str.replace(/[Â-Z]/g, '')
