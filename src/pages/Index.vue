<template>
  <q-page class="row content-end bg-lanche">
    <div class="row full-width">
      <div class="col-12 q-px-md">
        <q-card flat class="bg-white full-width">
          <q-card-section>
            <div class="row justify-between items-center">
              <div class="col" style="max-width: 40px">
                <q-icon name="done" color="positive" size="2em" />
              </div>
              <div class="col">
                <span class="text-weight-bolder" style="font-size: 17px">Presença Confirmada na Sessão</span>
                <div style="font-size: 15px">REUNIÃO ORDINÁRIA dia 18 (sábado) as 09:00h - Da Ordem dos trabalhos(ART. 51 DO R.I).)</div>
              </div>
            </div>
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
              <q-icon left size="3em" name="o_person" color="primary" class="no-margin" />
              <div class="text-black q-py-sm text-weight-light" style="font-size: 15px">Meu perfil</div>
            </q-btn>
          </div>
          <div class="col-4">
            <q-btn
              color="white"
              class="full-width"
              unelevated
              no-caps
            >
              <q-icon left size="3em" name="o_assignment" color="primary" class="no-margin" />
              <div class="text-black q-py-sm text-weight-light" style="font-size: 15px">&nbsp;Pauta&nbsp;</div>
            </q-btn>
          </div>
          <div class="col-4">
            <q-btn
              color="white"
              class="full-width"
              unelevated
              no-caps
            >
              <q-icon left size="3em" name="o_fact_check" color="primary" class="no-margin" />
              <div class="text-black q-py-sm text-weight-light" style="font-size: 15px">Meus Votos</div>
            </q-btn>
          </div>

          <div class="col-4">
            <q-btn
              color="white"
              class="full-width"
              unelevated
              no-caps
            >
              <q-icon left size="3em" name="o_recent_actors" color="primary" class="no-margin" />
              <div class="text-black q-py-sm text-weight-light" style="font-size: 15px">&nbsp;iDcard&nbsp;</div>
            </q-btn>
          </div>
          <div class="col-4">
            <q-btn
              color="white"
              class="full-width"
              unelevated
              no-caps
            >
              <q-icon left size="3em" name="o_book" color="primary" class="no-margin" />
              <div class="text-black q-py-sm text-weight-light" style="font-size: 15px">Documentos</div>
            </q-btn>
          </div>
          <div class="col-4">
            <q-btn
              color="white"
              class="full-width"
              unelevated
              no-caps
            >
              <q-icon left size="3em" name="o_notifications" color="primary" class="no-margin" />
              <div class="text-black q-py-sm text-weight-light" style="font-size: 15px">Notificações</div>
            </q-btn>
          </div>
        </div>
      </div>

      <div class="col-12">
        <q-btn
          label="Votação"
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
