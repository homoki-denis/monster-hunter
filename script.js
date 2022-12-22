const { createApp } = Vue;

createApp({
  data() {
    return {
      gameIsRunning: false,
      playerHealth: 100,
      monsterHealth: 100,
      turns: [],
    };
  },
  methods: {
    startGame() {
      this.gameIsRunning = !this.gameIsRunning;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.turns = [];
    },
    calculateDamage(min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    },
    checkWin() {
      if (this.monsterHealth <= 0) {
        confirm("You Won! Want to play again?");
        this.startGame();
      } else if (this.playerHealth <= 0) {
        confirm("You Lost! Want to play again?");
        this.startGame();
      }
    },
    attack() {
      let damage = this.calculateDamage(2, 10);
      this.monsterHealth -= damage;
      this.turns.unshift({
        isPlayer: true,
        text: `Player strikes Monster for ${damage}`,
      });
      this.checkWin();

      damage = this.calculateDamage(2, 10);
      this.playerHealth -= damage;
      this.turns.unshift({
        isPlayer: false,
        text: `Monster strikes Player for ${damage}`,
      });
      this.checkWin();
    },
    specialAttack() {
      let damage = this.calculateDamage(10, 20);
      this.monsterHealth -= damage;
      this.turns.unshift({
        isPlayer: true,
        text: `Player strikes Monster hard for ${damage}`,
      });
      this.checkWin();

      damage = this.calculateDamage(3, 12);
      this.playerHealth -= damage;
      this.turns.unshift({
        isPlayer: false,
        text: `Monster strikes Player for ${damage}`,
      });
      this.checkWin();
    },
    heal() {
      if (this.playerHealth <= 90) {
        this.playerHealth += 10;
        this.turns.unshift({
          isPlayer: true,
          text: `Player healed for ${10}`,
        });
      } else {
        this.playerHealth = 100;
      }
      this.playerHealth -= this.calculateDamage(3, 12);
    },
    giveUp() {
      this.startGame();
      turns = [];
    },
  },
}).mount("#app");
