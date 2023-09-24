//          WHILE
/**
 * Declarer une varaible a qui est egale a 4
 * tant que a est plus petit que 10 
 * incremente a de 1
 * si a est egal a 9 on arrete la boucle 
 * si a est egal a 8 on revient au debut de la boucle 
 * on console log(a)
 */
let aT=3;
while(a<10){
    aT++
    if(aT==8){
        continue
    }
    if(aT==9){
        break
    }
    console.log(aT);
}
console.log('Jai cassé la boucle au bout de '+aT+" tours");