<template>

    <section>
        <div class="block">
           
        </div>
      
        <b-tabs v-model="activeTab">
            <b-tab-item label="Productos">

                  <button @click="traerData" class="button is-warning">
                    <b-icon
                        pack="fas"
                        icon="sync-alt"
                        custom-class="fa-spin">
                    </b-icon>
                    <span>Refrescar</span>
                    </button>
             
                    <div style="width: 900px; height: 900px;">
                     <canvas id="Barras"></canvas>

                    </div>

            </b-tab-item >
            <b-tab-item label="Vendedores">
                     <button @click="TraerVendedor" class="button is-warning">
                    <b-icon
                        pack="fas"
                        icon="sync-alt"
                        custom-class="fa-spin">
                    </b-icon>
                    <span>Refrescar</span>
                    </button>
                <div style="width: 900px; height: 900px;">
                     <canvas id="Barras2"></canvas>

                    </div>

                      
           
            </b-tab-item>

            <b-tab-item label="Compras por Clientes">

                 <button @click="TraerCliente" class="button is-warning">
                    <b-icon
                        pack="fas"
                        icon="sync-alt"
                        custom-class="fa-spin">
                    </b-icon>
                    <span>Refrescar</span>
                    </button>

                <div style="width: 900px; height: 900px;">
                    <canvas id="oilChart"></canvas>
                 
               
            </div>
              
            </b-tab-item>

           
        </b-tabs>
    </section>
</template>

<script>
import * as mysql from 'mysql';
import { debuglog } from 'util';


export default {
     name: 'ventas',
  data(){
    return{
        Arreglo:[
          {Mes:"Enero",Monto:100},
          {Mes:"Febrero",Monto:200},
          {Mes:"Marzo",Monto:300}
        ],

        data: [],
        data2: [],
        vendedorData: [],
        clientData: [],

        Ventas:[
          {Producto:"Enero",Cantidad:100,Sucursal:"Chimaltenango",Fecha:"31/01/2019",Encargado:"Jorge"},
          {Producto:"Febrero",Cantidad:1000,Sucursal:"Chimaltenango",Fecha:"31/02/2019",Encargado:"Luis"},
        

            ]
        }
    
    },
    methods:{
        
        Barras2(){


                 var tab1 = this.vendedorData
            let NombreVendedor = tab1.map(function (obj) {
            return obj.NombreVendedor;
            });




            var tab2 = this.vendedorData
            let Metaventas = tab2.map(function (obj) {
            return obj.Metaventas;
            });

            var tab3 = this.vendedorData
            let VentaActual = tab2.map(function (obj) {
            return obj.VentaActual;
            });
                                    //Colores en las barras
                                        var r = Math.floor(Math.random() * 255);
                                        var g = Math.floor(Math.random() * 255);
                                        var b = Math.floor(Math.random() * 255);

                                        var r2 = Math.floor(Math.random() * 255);
                                        var g2= Math.floor(Math.random() * 255);
                                        var b2 = Math.floor(Math.random() * 255);
                                        
                                      



            var DataBarras = {
			labels: NombreVendedor,
			datasets: [{
				label: 'Meta de ventas',
				
				
                borderWidth: 1,
                 backgroundColor:[
                            "rgba("+r+","+g+","+b+", 0.4" + ")",
                            "rgba("+r+","+g+","+b+", 0.4" + ")",
                            "rgba("+r+","+g+","+b+", 0.4" + ")",
                            "rgba("+r+","+g+","+b+", 0.4" + ")",
                            "rgba("+r+","+g+","+b+", 0.4" + ")",
                            "rgba("+r+","+g+","+b+", 0.4" + ")",
                            "rgba("+r+","+g+","+b+", 0.4" + ")"
                            
                            
                        ],
                        borderColor: [
                            'rgba(54, 162, 235, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
				data:Metaventas
			}, {
				label: 'Venta Actual',
				
				
                borderWidth: 1,
                    backgroundColor: [
                            "rgba("+r2+","+g2+","+b2+", 0.2" + ")",
                            "rgba("+r2+","+g2+","+b2+", 0.2" + ")",
                            "rgba("+r2+","+g2+","+b2+", 0.2" + ")",
                            "rgba("+r2+","+g2+","+b2+", 0.2" + ")",
                            "rgba("+r2+","+g2+","+b2+", 0.2" + ")",
                            "rgba("+r2+","+g2+","+b2+", 0.2" + ")",
                            "rgba("+r2+","+g2+","+b2+", 0.2" + ")"
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
		
				data: VentaActual
			}]

		};


                var barChartData = {
			labels: ['Enero', 'February', 'March', 'April', 'May', 'June', 'July'],
			datasets: [{
				label: 'Dataset 1',
				
				
                borderWidth: 1,
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
				data: [
					1,2,3,4,5,6,7
				]
			}, {
				label: 'Dataset 2',
				
				
				borderWidth: 1,
				data: [
					8,9,10,11,12,13
				]
			}]

		};

                    var ctx = document.getElementById('Barras2');
                var scope = this;

                var myChart = new Chart(ctx, {
                    type: 'bar',
                    data:DataBarras,
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
          traerData(){
            
          this.$http.get('http://localhost:3000').then(response => {
              debugger
              this.data  = response.body
                
                this.Barras();
                }, error => {
                    console.log(error)
                // error callback
            })

       

        },

         TraerVendedor(){
            debugger
          this.$http.get('http://localhost:3000/Vendedor').then(response => {
              debugger
              this.vendedorData  = response.body
                
                this.Barras2();
                }, error => {
                    console.log(error)
                // error callback
            })

       

        },
        TraerCliente(){
            debugger
          this.$http.get('http://localhost:3000/Cliente').then(response => {
              debugger
              this.clientData  = response.body
                
                this.Pie();
                }, error => {
                    console.log(error)
                // error callback
            })

       

        },
          Barras() {
debugger
            var tab1 = this.data
            let Montos = tab1.map(function (obj) {
            return obj.CantidadPorUnidad;
            });

             var tab2 = this.data
            let Monto = tab1.map(function (obj) {
            return obj.NombreProducto;
            });
            
              
          
              debugger
              
     
                var ctx = document.getElementById('Barras');
                var scope = this;

                var myChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: Monto,
                        datasets: [{
                        label: 'Cantidad Productos Vendidos',
                        data: Montos ,
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


      
            Pie(){


                   var tab1 = this.clientData
                    let NombreCliente = tab1.map(function (obj) {
                    return obj.NombreCliente;
                    });

                    var tab2 = this.clientData
                    let Compras = tab1.map(function (obj) {
                    return obj.Compras;
                    }); 
                    var oilCanvas = document.getElementById("oilChart");

                    Chart.defaults.global.defaultFontFamily = "Lato";
                    Chart.defaults.global.defaultFontSize = 18;




                                           //Colores en las barras
                                        var r = Math.floor(Math.random() * 255);
                                        var g = Math.floor(Math.random() * 255);
                                        var b = Math.floor(Math.random() * 255);

                                        var r2 = Math.floor(Math.random() * 255);
                                        var g2= Math.floor(Math.random() * 255);
                                        var b2 = Math.floor(Math.random() * 255);

                                        var r3 = Math.floor(Math.random() * 255);
                                        var g3= Math.floor(Math.random() * 255);
                                        var b3 = Math.floor(Math.random() * 255);

                                        var r4 = Math.floor(Math.random() * 255);
                                        var g4= Math.floor(Math.random() * 255);
                                        var b4 = Math.floor(Math.random() * 255);

                                        var r5 = Math.floor(Math.random() * 255);
                                        var g5= Math.floor(Math.random() * 255);
                                        var b5 = Math.floor(Math.random() * 255);

                                        var r6 = Math.floor(Math.random() * 255);
                                        var g6= Math.floor(Math.random() * 255);
                                        var b6 = Math.floor(Math.random() * 255);
                                        
                                      

                    var oilData = {
                        labels: NombreCliente,
                        datasets: [
                            {
                                data:Compras,
                                backgroundColor: [
                                    "rgba("+r+","+g+","+b+", 0.4" + ")",
                                    "rgba("+r2+","+g2+","+b2+", 0.4" + ")",
                                    "rgba("+r3+","+g3+","+b3+", 0.4" + ")",
                                    "rgba("+r4+","+g4+","+b4+", 0.4" + ")",
                                    "rgba("+r5+","+g5+","+b5+", 0.4" + ")",
                                    "rgba("+r6+","+g6+","+b6+", 0.4" + ")"
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
            

    },




    },
    watch:{

    }
    
}
</script>
<style>

</style>

