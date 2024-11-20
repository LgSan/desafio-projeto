const personagem = 'Goku';
const XP = 7000;

let nivelHeroi;


if (XP < 1000){

    nivelHeroi = 'Ferro';

}else if(XP >=1001 && XP <= 2000){
    
    nivelHeroi = 'Bronze';

}else if(XP >=2001 && XP <= 5000){
    
    nivelHeroi = 'Prata';

}else if(XP >=5001 && XP <= 7000){
    
    nivelHeroi = 'Ouro';;

}else if(XP >=7001 && XP <= 8000){
    
    nivelHeroi = 'Platina';

}else if(XP >=8001 && XP <= 9000){
    
    nivelHeroi = 'Ascedente';
    
}else if(XP >=9001 && XP <= 10000){
    
    nivelHeroi = 'Imortal';

}else if(XP >=10001){
    
    nivelHeroi = 'Radiante';

}
console.log('O heroi',personagem,'está no nivel',nivelHeroi);
