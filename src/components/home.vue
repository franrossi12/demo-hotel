<template>
    <v-container fluid>
        <v-slide-y-transition mode="out-in">
            <v-layout column align-center>
                <carrousel-3d  :controls-visible="true" :controls-color="'#ffffff;'"
                               :controls-width="30" :controls-height="60" :clickable="true" :width="600" :height="400">
                    <slide :index="0">
                        <figure>
                            <img src="@/assets/1.jpg" >
                            <figcaption>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel sagittis dolor. Nullam a massa at dolor tempor luctus in eu justo. Nulla eu venenatis nisl, eget sodales eros. Ut id massa quis felis mollis eleifend at vel nunc. Integer pretium nisi nec sapien blandit condimentum. Ut condimentum dictum faucibus. Curabitur vel magna lorem. Ut lacus orci, hendrerit vitae maximus ut, semper nec nunc. Suspendisse facilisis dapibus massa, eu aliquet turpis auctor nec.
                            </figcaption>
                            <router-link :to="{path: '/detalle/0'}"><v-btn color="info" dark>Comprar</v-btn></router-link>
                        </figure>
                    </slide>
                    <slide :index="1">
                        <figure>
                            <img src="@/assets/2.jpg" >
                            <figcaption>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel sagittis dolor. Nullam a massa at dolor tempor luctus in eu justo. Nulla eu venenatis nisl, eget sodales eros. Ut id massa quis felis mollis eleifend at vel nunc. Integer pretium nisi nec sapien blandit condimentum. Ut condimentum dictum faucibus. Curabitur vel magna lorem. Ut lacus orci, hendrerit vitae maximus ut, semper nec nunc. Suspendisse facilisis dapibus massa, eu aliquet turpis auctor nec.
                            </figcaption>
                            <router-link :to="{path: '/detalle/1'}"><v-btn color="info" dark>Comprar</v-btn></router-link>
                        </figure>
                    </slide>
                    <slide :index="2">
                        <figure>
                            <img src="@/assets/3.jpg" >
                            <figcaption>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel sagittis dolor. Nullam a massa at dolor tempor luctus in eu justo. Nulla eu venenatis nisl, eget sodales eros. Ut id massa quis felis mollis eleifend at vel nunc. Integer pretium nisi nec sapien blandit condimentum. Ut condimentum dictum faucibus. Curabitur vel magna lorem. Ut lacus orci, hendrerit vitae maximus ut, semper nec nunc. Suspendisse facilisis dapibus massa, eu aliquet turpis auctor nec.                            </figcaption>
                            <router-link :to="{path: '/detalle/2'}"><v-btn color="info" dark>Comprar</v-btn></router-link>

                        </figure>
                    </slide>
                </carrousel-3d>
            </v-layout>
        </v-slide-y-transition>
    </v-container>
</template>

<script>
  import {Carousel3d, Slide} from 'vue-carousel-3d'

  export default {
    components: {
      'carrousel-3d': Carousel3d,
      slide: Slide
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: white;
    }

    .carousel-3d-container figure {
        margin:0;
    }

    .carousel-3d-slide img {
       width: 100% !important;
        height: auto !important;
    }

    .carousel-3d-container button {
        position: relative;
        left: 76%;
        bottom: 400px;
    }

    .carousel-3d-container figcaption {
        position: absolute;
        background-color: rgba(0, 0, 0, 0.5);
        color: #fff;
        bottom: 0;
        position: absolute;
        bottom: 0;
        font-size: 12px;
        min-width: 100%;
        box-sizing: border-box;
    }

    @media only screen and (max-width: 768px) {
        /* For mobile phones: */
        .carousel-3d-container figcaption {
            font-size: 0.6em;
        }

        .carousel-3d-container button {
            position: relative;
            left: 56%;
            bottom: 15.8em;
        }
    }
</style>
