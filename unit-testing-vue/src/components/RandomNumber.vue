<template>
  <div>
    <span>{{ randomNumber }}</span>
    <button @click="getRandomNumber">Generate Random Number</button>
  </div>
</template>

<script>
export default {
  props: {
    min: {
      type: Number,
      default: 1,
    },
    max: {
      type: Number,
      default: 10,
    },
  },
  data() {
    return {
      randomNumber: 0,
    }
  },
  methods: {
    getRandomNumber() {
      //   this.randomNumber = Math.floor(Math.random() * (this.min + 1)) + this.min
      this.randomNumber =
        Math.floor(Math.random() * (this.max - this.min + 1)) + this.min
      //   Math.floor(Math.random() * (max - min + 1)) + min;
    },
  },
}
</script>
