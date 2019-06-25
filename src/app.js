import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue ({
    el: "#app",
    data: {
      exchangeRates: {},
      amountToConvert: 0,
      selectedCurrency: ""
    },
    mounted() {
      this.getExchangeRates();
    },
    computed: {
      exchangeRateFromEuros: function () {
        const entries = Object.entries(this.exchangeRates);
        for (const [currency, rate] of entries) {
          if (currency === this.selectedCurrency) {
            const amount = this.amountToConvert * rate;
            return amount.toFixed(2);
          }
        }
      }
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
