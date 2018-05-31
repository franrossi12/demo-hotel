<template>
    <v-container fluid>
        <v-slide-y-transition mode="out-in">
            <v-layout column align-center>
            </v-layout>
        </v-slide-y-transition>
    </v-container>
</template>

<script>
  export default {
    mounted: function () {
      debugger
      alert(this.$route.params.id)
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
