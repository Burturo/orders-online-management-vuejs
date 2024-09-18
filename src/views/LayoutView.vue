<template>
    <div>
      <div class="sidebar" id="side_nav">
        <div class="logo-details py-2">
          <i class="fa-solid fa-shop"></i>
          <span class="logo_name">Order Online</span>
          <i class="fa-solid ms-5 fa-xmark btn-ferme" type="button"></i>
        </div>
        <ul class="nav-links">
          <li class="item">
            <router-link to="/home/dashboard" class="nav-link nav-item-link" style="height: 50px;">
              <i class="fa-solid fa-house-chimney"></i>
              <span class="link_name">Tableau de bord</span>
            </router-link>
          </li>
          
          <li class="item">
            <div class="iocn-link">
              <a href="#">
                <i class="fa-solid fa-cart-shopping"></i>
                <span class="link_name">Commandes</span>
              </a>
              <i class="fa-solid fa-angle-down arrow"></i>
            </div>
            <ul class="sub-menu">
              <li>
                <a class="link_name title-hover titre border-bottom border-white mb-2" href="#">Commandes</a>
              </li>
              <li>
                <router-link to="/home/orders" class="nav-link">Liste des commandes</router-link>
              </li>
              <li>
                <router-link to="/home/add_order" class="nav-link">Passer une commande</router-link>
              </li>
            </ul>
          </li>
          <li class="item">
            <div class="iocn-link">
              <a href="#">
                <i class="fa-solid fa-store"></i>
                <span class="link_name">Produits</span>
              </a>
              <i class="fa-solid fa-angle-down arrow"></i>
            </div>
            <ul class="sub-menu">
              <li>
                <a class="link_name title-hover titre border-bottom border-white mb-2" href="#">Produits</a>
              </li>
              <li>
                <router-link to="/home/products" class="nav-link">Liste des produits</router-link>
              </li>
            </ul>
          </li>
          <li class="item">
            <div class="iocn-link">
              <a href="#">
                <i class="fa-solid fa-cubes"></i>
                <span class="link_name">Catégorie</span>
              </a>
              <i class="fa-solid fa-angle-down arrow"></i>
            </div>
            <ul class="sub-menu">
              <li>
                <a class="link_name title-hover titre border-bottom border-white mb-2" href="#">Catégorie</a>
              </li>
              <li>
                <router-link to="/home/categories" class="nav-link">Liste des catégories</router-link>
              </li>
            </ul>
          </li>
          <li class="item">
            <div class="iocn-link">
              <a href="#">
                <i class="fa-solid fa-users"></i>
                <span class="link_name">Users</span>
              </a>
              <i class="fa-solid fa-angle-down arrow"></i>
            </div>
            <ul class="sub-menu">
              <li>
                <a class="link_name title-hover titre border-bottom border-white mb-2" href="#">Users</a>
              </li>
              <li>
                <router-link to="/home/users" class="nav-link">Liste des utilisateurs</router-link>
              </li>
            </ul>
          </li>
          <li class="footer">
            <div class="footer-details">
              <a @click.prevent="logout">
                <div class="footer-content">
                  <img src="/images/box-arrow-right.svg" alt="footer">
                </div>
                <div class="name-job">
                  <div class="footer_name">Se déconnecter</div>
                </div>
              </a>
            </div>
          </li>
        </ul>
      </div>
      <div class="home-section">
        <nav class="navbar navbar-default navbar-expand-md other position-fixed shadow py-2">
          <div class="container-fluid">
            <div class="d-flex justify-content-between d-md-none d-block">
              <button class="btn px-1 py-0 open-btn me-2 side_btn" type="button"><i class="fa fa-stream"></i></button>
            </div>
            <button class="navbar-toggler p-0 border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <i class="fa-solid fa-angle-down rotate-icon"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <div class="d-flex justify-content-between align-items-center w-100">
                <div class="col d-flex align-items-center" style="gap: 8px;">
                  <i class="fa-solid fa-bars-staggered fa-bars fs-4"></i>
                  <h5 class="m-0" style="width: 200px;">{{ pageTitle }}</h5>
                </div>
                <div class="d-flex justify-content-end navbar-element px-1" style="gap: 18px;">
                  <div class="notification">
                    <i class="bi bi-bell fs-5"></i>
                  </div>
                  <div class="d-flex" style="gap: 8px;">
                    <i class="bi bi-person-circle fs-5"></i>
                    <router-link to="/home/profil"><label class="text-black fs-5">Burturo</label></router-link>
                    <i class="bi bi-chevron-down"></i>
                  </div>
                  <i class="bi bi-gear fs-5" type="button"></i>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div class="scroolAsignSubj h-100 px-4 pt-5 haut-rendbody">
          <div class="d-flex flex-column">
            <Arianfield></ArianField>
            <router-view />
          </div>
          
        </div>
      </div>
    </div>
  </template>
  
  <script>
import Arianfield from '@/components/arianfield.vue';


  export default {
  name: "LayoutView",
  components: {
    Arianfield
  },
  data() {
    return {
      pageTitle: 'Titre par défaut', // Titre par défaut si aucune route ne correspond
    };
  },
  mounted() {
    this.updateTitle(); // Met à jour le titre à l'initialisation

    // Ajoute un écouteur pour le changement de route
    this.$router.afterEach(() => {
      this.updateTitle();
      this.updateActiveMenu(); // Met à jour les éléments actifs lors du changement de route
    });

    // Met à jour l'élément actif à l'initialisation
    this.updateActiveMenu();

    // Charger le script SidebarTest.js
    const script = document.createElement('script');
    script.src = '/js/SidebarTest.js';
    script.async = true;
    document.body.appendChild(script);
  },
  methods: {
    updateTitle() {
      // Met à jour le titre selon le meta de la route active
      const currentRoute = this.$route;
      this.pageTitle = currentRoute.meta.title || 'Titre par défaut';
    },
    updateActiveMenu() {
      // Récupère le chemin de l'URL actuelle
      const navItems = document.querySelectorAll('.nav-links .item');
  const currentPath = window.location.pathname;

  // Parcourez chaque élément de navigation
  navItems.forEach(item => {
    // Essayez de sélectionner l'élément <a> enfant
    const routerLink = item.querySelector('a.nav-link');
    console.log('RouterLink:', routerLink); // Vérifiez si vous obtenez un élément

    if (routerLink) {
      const linkPath = routerLink.getAttribute('href'); // Obtenez la valeur de href
      console.log('LinkPath:', linkPath); // Vérifiez la valeur de linkPath

      if (currentPath === linkPath) {
        item.classList.add('active'); // Ajoutez la classe active si les chemins correspondent
      } else {
        item.classList.remove('active'); // Retirez la classe active sinon
      }
    }
  });
    },
    logout() {
      document.getElementById('logout-form').submit();
    }
  }
};


  </script>
  
  <style scoped>
  /* Vos styles ici */
  </style>