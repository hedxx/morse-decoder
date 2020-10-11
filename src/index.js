const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {

    function decodSymb(arr){

        let strTemp = '';
        let i = 0;
        
        if (arr[0] === '*') {
   
           return ' ';
        }
        do {
  
         if( arr[i] + arr[i+1] === '10')
  
         {
             strTemp = strTemp + '.';
          } else if ( arr[i] + arr[i+1] === '11' ) {
  
             strTemp = strTemp + '-';
          }
  
           i = i + 2;
        } while ( i < arr.length )
  
       return MORSE_TABLE[strTemp];
  
    }

    let strArr = expr.split('');
    let strResult = '';
 
    while ( strArr.length ) 
    {
 
       strResult = strResult + decodSymb( strArr.splice(0,10) ); 
 
    }
 
 return strResult;    
         
}

module.exports = {
    decode
}