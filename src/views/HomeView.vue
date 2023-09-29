<script setup>
import { onBeforeMount, ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const API_ENDPOINTS = [
  'https://metallo.ew.r.appspot.com/monsters/651088132f75197b24892747',
  'https://metallo.ew.r.appspot.com/monsters/651088132f75197b2489274b',
  'https://metallo.ew.r.appspot.com/monsters/651088132f75197b2489274c'
];

const localMonsters = ref([]);
const isLoaded = ref(false);
const router = useRouter()

const goToDetail = (monsterId) =>{
  console.log("Hey clickage sur "+monsterId)
  router.push({name:'detail',
params:{id:monsterId},
})
}

onBeforeMount(async () => {
  try {
    const requests = API_ENDPOINTS.map(async (endpoint) => {
      const response = await axios.get(endpoint);
      return response.data;
    });

    const monstersData = await Promise.all(requests);
    
    localMonsters.value = monstersData;
    isLoaded.value = true;
  } catch (error) {
    console.error('Une erreur s\'est produite :', error);
  }
});

</script>

<template>

<section data-bs-version="5.1" class="features05 cid-sRQcud4Jjb" id="features05-2">
    <div class="container-fluid">
      <div class="wrapper">
        <div class="row title-section">
          <h2 class="mbr-section-title mbr-fonts-style display-2"><strong>Link ! Soit prudent !</strong></h2>
        </div>
        <div class="row justify-content-center">
          <div v-for="monster in localMonsters" :key="monster.id" class="col-12 col-md-4 mb-4">
            <div class="card">
              <img :src="monster.image" alt="" class="card-img-top">
              <div class="card-body">
                <h3 class="card-title mbr-section-subtitle mbr-fonts-style"><strong>{{ monster.name }}</strong></h3>
                <ul class="list mbr-fonts-style display-7">
                  <li v-for="drop in monster.drops" :key="drop">{{ drop }}</li>
                </ul>
                <div class="mbr-section-btn">
                  <a class="justify-content-center btn btn-primary display-4">
                    <button @click="goToDetail(monster._id)" type="button" class="btn btn-primary btn-sm m-0">Voir 👀</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


</template>

<style scoped></style>
