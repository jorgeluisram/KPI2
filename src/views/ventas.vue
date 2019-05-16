<template>

    <section>
        <div class="block">
           
        </div>
      <button class="button is-dark">
            <b-icon pack="bookmark-add-outline" icon="check"></b-icon>
            <span>Finish</span>
        </button>
        <b-tabs v-model="activeTab">
            <b-tab-item label="Ventas del mes">
                      
                 
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
                                    :data="Ventas"
                                    :bordered="false"
                                    :striped="true">
                                        <template scope="prop">
                                              <b-table-column label="Eliminar" >
                                                <b-checkbox-button 
                                                    :native-value="prop.index"
                                                    type="is-danger">
                                                <b-icon style="margin-left:" icon="close">Eliminar</b-icon>
                                                </b-checkbox-button>
                                            </b-table-column>
                                            <b-table-column label="Producto" numeric>
                                                <b-tooltip label="Producto" position="is-left">
                                                    <b-input  v-model="prop.row.Producto" ></b-input>
                                                   </b-tooltip>
                                            </b-table-column>
                                            <b-table-column label="Cantidad" numeric>
                                                <b-tooltip label="Monto total" position="is-left">
                                                    <b-input  v-model="prop.row.Cantidad" ></b-input>
                                                   </b-tooltip>
                                            </b-table-column>
                                            <b-table-column label="Sucursal" >
                                                <b-tooltip label="Sucursal" position="is-left">
                                                    <b-input  v-model="prop.row.Sucursal" ></b-input>
                                                   </b-tooltip>
                                            </b-table-column>
                                            <b-table-column label="Fecha" >
                                                <b-tooltip label="Fecha" position="is-left">
                                                    <b-input  v-model="prop.row.Fecha" ></b-input>
                                                   </b-tooltip>
                                            </b-table-column>
                                            <b-table-column label="Encargado" >
                                                <b-tooltip label="Encargado" position="is-left">
                                                    <b-input  v-model="prop.row.Encargado" ></b-input>
                                                   </b-tooltip>
                                            </b-table-column>
                                       </template>
                                    </b-table>

                 <div style="width: 700px; height: 700px;">
                    <canvas id="myChart2"></canvas>
                 <button v-on:click="Chart2">Hola</button>
                 
            </div>

            
      
            </b-tab-item>

            <b-tab-item label="Mas ventas por productos">

                <div style="width: 700px; height: 700px;">
                    <canvas id="oilChart"></canvas>
                 
                 <button v-on:click="Pie">Hola</button>
            </div>
              
            </b-tab-item>

            <b-tab-item :visible="showBooks" label="Books">
          
            </b-tab-item>

            <b-tab-item label="Videos" disabled>
           
            </b-tab-item>
        </b-tabs>
    </section>
</template>

<script>
import * as mysql from 'mysql';
export default {
     name: 'ventas',
  data(){
    return{
        Arreglo:[
          {Mes:"Enero",Monto:100},
          {Mes:"Febrero",Monto:200},
          {Mes:"Marzo",Monto:300}
        ],

        Ventas:[
          {Producto:"Enero",Cantidad:100,Sucursal:"Chimaltenango",Fecha:"31/01/2019",Encargado:"Jorge"},
          {Producto:"Febrero",Cantidad:1000,Sucursal:"Chimaltenango",Fecha:"31/02/2019",Encargado:"Luis"},
        

            ]
        }
    
    },
    methods:{
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




    },
    watch:{

    }
    
}
</script>
<style>

</style>

