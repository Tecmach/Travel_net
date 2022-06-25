<template>
  <v-container fluid>
    
<table id='result'></table>

  </v-container>
</template>
<script
	src='https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js'></script>

<script>
$(function(){
	$.ajax({
		url : 'https://www.banxico.org.mx/SieAPIRest/service/v1/series/SP74665,SF61745,SF60634,SF43773/datos/oportuno?token=03d791fdb66842ab4cd25870e07fbd6a432f1bbe54213c84fb208e90dc566e02',
		jsonp : 'callback',
		dataType : 'jsonp', //Se utiliza JSONP para realizar la consulta cross-site
		success : function(response) {  //Handler de la respuesta
			var series=response.bmx.series;
			
			//Se carga una tabla con los registros obtenidos
			for (var i in series) {
				  var serie=series[i];
				  var reg='<tr><td>'+serie.titulo+'</td><td>'+serie.datos[0].fecha+'</td><td>'+serie.datos[0].dato+'</td></tr>'
				  $('#result').append(reg);
			}
		}
	});
});
</script>
<script>
export default {
  data: () => ({
    items: ["USD", "MXN"],
      currency_one: "MXN",
      currency_two: "USD",
      rate: "",
      amountOne: 1,
      amountTwo: 0,
  }),

  
  methods: {
    calculateResults() {
      fetch(
        `https://v6.exchangerate-api.com/v6/${"9809b1cec3fb53ce2b3f3f6a"}/latest/${
          this.currency_one
        }`
      )
        .then((res) => res.json())
        .then((data) => {
          this.data = data;
          this.rate = data.conversion_rates[this.currency_two];
          this.amountTwo = this.amountOne * this.rate.toFixed(2);
        });
    },

    switchValues() {
      const temp = this.currency_one;
      this.currency_one = this.currency_two;
      this.currency_two = temp;
      this.calculateResults();
    },
  },
  
  mounted() {
    this.calculateResults();
  },
};
</script>

<style>
	td {
		background-color: #E8E8E8;
		padding: 5px;
	}
	table { 
    	border-spacing: 5px;
    	border-collapse: separate;
	}
</style>