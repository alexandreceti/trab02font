<template>
  <div class="card" itemscope itemtype="http://schema.org/IndividualProduct" itemid="#product">
    <div class="card-image">
      <figure class="image is-4by3">
        <img itemprop="logo" :src="jogo.imgUrl" alt="Placeholder image">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        
        <div class="media-content">
          <p class="title is-4" itemprop="name">{{ jogo.name }}</p>
        </div>
      </div>

      <div class="content" itemprop="price">
        <strong>Preço:</strong> {{ formatPrice(jogo.preco) }}
        <br>
      </div>
    </div>
    <footer class="card-footer">
      <router-link :to="{ name: 'produto', params: {id: jogo._id} }" class="card-footer-item" itemprop="url">Detalhes</router-link>
      <router-link :to="{ name: 'produto', params: {id: jogo._id} }" class="card-footer-item" itemprop="url" >Comprar</router-link>
    </footer>
  </div>
</template>

<script>
export default {

  name: 'produto',
  props: {
    jogo: {}
  },
  data: function() {
    return {
      info: {},
    }
  },
  methods: {
    formatPrice(value) {
        let val = (value/1).toFixed(2).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    }
  }
}
</script>

<style>

</style>
