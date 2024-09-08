function carre_parfait(element){
   let  racine_carre=Math.sqrt(element)
        if(parseFloat(racine_carre)==parseInt(racine_carre)){
            let add=racine_carre+1
            return add*add
        }
        else{
            return -1
        }
}
console.log(carre_parfait(114));
