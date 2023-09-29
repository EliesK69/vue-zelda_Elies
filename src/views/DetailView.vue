<script setup>
import {onBeforeMount,ref} from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';

const API_ENDPOINT = 'https://metallo.ew.r.appspot.com/monsters/';

const localMonsters = ref([]);
const isLoaded = ref(false);

const route = useRoute();
const monsterId = route.params.id;
const myMonster = API_ENDPOINT + monsterId;

onBeforeMount(async ()=>{
  const monsters = await axios.get(myMonster)
  const {data,status} = monsters
  if(status===200){
    localMonsters.value = data
    isLoaded.value = true
    console.log(data)
  }else{
    console.error('DEAD')
  }
  console.log(monsters)
})
</script>

<template>
    <section data-bs-version="5.1" class="cid-sRQoPK3EDs" >
       <div class="container-fluid d-flex align-items-center justify-content-center">
            <div class="mx-auto">
                <div class="card border-primary mb-3" style="max-width: 32rem;">
                    <div class="card-header">{{localMonsters._id}}</div>
                    <img :src="localMonsters.image" alt="Generic placeholder image">
                    <div class="card-body text-primary">      
                        <h5 class="card-title">{{localMonsters.name}}</h5>
                        <p class="card-text">{{localMonsters.description}}</p>           
                        <ul class="list mt-2">
                            <li v-for="drop in localMonsters.drops" :key="drop">{{ drop }}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div> 
        
    </section>

</template>

<style scoped></style>