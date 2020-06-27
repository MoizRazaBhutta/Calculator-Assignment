function getNum(num){
    var Result=document.getElementById("Result");
    Result.value+=num;
}
function remNum(){
    var Result = document.getElementById("Result");
    Result.value=" "
}
function getResult(){
    var Result = document.getElementById("Result");
    Result.value=eval(Result.value);   
}