<template>
  <div class="row justify-content-center">
    <MoleculesListsKopiLists :kopilists="kopilists"/>

    <MoleculesListsKebutuhanRtLists :kebutuhans="kebutuhans"/>

    <MoleculesListsPerawatan :perawatans="perawatans"/>
  </div>
</template>

<script>
  export default {
    props: ['products', 'categories'],

    computed: {
      alllists(){
        return this.products.map(d => d)
      },
      kopilists(){
        const lists = this.products.map(d => d)
        const categories = this.categories.data.map(d => d)
        const kopi = lists.filter(d => d.categories[0].name == categories[4].name)
        return kopi
      },
      kebutuhans(){
        const lists = this.products.map(d => d)
        const categories = this.categories.data.map(d => d)
        const kebutuhan = lists.filter(d => d.categories[0].name == categories[3].name)
        return kebutuhan
      },
      perawatans(){
        const lists = this.products.map(d => d)
        const categories = this.categories.data.map(d => d)
        const perawatan = lists.filter(d => d.categories[0].name == categories[2].name)
        return perawatan
      },
      foods(){
        const lists = this.products.map(d => d)
        const categories = this.categories.data.map(d => d)
        const food = lists.filter(d => d.categories[0].name == categories[1].name)
        return food
      }
    }
  }
</script>