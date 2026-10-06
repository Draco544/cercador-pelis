<script setup>

    import { ref } from 'vue'
    import { buscar, buscarInfo } from '@/services/communicationManager'

    const cerca = ref('')
    const resultats = ref ([])
    const info = ref ([])

    async function ferCerca(){
        resultats.value = await buscar(cerca.value)
        
    }

    async function obtenirInfo(text){
        resultats.value = await buscarInfo(text.value)
        
    }



</script>

<template>
    <v-app id="inspire">
        <v-app-bar extended>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
            
            <v-text-field 
                label="Cerca una pel·lícula"
                v-model="cerca"
                @keyup.enter="ferCerca">
            </v-text-field>
            <v-btn
                icon="mdi-magnify"
                @click="ferCerca">
            </v-btn>
        </v-app-bar>

        <v-main>
            
            <v-container>
                <v-row>     
                   
                    <v-col
                        v-for="pelis in resultats"
                        :key="pelis.imdbID" 
                        cols="12"
                        md="4"  
                    >
                        <v-card height="500" class="pa-4">
                            <v-img height="300" :src="pelis.Poster"></v-img>
                            <h3>{{ pelis.Title }}</h3>

                            <p>{{ pelis.Year }}</p>
                            <v-btn @click="obtenirInfo(pelis.imdbID)">
                                mes info
                            </v-btn>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>