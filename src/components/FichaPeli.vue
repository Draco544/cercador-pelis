<script setup>
    import { ref } from 'vue'
    import { buscarInfo } from '@/services/communicationManager'
    defineProps({
        pelis: {
            type: Object,
            required: true
        }
    })

    const info = ref ([])
    async function obtenirInfo(id){
        info.value = await buscarInfo(id)
        

    }
</script>



<template>
    <v-card
            class="pelicula"
            elevation="5"
            
        >

            <!-- BARRA SUPERIOR -->
            <div class="barra"></div>

            <!-- TÍTULO -->
            <v-card-title class="titol-pelicula">
                {{ pelis.Title }}
            </v-card-title>

            <!-- PÓSTER -->
            <v-img
                height="300"
                :src="pelis.Poster"
                contain
                class="poster"
            />

            <!-- AÑO -->
            <p class="any">
                {{ pelis.Year }}
            </p>


            <!-- ========================= -->
            <!-- V-DIALOG -->
            <!-- ========================= -->

            <v-dialog max-width="600">

                <!-- BOTÓN QUE ABRE EL DIALOG -->

                <template
                    v-slot:activator="{ props: activatorProps }"
                >

                    <v-btn
                        v-bind="activatorProps"
                        color="primary"
                        variant="flat"
                        class="mb-5"
                        @click="obtenirInfo(pelis.imdbID)"
                    >
                        Més info
                    </v-btn>

                </template>


                <!-- CONTENIDO DEL DIALOG -->

                <template v-slot:default="{ isActive }">

                    <v-card class="dialog">

                        <!-- TÍTULO -->

                        <v-card-title class="dialog-titol">

                            {{ info?.Title }}

                        </v-card-title>


                        <!-- POSTER -->

                        <v-img
                            height="350"
                            :src="info?.Poster || pelis.Poster"
                            contain
                        />


                        <!-- INFORMACIÓN -->

                        <v-card-text class="dialog-text">

                            <p>
                                <b>Runtime:</b>
                                {{ info?.Runtime }}
                            </p>

                            <p>
                                <b>Genre:</b>
                                {{ info?.Genre }}
                            </p>

                            <p>
                                <b>Director:</b>
                                {{ info?.Director }}
                            </p>

                            <p>
                                <b>Writer:</b>
                                {{ info?.Writer }}
                            </p>

                            <p>
                                <b>Actors:</b>
                                {{ info?.Actors }}
                            </p>

                            <p>
                                <b>Plot:</b>
                                {{ info?.Plot }}
                            </p>

                        </v-card-text>


                        <!-- BOTÓN CERRAR -->

                        <v-card-actions>

                            <v-spacer></v-spacer>

                            <v-btn
                                color="primary"
                                variant="flat"
                                @click="isActive.value = false"
                            >
                                Cerrar
                            </v-btn>

                        </v-card-actions>

                    </v-card>

                </template>

            </v-dialog>

        </v-card>



</template>

<style scoped>

/* =========================
   DIALOG
   ========================= */

.dialog {
    background: #123D4F !important;
    color: #EAFBFC !important;

    border: 1px solid #1797A7;
}


/* TÍTULO DEL DIALOG */

.dialog-titol {
    color: #20D5D8;

    font-size: 26px;
    font-weight: 700;

    text-align: center;
}


/* TEXTO DEL DIALOG */

.dialog-text {
    color: #D9F5F6;

    font-size: 16px;
}


/* NEGRITAS */

.dialog-text b {
    color: #20D5D8;
}


/* PÁRRAFOS */

.dialog-text p {
    margin-bottom: 10px;
}

.pagina {

    min-height: 100vh;

    background:
        radial-gradient(
            circle at top,
            #126377 0%,
            #0B2633 45%,
            #071B25 100%
        );

}


/* =========================
   TÍTULO
   ========================= */

.titol {

    color: #20D5D8;

    font-size: 40px;

    font-weight: 700;

    text-shadow:
        0 0 15px rgba(32, 213, 216, 0.35);

}


/* =========================
   BUSCADOR
   ========================= */

.buscador {

    display: flex;

    align-items: center;

    gap: 15px;

}


/* =========================
   BOTÓN CERCAR
   ========================= */

.boto-cercar {

    height: 56px;

}


/* =========================
   MENSAJE
   ========================= */

.missatge {

    background: #126377;

    color: #EAFBFC;

    border-left: 5px solid #20D5D8;

}


/* =========================
   TARJETAS
   ========================= */

.pelicula {

    background: #123D4F;

    color: #EAFBFC;

    border-radius: 12px;

    overflow: hidden;

    text-align: center;

    transition: all 0.25s ease;

    border: 1px solid rgba(
        32,
        213,
        216,
        0.15
    );

}


/* =========================
   HOVER TARJETA
   ========================= */

.pelicula:hover {

    transform: translateY(-7px);

    border-color: #20D5D8;

    box-shadow:
        0 10px 30px
        rgba(0, 0, 0, 0.45),

        0 0 15px
        rgba(32, 213, 216, 0.15);

}


/* =========================
   BARRA SUPERIOR
   ========================= */

.barra {

    height: 6px;

    background: linear-gradient(
        90deg,
        #126377,
        #1797A7,
        #20D5D8
    );

}


/* =========================
   TÍTULO PELÍCULA
   ========================= */

.titol-pelicula {

    color: #20D5D8;

    font-size: 21px;

    min-height: 70px;

    display: flex;

    align-items: center;

    justify-content: center;

}


/* =========================
   POSTER
   ========================= */

.poster {

    margin: auto;

}


/* =========================
   AÑO
   ========================= */

.any {

    color: #B8E9EB;

    font-size: 18px;

}


/* =========================
   INPUT
   ========================= */

:deep(.v-field) {

    background: #123D4F !important;

}


:deep(.v-field__input) {

    color: #EAFBFC !important;

}


:deep(.v-label) {

    color: #8ACFD3 !important;

}


/* =========================
   BOTONES
   ========================= */

:deep(.v-btn--variant-flat) {

    color: #071B25 !important;

    font-weight: 600;

}


/* =========================
   SCROLLBAR
   ========================= */

::-webkit-scrollbar {

    width: 8px;

}


::-webkit-scrollbar-track {

    background: #071B25;

}


::-webkit-scrollbar-thumb {

    background: #126377;

    border-radius: 10px;

}


::-webkit-scrollbar-thumb:hover {

    background: #20D5D8;

}

</style>