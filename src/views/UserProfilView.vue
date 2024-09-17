<template>
  <div class="container card d-flex flex-md-row flex-column justify-content-center p-2 my-2" style="height: 80vh;">
    <div class="col-md-2 col-12 ">
      <div class=" border-end" style="height: 92%;overflow-y: auto;scrollbar-width: none;">
        <div class="nav flex-md-column flex-row ms-4 me-4 nav-pills my-2" id="v-pills-tab" role="tablist"
          aria-orientation="vertical">

          <button class="col nav-link item active justify-content-between px-0" id="arc_0101-tab" data-bs-toggle="pill"
            data-bs-target="#arc_0101" type="button" role="tab" aria-controls="arc_0101" aria-selected="true">
            <i class="fa-solid fa-user me-2"></i>Mon profil
          </button>
          <button class="col nav-link item justify-content-between mx-0" id="arc_0102-tab" data-bs-toggle="pill"
            data-bs-target="#arc_0102" type="button" role="tab" aria-controls="arc_0102" aria-selected="false">
            <i class="fa-solid fa-shield-halved me-2"></i>Sécurité
          </button>
        </div>
      </div>


    </div>
    <div class="tab-content ps-4 pe-4 col-12 col-md-10 border-1" id="v-pills-tabContent">
      <div class="tab-pane tab-princ fade show active" id="arc_0101" role="tabpanel" aria-labelledby="arc_0101-tab">
        <!-- <div class="d-flex flex-md-row flex-column">
          <div class="col-12 col-md-3 ">
            <div class="card card-img d-flex mx-auto shadow mt-5 py-4">
              <div class="d-flex flex-column mx-auto">
                <img class="img-add-employee" alt="" style="object-fit: cover;">
                <div class="row mt-3 ms-0">
                  <button class="btn-upload-img">
                    <i class="fa-solid fa-arrow-up-from-bracket me-2"></i>
                    Upload
                  </button>
                  <input type="file" class="form-control" id="inputGroupFile01" style="display: none;" accept="image/*">
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-8 p-2 ms-4 position-relative">
            <div class="col-10 mb-2 border-0 mx-auto">
              <form class=" mb-2 border-2">
                <div class="border-bottom border-2 pb-3">
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
                  <button class="btn btn-outline-primary" style="margin-right: 20px;">Annuler</button>
                  <button type="button" class="btn-primary" mat-button matStepperNext>Suivant</button>
                </div>

              </form>
            </div>
          </div>
        </div> -->
        


        <div class="d-flex flex-column" style="overflow-y: auto;scrollbar-width: none;height: 72vh;">
  <div class="position-sticky sticky-top bg-white">
    <h4 id="SecurityTitle" class="fw-medium h-auto">Mon profile</h4>

  </div>
  <div id="profile" class="d-flex flex-row justify-content-between align-items-start">
    <div id="SousProfile">
      <div class="div-img-profil">
        <img id="profileImage" width="100%" height="100%" src="/images/img_profil.jpg" alt="profile picture">
      </div>
      <div id="ProfileInfo" class="d-flex flex-column justify-content-between">
        <h4>Burturo_@gmail.com</h4>
        <label class="SubName">Mahamane Iro</label>
        <label class="SubName">Bachir</label>
      </div>
    </div>
    <div>
      <button class="btn btn-outline-primary1">
        <span>Modifier</span>
        <i class="fa-solid fa-pen ms-2"></i>
      </button>
    </div>
  </div>

  <div id="personalInfo">
    <div id="PersonalInfoHeader">
      <h5>Information Personnelle</h5>
      <button class="btn btn-outline-primary1">
        <span>Modifier</span>
        <i class="fa-solid fa-pen ms-2"></i>
      </button>
    </div>

    <div class="ProfileRow">
      <div class="ProfileRowItem">
        <label class="ProfileRowItemTitle">Nom</label>
        <label class="ProfileRowItemValue">Garba Garba</label>
      </div>

      <div class="ProfileRowItem">
        <label class="ProfileRowItemTitle">Prenom</label>
        <label class="ProfileRowItemValue">Moustapha</label>
      </div>
    </div>

    <div class="ProfileRow">
      <div class="ProfileRowItem">
        <label class="ProfileRowItemTitle">Date de naissance</label>
        <label class="ProfileRowItemValue">01/01/2001</label>
      </div>

      <div class="ProfileRowItem">
        <label class="ProfileRowItemTitle">Lieu de naissance</label>
        <label class="ProfileRowItemValue">Madaoua</label>
      </div>
    </div>

    <div class="ProfileRow">
      <div class="ProfileRowItem">
        <label class="ProfileRowItemTitle">Genre</label>
        <label class="ProfileRowItemValue">Masculin</label>
      </div>

      <div class="ProfileRowItem">
        <label class="ProfileRowItemTitle">Situation matrimonial</label>
        <label class="ProfileRowItemValue">Celibataire</label>
      </div>
    </div>

  </div>

  <div id="personalInfo">
    <div id="PersonalInfoHeader">
      <h5>Adresse</h5>
      <button class="btn btn-outline-primary1">
        <span class="button-text">Modifier</span>
        <i class="fa-solid fa-pen ms-2"></i>
      </button>
    </div>

    <div class="ProfileRow">
      <div class="ProfileRowItem">
        <label class="ProfileRowItemTitle">Pays</label>
        <label class="ProfileRowItemValue">Niger</label>
      </div>

      <div class="ProfileRowItem">
        <label class="ProfileRowItemTitle">Ville</label>
        <label class="ProfileRowItemValue">Niamey</label>
      </div>
    </div>

    <div class="ProfileRow">
      <div class="ProfileRowItem">
        <label class="ProfileRowItemTitle">Code Postal</label>
        <label class="ProfileRowItemValue">01/01/2001</label>
      </div>
    </div>
  </div>

  <div id="personalInfo">
    <div id="PersonalInfoHeader">
      <h5>Contact</h5>
      <button class="btn btn-outline-primary1">
        <span class="button-text">Modifier</span>
        <i class="fa-solid fa-pen ms-2"></i>
      </button>
    </div>

    <div class="ProfileRow">
      <div class="ProfileRowItem">
        <label class="ProfileRowItemTitle">Telephone</label>
        <label class="ProfileRowItemValue">(+227) 90 00 00 00</label>
      </div>

      <div class="ProfileRowItem">
        <label class="ProfileRowItemTitle">E-mail</label>
        <label class="ProfileRowItemValue">buturo_@gmail.com</label>
      </div>
    </div>
  </div>
</div>

      </div>

      <div class="tab-pane tab-princ mx-auto fade" id="arc_0102" role="tabpanel" aria-labelledby="arc_0102-tab">
        <h4 id="SecurityTitle" class="fw-medium">Securité du compte</h4>
        <div class="card p-4" style="border-radius: 14px;">
          <div class="row g-3 col-9">
            
          
            <h6>Modifiez les paramètres de votre compte et changez votre mot de passe ici</h6>

            <div class="form-group mt-3">
                <label for="name" class="form-label">E-mail :</label>
                <div class="d-flex">
                  <input type="email" class="form-control" placeholder="Entrez le nouveau e-mail">
                  <button class="btn btn-outline-primary ms-2" style="width: auto;" id="ModifierMotDePasse"><i class="fa-solid fa-pen"></i></button>
                </div>
              </div>
              <div class="form-group mt-3">
                <label for="name" class="form-label">Mot de passe</label>
                <input type="password" class="form-control" placeholder="Entrez le mot de passe actuel">
                <input type="password" class="form-control mt-2" placeholder="Entrez le nouveau mot de passe">
                <input type="password" class="form-control mt-2" placeholder="Confirmer le mot de passe actuel">
              </div>

            

              <button class="btn btn-primary" style="width: auto;" id="ModifierMotDePasse">Modifier le mot de passe</button>
            </div>
        </div>
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
.card-img {
  border: 1px solid #BDCDC0 !important;
}

.img-add-employee {
  width: 170px;
  height: 170px;
  flex-shrink: 0;
  border-radius: 170px;
  background: lightgray 50% / cover no-repeat;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.25);
}

.btn-upload-img {
  width: 184px;
  height: 38px;
  border-radius: 14px;
  border: 0.5px solid #062909;
  background: aliceblue;
}

.btn-upload-img:hover {
  color: #062909;
  font-weight: 500;
  background: rgb(230, 242, 253);
}

.title-header {
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




.line {
  border-style: solid;
  border-color: #888;
  display: flex;
  border-width: 2px;
  align-self: center;
  width: 100%;
}

.line.active {
  border-color: #f26722;
}

/* h2 {
    color: #333;
    border-bottom: 2px solid #f26722;
    padding-bottom: 5px;
    margin-bottom: 15px;
  } */

.nav .nav-link.item{
    border-radius: 14px;
    background-color: #fff;
    color: #000;
    border: 2px solid #8c96ad;
    margin-bottom: 12px;
  }
  .nav .nav-link.item.active{
    background-color: #DCE7FF;
    color: #0F366F;
    font-weight: 500;
  }
  .nav .nav-link.item:hover{
    background-color: #DCE7FF;
    color: #0F366F;
    font-weight: 500;
  }
  /* ::before,::after,*{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
} */



#SecurityInfo{
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  border-radius: 10px;
  padding: 20px;
  width: 100%;
  border: 1px solid rgb(213, 210, 210);
  margin: 10px 0;
}


.SecurityProfileRowItem{
  margin-top: 10px;
  margin-bottom: 20px;
}


#ProfileTitle{
  margin: 20px 0;
}

#profile{
  /* display: flex;
  flex-direction: row;
  align-items: center;
  justify-content:space-between; */
  border-radius: 10px;
  padding: 20px;
  width: 100%;
  border: 1px solid rgb(213, 210, 210);
  margin: 10px 0;
}

#SousProfile{
  display: flex;
  flex-direction: row;
}

.SubName{
  font-weight:normal;
}


/*pour le 2 card*/

#personalInfo{
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  border-radius: 10px;
  padding: 20px;
  width: 100%;
  border: 1px solid rgb(213, 210, 210);
  margin: 10px 0;
}

#PersonalInfoHeader, .ProfileRow{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.ProfileRow{
  /* display: flex;
  flex-direction: row; */
  margin: 10px 0;
}


.ProfileRowItem{
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
  justify-content: start;
}

.ProfileRowItemTitle{
  color: gray;
  font-weight: normal;
}

.ProfileRowItemValue{
  font-weight: 500;
}
#profileImage{
  flex-shrink: 0 !important;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid rgb(213, 210, 210);

  width: 90px;
  height: 90px;
  flex-shrink: 0;
  background: lightgray 50% / cover no-repeat;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.25);
}
.div-img-profil{
  margin-right: 20px;
}

</style>