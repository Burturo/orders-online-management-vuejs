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
              <th scope="col">Nom & Prénom<i class="bi bi-arrow-down-up ms-2 fs-6"></i></th>
              <th scope="col">E-mail<i class="bi bi-arrow-down-up ms-2 fs-6"></i></th>
              <th scope="col">Rôle<i class="bi bi-arrow-down-up ms-2 fs-6"></i></th>
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
              <td>@mdo</td>
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
              <td>@fat</td>
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
              <td>@twitter</td>
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
          <h5 class="modal-title" id="staticBackdropLabel">Création d'un utilisateur</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
                <label for="name" class="form-label">Nom & Prénom :</label>
                <input type="text" class="form-control" id="name" placeholder="Entrez le nom et prénom">
              </div>
              <div class="mb-3">
                <label for="name" class="form-label">E-mail :</label>
                <input type="email" class="form-control" id="name" placeholder="Entrez l'e-mail">
              </div>
              <div class="mb-3">
                <label for="role" class="form-label">Rôle :</label>
                <select id="role" class="form-select" required>
                  <option selected>Sélectionnez un rôle...</option>
                  <option value="Client">Client</option>
                  <option value="Admin">Admin</option>
                </select>
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
    name: 'UsersView',
  }
  </script>
  