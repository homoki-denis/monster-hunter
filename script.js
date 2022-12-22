const { createApp } = Vue;

createApp({
  data() {
    return {
      gameIsRunning: false,
      playerHealth: 100,
      monsterHealth: 100,
    };
  },
  methods: {
    startGame() {
      this.gameIsRunning = !this.gameIsRunning;
      this.playerHealth = 100;
      this.monsterHealth = 100;
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
      this.monsterHealth -= this.calculateDamage(2, 10);
      this.checkWin();

      this.playerHealth -= this.calculateDamage(3, 12);
      this.checkWin();
    },
    specialAttack() {
      this.monsterHealth -= this.calculateDamage(10, 20);
      this.checkWin();

      this.playerHealth -= this.calculateDamage(3, 12);
      this.checkWin();
    },
    heal() {
      if (this.playerHealth <= 90) {
        this.playerHealth += 10;
      } else {
        this.playerHealth = 100;
      }
      this.playerHealth -= this.calculateDamage(3, 12);
    },
    giveUp() {
      this.startGame();
    },
  },
}).mount("#app");
