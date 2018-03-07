

$( () => {

  // create a variable to store Hero name from input box
  let heroName = "";
  // create a variable to hold the name of which Enemy hero we are facing
  let compName = "";


  const knight = {
    name: heroName,
    hp: 20,
    def: 10,
    init: Math.floor(Math.random() * 20),
    hitPercentage: 3,
    playerImage: "'images/Knight-player.png'",
    compImage: "'images/Knight-comp.png'",
    actionsImages: [ "'images/Knight-sword.png'", "'/images/Knight-shield.png'", "'/images/run.png'" ],
    actionsTitles: ['Slash', 'Fend', 'Charge'],
    actionOne() {
        if (knight.hitPercentage + Math.floor(Math.random() * 20) > currentEnemy.def) {
            currentEnemy.hp -= 2;
            const $damageText = $('<h2>').attr('class','damage').appendTo($compImage);
            $damageText.empty();
            $damageText.text('- 2').fadeOut(1000);
            $compStatus.empty().text('HP: ' + currentEnemy.hp + '  \n DEF: ' + currentEnemy.def);
            checkCompHp();
        } else {
          const $missText = $('<h2>').attr('class','missed').appendTo($compImage);
          $missText.empty();
          $missText.text('Miss!').fadeOut(1000);
          $compStatus.empty().text('HP: ' + currentEnemy.hp + '  \nDEF: ' + currentEnemy.def);
          enemyTurn();
        }
    },
    actionTwo() {
      if (Math.floor(Math.random() * 20) > 10) {
        knight.def += 2;
        const $defText = $('<h2>').attr('class','defend').appendTo($playerImage);
        $defText.empty();
        $defText.text('DEF + 2').fadeOut(1000);
        $playerStatus.empty().text('HP: ' + knight.hp + '  \n DEF: ' + knight.def);
      } else {
        const $defText = $('<h2>').attr('class','ineffective').appendTo($playerImage);
        $defText.empty();
        $defText.text('INEFFECTIVE!').fadeOut(1000);
        $playerStatus.empty().text('HP: ' + knight.hp + '  \n DEF: ' + knight.def);

      }

    },
    actionThree() {
        if (Math.floor(Math.random() * 20) > currentEnemy.def) {
          currentEnemy.hp -= 4;
          const $damageText = $('<h2>').attr('class','damage').appendTo($compImage);
          $damageText.empty();
          $damageText.text('- 4').fadeOut(1000);
          $compStatus.empty().text('HP: ' + currentEnemy.hp + '  \n DEF: ' + currentEnemy.def);
          checkCompHp();
        } else {
          const $missText = $('<h2>').attr('class','missed').appendTo($compImage);
          $missText.empty();
          $missText.text('Miss!').fadeOut(1000);
          $compStatus.empty().text('HP: ' + currentEnemy.hp + '  \nDEF: ' + currentEnemy.def);
          enemyTurn();
        }
      }
    }

const archer = {
  name: 'Archer',
  hp: 18,
  def: 11,
  init: Math.floor(Math.random() * 20),
  hitPercentage: 5,
  playerImage: "'images/Archer-player.png'",
  compImage: "'images/Archer-comp.png'",
  actionsImages: [ "'images/Archer-bow.png'", "'images/Archer-multishot.png'"],
  actionsTitles: ['Snipe','Barrage'],
  actionOne(){
      console.log(archer.name + ' uses ' + actionsTitles[0] + ' make this an attack!');
  },
  actionTwo(){
      console.log('make this multishot!');
  }

}

const warrior = {
  name: 'Warrior',
  hp: 22,
  def: 10,
  init: Math.floor(Math.random() * 20),
  hitPercentage: 6,
  playerImage: "'images/Warrior-player.png'",
  compImage: "'images/Warrior-comp.png'",
  actionsImages: [ "'images/Warrior-axe.png'", "'images/Warrior-axe-throw.png'"],
  actionsTitles: ['Hack','Axe Throw'],
  actionOne(){
      console.log('make this an attack!');
  },
  actionTwo(){
      console.log('make this Axe throw!');
  }

}

const amazon = {
  name: 'Amazon',
  hp: 18,
  def: 10,
  init: Math.floor(Math.random() * 20),
  hitPercentage: 7,
  playerImage: "'images/Amazon-player.png'",
  compImage: "'images/Amazon-comp.png'",
  actionsImages: [ "'images/Amazon-sword.png'", "'images/Amazon-shield.png'"],
  actionsTitles: ['Pierce','Shield Wall'],
  actionOne(){
      console.log('make this an attack!');
  },
  actionTwo(){
      console.log('make this shield wall!');
  }

}

const darkKnight = {
  name: 'DarkKnight',
  hp: 20,
  def: 15,
  init: Math.floor(Math.random() * 20),
  hitPercentage: 7,
  playerImage: "'images/DarkKnight-player.png'",
  compImage: "'images/DarkKnight-comp.png'",
  actionsImages: [ "'images/DarkKnight-sword.png'", "'images/DarkKnight-doublestrike.png'"],
  actionsTitles: ['Rend','Double Strike'],
  actionOne(){
      console.log('make this an attack!');
  },
  actionTwo(){
      console.log('make this multi-strike!');
  }

}

// array of all character objects
const enemies = [archer, warrior, amazon, darkKnight]
// keep track of which enemies we are facing
let currentEnemy = enemies[0]

// grab the modal element
const $modal = $('#modal');

// grab the start game button
const $startBtn = $('#start-btn');
// grab the input box
const $inputBox = $('#modal-start');
// grab the player-container div
const $playerContainer = $('.player-container');
// grab the comp-container div
const $compContainer = $('.comp-container');
// grab the player-image div
const $playerImage = $('.player-image');
// grab the player actions div
const $playerActions = $('.player-actions');
// grab the comp-image div
const $compImage = $('.comp-image');
// grab the comp-actions div
const $compActions = $('.comp-actions');
// grab the player-status div
const $playerStatus = $('.player-status');
// grab the comp-status div
const $compStatus = $('.comp-status');

// open modal
const openModal = () => {
  $modal.css('display','block');
}

// close modal and start the game after user enters hero name
const startGame = () => {
  heroName = $inputBox.val();
  closeModal();
  placeHero();
  placeComp();
}

// close modal
const closeModal = () => {
  $modal.css('display', 'none');
}



  // add player to document
  const placeHero = () => {
      $playerImage.attr('id','knight-player');
      $playerActions.css('display','flex')
      $playerStatus.text('HP: ' + knight.hp + '  \n DEF: ' + knight.def);
        for (i = 0; i < knight.actionsImages.length; i++) {
            const $actionBtn = $('<div>').addClass('btn')
                                         .attr('id','player-action-' + [i + 1])
                                         .appendTo($playerActions);

        } // end for-loop
        const $playerActionOne = $('#player-action-1');
        const $playerActionTwo = $('#player-action-2');
        const $playerActionThree = $('#player-action-3');
        $playerActionOne.on('click', knight.actionOne);
        $playerActionTwo.on('click', knight.actionTwo);
        $playerActionThree.on('click', knight.actionThree);
} // end placeHero


  // add computer opponent to document
  const placeComp = () => {
      compName = currentEnemy.name;
      $compImage.attr('id', currentEnemy.name.toLowerCase() + '-comp');
      $compActions.css('display','flex')
      $compStatus.text('HP: ' + currentEnemy.hp + '  \n DEF: ' + currentEnemy.def );
        for ( i = 0; i < currentEnemy.actionsImages.length; i++) {
          const $actionBtn = $('<div>').addClass('btn')
                                       .attr('id','comp-action-' + [i+1])
                                       .css({"background-image": "url(" + currentEnemy.actionsImages[i] + ")", "background-position": "center"})
                                       .appendTo($compActions);
        } // end for-loop
  } // end placeComp

  const checkCompHp = () => {
    if (currentEnemy.hp <= 0) {
      nextEnemy();
    }
  }

  const enemyTurn = ()=> {

  }

  const nextEnemy = () => {
    if (currentEnemy === darkKnight) {
      gameWin();
    }
    enemies.shift();
    currentEnemy = enemies[0];
    $('.btn').remove()
    startGame();
  }

  const gameWin = () => {
    console.log('GAME WIN!');
  }
  // close the modal and start game
  $startBtn.on('click', startGame);

  // player action 1



openModal();




}); //<-- end document.onload
