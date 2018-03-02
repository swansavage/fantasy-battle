// console.log('hello');
// console.log($);


class Hero {
    constructor(name, dex, firstAttack, secondAttack) {
      this.name = name
      this.dex = dex
      this.firstAttack = firstAttack
      this.secondAttack = secondAttack
      this.init = 0
    }
    attackOne(){
      console.log('Player uses Attack 1!');
    }
    attackTwo(){
      console.log('Player uses Attack 2!');
    }
    run(){
      console.log('Player flees the battle!');
    }
};

const playerOne = new Hero('Shaun',18,'Charge','Slash' )

playerOne.attackOne();
playerOne.attackTwo();
playerOne.run();






$(()=>{










}) //<-- end document.onload
