<template>
  <div class="d-flex flex-row" style="height: 80vh; border-radius: 14px;">
    <!-- Section des catégories -->
    <div class="col-8 card px-3 py-2" style="border-radius: 14px;">
      <div class="d-flex flex-column">
        <h5>Les catégories de produit</h5>
        <div class="card-parent">
          <!-- Liste des catégories avec v-for -->
          <div v-for="category in categories" :key="category.id"
            :class="['card-element', { 'selected': selectedCategories.includes(category.id) }]" style="width: 25%;"
            @click="toggleCategorySelection(category.id)">
            <div class="card-content d-flex align-items-center">
              <img :src="category.image" alt="Image de la catégorie" class="category-image me-2" />
              <span class="text-element">{{ category.name }}</span>
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
            <button class="btn btn-light" :class="{ 'd-none': selectedProducts.length === 0 }"
              @click="addSelectedProducts">
              <i class="fa-solid fa-plus me-2"></i>Ajouter
            </button>
          </div>
        </div>

        <div style="max-height: 44vh; overflow-y: auto;">
          <table class="table">
            <thead>
              <tr>
                <th scope="col"><input type="checkbox" class="form-check-input" @change="toggleSelectAllProducts"
                    :checked="allSelected" /> N°</th>
                <th scope="col">Libellé</th>
                <th scope="col">Prix</th>
                <th scope="col">Quantité</th>
                <th scope="col" class="text-end">Action</th>
              </tr>
            </thead>
            <tbody>
              <!-- Affichage des produits filtrés -->
              <tr v-for="(product, index) in filteredProducts" :key="product.id">
                <td><input type="checkbox" class="form-check-input" v-model="selectedProducts" :value="product" /> {{
                  index + 1 }}</td>
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
      <div class="d-flex flex-column justify-content-between h-100">
        <div class="d-flex flex-column" style="height: 72vh;">
          <div class="d-flex flex-column p-2" style="border-radius: 14px 14px 0 0;background: #DCE7FF;font-size: 14px;">
            <div class="d-flex align-items-center">
              <i class="bi bi-cart3 fs-4 me-2"></i>
              <h5>Liste des produits</h5>
            </div>
            <label>Produits sélectionnés :</label>
          </div>
          <div class="d-flex flex-column content-panier" style="overflow-y: auto;scrollbar-width: none;">
            <ul class="px-2 pt-2">
              <li v-for="(product) in selectedProductsList" :key="product.id" class="d-flex align-items-center justify-content-between mb-2 border border-bottom" style="border-radius: 10px;">
                <div class="d-flex">
                  <img :src="product.image" alt="Image du produit" class="product-image me-2"
                    style="width: 50px; height: 50px;border-radius: 10px 0px 0px 10px;object-fit: fill;" />
                  <!-- Détails du produit -->
                   <div class="d-flex flex-column">
                    <span class="me-2">{{ product.name }}</span>
                    <span class="me-2">{{ product.price }}€</span>
                   </div>
                  
                </div>
                <div class="d-flex">
                  <input type="number" v-model="product.selectedQuantity" min="1" class="form-control-num me-2"
                    style="width: 70px !important;" />
                  <button class="btn btn-sm btn-danger" @click="removeProduct(product)">
                    <i class="fa-solid fa-trash"></i>
                  </button>
                </div>

              </li>
            </ul>
          </div>

        </div>
        <div class="d-flex flex-column py-2">
          <div class="d-flex justify-content-between align-items-center px-2 mb-2">
            <label>Total :</label>
            <h5 class="mb-0 text-primary fw-bold">{{ totalPrice }} €</h5>
          </div>
          <div class="d-flex ">
            <button class="btn btn-outline-primary w-100 ms-1">Annuler</button>
            <button class="btn btn-primary w-100">Valider</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlaceAnOrder',
  data() {
    return {
      categories: [
        { id: 1, name: 'Électronique', image: '/images/17.jpeg' },
        { id: 2, name: 'Vêtements', image: '/images/18.jpeg' },
        { id: 3, name: 'Alimentation', image: '/images/19.jpeg' },
        { id: 4, name: 'Maison', image: '/images/24.jpeg' },
        { id: 5, name: 'Loisirs', image: '/images/21.jpeg' },
        { id: 6, name: 'Livres', image: '/images/22.jpeg' },
        { id: 7, name: 'Jouets', image: '/images/23.jpeg' }
      ],
      products: [
        { id: 1, name: 'Télévision', price: 499.99, quantity: 10, image: '/images/16.jpeg', categoryId: 1 },
        { id: 2, name: 'Casque Bluetooth', price: 99.99, quantity: 15, image: '/images/15.jpeg', categoryId: 1 },
        { id: 3, name: 'T-shirt', price: 19.99, quantity: 30, image: '/images/14.png', categoryId: 2 },
        { id: 4, name: 'Pantalon', price: 49.99, quantity: 20, image: '/images/6.jpeg', categoryId: 2 },
        { id: 5, name: 'Pâtes', price: 2.99, quantity: 100, image: '/images/12.jpeg', categoryId: 3 },
        { id: 6, name: 'Chocolat', price: 1.99, quantity: 50, image: '/images/11.jpeg', categoryId: 3 },
        { id: 7, name: 'Lampadaire', price: 69.99, quantity: 8, image: '/images/10.png', categoryId: 4 },
        { id: 8, name: 'Chaise de bureau', price: 89.99, quantity: 5, image: '/images/9.jpeg', categoryId: 4 },
        { id: 9, name: 'Jeu vidéo', price: 59.99, quantity: 25, image: '/images/8.jpeg', categoryId: 5 },
        { id: 10, name: 'Roman', price: 14.99, quantity: 40, image: '/images/5.jpeg', categoryId: 6 },
        { id: 11, name: 'Peluche', price: 24.99, quantity: 12, image: '/images/6.jpg', categoryId: 7 }
      ],
      selectedCategories: [], // Catégories sélectionnées
      selectedProducts: [], // Produits sélectionnés via checkbox
      selectedProductsList: [], // Produits ajoutés dans la liste sélectionnée
      searchQuery: '', // Chaîne de recherche
      allSelected: false // État du checkbox principal
    };
  },
  computed: {
    // Filtrage des produits en fonction des catégories sélectionnées et du terme de recherche
    filteredProducts() {
      let filtered = this.products;

      if (this.selectedCategories.length > 0) {
        filtered = filtered.filter(product =>
          this.selectedCategories.includes(product.categoryId)
        );
      }

      if (this.searchQuery) {
        filtered = filtered.filter(product =>
          product.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          product.quantity.toString().includes(this.searchQuery) ||
          product.price.toString().includes(this.searchQuery)
        );
      }

      return filtered;
    },
    // Calcul du prix total des produits sélectionnés
    totalPrice() {
      return this.selectedProductsList.reduce((total, product) => {
        return total + product.price * product.selectedQuantity;
      }, 0).toFixed(2);
    }
  },
  methods: {
    // Gestion de la sélection/déselection de catégories
    toggleCategorySelection(categoryId) {
      const index = this.selectedCategories.indexOf(categoryId);
      if (index > -1) {
        this.selectedCategories.splice(index, 1);
      } else {
        this.selectedCategories.push(categoryId);
      }
    },
    // Ajout d'un produit dans la liste sélectionnée
    addProduct(product) {
      if (!this.selectedProductsList.some(p => p.id === product.id)) {
        this.selectedProductsList.push({
          ...product,
          selectedQuantity: 1 // Initialisation de la quantité sélectionnée à 1
        });
        this.products = this.products.filter(p => p.id !== product.id);
      }
    },
    // Suppression d'un produit de la liste sélectionnée
    removeProduct(product) {
      this.selectedProductsList = this.selectedProductsList.filter(p => p.id !== product.id);
      this.products.push(product); // Réajouter le produit dans la liste des produits disponibles
    },
    // Ajout de plusieurs produits sélectionnés via checkbox
    addSelectedProducts() {
      this.selectedProducts.forEach(product => {
        if (!this.selectedProductsList.some(p => p.id === product.id)) {
          this.addProduct(product);
        }
      });
      this.selectedProducts = []; // Réinitialiser les checkboxes après l'ajout
    },
    // Sélection/déselection de tous les produits affichés
    toggleSelectAllProducts() {
      this.allSelected = !this.allSelected;
      if (this.allSelected) {
        this.selectedProducts = [...this.filteredProducts];
      } else {
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
  justify-content: start;
  border: 1px solid #eee;
  border-radius: 25px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: background-color 0.3s ease;
  padding-left: 10px;
  padding-right: 10px;
}

.text-element {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 7.5vw;
}

.content-panier {
  height: 52vh;
}

@media (min-width : 1470px) {
  .text-element {
    max-width: 9vw;
  }

  .content-panier {
    height: 56vh;
  }
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
