// console.log('hello');
// console.log($);

//================== CLASSES ===================////

$(()=>{


class Hero {
    constructor(name, health, dex, firstAttack, secondAttack) {
      this.name = name;
      this.health = health
      this.dex = dex;
      this.firstAttack = firstAttack;
      this.secondAttack = secondAttack;
      this.init = 0;
    }
    attackOne(enemy){
      console.log(this.name + ' uses Attack 1!');
    }
    attackTwo(enemy){
      console.log(this.name + ' uses Attack 2!');
    }
    run(){
      console.log(this.name + 'flees the battle!');
    }
};



  //enemy class
class CompEnemy extends Hero {
  constructor(name, health, dex, firstAttack, secondAttack){
    super(name, health, dex, firstAttack, secondAttack)
  }
  attackOne(player){
    console.log(this.name + ' uses attack 1! ');
  }
  attackTwo(player){
    console.log(this.name + ' uses attack 2!');
  }
};





    const playerOne = new Hero('Player 1',18,20,'Sword','Shield Bash' )
    const warrior = new CompEnemy('Warrior',14,20,'Axe','Axe Throw');




    $('#player-action-1').on('click', playerOne.attackOne);
    $('#player-action-2').on('click', playerOne.attackTwo);
    $('#player-action-3').on('click', playerOne.run)
    $('#comp-action-1').on('click', warrior.attackOne);


console.log(warrior);
console.log(playerOne);

}) //<-- end document.onload
