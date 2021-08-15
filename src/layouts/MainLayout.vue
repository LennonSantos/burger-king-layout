<template>
  <q-layout view="lHh Lpr lFf" class="bg-fundo">
    <q-header
      :bordered="!($route.name === 'index')"
      :class="$route.name === 'index' ? 'bg-transparent' : 'bg-white text-black'"
    >
      <q-toolbar class="row reverse justify-between">
        <q-btn
          v-if="user"
          color="primary"
          @click="$router.push({ name: 'conta' })"
          flat dense
          :label="user.displayName"
          icon="person_outline"
        />
        <q-toolbar-title class="text-weight-light" style="font-size: 1.3em" v-if="$route.meta.pageName">
          {{ $route.meta.pageName }}
        </q-toolbar-title>
        <!-- <q-btn v-else label="5 fichas" no-caps color="white" text-color="black" unelevated icon="o_confirmation_number" /> -->
      </q-toolbar>
    </q-header>

    <q-footer>
      <q-separator color="grey-4" />
      <q-tabs
        v-model="tab"
        class="bg-secondary text-grey-7"
        indicator-color="transparent"
        active-color="primary"
        no-caps
      >
        <q-route-tab name="index" exact :to="{ name: 'index' }" icon="account_balance" label="Inicio" />
        <q-route-tab name="ganhadores" :to="{ name: 'ganhadores' }" exact icon="fas fa-medal" label="Ganhadores" />
        <q-route-tab name="apostas" :to="{ name: 'apostas' }" exact icon="o_article" label="Jogos" />
        <q-route-tab name="plus" :to={} exact icon="fas fa-ellipsis-h" label="Mais" @click="leftDrawerOpen = !leftDrawerOpen" />
      </q-tabs>
    </q-footer>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="row q-pa-md bg-grey-3"
    >
      <div class="col-12 self-start">
        Toda arrecadação é destinada ao ganhador...
        <q-btn @click="logout" flat color="primary" icon="whatsapp" label="Suporte" unelevated class="full-width q-mb-lg" />
      </div>

      <div class="col-12 self-end">
        <q-btn v-if="user" @click="logout" outline color="primary" icon="logout" label="sair" unelevated class="full-width" />
        <div v-else>
          <q-btn @click="$router.push({ name: 'login' })" color="primary" icon="login" label="login" unelevated class="full-width" />
          <div class="text-center q-my-md">ou</div>
          <q-btn @click="$router.push({ name: 'cadastro' })" outline color="primary" label="cadastre-se" unelevated class="full-width" />
        </div>
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

import { defineComponent, ref } from 'vue'
import { mapGetters } from 'vuex'

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
      tab: 'index'
    }
  },

  computed: {
    ...mapGetters({
      user: 'user/getUserData'
    })
  },

  methods: {
    logout () {
      this.$q.loading.show()

      this.$firebase.auth().signOut()
        .then(() => {
          this.$router.push({ name: 'login' })
          this.$q.notify('Você saiu.')
        }).catch(() => {
          this.$q.notify('Erro ao sair! Tente novamente.')
        })
        .then(() => {
          this.$q.loading.hide()
        })
    }
  }
})
</script>

<style scoped>
  .bg-fundo {
    background: url('~assets/logo.png') no-repeat center center;
    background-size: cover;
  }
</style>
