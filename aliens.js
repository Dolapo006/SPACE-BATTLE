class Ship {
   constructor(name, hull, firepower, accuracy) {
      this.name = name,
         this.hull = hull,
         this.firepower = firepower,
         this.accuracy = accuracy
   }

}

class MainShip extends Ship {
   constructor(name, hull, firepower, accuracy) {
      super(name, hull, firepower, accuracy)

      this.name = "USS Assembly",
         this.hull = 20,
         this.firepower = 5,
         this.accuracy = .7
   }
   attackAlien() { 
      let randomNum = Math.random()
      if (randomNum <= this.accuracy) { 
         target.hull -= this.firepower 
         window.alert(`Attacked ${target.name} for ${this.firepower} damage!`)
      }
      else {
         (window.alert('You have missed!')) 
      }
   
      
   }
}

const USSAssembly = new MainShip

class AlienShip extends Ship {
   constructor(name, hull, firepower, accuracy) {
      super(name, hull, firepower, accuracy)
      this.name = name,
         this.hull = (Math.floor(Math.random() * 4) + 3),
         this.firepower = Math.floor((Math.random() * 3) + 2),
         this.accuracy = ((Math.random() * .2) + .6).toFixed(2)
   }
   attackMain() {
      let randomNum = Math.random()
      if (randomNum < this.accuracy) {
         target.hull -= this.firepower
         window.alert(`Attacked ${target.name} for ${this.firepower} damage!`);

      }
      else { window.alert('You have missed!') }
   }
}


const alienShip1 = new AlienShip("Alien Ship 1")
const alienShip2 = new AlienShip("Alien Ship 2")
const alienShip3 = new AlienShip("Alien Ship 3")
const alienShip4 = new AlienShip("Alien Ship 4")
const alienShip5 = new AlienShip("Alien Ship 5")
const alienShip6 = new AlienShip("Alien Ship 6")


const allAlien = [alienShip1, alienShip2, alienShip3, alienShip4, alienShip5, alienShip6]
console.log(allAlien)

//   USSAssembly.attackAlien(alienShip2);

//   const attackButton = document.getElementById('attack')
//   attackButton.addEventListener('click', () => {

//     USSAssembly.attackAlien(alienShip4)
//   })

const startGame = () => {
   window.alert('THIS IS SPACE BATTLE');
   const reply = prompt(`Click 'P' to begin or 'Q' to quit`);
   if (reply.toUpperCase() === 'Q') {
      alert('See Ya Later!!')
   } else if (reply.toUpperCase() === 'P') {
      alert(`It's time for you to shine and save the Earth from these vicious Aliens!!`)
      shootWhenReady()
   } else {
      alert('You did not put a response. \n Please Try Again')
   }
}


const stats = () => {
   window.alert(`Your stats are HULL: ${USSAssembly.hull}, FIREPOWER: ${USSAssembly.firepower}, ACCURACY: ${allAlien.hull}, FIREPOWER: ${allAlien.firepower}, ACCURACY: ${Math.floor(allAlien.accuracy * 100)}% `)
}

allAlienCount = 6

const readyToShoot = () => {
   stats()

   while (allAlienCount > 0) {
      if (allAlien.hull < 1) {
         allAlienCount -= 1
      }
      if (allAlienCount > 0 && USSAssembly.hull > 0) {
         allAlien.hull = (Math.floor(Math.random() * 4) + 3),
            allAlien.firepower = Math.floor((Math.random() * 3) + 2),
            allAlien.accuracy = ((Math.random() * .2) + .6).toFixed(2)
      } else if (allAlienCount < 1 && USSAssembly.hull < 1) {
         return alert(`IT'S A DRAW`)
      } else if (allAlienCount < 1 && USSAssembly.hull > 0) {
         return alert(` GREAT! YOU HAVE DEFEATED ALL THE ALIENS`)
      } else {
         return alert(`YOU LOST!`)
      }

      const reply = prompt(`Enter 'f' to fight or 'r' to run`)
      if (reply.toLowerCase() === 'r') {
         alert(`YOU LOST!`)
         defender.hull = 0;
         defender.firepower = 0;
         defender.accuracy = 0;
         stats()
      } else if (reply.toLowerCase() === 'f') {
         fight()
      } else {
         alert(`You didn't give a response. \n\n Please Try again!`)
      }
   }
}

const fight = () => {
   USSAssembly.attackAlien();
   allAlien.attackMain();
   readyToShoot();
}

startGame();