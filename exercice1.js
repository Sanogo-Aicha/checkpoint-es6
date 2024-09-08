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