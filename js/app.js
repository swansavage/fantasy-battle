// console.log('hello');
// console.log($);

//================== CLASSES ===================////

// $(()=>{
//
//
//
// class Hero {
//     constructor(name, health, def, firstAttack, secondAttack) {
//       this.name = name;
//       this.health = health
//       this.def = def;
//       this.firstAttack = firstAttack;
//       this.secondAttack = secondAttack;
//       this.init = 0;
//
//     }
//     attackOne(){
//
//       console.log(this.name + ' uses Attack 1!');
//       console.log('this is this', $(this));
//     }
//     attackTwo(enemy){
//       console.log(this.name + ' uses Attack 2!');
//     }
//     run(){
//       console.log(this.name + 'flees the battle!');
//     }
//
// };
//
//
//
//   //enemy class
// class CompEnemy extends Hero {
//   constructor(name, health, def, firstAttack, secondAttack){
//     super();
//   }
//   attackOne(player){
//     console.log(this.name + ' uses attack 1! ');
//   }
//   attackTwo(player){
//     console.log(this.name + ' uses attack 2!');
//   }
// };
//
//
//
//
//     var self = this;
//     const playerOne = new Hero('Player 1',18,20,'Sword','Shield Bash' )
//     const warrior = new CompEnemy('Warrior',14,20,'Axe','Axe Throw');

$( () => {

  // create a variable to store Hero name from input box
  let heroName = "";
  // create a variable to hold the name of which Enemy hero we are facing
  let compName = "";

  const knight = {
    name: heroName,
    hp: 20,
    def: 12,
    init: 0,
    actionsImages = [ '../images/Knight-sword.png', '../images/Knight-shield.png', '../images/run.png' ],
    actionsTitles = ['Slash', 'Fend', 'Charge'],
    actionOne() {
        console.log('make this an attack!');
    },
    actionTwo() {
        console.log('make this shield Bash!');
    },
    actionThree() {
        console.log('make this charge!');
    }

  }

const archer = {
  name: 'Archer',
  hp: 20,
  def: 12,
  init: 0,
  actionsImages = [ '../images/Archer-bow.png', '../images/Archer-multishot.png'],
  actionsTitles = ['Snipe','Barrage'],
  actionOne(){
      console.log(archer.name + ' uses ' + actionsTitles[0] + ' make this an attack!');
  },
  actionTwo(){
      console.log('make this multishot!');
  }

}

const warrior = {
  name: 'Warrior',
  hp: 20,
  def: 12,
  init: 0,
  actionsImages = [ '../images/Warrior-axe.png', '../images/Warrior-axe-throw.png'],
  actionsTitles = ['Hack','Axe Throw'],
  actionOne(){
      console.log('make this an attack!');
  },
  actionTwo(){
      console.log('make this Axe throw!');
  }

}

const amazon = {
  name: 'Amazon',
  hp: 20,
  def: 12,
  init: 0,
  actionsImages = [ '../images/Amazon-sword.png', '../images/Amazon-shield.png'],
  actionsTitles = ['Pierce','Shield Wall'],
  actionOne(){
      console.log('make this an attack!');
  },
  actionTwo(){
      console.log('make this shield wall!');
  }

}

const darkKnight = {
  name: 'Dark Knight',
  hp: 20,
  def: 12,
  init: 0,
  actionsImages = [ '../images/DarkKnight-sword.png', '../images/DarkKnight-doublestrike.png'],
  actionsTitles = ['Rend','Double Strike'],
  actionOne(){
      console.log('make this an attack!');
  },
  actionTwo(){
      console.log('make this multi-strike!');
  }

}

// grab the modal element
const $modal = $('#modal');

// grab the start game button
const $startBtn = $('#start-btn');
// grab the input box
const $inputBox = $('#modal-start');
// grab the player-image div
const $playerImage = $('.player-image');
// grab the player actions div
const $playerActions = $('.player-actions')
// grab the comp-image div
const $compImage = $('.comp-image')
// grab the comp-actions div
const $compActions = $('.comp-actions')

// open modal
const openModal = () => {
  $modal.css('display','block');
}

const startGame = () => {
  heroName = $inputBox.val();
  closeModal();
  console.log(heroName);
  console.log('MAKE THIS START THE GAME!!!!!');
  placeHero();
}

// close modal
const closeModal = () => {
  $modal.css('display', 'none');
}


const placeHero = () => {
  $playerImage.attr('id','knight-player');
  $playerActions.css('display','flex')
}

const placeComp = () => {
  enemyName = archer.name
  $

}




  // close the modal and start game
  $startBtn.on('click', startGame);



openModal();
console.log(darkKnight.hp);
}); //<-- end document.onload
