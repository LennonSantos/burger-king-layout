<template>
  <q-page class="bg-secondary">
    <div class="column items-center bg-primary q-pa-lg relative-position">
      <div class="col">
        <q-img
          v-if="user && user.photoURL"
          :src="user.photoURL"
        >
            <template v-slot:error>
            <div class="absolute-full flex flex-center bg-negative text-white">
              Cannot load image
            </div>
          </template>
        </q-img>
        <q-icon v-else name="account_circle" color="white" size="5em" />
      </div>

      <div class="col">
        <p class="q-mt-md text-h6 text-weight-regular text-uppercase text-white">
          {{ user.displayName }}
        </p>
      </div>

      <q-btn label="5 fichas" class="absolute-bottom-center q-ma-md" no-caps color="green-3" text-color="black" unelevated icon="o_confirmation_number" />
    </div>
    <div class="row q-col-gutter-md q-pa-md">
      <div class="col-4">
        <q-btn
          color="white"
          class="full-width"
          unelevated
          no-caps
        >
          <div class="column">
            <div class="col">
              <q-icon left size="3em" name="o_manage_accounts" color="primary" class="no-margin" />
            </div>
            <div class="col">
              <div class="text-black q-py-sm text-weight-light" style="font-size: 15px">Editar <br> Perfil</div>
            </div>
          </div>
        </q-btn>
      </div>

      <div class="col-4">
        <q-btn
          color="white"
          class="full-width"
          unelevated
          no-caps
        >
          <div class="column">
            <div class="col">
              <q-icon left size="3em" name="o_military_tech" color="primary" class="no-margin" />
            </div>
            <div class="col">
              <div class="text-black q-py-sm text-weight-light" style="font-size: 15px">Meus <br> Prêmios</div>
            </div>
          </div>
        </q-btn>
      </div>

      <div class="col-4">
        <q-btn
          color="white"
          class="full-width"
          unelevated
          no-caps
        >
          <div class="column">
            <div class="col">
              <q-icon left size="3em" name="o_confirmation_number" color="primary" class="no-margin" />
            </div>
            <div class="col">
              <div class="text-black q-py-sm text-weight-light" style="font-size: 15px">Comprar <br> Fichas</div>
            </div>
          </div>
        </q-btn>
      </div>
    </div> <!-- .row -->

    <q-banner class="text-black bg-grey-4 q-mx-md">
      Compatilhe seu código e <b>ganhe fichas grátis</b> para cada amigo que se cadastrar e comprar fichas.
      <template v-slot:action>
        <q-btn flat color="primary" label="Compartilhar" />
      </template>
    </q-banner>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'PageConta',

  computed: {
    ...mapGetters({
      user: 'user/getUserData'
    })
  }
}
</script>
