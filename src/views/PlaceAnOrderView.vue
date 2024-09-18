<template>
  <div class="d-flex flex-row" style="height: 80vh; border-radius: 14px;">
    <!-- Section des catégories -->
    <div class="col-8 card px-3 py-2" style="border-radius: 14px;">
      <div class="d-flex flex-column">
        <h5>Les catégories de produit</h5>
        <div class="card-parent">
          <!-- Liste des catégories avec v-for -->
          <div
            v-for="category in categories"
            :key="category.id"
            :class="['card-element', { 'selected': selectedCategories.includes(category.id) }]"
            class="col-4 col-sm-4 col-md-4 col-xl-3 col-xxl-2"
            @click="toggleCategorySelection(category.id)"
          >
            <div class="card-content d-flex align-items-center">
              <img :src="category.image" alt="Image de la catégorie" class="category-image me-2" />
              <span>{{ category.name }}</span>
            </div>
          </div>
        </div>

        <h5 class="mt-3">Liste des produits</h5>
        <div class="d-flex justify-content-between mb-2">
          <div class="d-flex">
            <input type="text" class="form-control" v-model="searchQuery" placeholder="Recherche" />
          </div>
          <!-- Le bouton "Ajouter" affiché lorsque des produits sont sélectionnés -->
          <div class="d-flex">
            <button class="btn btn-light" :class="{ 'd-none': selectedProducts.length === 0 }" @click="addSelectedProducts">
              <i class="fa-solid fa-plus me-2"></i>Ajouter
            </button>
          </div>
        </div>

        <div style="max-height: 44vh; overflow-y: auto;">
          <table class="table">
            <thead>
              <tr>
                <th scope="col"><input type="checkbox" class="form-check-input" @change="toggleSelectAllProducts" :checked="allSelected" /> N°</th>
                <th scope="col">Libellé</th>
                <th scope="col">Prix</th>
                <th scope="col">Quantité</th>
                <th scope="col" class="text-end">Action</th>
              </tr>
            </thead>
            <tbody>
              <!-- Affichage des produits filtrés -->
              <tr v-for="(product, index) in filteredProducts" :key="product.id">
                <td><input type="checkbox" class="form-check-input" v-model="selectedProducts" :value="product" /> {{ index + 1 }}</td>
                <td>{{ product.name }}</td>
                <td>{{ product.price }}</td>
                <td>{{ product.quantity }}</td>
                <!-- Checkbox pour sélectionner un produit -->
                <!-- Le bouton Ajouter pour chaque produit -->
                <td class="text-end">
                  <button class="btn-sm btn-light" @click="addProduct(product)" title="Ajouter">
                    <i class="fa-solid fa-plus"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Section des produits sélectionnés -->
    <div class="col-4 card ms-2" style="border-radius: 14px;">
      <h5>Produits sélectionnés :</h5>
      <ul>
        <li v-for="product in selectedProductsList" :key="product.id">
          {{ product.name }} - {{ product.price }}€
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlaceAnOrder',
  data() {
    return {
      categories: [
        { id: 1, name: 'Électronique', image: 'https://via.placeholder.com/50' },
        { id: 2, name: 'Vêtements', image: 'https://via.placeholder.com/50' },
        { id: 3, name: 'Alimentation', image: 'https://via.placeholder.com/50' },
        { id: 4, name: 'Maison', image: 'https://via.placeholder.com/50' },
        { id: 5, name: 'Loisirs', image: 'https://via.placeholder.com/50' },
        { id: 6, name: 'Livres', image: 'https://via.placeholder.com/50' },
        { id: 7, name: 'Jouets', image: 'https://via.placeholder.com/50' }
      ],
      products: [
        { id: 1, name: 'Télévision', price: 499.99, quantity: 10, categoryId: 1 },
        { id: 2, name: 'Casque Bluetooth', price: 99.99, quantity: 15, categoryId: 1 },
        { id: 3, name: 'T-shirt', price: 19.99, quantity: 30, categoryId: 2 },
        { id: 4, name: 'Pantalon', price: 49.99, quantity: 20, categoryId: 2 },
        { id: 5, name: 'Pâtes', price: 2.99, quantity: 100, categoryId: 3 },
        { id: 6, name: 'Chocolat', price: 1.99, quantity: 50, categoryId: 3 },
        { id: 7, name: 'Lampadaire', price: 69.99, quantity: 8, categoryId: 4 },
        { id: 8, name: 'Chaise de bureau', price: 89.99, quantity: 5, categoryId: 4 },
        { id: 9, name: 'Jeu vidéo', price: 59.99, quantity: 25, categoryId: 5 },
        { id: 10, name: 'Roman', price: 14.99, quantity: 40, categoryId: 6 },
        { id: 11, name: 'Peluche', price: 24.99, quantity: 12, categoryId: 7 }
      ],
      selectedCategories: [], // Catégories sélectionnées
      selectedProducts: [], // Produits sélectionnés via checkbox
      selectedProductsList: [], // Produits ajoutés dans la liste sélectionnée
      searchQuery: '', // Chaîne de recherche
      allSelected: false // État du checkbox principal
    };
  },
  computed: {
    filteredProducts() {
      let filtered = this.products;

      // Filtrer par catégorie
      if (this.selectedCategories.length > 0) {
        filtered = filtered.filter(product => 
          this.selectedCategories.includes(product.categoryId)
        );
      }

      // Recherche insensible à la casse
      if (this.searchQuery) {
        filtered = filtered.filter(product =>
          product.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          product.quantity.toString().includes(this.searchQuery) ||
          product.price.toString().includes(this.searchQuery)
        );
      }

      return filtered;
    }
  },
  methods: {
    // Basculer la sélection de la catégorie
    toggleCategorySelection(categoryId) {
      const index = this.selectedCategories.indexOf(categoryId);
      if (index > -1) {
        this.selectedCategories.splice(index, 1); // Désélectionner
      } else {
        this.selectedCategories.push(categoryId); // Sélectionner
      }
    },
    // Ajouter un produit sélectionné individuellement
    addProduct(product) {
      if (!this.selectedProductsList.includes(product)) {
        this.selectedProductsList.push(product);
      }
    },
    // Ajouter tous les produits sélectionnés (via checkbox)
    addSelectedProducts() {
      this.selectedProducts.forEach(product => {
        if (!this.selectedProductsList.includes(product)) {
          this.selectedProductsList.push(product);
        }
      });
      // Réinitialiser la sélection
      this.selectedProducts = [];
      this.allSelected = false; // Désélectionner le checkbox principal
    },
    // Basculer la sélection de tous les produits
    toggleSelectAllProducts(event) {
      this.allSelected = event.target.checked;
      if (this.allSelected) {
        // Sélectionner tous les produits filtrés
        this.selectedProducts = [...this.filteredProducts];
      } else {
        // Désélectionner tous les produits
        this.selectedProducts = [];
      }
    }
  }
};
</script>


<style scoped>
.card-parent {
  display: flex;
  overflow-x: auto;
  margin: 0;
  gap: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  white-space: nowrap;
  width: 100%;
  scrollbar-width: none;
}

.card-element {
  flex: 0 0 auto;
  height: 4.5em;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #eee;
  border-radius: 25px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.card-element:hover {
  background-color: #f0f0f0;
}

.card-element.selected {
  background-color: #DCE7FF;
  color: #0F366F;
  font-weight: 600;
  border: 1.5px solid #0F366F;
}

/* Style pour l'image et le contenu de la carte */
.card-content {
  display: flex;
  align-items: center;
}

.category-image {
  width: 2.5em;
  height: 2.5em;
  border-radius: 14px;
  object-fit: cover;
}
</style>
