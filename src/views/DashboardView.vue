<template>
    <div>
      <div class="d-flex flex-column px-4" style="height: 80vh;">
        <div class="d-flex flex-md-row flex-column justify-content-between mb-md-4 mb-0">
          <div class="col-md-4 col-12 mb-3 mb-md-0 card border-1 border-black shadow p-3 rounded">
            <div class="card-body">
              <h5 class="card-title">Nombre de produits</h5>
              <div class="text-end fs-5">
                200
              </div>
            </div>
          </div>
          <div class="col-md-4 col-12 mb-3 mb-md-0 card border-1 border-black shadow p-3 rounded">
            <div class="card-body">
              <h5 class="card-title">Nombre de commandes</h5>
              <div class="text-end fs-5">
                20
              </div>
            </div>
          </div>
          <div class="col-md-3 col-12 mb-3 mb-md-0 card border-1 border-black shadow p-3 rounded">
            <div class="card-body">
              <h5 class="card-title">Nombre d'utilisateur</h5>
              <div class="text-end fs-5">
                16
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex flex-md-row flex-column justify-content-between h-100">
          <div class="col-md-7 col-12 card border-1 border-black shadow p-3 rounded">
            <canvas id="myChart" style="width:100%;max-width:700px"></canvas>
          </div>
          <div class="col-md-4 col-12 mt-4 mt-md-0 card border-1 border-black shadow p-3 rounded">
            <div class="card-body">
              <h5 class="card-title border-2 border-bottom border-black">Notifications</h5>
              <div class="card-body">
                <h6 class="card-title">Non implémenté</h6>
                <p class="card-text"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import DashboardService from '../services/DashboardService';
  
  export default {
    name: 'DashboardView',
    data() {
      return {
        reporting: {}
      };
    },
    mounted() {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js';
        script.async = true;
        document.body.appendChild(script);
        
        script.onload = () => {
        // Code à exécuter après le chargement du script si nécessaire
        };
      
    },
    async created() {
      try {
        const response = await DashboardService.getDashboardData();
        this.reporting = response.data.reporting;
        this.renderChart();
        console.log(this.reporting);
      } catch (error) {
        console.error('Failed to fetch dashboard data', error);
      }
    },
    methods: {
      renderChart() {
        const resul_cour_env = this.reporting.totalCourseCount || 0;
        const resul_cour_rec = this.reporting.totalTravauxCount || 0;
  
        let totalCourriers = resul_cour_env + resul_cour_rec;
        if (totalCourriers % 2 !== 0) {
          totalCourriers += 1;
        }
  
        const xValues = ["Cours Envoyé", "Travaux Reçu"];
        const yValues = [resul_cour_env, resul_cour_rec];
        const barColors = ["#007716", "#FF7A00"];
  
        // eslint-disable-next-line no-undef
        new Chart(document.getElementById('myChart'), {
          type: 'bar',
          data: {
            labels: xValues,
            datasets: [{
              backgroundColor: barColors,
              data: yValues
            }]
          },
          options: {
            plugins: {
              legend: {
                display: false
              },
              title: {
                display: true,
                text: 'Statistique des courriers'
              }
            }
          }
        });
      }
    }
  }
  </script>
  
  <style scoped>
  /* Add your custom styles here */
  </style>
  