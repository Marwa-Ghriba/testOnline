'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the lilysHomework function below.
function lilysHomework(arr) {
  
        let c =null;
        let restart=true;
        let count=0;
        let i=0;
        let y = array.length-1;
        do{
          for(i=0;i<array.length-1;i++){
          restart=false;
            let selectedi;
            let selectedy;
            y = array.length-1;
            let min;
            for(y=array.length-1;y>i+1;y--){         
              if(array[y] < array[y-1] && array[i]-array[y]<array.length ){
                selectedi=i;
                selectedy=y;
              }else{
                if(array[y]>array[y-1] && array[i]-array[y-1]<array.length ){
                  selectedi=i;
                  selectedy=y;
                }
              }
            }
            if(!isNaN(selectedi) && !isNaN(selectedy)){
              c = array[selectedy];
              array[selectedy]=array[selectedi];
              array[selectedi]=c;
              count++;
            }
          }
        }while(restart==true);
        return count;
     


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    let result = lilysHomework(arr);

    ws.write(result + "\n");

    ws.end();
}
