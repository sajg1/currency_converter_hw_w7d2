import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue ({
    el: "#app",
    data: {
      exchangeRates: {},
      amountToConvert: 0
    },
    mounted() {
      this.getExchangeRates();
    },
    methods: {
      getExchangeRates: function () {
        fetch("https://api.exchangeratesapi.io/latest")
        .then(response => response.json())
        .then(exchangeRates => this.exchangeRates = exchangeRates.rates)
      }
    }
  })
})
