
let history=document.getElementById('history');
        var Historydata=[];
        var expression='';
        var  res='';

function calculation(v){
        console.log("in cal");
        expression=v;
        res=eval(v);
        Historydata.push({"expression":expression,"result":res})
        showHistory();

        expression='';
        res='';
        return eval(v);    
        }

function showHistory(){
        var log=document.getElementById("his");
        var string=''
        for (var key in Historydata){
                string+=""+ Historydata[key]["expression"]+ " = "+ Historydata[key]["result"] + "<br>";
            }
        log.innerHTML=string;
        // log.innerHTML="work";
        console.log(string);
        }
    
