<template>
  <div class="d-flex mt-3">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <!-- Non-cliquable 'Home' -->
        <li class="breadcrumb-item active" aria-current="page">
          <i class="fa-solid fa-house-chimney me-2"></i>
        </li>
        <!-- Autres éléments du fil d'Ariane -->
        <li v-for="(crumb, index) in breadcrumbs" :key="index" class="breadcrumb-item">
          <router-link v-if="!crumb.active" :to="crumb.path">{{ crumb.name }}</router-link>
          <span v-else class="active" aria-current="page">{{ crumb.name }}</span>
        </li>
      </ol>
    </nav>
  </div>
</template>



<script>
export default {
  name: 'ArianfieldComponent',
  data() {
    return {
      breadcrumbs: [],
    };
  },
  watch: {
    $route: {
      immediate: true,
      handler() {
        this.updateBreadcrumbs();
      },
    },
  },
  methods: {
    updateBreadcrumbs() {
      const pathArray = this.$route.path.split('/').filter(segment => segment);
      
      const breadCrumbArray = pathArray.length > 0
        ? pathArray.map((segment, index) => {
            const path = '/' + pathArray.slice(0, index + 1).join('/');
            const name = segment.charAt(0).toUpperCase() + segment.slice(1);
            return {
              path,
              name,
              active: index === pathArray.length - 1,
            };
          })
        : []; // Pas de breadcrumbs si aucune route n'est définie au-delà de '/home'
      
      this.breadcrumbs = breadCrumbArray;
    },
  },
};
</script>


<style scoped>
.breadcrumb-item.active {
  color: #6c757d;
}
.breadcrumb-item a {
  color: #0d6efd;
}
</style>
