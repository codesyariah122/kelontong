<template>
	<div class="container-fluid bg-trasparent my-4 p-3" style="position: relative">
		<div :class="`row ${perawatans.length > 4 || perawatans.length == 1 ? 'justify-content-left' : 'justify-content-center'} row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3`">

			<div v-for="perawatan in perawatans" class="col hp">
				<div class="card h-100 shadow-sm">
					<a href="#">
						<img :src="perawatan.image.url" class="card-img-top" alt="product.title" />
					</a>

					<div class="label-top shadow-sm">
						<a class="text-white" href="#">{{perawatan.categories[0].name}}</a>
					</div>
					<div class="card-body">
						<div class="clearfix mb-3">
							<span class="float-start badge rounded-pill bg-success">{{perawatan.price.formatted_with_code}}</span>

							<span class="float-right" style="font-size: 1rem;margin-top:.1rem;">
								Cartoon
							</span>
						</div>

						<div class="card-title">
							<h2>{{perawatan.name}}</h2>
							<p class="text-truncate" v-html="perawatan.description"></p>
						</div>

						<div class="d-grid gap-2 my-4">
							<a href="#" class="btn btn-warning bold-btn">add to cart</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['perawatans']
	}
</script>