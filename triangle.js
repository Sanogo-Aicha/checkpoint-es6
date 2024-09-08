function triangle(cote1,cote2,cote3){
    let s=(cote1+cote2+cote3)/2
    let A=Math.sqrt(s*((s-cote1)*(s-cote2)*(s-cote3)))
    if(A>0){
        return true
    }
    else if(A<0 || A==0){
          return false
    }

}
console.log(triangle(2,1,3));
