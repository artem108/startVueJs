new Vue({
  el: '#main',
  data: {
    title: 'Hello',
    text: '',
    value: '1',
    show: false,
    show1: false,
    cars: [
      {
        name: 'Audi',
        speed: 340
      },
      {
        name: 'Bmw',
        speed: 0
      },
      {
        name: 'Ford',
        speed: 140
      }
    ],
    massage: 'Hello'
  },
  methods: {
    changeTitle () {
      this.title = 'Title was chaged'
    },
    changeBg (value) {
      this.text = value
    },
    increment (num) {
      this.value = num
    }
  },
  computed: {
    doubleValue () {
      return this.value * 2
    },
    showMass () {
      return this.massage.toUpperCase()
    }
  },
  filters: {
    lowerCase(value) {
      return value.toLowerCase()
    }
  }
})
