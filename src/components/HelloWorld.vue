<template>
  <div class="hello">
    <div style="width: 700px; height: 700px;">
      <canvas id="myChart"></canvas>
    </div>
    
    <input type="text" v-model="value">
    <button v-on:click="add">Agregar Valor</button>
  </div>
</template>

<script>

import Chart from 'chart.js';
import { debuglog } from 'util';

export default {
  name: 'HelloWorld',
  data: {
    red: 10,
    dataValues: [],
    value: '',
  },
  props: {
    msg: String
  },
  methods: {
    deploy() {
      var ctx = document.getElementById('myChart');
      //ctx.update()
      var scope = this;
      
      var myChart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
              label: '# of Votes',
              data: scope.dataValues ,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
            }]
          },
          options: {
              scales: {
                  yAxes: [{
                      ticks: {
                          beginAtZero: true
                      }
                  }]
              }
          }
      });
    },

    add(){
      this.dataValues = [];
     var data = this.value.split(',')
     data.forEach((val)=>{
        val = parseInt(val);
     });

     this.dataValues = data;
     this.deploy()
     debugger
    }
    
  },
  watch: {
    // red: {
    //   handler: function(val){
    //     this.data[1] = parseInt(val);
    //   },
    //   deep: true,
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
