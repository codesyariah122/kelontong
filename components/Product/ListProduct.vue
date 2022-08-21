<template>
  <div>
    <section id="service" class="atf-service-area atf-section-padding our__product">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12 col-sm-12 first__col">
            <h1>Product List</h1>
            <h5>
              Dapatkan harga distributor terbaik di tempat kami <i class="fas fa-bullhorn"></i>
            </h5>
          </div>

          <div class="col-lg-12 col-sm-12 second__col">
            <div class="row">
              <!-- Real Product -->
              <div class="container mt-100">
                <MoleculesProductsLists :products="products" :categories="categories"/>
              </div>

              <!-- Sample Product -->
              <div class="container d-flex justify-content-center mt-100">  
                <!-- <MoleculesProductsSampleProduct/> -->
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    props: ['products', 'categories']
  }
</script>

<style lang="scss" scoped>
  .our__product {
    .first__col{
      h1{
        text-align: center;
        font-size: 3rem;
        font-family: 'Poppins';
        font-weight: 700;
      }
      h5 {
        font-size: 1rem;
        font-weight: 400;
        text-indent: 25px;
        text-align: justify;
        letter-spacing: .5px;
        word-spacing: .8px;
        font-family: 'Poppins';
        text-align: center;
        i{
          margin-left: -1rem;
        }
      }
    }

    .second__col {

    }
  }

  @media (min-width: 992px) {
    .our__product {
      .first__col{
        h1{
          text-align: center;
          font-size: 3rem;
          font-family: 'Poppins';
          font-weight: 700;
        }
        h5 {
          font-size: 1rem;
          font-weight: 400;
          text-indent: 25px;
          text-align: justify;
          letter-spacing: .5px;
          word-spacing: .8px;
          font-family: 'Poppins';
          text-align: center;
          i{
            margin-left: -1rem;
          }
        }
      }
    }
  }
</style>