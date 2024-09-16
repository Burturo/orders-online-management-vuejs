<template>
    <div class="container card d-flex flex-md-row flex-column justify-content-center p-2 my-2" style="height: 80vh;">
    <div class="col-12 col-md-3 ">
      <div class="card card-img d-flex mx-auto shadow mt-5 py-4">
        <div class="d-flex flex-column mx-auto">
          <img class="img-add-employee" alt="" style="object-fit: cover;">
          <div class="row mt-3 ms-0">
            <button class="btn-upload-img">
              <i class="fa-solid fa-arrow-up-from-bracket me-2"></i>
              Upload
            </button>
            <input type="file"  style="display: none;"  accept="image/*">
          </div>
        </div>
      </div>
    </div>

    <div class="col-12 col-md-8 p-2 ms-4 position-relative">
      <div class="col-10 mb-2 border-0 mx-auto">
        <form class=" mb-2 border-2">
              <div class="border-bottom border-2 pb-3" >
                <div class="row g-2 mx-1">
                  <h4 class="title-header mb-0">Information personnel</h4>
                  <div class="row">
                    <div class="col-12">
                      <label for="fullname" class="form-label">Nom & Prénom</label>
                      <input type="text" class="form-control" id="fullname" required>
                    </div>
                    <div class="col-12">
                      <label for="email" class="form-label">Email</label>
                      <input type="Email" class="form-control" id="Email" required>
                    </div>

                    <div class="col-12">
                        <label for="sexe" class="form-label">Sexe</label>
                        <select id="Sexe" class="form-select" required>
                          <option selected>Choose...</option>
                          <option value="Celibataire">Masculin</option>
                          <option value="Marie">Feminin</option>
                        </select>
                    </div>
                  </div>

                </div>
              </div>
              <div class="d-flex justify-content-end">
                <button class="btn button-outline" style="margin-right: 20px;">Annuler</button>
                <button type="button" class="button" mat-button matStepperNext>Suivant</button>
              </div>

        </form>
      </div>
    </div>
  </div>
  </template>
  
  <script>
 
  export default {
    name: 'UserProfilView',
  }
  </script>
  
  <style scoped>
.card-img{
  border: 1px solid #BDCDC0 !important;
}
.img-add-employee{
    width: 170px;
    height: 170px;
    flex-shrink: 0;
    border-radius: 170px;
    background:  lightgray 50% / cover no-repeat;
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.25);
  }

  .btn-upload-img{
    width: 184px;
    height: 38px;
    border-radius: 14px;
    border: 0.5px solid #062909;
    background: aliceblue;
  }
  .btn-upload-img:hover{
    color:#062909;
    font-weight: 500;
    background: rgb(230, 242, 253) ;
  }

  .title-header{
    width: 482px;
  height: 34px;
  flex-shrink: 0;
  color: #062909;
  font-family: Raleway;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  }

  .orange-line {
    background-color: orange;
  }


 
  
  .line{
    border-style: solid;
    border-color: #888;
    display: flex;
    border-width: 2px;
    align-self: center;
    width: 100%;
  }
  .line.active{
    border-color: #f26722;
  }
  /* h2 {
    color: #333;
    border-bottom: 2px solid #f26722;
    padding-bottom: 5px;
    margin-bottom: 15px;
  } */

  label {
    display: block;
    margin-bottom: 5px;
    color: #555;
  }

  </style>