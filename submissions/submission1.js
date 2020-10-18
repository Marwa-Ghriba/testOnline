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

// Complete the minimumLoss function below.
function minimumLoss(price) {
    
        let min ;
        price.forEach((element,i)=>{
          for(var y=i+1;y<=price.length-1;y++){
            if(!isNaN(element-price[y+1])){
              if((element-price[y]<element-price[y+1] && element-price[y]>0)){
              min=element-price[y];
              }else{
                min=element-price[y+1];
              }
            }else{
              if(min && min>element-price[y]){
                min=element-price[y];
              }
            }
          }
        });
        return min;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const price = readLine().split(' ').map(priceTemp => parseInt(priceTemp, 10));

    let result = minimumLoss(price);

    ws.write(result + "\n");

    ws.end();
}
