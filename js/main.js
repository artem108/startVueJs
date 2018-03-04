Vue.component ('app-car', {
  data: function() {
    return {
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
      ]
      }
    },
    template: '<section><p class="car" v-for="car in cars">{{ car.name }}</p></section>'
})

new Vue ({
  el: '#app',
})

new Vue ({
  el: '#app2',
  components: {
    'apps-cars': {
      data: function() {
        return {
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
          ]
        }
      },
      template: '<section><p class="car" v-for="car in cars">{{ car.name }}</p></section>'
    }
  }
})
