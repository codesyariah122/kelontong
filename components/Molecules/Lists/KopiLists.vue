<template>
	<div class="container-fluid bg-trasparent my-4 p-3" style="position: relative">
		<div :class="`row ${kopilists.length > 4 || kopilists.length == 1 ? 'justify-content-left' : 'justify-content-center'} row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3`">

			<div v-for="kopi in kopilists" class="col hp">
				<div class="card h-100 shadow-sm">
					<a href="#">
						<img :src="kopi.image.url" class="card-img-top" alt="product.title" />
					</a>

					<div class="label-top shadow-sm">
						<a class="text-white" href="#">{{kopi.categories[0].name}}</a>
					</div>
					<div class="card-body">
						<div class="clearfix mb-3">
							<!-- <span class="float-start badge rounded-pill bg-success">{{kopi.price.formatted_with_code}}</span>

							<span class="float-right" style="font-size: 1rem;margin-top:.1rem;">
								{{kopi.price.raw > 50000 ? 'Cartoon' : 'Renceng'}}
							</span> -->
							<span class="float-start badge rounded-pill bg-success">
								Stock: {{kopi.inventory.available}}
							</span>
						</div>

						<div class="card-title">
							<h2>{{kopi.name}}</h2>
							<p class="text-truncate" v-html="kopi.description"></p>
						</div>

						<div class="d-grid gap-2 my-4">
							<a :href="kopi.checkout_url.display" target="_blank" class="btn btn-warning bold-btn">add to cart</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['kopilists']
	}
</script>