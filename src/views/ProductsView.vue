<template>
  <div class="card p-4" style="height: 80vh;border-radius: 14px;">
    <div class="row">
      <div class="d-flex justify-content-between">
        <div class="d-flex">
          <input type="text" class="form-control" id="search" placeholder="Recherche">
        </div>
        <div class="d-flex">
          <button type="button" class="btn btn-primary"><i class="fa-solid fa-plus me-2"></i>Ajouter</button>
          
        </div>
      </div>
      <div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col"><input type="checkbox" class="form-check-input"/>
                N°<i class="bi bi-arrow-down-up ms-2 fs-6"></i></th>
              <th scope="col">First<i class="bi bi-arrow-down-up ms-2 fs-6"></i></th>
              <th scope="col">Last<i class="bi bi-arrow-down-up ms-2 fs-6"></i></th>
              <th scope="col">Handle<i class="bi bi-arrow-down-up ms-2 fs-6"></i></th>
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

  </template>


  <script>
  export default {
    name: 'ProductsView',
  }
  </script>
  
  
  