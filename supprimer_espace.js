function supprime_espace(chaine){
    var resultat=chaine.replaceAll(/ /g,'')
    return resultat
}
console.log(supprime_espace('sanogo aichata'));
