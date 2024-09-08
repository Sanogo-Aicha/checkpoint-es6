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
  