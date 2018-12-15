<template>
  <div class="container">
    <h1 class="is-size-1">Home</h1>
    <b-field>
      <b-input placeholder="Search..."
        type="search"
        icon="magnify"
        v-model="filtro">
      </b-input>
    </b-field>
  
    <div class="columns is-multiline">
      
      <div v-for="jogo in JogosComFiltro" :key="jogo._id" class="column is-3">
        <produto :jogo="jogo"/>
      </div>
      
    </div>
  </div>
</template>

<script>
import Jogos from '../Jogos'
import Produto from '../components/CartItem'

export default {
  components: {
    'produto' : Produto
  },
  name: 'home',
  props: {
    
  },
  data: function() {
    return {
      info: {},
      jogos: Jogos,
      filtro: ""
    }
  },
  created: function() {
    
  },
  computed: {
    JogosComFiltro() {
      if (this.filtro) {
        let exp = new RegExp(this.filtro.trim(), 'i')
        return this.jogos.filter(jogo => exp.test(jogo.name))
      } else {
        return this.jogos
      }
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
