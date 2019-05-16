<template>

  <div class="hello">
     <section>
       
      
        <b-tabs v-model="activeTab">
            <b-tab-item label="Costos">
                   <div style="width: 700px; height: 700px;">
                  <canvas id="myChart"></canvas>
                   <input type="text" v-model="value">
    <button v-on:click="add">Agregar Valor</button>
                </div>
            </b-tab-item>

            <b-tab-item label="Ventas">
                 
             <b-tooltip  label="Agregar Registro" style="margin: 5px" position="is-right">
                                    <button class="button is-success" v-on:click="showModal('Arreglo')">
                                    <span class="icon">
                                        <b-icon icon="file-plus"  size="is-medium"> </b-icon>
                                    </span>Agregar Registro
                                    </button>
                                </b-tooltip>
                                <b-tooltip   label="Eliminar Registros" style="margin:5px" position="is-right">
                                    <button class="button is-danger" v-on:click="deleteRow('Ventas')">Eliminar Registros
                                    <span class="icon">
                                        <b-icon  icon="delete-forever" size="is-medium" >Eliminar registro </b-icon>
                                    </span>
                                    </button>
                                </b-tooltip>
                   
                  <b-table
                                    :data="Arreglo"
                                    :bordered="false"
                                    :striped="true">
                                        <template scope="prop">
                                              <b-table-column label="Eliminar" >
                                                <b-checkbox-button 
                                                    :native-value="prop.index"
                                                    type="is-danger">
                                                <b-icon style="margin-left: 3px;" icon="close">Eliminar</b-icon>
                                                </b-checkbox-button>
                                            </b-table-column>
                                            <b-table-column label="Mes" numeric>
                                                <b-tooltip label="Monto total" position="is-left">
                                                    <b-input  v-model="prop.row.Mes" ></b-input>
                                                   </b-tooltip>
                                            </b-table-column>
                                            <b-table-column label="Monto total" numeric>
                                                <b-tooltip label="Monto total" position="is-left">
                                                    <b-input  v-model="prop.row.Monto" ></b-input>
                                                   </b-tooltip>
                                            </b-table-column>
                                       </template>
                                    </b-table>

               <div style="width: 700px; height: 700px;">
    <canvas id="myChart2"></canvas>
    <button v-on:click="Chart2">Hola</button>
            </div>
            </b-tab-item>

            <b-tab-item label="Pastel">
                <b-table
                                    :data="Arreglo"
                                    :bordered="false"
                                    :striped="true">
                                        <template scope="prop">
                                              <b-table-column label="Eliminar" >
                                                <b-checkbox-button 
                                                    :native-value="prop.index"
                                                    type="is-danger">
                                                <b-icon style="margin-left: 3px;" icon="close">Eliminar</b-icon>
                                                </b-checkbox-button>
                                            </b-table-column>
                                            <b-table-column label="Mes" numeric>
                                                <b-tooltip label="Monto total" position="is-left">
                                                    <b-input  v-model="prop.row.Mes" ></b-input>
                                                   </b-tooltip>
                                            </b-table-column>
                                            <b-table-column label="Monto total" numeric>
                                                <b-tooltip label="Monto total" position="is-left">
                                                    <b-input  v-model="prop.row.Monto" ></b-input>
                                                   </b-tooltip>
                                            </b-table-column>
                                       </template>
                                    </b-table>


               <div style="width: 700px; height: 700px;">
    <canvas id="oilChart" width="600" height="400"></canvas>
    <button v-on:click="Pie">Hola</button>
            </div>
            </b-tab-item>

          
        </b-tabs>
    </section>
 
    
   
         <b-modal :active.sync="showModalArreglo" :width="640">
            <div class="card">
            <header class="modal-card-head">
                <p class="modal-card-title">Agregar Registro</p>
            </header>
            <section class="modal-card-body">
                <section class="modal-card-body">
                    <p class="modal-card-title" style="background-color:ghostwhite">Retención de intereses</p> <br>
                    <b-field label="Mes">
                        <b-input class="numberRight" v-model="newArreglo.Mes" placeholder="Mes"></b-input>
                    </b-field>
                    <b-field label="Monto">
                        <b-input class="numberRight" v-model="newArreglo.Monto" placeholder="Monto"></b-input>
                    </b-field>
                  
                </section>
            </section>
            <footer class="modal-card-foot">
                <button class="button" :disabled="false" v-on:click="addRowByArray('Ventas')">Guardar</button>
                <button class="button" type="button" v-on:click="showModalRetention=false">Cerrar</button>
            </footer>
            </div>
        </b-modal>

   
   
  </div>
  
</template>

<script>

import Chart from 'chart.js';
import { debuglog } from 'util';

export default {
  
  name: 'HelloWorld',
  data(){
    return{
      showModalArreglo: false,
        checkedVentas: [],
        Arreglo:[
          {Mes:"Enero",Monto:100},
          {Mes:"Febrero",Monto:200},
          {Mes:"Marzo",Monto:300}
        ],

        newArreglo: {
                Mes: '',
                
                Monto: 0
            },

    }
  },
  
  methods: {
       addRowByArray(arr){
            switch (arr) {
                case 'Ventas':
                debugger
                     this.Arreglo.push(this.newArreglo);
                     this.newArreglo = {
                         Mes: '',
                        
                        Monto:0,
                       
                    }
                    this.showModalArreglo = false;
                    break;
            
                case 'balance':
              
                    break;
            }
        },
  
    editRow(index, array) {
            this[array][index].canEdit = !this[array][index].canEdit;
        },
        addPropertyArray(array, propertyArray) {
            this[propertyArray] = [];
            
            this[array].forEach(element => {
                var object = {canEdit: false};

                this[propertyArray].push(object);
            });
        },
        showModal(table){   
            switch (table) {
                case 'Arreglo':
                        this.showModalArreglo=true;
                        this.newRetention.rtn=0;
                        this.newRetention.name='';
                        this.newRetention.withholdingBase=0;
                        this.newRetention.withholding=0;
                        this.newRetention.comment= '';
                                            
                    break;
                case 'balance':
                     
        
                                            
                    break;
                    
            
                default:
                    break;
            }           
            

        },
        deleteRow(tabName){
            debugger;
               switch (tabName) {
                    case "Ventas":
                        var lenDelete = this.checkedVentas.length - 1;
                        this.checkedVentas.sort((a,b)=>a-b);
                    break;
                    case "balance":
                       
                    break;
                    
                    default:
                    break;
                }

                if (lenDelete < 0) 
                {
                        this.snackbar(tabName);
                } 
                else {
                    this.$dialog.confirm({
                        title: "Borrar registros",
                        message: "Desea borrar estos registros?",
                        confirmText: "Ok",
                        type: "is-danger",
                        hasIcon: true,
                        onConfirm: () => {
                            
                                for (var index = lenDelete; index >= 0; index--) {
                                        switch (tabName) {
                                            case "Ventas":
                                                this.Arreglo.splice(parseInt(this.checkedVentas[index]), 1);
                                            case "balance":
                                              
                                            break;
                                            
                                            default:
                                            break;
                                        }
                            }
                            switch (tabName) {
                                case "Ventas":
                                    this.checkedVentas=[];
                                    break;
                                case "balance":
                                    
                                    break;
                                
                                default:
                                    break;
                                }
                            
                            }
                        });
                                
                    }
      
             },
        snackbar(tabName) {
            this.$snackbar.open('Debe seleccionar algun registro en ' + tabName +' para poder eliminar.')
        },
        enableActualRow: function(table,index){
            index = parseInt(index);  
            
            switch (table) {
                case 'Ventas':                                
                    this.Arreglo[index].canEdit = !this.Arreglo[index].canEdit;
                    this.calculateTotalsinterest(this.Arreglo);                       
                    break;

                 case 'balance':
                                               
                    this.balance[index].canEdit = !this.balance[index].canEdit;
                    this.totalBalance();
                    //this.calculateTotalsinterest(this.balance);                       
                    break;
                
            
                default:
                    break;
            }
            
        },
    Pie(){
   var oilCanvas = document.getElementById("oilChart");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;

var oilData = {
    labels: [
        "Saudi Arabia",
        "Russia",
        "Iraq",
        "United Arab Emirates",
        "Canada"
    ],
    datasets: [
        {
            data: [133.3, 86.2, 52.2, 51.2, 50.2],
            backgroundColor: [
                "#FF6384",
                "#63FF84",
                "#84FF63",
                "#8463FF",
                "#6384FF"
            ]
        }]
};

var pieChart = new Chart(oilCanvas, {
  type: 'pie',
  data: oilData
});
    },
    Chart2(){
      debugger
   var someJsonArray = this.Arreglo
let Montos = someJsonArray.map(function (obj) {
  return obj.Monto;
});
console.log(Montos);

let Meses = someJsonArray.map(function (obj) {
  return obj.Mes;
});
console.log(Meses);

         
    
    var ctx = document.getElementById('myChart2').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: Meses,
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: Montos
        }]
    },

    // Configuration options go here
    options: {}
});
debugger

    },

     clear_canvas_width ()
      {
          var s = document.getElementById ("myChart");
          var w = s.width;
          s.width = 10;
          s.width = w;
      },

    clear_canvas_rectangle ()
    {
        context.clearRect (0, 0, 300, 300);
    },
    deploy() {
      this.clear_canvas_width();
      var ctx = document.getElementById('myChart');

      var scope = this;

debugger
      
      var myChart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
              label: 'Costos del mes',
              data: scope.dataValues ,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
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
     Arreglo: {
      handler: function(val){
        this.Chart2();
         debugger
       },
       deep: true,
     }
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
