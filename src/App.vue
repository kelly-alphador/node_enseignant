<template>
      <nav>
        <div class="enfant1">
            <img src="./assets/image/4.png" alt="">
        </div>
        <div class="enfant2">
            <h1>Gestion d'enseignant</h1>
        </div>
    
      </nav>
<div id="deuxieme">
      <button class="btn btn-edit" @click="ToggleModallAdd">Ajouter une enseignant</button>

<table>
    <thead>
        <tr>
           
            <th>Matricule</th>
            <th>nom</th>
            <th>tauxhoraire</th>
            <th>nombre heure</th>
            <th>prestation</th>
            <th>action</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="(list,index) in list_enseignant" :key="index">
            <td>{{list.matricule}}</td>
            <td>{{list.nom}}</td>
            <td>{{list.taux_horaire}}</td>
            <td>{{list.nbr_heure}}</td>
            <td>{{list.prestation}}</td>
            <td>
                <button class="btn" @click="affiche_update(index)">Modifier</button>
                <button class="btn btn-delete" @click="DeleteTotal(index)">Supprimer</button>
            </td>
        </tr>
             
    </tbody>
</table>
        <div id="mere_card">
            <div class="card">
                <div class="card-header">
                    <h2 class="card-title">Total de prestation</h2>
                </div>
                <div class="card-body">
                    <p class="card-content">{{sum_prestation}}</p>
                </div>
            </div>
              <div class="card" id="card2">
                <div class="card-header">
                    <h2 class="card-title">Minimum de prestation</h2>
                </div>
                <div class="card-body">
                    <p class="card-content">{{min_prestation}}</p>
                </div>
            </div>
              <div class="card" id="card3">
                <div class="card-header">
                    <h2 class="card-title">maximum de prestation</h2>
                </div>
                <div class="card-body">
                    <p class="card-content">{{max_prestation}}</p>
                </div>
            </div>
        </div>

        <!-- **********************************************************************modal Add **********************-->
        <div v-if="showModalAdd">
            <Modal @close="ToggleModallAdd">
                <h2>modal ajout</h2>
                <input type="text" placeholder="matricule" v-model="enseignant.matricule">
                <br>
                <br>
                <input type="text" placeholder="nom" v-model="enseignant.nom">
                <br>
                <br>
                <input type="text" placeholder="Tauxhoraire" v-model="enseignant.taux_horaire">
                <br>
                <br>
                <input type="text" placeholder="nombre heure" v-model="enseignant.nbr_heure">
                <br>
                <br>
                <div class="add_annul">
                    <button class="btn btn-edit" @click="handleclickadd">ajouter</button>
                    <button  class="btn btn-edit">annuler</button>
                </div>
            </Modal>
          </div>
          <!-- ***********************modal Success ajout************************** -->
         <div v-if="showModalAddsucces">
            <Modal @close="ToggleModallAddsucces">
                <h2>Donner enregistrer avec succes</h2>
                <button class="btn btn-edit" @click="ToggleModallAddsucces">OK</button>
            </Modal>
          </div>
          <!-- ***********************modal Success Modif************************** -->
           <div v-if="showModalUpdateSucces">
            <Modal @close="ToggleModallUpdateSucces">
                <h2>Donner sauvegearder avec succes</h2>
                <button class="btn btn-edit" @click="fermer_succeUpdate_affichage">OK</button>
            </Modal>
          </div>
           <!-- ***********************modal Success suppre************************** -->
           <div v-if="showModalDeleteSucces">
            <Modal @close="ToggleModallDeleteSucces">
                <h2>Donner Supprimer avec succes</h2>
                <button class="btn btn-edit" @click="fermer_succe_affichage">OK</button>
            </Modal>
          </div>
          <!-- ***********************modal  suppre************************** -->
            <!-- <div v-if="showModalDelete">
            <Modal @close="ToggleModallDelete">
                <h2>vous etes sur de le Supprimer</h2>
                <div class="add_annul">
                    <button class="btn btn-edit" @click="handleclickDelet">oui</button>
                    <button  class="btn btn-edit"  @click="ToggleModallDelete">non</button>
                </div>
            </Modal>
          </div> -->
          <!-- ***********************modal Modif************************** -->
            <div v-if="showModalUpdate">
                <Modal @close="ToggleModallUpdate">
                <h2>modal Modifier</h2>
                <input type="text" placeholder="matricule" v-model="enseignant_modif.matricule">
                <br>
                <br>
                <input type="text" placeholder="nom" v-model="enseignant_modif.nom">
                <br>
                <br>
                <input type="text" placeholder="Tauxhoraire" v-model="enseignant_modif.taux_horaire">
                <br>
                <br>
                <input type="text" placeholder="nombre heure" v-model="enseignant_modif.nbr_heure">
                <br>
                <br>
                <div class="add_annul">
                    <button class="btn btn-edit" @click="handleclickUpdate">sauvegarder</button>
                    <button  class="btn btn-edit">annuler</button>
                </div>
                </Modal>
            </div>
 
</div>
      
</template>

<script>
import axios from 'axios'
import Modal from './components/ModalComponent.vue'

export default {
  name: 'App',
  components: {
      Modal
  },
  data(){
    return{
        showModalAdd:false,
        showModalUpdate:false,
        showModalAddsucces:false,
        showModalUpdateSucces:false,
        // showModalDelete:false,
        showModalDeleteSucces:false,
        list_enseignant:[],
        sum_prestation:'',
        min_prestation:'',
        max_prestation:'',
        enseignant:{
            matricule:'',
            nom:'',
            taux_horaire:'',
            nbr_heure:''
        },
        enseignant_modif:{
            matricule:'',
            nom:'',
            taux_horaire:'',
            nbr_heure:''
        }
    }
  },
  methods:{
        affichage(){
            axios.get('http://localhost:3000/users').
            then(response=>{this.list_enseignant=response.data})
            .catch(error=>{console.log(error)});
            this.affichage_max_prestation();
            this.affichage_min_prestation();
            this.affichage_somme_prestation();
        },
        addEnseignant(){
            console.log(this.enseignant.nom,this.enseignant.matricule,this.enseignant.taux_horaire,this.enseignant.nbr_heure);
            axios.post('http://localhost:3000/ajoutUser',{
                matricule:this.enseignant.matricule,
                nom:this.enseignant.nom,
                taux_horaire:this.enseignant.taux_horaire,
                nbr_heure:this.enseignant.nbr_heure
            }).then(response=>{console.log(response)})
            .catch(error=>console.log(error));
            this.enseignant.nom='',
            this.enseignant.matricule='',
            this.enseignant.taux_horaire='',
            this.enseignant.nbr_heure=''
        },
        affichage_somme_prestation(){
            axios.get('http://localhost:3000/sum_prestation').
            then(response=>{this.sum_prestation=response.data[0].total_prestation})
            .catch(error=>{console.log(error)})
        },
         affichage_min_prestation(){
            axios.get('http://localhost:3000/min_prestation').
            then(response=>{this.min_prestation=response.data[0].minimum_prestation})
            .catch(error=>{console.log(error)})
        },
        affichage_max_prestation(){
            axios.get('http://localhost:3000/max_prestation').
            then(response=>{this.max_prestation=response.data[0].maximum_prestation})
            .catch(error=>{console.log(error)})
        },
        affiche_update(index){
            this.modifier(index);
            this.ToggleModallUpdate();
        },
        fermer_succeUpdate_affichage(){
            this.affichage();
            this.ToggleModallUpdateSucces();
            
        },
           UpdateEnseignant(){
            axios.post('http://localhost:3000/update',{
                matricule:this.enseignant_modif.matricule,
                nom:this.enseignant_modif.nom,
                taux_horaire:this.enseignant_modif.taux_horaire,
                nbr_heure:this.enseignant_modif.nbr_heure
            }).then(response=>{console.log(response)})
            .catch(error=>console.log(error));
        },
        DeleteEnseignant(index){
                    const suppre = this.list_enseignant[index].matricule;
                    axios.post('http://localhost:3000/delete', {
                            matricule_delete: suppre
                        })
                        .then(response => {
                            console.log(response);
                            // this.affichage(); // Mettre à jour la liste après la suppression
                        })
                        .catch(erreur => console.log(erreur));
        },
        modifier(index) {
                    
            this.enseignant_modif.matricule = this.list_enseignant[index].matricule;
            this.enseignant_modif.nom= this.list_enseignant[index].nom;
            this.enseignant_modif.taux_horaire = this.list_enseignant[index].taux_horaire;
            this.enseignant_modif.nbr_heure=this.list_enseignant[index].nbr_heure;
        },
        
        handleclickadd(){
            this.addEnseignant();
              this.affichage();
            this.ToggleModallAdd();
            this.ToggleModallAddsucces();
          
        },
        handleclickUpdate()
        {
            this.UpdateEnseignant();
            this.affichage();
            this.ToggleModallUpdate();
            this.ToggleModallUpdateSucces();
        },
        DeleteTotal(index){
            this.DeleteEnseignant(index);
            this.affichage();
            this.ToggleModallDeleteSucces();
        },
        fermer_succe_affichage(){
            this.affichage(),
            this.ToggleModallDeleteSucces()
        },
        handleclickDelete()
        {
            this.ToggleModallDelete();
            this.ToggleModallDeleteSucces();
        },
        ToggleModallAdd(){
            this.showModalAdd=!this.showModalAdd
        },
         ToggleModallUpdate(){
            this.showModalUpdate=!this.showModalUpdate
        },
        ToggleModallAddsucces(){
            this.showModalAddsucces=!this.showModalAddsucces;
            this.affichage()
        },
        ToggleModallUpdateSucces(){
            this.showModalUpdateSucces=!this.showModalUpdateSucces
        },
        // ToggleModallDelete(){
        //     this.showModalDelete=!this.showModalDelete
        // },
        ToggleModallDeleteSucces(){
            this.showModalDeleteSucces=!this.showModalDeleteSucces
        }
    },
    mounted(){
        this.affichage()
        this.affichage_somme_prestation()   
        this.affichage_max_prestation()
        this.affichage_min_prestation()
    }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  margin-top: 60px;
}
.add_annul button{
    margin: auto 20px;
}
.card {
  width: 250px; /* Largeur de la carte */
  background-color: #fff; /* Couleur de fond de la carte */
  border-radius: 10px; /* Bordure arrondie */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Ombre */
    flex-basis: 30%; /* Ajustez la largeur des cartes selon vos besoins */
    /* margin-bottom: 20px; Espace entre les cartes
  height: 20px; */
}
#mere_card {
    margin-top: 20px;
    display: flex;
    justify-content: space-between; /* Ajustez selon vos besoins */
}

/* Style de l'en-tête de la carte */
.card-header {

  padding: 20px; /* Espacement intérieur */
  background-color:  #008CBA; /* Couleur de fond */
  border-top-left-radius: 10px; /* Arrondi uniquement sur le coin supérieur gauche */
  border-top-right-radius: 10px; /* Arrondi uniquement sur le coin supérieur droit */
}

/* Style du corps de la carte */
.card-body {
  padding: 5px; /* Espacement intérieur */
}

/* Style du titre dans l'en-tête de la carte */
.card-title {
  margin: 0; /* Supprimer les marges */
  font-size: 19px; /* Taille de la police */
  color: #fff; /* Couleur du texte */
}

/* Style du contenu dans le corps de la carte */
.card-content {
  color: #666; /* Couleur du texte */
  font-size: 16px; /* Taille de la police */
}
/* #mere_card{
    display: flex;
} */
</style>
