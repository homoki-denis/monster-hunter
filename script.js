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
  },
}).mount("#app");
