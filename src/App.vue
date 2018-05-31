<template>
  <v-app dark>
    <!--<v-navigation-drawer-->
      <!--persistent-->
      <!--:mini-variant="miniVariant"-->
      <!--:clipped="false"-->
      <!--v-model="drawer"-->
      <!--enable-resize-watcher-->
      <!--app-->
    <!--&gt;-->
      <!--<v-list>-->
        <!--<v-list-tile-->
          <!--value="true"-->
          <!--v-for="(item, i) in items"-->
          <!--:key="i"-->
        <!--&gt;-->
          <!--<v-list-tile-action>-->
            <!--<v-icon v-html="item.icon"></v-icon>-->
          <!--</v-list-tile-action>-->
          <!--<v-list-tile-content>-->
            <!--<v-list-tile-title v-text="item.title"></v-list-tile-title>-->
          <!--</v-list-tile-content>-->
        <!--</v-list-tile>-->
      <!--</v-list>-->
    <!--</v-navigation-drawer>-->
    <v-toolbar
      app
      :clipped-left="false"
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
    </v-toolbar>

    <v-content>
      <div style="background-color: blue"></div>
      <router-view/>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire'
      }],
      miniVariant: false,
      right: false,
      rightDrawer: false,
      title: 'Demo-Hotel'
    }
  },
  name: 'App'
}
</script>
