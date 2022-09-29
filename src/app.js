var inicio = ["www."]
var pronoun = ['the','our'];
var adj = ['great', 'big' ];
var noun = ['puedes','racoon', 'capcom' ];
var extension =["com", "net", "es", "io"]

//function DomainGenerator(){

for (i = 0; i < pronoun.length; i++) {
  for ( j= 0; j < adj.length; j++){
    for (k = 0; k< noun.length; k++){
      for(l = 0; l < extension.length; l++){

        console.log(`${inicio}${pronoun[i]}${adj[j]}${noun[k]}.${extension[l]}`)


      /*const domain = `${pronoun[i]}${adj[j]}${noun[k]}`;
      let domainArray = domain.split();
      let domainArrayReverse = domainArray.reverse();
      let reverseExtension = extension[l].split().reverse();
      let cont = 0

        for(w = 0; w < reverseExtension.length; w++){
          if(domainArrayReverse[w] === reverseExtension[w]){
            cont++
          }
        }

        if (cont === reverseExtension.length){
          domainArray.slice(-2,-1, '.');
        }
console-log(domainArray)*/


  
    }
  }
}

}







