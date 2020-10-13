var number1 = 1;
var number2 = 5;
var number3 = 2;
var equality = 1;
    if (number1==number2){
    equality++;
}
    if (number1== number3){
        equality++;
    }
    if (number2==number3){
        equality++;
    }
    if (equality == 1){
        console.log("Number of equals is:\t"+0 );
    }
    if (equality>=2 && equality<=3){console.log("Number of equals is:\t" + equality);}
    if (equality==4){
        --equality;
        console.log("Number of equals is:\t" + equality);}