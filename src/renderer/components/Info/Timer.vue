<template>
  <div class="timer-container">
    <div class="logo">
      <img src="~assets/icons/info/timer/logo.png">
    </div>
    <div class="timer">
      <div class="day">Среда</div>
      <div class="time">06:23:22</div>
      <div class="date">11.11.03</div>
    </div>
  </div>
</template>

<script>
</script>

<style>
.timer-container {
    position:absolute;
    z-index: 1;
    background-color: rgba(255, 255, 255, 0.476);
    border-radius: 0px 0px 5px 5px;
    width:25vw;
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
.timer-container > .timer > .time{
    font-weight: 600;
    font-size: 2.4vw;
}
.timer-container > .timer > .date{
    color: rgb(65, 65, 65);
    font-weight: 100;
    font-size: 1.4vw;
}

</style>