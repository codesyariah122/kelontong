<template>
	<div>
		<ProductHeaderSection/>
		<ProductListProduct :products="products" :categories="categories"/>
	</div>
</template>

<script>
  export default {
    name: 'ProductPage',
    layout: 'default',

    async asyncData({$commerce, $axios, $config}){
      const {data: products} = await $commerce.products.list()
      const categories = await $commerce.categories.list()

      return {
        products,
        categories
      }
    }
  }
</script>
