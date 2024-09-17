<template>
  <div class="card p-4" style="height: 80vh;border-radius: 14px;">
    <div class="row">
      <div class="d-flex justify-content-between">
        <div class="d-flex">
          <input type="text" class="form-control" id="search" placeholder="Recherche">
        </div>
        <div class="d-flex">
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i class="fa-solid fa-plus me-2"></i>Ajouter</button>
          
        </div>
      </div>
      <div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col"><input type="checkbox" class="form-check-input"/>
                N°<i class="bi bi-arrow-down-up ms-2 fs-6"></i></th>
              <th scope="col">Nom <i class="bi bi-arrow-down-up ms-2 fs-6"></i></th>
              <th scope="col">Description<i class="bi bi-arrow-down-up ms-2 fs-6"></i></th>
              <th scope="col" class="text-end pe-5">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row">
                <input type="checkbox" class="form-check-input"/>
                1
              </td>
              <td>Mark</td>
              <td>Otto</td>
              <td  style="gap: 10px;text-align: right;">
                <button class="action-btn detail" title="Details">
                  <i class="fa-regular fa-eye"></i>
                </button>
                <button class="action-btn edit" title="Modifier" >
                  <i class="fa-solid fa-pencil-alt"></i>
                </button>
                <button class="action-btn delete" title="Supprimer">
                  <i class="fa-solid fa-trash "></i>
                </button>
              </td>
            </tr>
            <tr>
              <td scope="row">
                <input type="checkbox" class="form-check-input"/>
                2
              </td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td  style="gap: 10px;text-align: right;">
                <button class="action-btn detail" title="Details">
                  <i class="fa-regular fa-eye"></i>
                </button>
                <button class="action-btn edit" title="Modifier" >
                  <i class="fa-solid fa-pencil-alt"></i>
                </button>
                <button class="action-btn delete" title="Supprimer">
                  <i class="fa-solid fa-trash "></i>
                </button>
              </td>
            </tr>
            <tr>
              <td scope="row">
                <input type="checkbox" class="form-check-input"/>
                3
              </td>
              <td colspan="2">Larry the Bird</td>
              <td  style="gap: 10px;text-align: right;">
                <button class="action-btn detail" title="Details">
                  <i class="fa-regular fa-eye"></i>
                </button>
                <button class="action-btn edit" title="Modifier" >
                  <i class="fa-solid fa-pencil-alt"></i>
                </button>
                <button class="action-btn delete" title="Supprimer">
                  <i class="fa-solid fa-trash "></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <!-- Create Modal -->
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Création d'une catégorie</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
              <label for="name" class="form-label">Nom :</label>
              <input type="text" class="form-control" id="name" placeholder="Entrez le nom de la catégorie">
            </div>
            <div class="mb-3">
              <label for="description" class="form-label">Description</label>
              <textarea class="form-control" id="description" rows="3"></textarea>
            </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-primary" data-bs-dismiss="modal">Annuler</button>
          <button type="button" class="btn btn-primary">Enregister</button>
      </div>
    </div>
  </div>
</div>
  </template>


  <script>
  export default {
    name: 'CategorieView',
  }
  </script>
  

  