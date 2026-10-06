    import { ref } from 'vue'

    const cerca = ref('')
    const resultats = ref([])
    const url = `http://www.omdbapi.com/`
    const apiKey = `&apikey=e67e9b5`

    export async function buscar(text) {

        const urlConsulta = `${url}?s=${text}${apiKey}`
        const resposta = await fetch(urlConsulta)
        const dades = await resposta.json()
   

        return dades.Search
     
  
    }

    export async function buscarInfo(id) {

        const urlConsulta = `${url}?i=${id}${apiKey}`
        const resposta = await fetch(urlConsulta)
        const dades = await resposta.json()

        return dades
       
    }

