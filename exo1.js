/*exo1:

var ch="sister fatim je taime"
var vol="aieou"
var conte=0
    for (let index = 0; index < ch.length; index++) {
    for (let i = 0; i < vol.length; i++) {
        if(ch[index]==vol[i])
           conte+=1
          
    }
    
}
alert(conte)

function voell(p){//exo2
     if (p%2===0){
        console.log('Even');
        
     }
     else console.log('old');
     
}
console.log(voell(23))


function nombre(nomb){//exo4
    if(nomb > 0){
        return -nomb
    }
    else if(nomb< 0){
        return nomb
    }
}
console.log(nombre(34))


function nombe(nomb1,p){ exo6:
    
    if(nomb1==p*p){ exo6
        return true
    }
    else if(nomb1 !==p*p){
        return false
    }
}
alert(nombe(23,3))

EXO9:

var ch="xxxXoooOO";
var conte=0
var compte=0
for (let index = 0; index < ch.length; index++) {
    if(ch[index]=="o" || ch[index]=="O"){
        conte+=1
    }
    
}

for (let i = 0; i < ch.length; i++) {
    if(ch[i]=="x" || ch[i]=="X"){
        compte+=1
    }
    
}
alert(conte)
alert(compte)
if(compte==conte){
    alert(true)
}
else if(compte!==conte) {
    alert(false)
}
    
    
let array=1+"-"+9+"-"+9+"-"+9+"-"+3;
for (let index = 0; index < array.length; index++) {
    console.log(array[2]*array[4]);
   
    
}
*/