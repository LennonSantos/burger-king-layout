<template>
  <q-page class="bg-secondary flex flex-center q-pa-xl">
    <q-form @submit.prevent="logar" class="full-width">
      <p class="text-center text-h6 q-py-md">Bem-vindo à Apostas Vale! <br> Sua diversão em um click</p>

      <q-input filled v-model="email" label="Email" type="email" class="q-py-sm" />
      <q-input filled v-model="password" label="Senha" type="password" />

      <q-btn color="primary" type="submit" label="Entrar" class="full-width q-my-sm" size="1.3em" unelevated />

      <q-btn @click="$router.push({ name: 'cadastro' })" label="Ou Cadastre-Se" color="primary" class="float-right" flat />
    </q-form>
  </q-page>
</template>

<script>
export default {
  name: 'PageLogin',

  data () {
    return {
      email: '',
      password: ''
    }
  },

  methods: {
    logar () {
      this.$q.loading.show()

      this.$firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then((userCredential) => {
          this.$router.push({ name: 'index' })
          this.$q.notify('Logado com sucesso!')
        })
        .catch(() => {
          this.$q.notify({ message: 'Erro ao logar! Verifique se o email e senha estão corretos.', color: 'negative' })
        })
        .then(() => {
          this.$q.loading.hide()
        })
    }
  }
}
</script>
