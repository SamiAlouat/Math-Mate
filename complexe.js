//Fibonacci
function printFibonacci(){
    var num = parseInt(document.getElementById('fibonacci-value1').value);
    var n1 = 1;
    var n2 = 0;
    nextTerm=0;
  
    while (num >=  0){
        nextTerm= n1;
        n1 = n1+n2;
        n2 = nextTerm;
        document.getElementById('answer13').innerHTML += (n2)+"<br>";
        num--;
    }
  }
document.getElementById('fibonacci').addEventListener('click', printFibonacci);

// priemgetallen

function printPriemgetallen(){
    var num = document.getElementById('priemgetallen-value1').value;

    for(let i = 2; i <= num; i++){
        flag = true;
        for(let j = 2; j <= i-1; j++){
            if(i % j == 0){
                flag = false;
                break;
            }  
        }
        if(flag) {
            let answer = i + "<br>";
            document.getElementById('answer14').innerHTML += answer;
            console.log(answer);
        }
    }
}

document.getElementById('priemgetallen').addEventListener('click', printPriemgetallen);

// perfect number

function perfectNumber(){

    let number = parseInt(document.getElementById('perfectnumber-value1').value);
    var temp = 0;
    var divisors = [];
  
    for(var i = 1; i <= number / 2; i++){
         if(number % i === 0){
            temp += i;
            divisors.push(" " + i);
          }
    }
  
     if(temp === number && temp !== 0){
            document.getElementById("answer16").innerHTML = divisors + " = " + number;
        }
  
     else{
            document.getElementById('answer16').innerHTML = "Het is geen perfecte nummer.";
        }  
  }

document.getElementById('perfectnumber').addEventListener('click', perfectNumber);

//collatz conjuration

function collatz(){
    let num = parseInt(document.getElementById('collatz-value1').value);



    while(num != 1){
        if(num % 2 == 0){   
            let answer = num / 2;
            document.getElementById('answer17').innerHTML += num+"/2="+answer+"<br>"; 
            num = parseInt(num/2);
        }else{
            let answer1 = num * 3 + 1 ; 
            document.getElementById('answer17').innerHTML += num+"*3+1="+answer1+"<br>";
            num = (num * 3) + 1;
        }        
    }
}

document.getElementById('collatz').addEventListener('click', collatz);


//Factorizer

function showFactors() {
    const num = document.getElementById('factorizer-value1').value;
    for(let i = 1; i <= num; i++) {
        if(num % i == 0) {
            document.getElementById('answer19').innerHTML += i + ", ";
        }
    }
}

document.getElementById('factorizer').addEventListener('click', showFactors);

// romanizer

function convertToRoman() {
    var num = document.getElementById("romanizer-value1").value;
  if(num>5000) { paragraph = document.getElementById("answer20");
            paragraph.innerHTML = "Het nummer moet kleiner zijn dan 5000";
               }
  else {
    var my = [];
    
    var M = Math.floor(num / 1000);
    for (i = 1; i <= M; i++) {
        my.push("M");
    }
    var D = Math.floor((num % 1000) / 500);
    for (i = 1; i <= D; i++) {
        my.push("D");
    }
    var C = Math.floor((num % 500) / 100);
    for (i = 1; i <= C; i++) {
        my.push("C");
    }
    var L = Math.floor((num % 100) / 50);
    for (i = 1; i <= L; i++) {
        my.push("L");
    }

    var X = Math.floor((num % 50) / 10);
    for (i = 1; i <= X; i++) {
        my.push("X");
    }

    var V = Math.floor((num % 10) / 5);
    for (i = 1; i <= V; i++) {
        my.push("V");
    }

    var I = num % 5;
    for (i = 1; i <= I; i++) {
        my.push("I");
    }


  for(i=0;i<my.length;i++) {
    
    
    deletefour(my,i,"I","V") ;
     deletefour(my,i,"X","L") ;
        deletefour(my,i,"C","D") ;

    deletefive(my,i,"V","I","X");
   deletefive(my,i,"L","X","C");
 deletefive(my,i,"D","C","M");
   
    }
  paragraph = document.getElementById("answer20");
            paragraph.innerHTML = my.join('');

} }

function deletefour(arr,i,a,b) {
  
   if ((arr[i]==a)&&(arr[i+1]==a)&&(arr[i+2]==a)&&(arr[i+3]==a)) {
     arr[i+1]=b;
    arr[i+2]="";
     arr[i+3]="";
     
     
   }
  
}

function deletefive(arr,i,a,b,c) {
  
      if ((arr[i]==a)&&(arr[i+1]==b)&&(arr[i+2]==b)&&(arr[i+3]==b)&&(arr[i+4]==b)) {
     arr[i]=b;
        arr[i+1]=c;
      arr[i+2]="";
     arr[i+3]="";
        arr[i+4]="";
     
       
    
   }
   
}

document.getElementById('romanizer').addEventListener('click', convertToRoman);

// Morsenizer

function convertToMorse(){
    var letters = [ ' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0' ];
    var morseLetters = [ "\xa0\xa0\xa0\xa0", ". ___", "___ . . .", "___ . ___ .", "___ . .", ".", ". . ___ .", "___ ___ .", ". . . .", ". .", ". ___ ___ ___", "___ . ___", ". ___ . .",  "___ ___", "___ .", "___ ___ ___", ". ___ ___ .", "___ ___ . ___", ". ___ .", ". . .", "_", ". . ___", ". . . ___", ". ___ ___", "___ . . ___", "___ . ___ ___", "___ ___ . .", ". ___ ___ ___ ___", ". . ___ ___ ___", ". . . ___ ___", ". . . . ___", ". . . . .", "___ . . . .", "___ ___ . . .", "___ ___ ___ . .", "___ ___ ___ ___ .", "___ ___ ___ ___ ___" ];
    
    var textToChange = document.getElementById("morsenizer-value1").value;
    var newText = "";
    for (var i = 0; i < textToChange.length; i++) {
        for (var j = 0; j < 37; j++) {
            if (textToChange[i].toLowerCase() == letters[j]) {
                newText += morseLetters[j];
                newText += "\xa0\xa0\xa0";
                break;
            }        
        }
    }
document.getElementById("answer21").innerHTML = newText;
}

 document.getElementById('morsenizer').addEventListener('click', convertToMorse);