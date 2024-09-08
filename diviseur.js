var table=[]
function diveur(n){
    for (let index = 1; Math.sqrt(n); index++) {
        if(n%index==0){
         table.push(index)
         table.filter(index=>index!=1)
         console.log(table);
         
        }
        
    }
}
console.log(diveur(12));
