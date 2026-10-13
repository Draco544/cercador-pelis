<script setup>

    import { ref } from 'vue'
    import { buscar, buscarInfo } from '@/services/communicationManager'

    const cerca = ref('')
    const resultats = ref ([])
    const info = ref ([])


    async function ferCerca(){
        resultats.value = await buscar(cerca.value)
        
    }

    async function obtenirInfo(id){
        info.value = await buscarInfo(id)
        console.log(info.genre)

    }

    async function neteja(){
        cerca.value = ''
        resultats.value = []
    
    }






</script>

<template>
    
        <v-main>
            
            <v-container>
                <v-div class="d-flex align-center g-2"> 
                    <v-text-field 
                        label="Cerca una pel·lícula"
                        v-model="cerca"
                        @keyup.enter="ferCerca">
                    </v-text-field>
                   
                </v-div>
                <v-btn
                    text="Cercar"
                    @click="ferCerca">
                </v-btn>
                <v-btn
                    text="neteja"
                   @click="neteja">
                </v-btn>

                <br>
                <br>
                <v-card v-if="!cerca">
                    <v-card-text>
                        Fes una cerca per buscar contingut
                    </v-card-text>
                </v-card>
                <v-row>     
                
                    <v-col
                        v-for="pelis in resultats"
                        :key="pelis.imdbID" 
                        cols="12"
                        md="4"  
                    >
                        <v-card height="500" class="pa-4  text-center" >
                            <v-card-title>
                                {{ pelis.Title }}
                            </v-card-title>
                            <br>
                            <v-img height="300" :src="pelis.Poster"></v-img>

                            <p>{{ pelis.Year }}</p>
                            
                            <v-dialog max-width="500">
                                <template v-slot:activator="{ props: activatorProps }">
                                    <v-btn
                                    @click="obtenirInfo(pelis.imdbID)"
                                    v-bind="activatorProps"
                                    color="surface-variant"
                                    text="mes info"
                                    variant="flat"
                                    ></v-btn>
                                </template>

                                <template v-slot:default="{ isActive }">
                                    <v-card>
                                        <v-card-title class="justify-center">
                                            {{ info?.Title }}
                                        </v-card-title>
                                        <br>
                                        <v-img height="300" :src="pelis.Poster"></v-img>
                                        <br>
                                        <v-card-text>
                                            <b>Runtime:</b> {{ info?.Runtime }}<br>
                                            <b>Genre:</b> {{ info?.Genre }}<br>
                                            <b>Director:</b> {{ info?.Director }}<br>
                                            <b>Writer:</b> {{ info?.Writer }}<br>
                                            <b>Actors:</b> {{ info?.Actors }}<br>
                                            <b>Plot:</b> {{ info?.Plot }}<br>
                                        </v-card-text>
                                        
                                        <b></b>
                                        <v-card-actions>
                                            <v-spacer></v-spacer>

                                            <v-btn
                                            text="Cerrrar"
                                            @click="isActive.value = false"
                                            ></v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </template>
                            </v-dialog>
                        
                            
                            
                          
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
</template>