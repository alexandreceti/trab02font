<template>
  <div class="container" itemscope itemtype="http://schema.org/IndividualProduct" itemid="#product">
    
    <h1 class="is-size-1">Produto</h1>
    
    <div class="columns">
      <div class="column is-one-third">
        <figure class="image is-4by5">
          <img itemprop="logo" :src="produto.imgUrl">
        </figure> 
      </div>
      <div class="column">
        <div class="columns is-multiline">
          <div class="column is-full">
            <h2 class="title" itemprop="name">Jogo: {{ produto.name}}</h2>
            <h2 class="title" itemprop="price">Preço: {{ formatPrice(produto.preco)}}</h2>
          </div>
          <div class="column is-full">
            <button class="button is-success is-outlined is-medium is-fullwidth">Comprar</button>
          </div>
        </div>
        
      </div>
      
    </div>
    <div class="columns">
      <div class="column is-one-third">
        <a class="button is-success is-outlined is-medium is-fullwidth" href="/">Voltar</a>
      </div>
    </div>
     
    
    
  </div>
</template>

<script>
import Jogos from '../Jogos'

export default {
  props: {
    id: String
  },
  data: () => {
    return {
      info: '',
      produto: {},
      jogos: Jogos,  
    }
  },
  methods: {
    formatPrice(value) {
        let val = (value/1).toFixed(2).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    }
  },
  created() {
    if (this.id) {
      this.jogos.map(jogo => {
        if (jogo._id === parseInt(this.id)) {
          this.produto = jogo
        }
      })
    }
  }

}
</script>


<style scoped>

</style>
