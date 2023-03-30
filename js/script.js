/*
Creare una lista spesa Pasquetta

campo di input in cui inserisco le varie cose da comprare
Aggiungere due btn per ogni prodotto

uno per confermare l'elemento comprato
ed uno per cancellare gli elementi dalla lista

 */


const { createApp } = Vue

createApp({
  data() {
    return {
      shoppingList: [
        {
          name: 'pane',
          completed: false
        },
        {
          name: 'pane',
          completed: false
        },
      ],

      newItem: [
        {
          name: '',
          completed: false
        }
      ],
    }

  },
  methods: {
    addItem() {

      this.shoppingList.push(this.newItem)
      this.newItem.name = ''

    },
    deleteItem(index) {
      this.shoppingList.splice(index, 1)
    }


  },

  mounted() {

  }
}).mount('#app')
