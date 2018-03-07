

$( () => {

  // create a variable to store Hero name from input box
  let heroName = "";
  // create a variable to hold the name of which Enemy hero we are facing
  let compName = "";

  let userTurn = true;

  let currentRound = 1;

  const knight = {
    name: heroName,
    hp: 20,
    def: 10,
    init: Math.floor(Math.random() * 20),
    hitPercentage: 7,
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
          compTurn();
        }
    },
    actionTwo() {
      if (Math.floor(Math.random() * 20) > 10) {
        knight.def += 2;
        const $defText = $('<h2>').attr('class','defend').appendTo($playerImage);
        $defText.empty();
        $defText.text('DEF + 2').fadeOut(1000);
        $playerStatus.empty().text('HP: ' + knight.hp + '  \n DEF: ' + knight.def);
        compTurn();
      } else {
        const $defText = $('<h2>').attr('class','ineffective').appendTo($playerImage);
        $defText.empty();
        $defText.text('INEFFECTIVE!').fadeOut(1000);
        $playerStatus.empty().text('HP: ' + knight.hp + '  \n DEF: ' + knight.def);
        compTurn();

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
          compTurn();
        }
      }
    }; // end knight object

const archer = {
  name: 'Archer',
  hp: 18,
  def: 10,
  init: Math.floor(Math.random() * 20),
  hitPercentage: 2,
  playerImage: "'images/Archer-player.png'",
  compImage: "'images/Archer-comp.png'",
  actionsImages: [ "'images/Archer-bow.png'", "'images/Archer-multishot.png'"],
  actionsTitles: ['Snipe','Barrage'],
  actionOne(){
      if (archer.hitPercentage + Math.floor(Math.random() * 20) > knight.def) {
          knight.hp -= 2;
          const $damageText = $('<h2>').attr('class','damage').appendTo($playerImage);
          $damageText.empty();
          $damageText.text('- 2').fadeOut(1500);
          $playerStatus.empty().text('HP: ' + knight.hp + '  \n DEF: ' + knight.def);
          checkPlayerHp();
      } else {
        const $missText = $('<h2>').attr('class','missed').appendTo($playerImage);
        $missText.empty();
        $missText.text('Miss!').fadeOut(1500);
        $playerStatus.empty().text('HP: ' + knight.hp + '  \nDEF: ' + knight.def);
        playerTurn();
      }
    },
  actionTwo(){
      if (Math.floor(Math.random() * 20) > knight.def) {
          knight.hp -= 4;
          const $damageText = $('<h2>').attr('class','damage').appendTo($playerImage);
          $damageText.empty();
          $damageText.text('- 4').fadeOut(1500);
          $playerStatus.empty().text('HP: ' + knight.hp + '  \n DEF: ' + knight.def);
          checkPlayerHp();
      } else {
        const $missText = $('<h2>').attr('class','missed').appendTo($playerImage);
        $missText.empty();
        $missText.text('Miss!').fadeOut(1500);
        $playerStatus.empty().text('HP: ' + knight.hp + '  \nDEF: ' + knight.def);
        playerTurn();
      }
    }
}

const warrior = {
  name: 'Warrior',
  hp: 30,
  def: 11,
  init: Math.floor(Math.random() * 20),
  hitPercentage: 3,
  playerImage: "'images/Warrior-player.png'",
  compImage: "'images/Warrior-comp.png'",
  actionsImages: [ "'images/Warrior-axe.png'", "'images/Warrior-axe-throw.png'"],
  actionsTitles: ['Hack','Axe Throw'],
  actionOne(){
      if (warrior.hitPercentage + Math.floor(Math.random() * 20) > knight.def) {
          knight.hp -= 2;
          const $damageText = $('<h2>').attr('class','damage').appendTo($playerImage);
          $damageText.empty();
          $damageText.text('- 2').fadeOut(1500);
          $playerStatus.empty().text('HP: ' + knight.hp + '  \n DEF: ' + knight.def);
          checkPlayerHp();
      } else {
        const $missText = $('<h2>').attr('class','missed').appendTo($playerImage);
        $missText.empty();
        $missText.text('Miss!').fadeOut(1500);
        $playerStatus.empty().text('HP: ' + knight.hp + '  \nDEF: ' + knight.def);
        playerTurn();
      }
    },
  actionTwo(){
      if (Math.floor(Math.random() * 20) > knight.def) {
          knight.hp -= 5;
          const $damageText = $('<h2>').attr('class','damage').appendTo($playerImage);
          $damageText.empty();
          $damageText.text('- 5').fadeOut(1500);
          $playerStatus.empty().text('HP: ' + knight.hp + '  \n DEF: ' + knight.def);
          checkPlayerHp();
      } else {
        const $missText = $('<h2>').attr('class','missed').appendTo($playerImage);
        $missText.empty();
        $missText.text('Miss!').fadeOut(1500);
        $playerStatus.empty().text('HP: ' + knight.hp + '  \nDEF: ' + knight.def);
        playerTurn();
      }
    }

}

const amazon = {
  name: 'Amazon',
  hp: 35,
  def: 6,
  init: Math.floor(Math.random() * 20),
  hitPercentage: 6,
  playerImage: "'images/Amazon-player.png'",
  compImage: "'images/Amazon-comp.png'",
  actionsImages: [ "'images/Amazon-sword.png'", "'images/Amazon-shield.png'"],
  actionsTitles: ['Pierce','Shield Wall'],
  actionOne(){
      if (amazon.hitPercentage + Math.floor(Math.random() * 20) > knight.def) {
          knight.hp -= 2;
          const $damageText = $('<h2>').attr('class','damage').appendTo($playerImage);
          $damageText.empty();
          $damageText.text('- 2').fadeOut(1500);
          $playerStatus.empty().text('HP: ' + knight.hp + '  \n DEF: ' + knight.def);
          checkPlayerHp();
      } else {
        const $missText = $('<h2>').attr('class','missed').appendTo($playerImage);
        $missText.empty();
        $missText.text('Miss!').fadeOut(1500);
        $playerStatus.empty().text('HP: ' + knight.hp + '  \nDEF: ' + knight.def);
        playerTurn();
      }
    },
  actionTwo(){
    if (Math.floor(Math.random() * 20) > 10) {
      amazon.def += 2;
      const $defText = $('<h2>').attr('class','defend').appendTo($compImage);
      $defText.empty();
      $defText.text('DEF + 2').fadeOut(1500);
      $compStatus.empty().text('HP: ' + amazon.hp + '  \n DEF: ' + amazon.def);
      playerTurn();
    } else {
      const $defText = $('<h2>').attr('class','ineffective').appendTo($compImage);
      $defText.empty();
      $defText.text('INEFFECTIVE!').fadeOut(1500);
      $compStatus.empty().text('HP: ' + amazon.hp + '  \n DEF: ' + amazon.def);
      playerTurn();

    }

  }

}

const darkKnight = {
  name: 'DarkKnight',
  hp: 35,
  def: 15,
  init: Math.floor(Math.random() * 20),
  hitPercentage: 6,
  playerImage: "'images/DarkKnight-player.png'",
  compImage: "'images/DarkKnight-comp.png'",
  actionsImages: [ "'images/DarkKnight-sword.png'", "'images/DarkKnight-doublestrike.png'"],
  actionsTitles: ['Rend','Double Strike'],
  actionOne(){
    if (darkKnight.hitPercentage + Math.floor(Math.random() * 20) > knight.def) {
      knight.hp -= 2;
      const $damageText = $('<h2>').attr('class','damage').appendTo($playerImage);
      $damageText.empty();
      $damageText.text('- 2').fadeOut(1500);
      $playerStatus.empty().text('HP: ' + knight.hp + '  \n DEF: ' + knight.def);
      checkPlayerHp();
  } else {
    const $missText = $('<h2>').attr('class','missed').appendTo($playerImage);
    $missText.empty();
    $missText.text('Miss!').fadeOut(1500);
    $playerStatus.empty().text('HP: ' + knight.hp + '  \nDEF: ' + knight.def);
    playerTurn();
  }
},
  actionTwo(){
      if (Math.floor(Math.random() * 20) > knight.def) {
          knight.hp -= 5;
          const $damageText = $('<h2>').attr('class','damage').appendTo($playerImage);
          $damageText.empty();
          $damageText.text('- 5').fadeOut(1500);
          $playerStatus.empty().text('HP: ' + knight.hp + '  \n DEF: ' + knight.def);
          checkPlayerHp();
      } else {
        const $missText = $('<h2>').attr('class','missed').appendTo($playerImage);
        $missText.empty();
        $missText.text('Miss!').fadeOut(1500);
        $playerStatus.empty().text('HP: ' + knight.hp + '  \nDEF: ' + knight.def);
        playerTurn();
      }
    }

}

// array of all character objects
const enemies = [archer, warrior, amazon, darkKnight]
// keep track of which enemies we are facing
let currentEnemy = enemies[0]

// grab the modal element
const $modal = $('.modal');

// grab the start game button
const $startBtn = $('#start-btn');
// grab the input box
const $inputBox = $('#modal-start');
// grab the main-container
const $mainContainer = $('main');
// grab the announce-section div
const $announceSection = $('#announce-section');
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
// grab the new-modal div
const $newModal = $('.new-modal');
// grab the new-round-modal div
const $newRoundModal = $('#new-round-modal');
// grab the new-round-modal-box div
const $newRoundModalBox = $('#new-round-modal-box');
// grab the new-round-btn div
const $newRoundBtn = $('#new-round-btn');
// grab the game-win-modal
const $gameWinModal = $('#game-win-modal');
// grab the game-win-modal-box
const $gameWinModalBox = $('#game-win-modal-box');
// grab the game-win-button
const $gameWinButton = $('#game-win-btn')
// grab the game-lose-modal div
const $gameLoseModal = $('#game-lose-modal');
// grab the game-lose-modal-btn div
const $gameLoseBtn = $('#game-lose-btn')



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
  checkInitiative();
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
                                         .appendTo($playerActions)


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



  // check which player goes first and announce on screen
  const checkInitiative = ()=> {
    if ( knight.init > currentEnemy.init) {
      console.log('knight turn');
      const $initText = $('<h2>').attr('class','init');
      $announceSection.empty();
      $initText.text(heroName + ' strikes first!').fadeOut( 3000 );
      $announceSection.append($initText);
      playerTurn();
    } else {
      console.log('comp turn');
      const $initText = $('<h2>').attr('class','init');
      $announceSection.empty();
      $initText.text(currentEnemy.name + ' strikes first!').fadeOut( 3000 );
      $announceSection.append($initText);
      compTurn();
    }
  }


  // check the computer opponent HP, if not <= 0 call nextEnemy()
  const checkCompHp = () => {
    if (currentEnemy.hp <= 0) {
      knight.hp += 20;
      knight.def = 11;
      knight.hitPercentage += 1;
      currentRound += 1;
      newRoundModal();
      // nextEnemy();
    } else {
      compTurn();
    }
  }

  // check player HP, if not <= 0 game continues
  const checkPlayerHp = () => {
    if (knight.hp <= 0) {
      // NEW MODAL TO ANNOUNCE GAME OVER HERE!
      gameOver();
    } else {
      playerTurn();
    }
  }



  const compTurn = () => {
      if (Math.floor(Math.random() * 20) <= 10) {
        setTimeout(currentEnemy.actionOne, 1000);
      } else {
        setTimeout(currentEnemy.actionTwo, 1000)

      }
    }

  const playerTurn = () => {
    console.log("your turn");
  }

  const nextEnemy = () => {
    if (currentEnemy === darkKnight) {
      gameWin();
    } else {
      enemies.shift();
      currentEnemy = enemies[0];
      $('.btn').remove()
      startGame();
    }
  }

  const gameWin = () => {
    gameWinModal();
  }


  const gameOver = () => {
    gameLoseModal();
  }


  const newRoundModal = () => {
      if (currentEnemy === darkKnight) {
        gameWin();
      }
    $newRoundModal.css('display','block')
    const $modalHeader = $('<h1>')
    const $modalText = $('<p>')
    $('#new-round-modal-box p').remove();
    $('#new-round-modal-box h1').remove();
    $newRoundModalBox.prepend($modalHeader);
    $modalText.text('You have defeated the ' + currentEnemy.name + ' !').insertAfter('#new-round-modal-box h1')
    $('#new-round-modal-box h1').text('Get ready for Round ' + currentRound);

  }

  const closeNewRoundModal = () => {
    $newRoundModal.css('display','none');
  }

  const gameWinModal = () => {
    $gameWinModal.css('display','block');

  }

  const closeGameWinModal = () => {
    $gameWinModal.css('display','none');
  }


  const gameLoseModal = () => {
    $gameLoseModal.css('display','block');
  }

  const closeGameLoseModal = () => {
    $gameLoseModal.css('display','none');
  }



  // close the modal and start game
  $startBtn.on('click', startGame);

  // close new round modal and start new Round
  $newRoundBtn.on('click', closeNewRoundModal);
  $newRoundBtn.on('click', nextEnemy)

  // close game win modal and start new game
  $gameWinButton.on('click', closeGameWinModal);
  $gameWinButton.on('click', ()=>{
      location.reload();
  });


  // close game lose modal and start new game
  $gameLoseBtn.on('click', closeGameLoseModal);
  $gameLoseBtn.on('click', ()=>{
      location.reload();
  });

openModal();



}); //<-- end document.onload
