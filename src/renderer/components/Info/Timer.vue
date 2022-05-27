<template>
  <div :class="'timer-container ' + (infoStatus === 'video')">
    <div v-show="infoStatus === 'video'" class="logo">
      <img src="~assets/icons/info/timer/logo.png">
    </div>
    <div class="timer">
      <div class="day">{{todayDay}}</div>
      <div class="time">{{currentTime}}</div>
      <div class="date">{{todayDate}}</div>
    </div>
  </div>
</template>

<script>
const date = new Date();
const mounth = date.getMonth() + 1;
const day = date.getDay();
const datedate = date.getDate()
const year = date.getFullYear()
const week = ['Воскресение', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

export default {
  data() {
    return {
      currentTime: '',
      showLogo: true,
    }
  },
  props: {
    infoStatus: String
  },
  computed: {
    todayDate: function () {
      return `${this.addZero(datedate)}.${this.addZero(mounth)}.${year}`
    },
    todayDay: function () {
      return week[day];
    }
  },
  // watch: {
  //   'currentTime': {
  //     handler() {
  //       setTimeout(() => {
  //         return this.currentTime = `${this.addZero(hours)}:${this.addZero(minutes)}:${this.addZero(seconds)}`
  //       }, 1000)
  //     },
  //     immediate: true // This ensures the watcher is triggered upon creation
  //   }
  // },
  created() {
    this.currentTimer()
  },
  methods: {
    addZero(v) {
      return v < 10 ? '0' + v : v;
    },
    currentTimer() {
      let date = new Date();

      let hours = date.getHours();
      let minutes = date.getMinutes();
      let seconds = date.getSeconds();
      setTimeout(() => {
        this.currentTime = `${this.addZero(hours)}:${this.addZero(minutes)}:${this.addZero(seconds)}`
        this.currentTimer();
      }, 1000);
    }
  }
};
</script>

<style>
.timer-container.true {
  width: 25vw;
}
.timer-container.false {
  width: 15vw;
}
.timer-container {
  position: absolute;
  z-index: 1;
  background-color: rgba(255, 255, 255, 0.476);
  border-radius: 0px 0px 5px 5px;
  margin-right: 3vw;
}
.timer-container > .logo > img {
  width: 80%;
  padding: 10% 10%;
  padding-bottom: 0;
}
.timer-container > .timer {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  padding: 10%;
}
.timer-container > .timer > .day {
  color: rgb(65, 65, 65);
  font-weight: 100;
  font-size: 1.8vw;
}
.timer-container > .timer > .time {
  font-weight: 600;
  font-size: 2.4vw;
}
.timer-container > .timer > .date {
  color: rgb(65, 65, 65);
  font-weight: 100;
  font-size: 1.4vw;
}
</style>