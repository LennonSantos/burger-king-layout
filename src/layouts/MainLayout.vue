<template>
  <q-layout view="lHh Lpr lFf">
    <q-footer>
      <q-tabs
        v-model="tab"
        class="bg-secondary text-grey-7"
        indicator-color="transparent"
        active-color="primary"
        no-caps
      >
        <q-tab name="mails" icon="fas fa-store" label="Inicio" />
        <q-tab name="alarms" icon="fas fa-crown" label="Clube BK" />
        <q-tab name="movies" icon="article" label="Pedidos" />
        <q-tab name="plus" icon="linear_scale" label="Mais" />
      </q-tabs>
    </q-footer>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-grey-3"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Essential Links
        </q-item-label>

      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  },

  data () {
    return {
      tab: 'mails'
    }
  }
})
</script>
