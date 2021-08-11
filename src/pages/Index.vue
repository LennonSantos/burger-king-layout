<template>
  <q-page class="row content-end bg-lanche">
    <div class="row full-width">
      <div class="col-12 q-px-md">
        <q-card flat class="bg-white full-width">
          <q-card-section>
            <div class="row justify-between items-center">
              <div class="col">
                <span class="text-weight-bolder" style="font-size: 17px">
                  18º rodada
                  <q-badge outline color="primary" label="Prêmio R$ 500,00" />
                </span>
              </div>
              <div class="col text-right">
                <q-btn flat label="Apostar agora" color="primary" class="text-bold" />
              </div>
            </div>
          </q-card-section>

          <!-- <q-separator/> -->

          <q-card-section>
            <q-linear-progress stripe size="25px" :value="0.5">
              <div class="absolute-full flex flex-center">
                <q-badge color="white" text-color="primary" label="1 dia para encerrar" />
              </div>
            </q-linear-progress>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-12">
        <div class="row q-col-gutter-md q-pa-md">
          <div class="col-4">
            <q-btn
              color="white"
              class="full-width"
              unelevated
              no-caps
            >
              <q-icon left size="3em" name="o_emoji_events" color="primary" class="no-margin" />
              <div class="text-black q-py-sm text-weight-light" style="font-size: 15px">Campeonatos</div>
            </q-btn>
          </div>
          <div class="col-4">
            <q-btn
              color="white"
              class="full-width"
              unelevated
              no-caps
            >
              <q-icon left size="3em" name="o_table_rows" color="primary" class="no-margin material-icons-outlined" />
              <div class="text-black q-py-sm text-weight-light" style="font-size: 15px">Tabelas</div>
            </q-btn>
          </div>
          <div class="col-4">
            <q-btn
              color="white"
              class="full-width"
              unelevated
              no-caps
            >
              <q-icon left size="3em" name="connected_tv" color="primary" class="no-margin" />
              <div class="text-black q-py-sm text-weight-light" style="font-size: 15px">Ao vivo</div>
            </q-btn>
          </div>
        </div>
      </div>

      <div class="col-12">
        <q-btn
          label="Apostar"
          color="primary"
          class="full-width text-h6 text-weight-bolder"
          style="border-radius: 0; border-top-left-radius: 20px; border-top-right-radius: 20px"
          unelevated
        />
      </div>
    </div> <!-- row -->
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'PageIndex',

  setup () {
    return {
      step: ref(1)
    }
  }
})
</script>

<style scoped>
  .bg-lanche {
    background: url('~assets/lanche.png') no-repeat;
    background-size: 100% 100%;
  }
</style>
