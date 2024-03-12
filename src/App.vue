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
      <button class="btn btn-edit">Ajouter une enseignant</button>

<table>
    <thead>
        <tr>
            <th>ID</th>
            <th>Matricule</th>
            <th>nom</th>
            <th>tauxhoraire</th>
            <th>nombre heure</th>
            <th>action</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>2663</td>
            <td>faganios</td>
            <td>12h</td>
            <td>8h</td>
            <td>
                <button class="btn">Modifier</button>
                <button class="btn btn-delete">Supprimer</button>
            </td>
        </tr>
        <!-- <Modal/> -->
        <!-- Autres lignes de données -->
    </tbody>
</table>
</div>
      <!-- <Modal/> -->
</template>

<script>
// import Modal from './components/ModalComponent.vue'
export default {
  name: 'App',
  components: {
      // Modal
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
nav{
 display: flex;
 background-color: rgb(85, 166, 199);
 padding: 2px;
 box-sizing: border-box;
    /*justify-content: center;
  align-items: center; */
}
.enfant1,img{
    /* border: 1px black solid; */
    width: 80px;
    height: 80px;
    right: 10px;
    border-radius: 50%;
}
.enfant2{
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    /* padding: 10px; */
}
h1{
  /* top: -10px; */
  margin-top: 5px;
  color: white;
  font-size: 45px;
}
table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 20px;
}
th, td {
        padding: 8px;
        text-align: left;
        border-bottom: 1px solid #ddd;
}
th {
        background-color: #f2f2f2;
}
    .btn {
        padding: 10px 20px;
        background-color: #4CAF50;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    .btn-edit {
        background-color: #008CBA;
    }
    .btn-delete {
        background-color: #f44336;
    }
    #deuxieme{
      margin-top: 50px;
      padding: 10px;
    }
    td button{
      margin: auto 10px ;
    }
</style>
