<template>
  <q-page class="row content-end bg-lanche">
    <div class="row full-width">
      <div class="col-12 q-px-md">
        <q-card flat class="bg-white full-width">
          <q-card-section>
            <div class="row justify-between items-center">
              <div class="col" style="max-width: 40px">
                <q-icon name="fas fa-crown" color="warning" size="2em" />
              </div>
              <div class="col">
                <span class="text-weight-bolder" style="font-size: 17px">Clube BK</span>
              </div>
              <div class="col text-right">
                <q-btn flat label="Ver mais" color="primary" class="text-bold" />
              </div>
            </div>
          </q-card-section>

          <q-card-section>
            <!-- <q-stepper
              v-model="step"
              ref="stepper"
              alternative-labels
              color="primary"
              animated
              flat
              class="bg-blue no-margin no-padding"
            >
              <q-step
                :name="1"
                title="Select"
                icon="settings"
                :done="step > 1"
              />

              <q-step
                :name="2"
                title="Create"
                icon="create_new_folder"
                :done="step > 2"
              />

              <q-step
                :name="3"
                title="an ad"
                icon="add_comment"
              />
            </q-stepper> -->
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
              <q-icon left size="3em" name="lunch_dining" color="primary" class="no-margin" />
              <div class="text-black q-py-sm text-weight-light" style="font-size: 15px">Cardapio</div>
            </q-btn>
          </div>
          <div class="col-4">
            <q-btn
              color="white"
              class="full-width"
              unelevated
              no-caps
            >
              <q-icon left size="3em" name="confirmation_number" color="primary" class="no-margin" />
              <div class="text-black q-py-sm text-weight-light" style="font-size: 15px">Cupons</div>
            </q-btn>
          </div>
          <div class="col-4">
            <q-btn
              color="white"
              class="full-width"
              unelevated
              no-caps
            >
              <q-icon left size="3em" name="restaurant_menu" color="primary" class="no-margin" />
              <div class="text-black q-py-sm text-weight-light" style="font-size: 15px">Restaurante</div>
            </q-btn>
          </div>
        </div>
      </div>

      <div class="col-12">
        <q-btn
          label="Comprar"
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
