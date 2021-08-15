<template>
  <q-page class="bg-secondary">
    <div class="row bg-primary text-white q-col-gutter-md q-pa-md">
      <div class="col-12">
        <div class="text-h6">Campeonato Brasileiro 2021</div>
        <div>18º Rodada</div>
        <q-badge color="green-3" class="text-black" label="Estimativa de rateio R$ 500,00" />
      </div>
    </div> <!-- .row -->

    <div v-for="(jogo, index) in jogos" :key="index" class="row items-center q-pa-md">
      <div class="col-2">
        <q-btn
          @click="upDown(index, 'casa', 1)"
          label="+"
          dense outline unelevated
          color="primary"
          class="full-width"
        />
        <q-btn
        @click="upDown(index, 'casa', -1)"
          label="-"
          dense outline unelevated
          color="grey-6"
          class="full-width q-mt-xs"
        />
      </div>
      <div class="col-3 text-right">
        {{ jogo.casa }}
        <div class="text-h5">
          {{ jogo.gols.casa }}
        </div>
      </div>
      <div class="col-2 text-center">
        x
      </div>
      <div class="col-3 text-left">
        {{ jogo.fora }}
        <div class="text-h5">
          {{ jogo.gols.fora }}
        </div>
      </div>
      <div class="col-2">
        <q-btn
          @click="upDown(index, 'fora', 1)"
          label="+"
          dense outline unelevated
          color="primary"
          class="full-width"
        />
        <q-btn
        @click="upDown(index, 'fora', -1)"
          label="-"
          dense outline unelevated
          color="grey-6"
          class="full-width q-mt-xs"
        />
      </div>
      <div v-if="(index + 1) < jogos.length" class="col-12 q-pt-md">
        <q-separator />
      </div>

      <div class="col-12">
        <q-btn
          unelevated
          class="full-width q-mt-md"
          color="primary"
          label="Concluir jogo"
          @click="dialog = true"
        />
      </div>
    </div>

    <q-dialog v-model="dialog" position="bottom">
      <q-card flat class="q-ma-md rounded-borders">

        <q-card-section>
         <p class="text-h6">Lennon, você confirma seu jogo?</p>
         <div>Santos 1 x 0 Flamengo</div>
         <div>Santos 1 x 0 Flamengo</div>
         <div>Santos 1 x 0 Flamengo</div>
         <div>Santos 1 x 0 Flamengo</div>
         <div>Santos 1 x 0 Flamengo</div>
         <div>Santos 1 x 0 Flamengo</div>
        </q-card-section>
        <q-card-section>

          <q-btn
            unelevated
            color="primary"
            label="Confirmar"
            class="full-width"
          />

          <q-btn
            outline
            color="primary"
            label="Confirmar e Fazer novo jogo"
            class="full-width q-mt-md"
            rounded
          />

        </q-card-section>
      </q-card>
    </q-dialog>

  </q-page>
</template>

<script>
const jogos = [
  {
    id: 'xyz',
    casa: 'Santos',
    fora: 'Flamengo',
    gols: {
      casa: 0,
      fora: 0
    },
    status: 'aguardando'// aguardando, andamento, finalizado, cancelado
  }
]
export default {
  name: 'PageApostar',

  data () {
    return {
      text: 0,
      jogos: null,
      dialog: false
    }
  },

  methods: {
    upDown (index, field, value) {
      const gols = this.jogos[index].gols[field] += value

      this.jogos[index].gols[field] = gols >= 0 ? gols : 0
    }
  },

  mounted () {
    this.jogos = jogos
  }
}
</script>
