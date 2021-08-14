<template>
  <q-page class="bg-secondary flex flex-center q-pa-xl">
    <q-form @submit.prevent="cadastro" class="full-width">
      <p class="text-center text-h6 q-py-md">Cadastre-se é simple e rápido!</p>

      <q-input filled v-model="email" label="Email" />
      <q-input filled v-model="displayName" label="Nome ou Apelido" class="q-py-sm" />
      <q-input filled v-model="password" label="Senha" type="password" />

      <q-btn color="primary" type="submit" label="Cadastrar" class="full-width q-my-sm" size="1.3em" unelevated />

      <q-btn @click="$router.push({ name: 'login' })" label="Ou Fazer login" color="primary" class="float-right" flat />
    </q-form>
  </q-page>
</template>

<script>
export default {
  name: 'PageCadastro',

  data () {
    return {
      email: 'lennonsbueno@gmail.com',
      displayName: 'Lennon',
      password: '123456'
    }
  },

  methods: {
    cadastro () {
      this.$q.loading.show()

      this.$firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then(async (userCredential) => {
          await userCredential.user.updateProfile({
            displayName: this.displayName
          })

          this.$router.push({ name: 'index' })
        })
        .catch(() => {
          this.$q.notify({ message: 'Erro ao cadastrar! Tente novamente.', color: 'negative' })
        })
        .then(() => {
          this.$q.loading.hide()
        })
    }
  }
}
</script>
