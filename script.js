const { createApp } = Vue;

createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
    };
  },
}).mount("#app");
