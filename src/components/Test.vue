<template>
    <div>
      <h3>counter アプリ</h3>
      {{count}}
      <button-counter style="margin-top: 10px" mode="increments">increments</button-counter>
      <button-counter style="margin-top: 10px" mode="decrements">decrements</button-counter>
    </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { mapState} from 'vuex'
  import ButtonCounter from './moduls/ButtonCounter'
    export default {
        name: "Test",
      computed: {
        ...mapGetters([
            'squared'
        ]),
        ...mapState([
          'count'
        ])
      },
      components: {
          ButtonCounter
      }
    }
</script>

<style scoped>

</style>
