<template>
  <div>
    Formページ
    <HeadComp></HeadComp>
    <component :is="isComponent"></component>
    <button v-on:click="buttonAction">{{button}}</button>
  </div>
</template>

<script>
  import HeadComp from '../components/moduls/HeadComp'
  import TextareaComp from '../components/moduls/TextareaComp'
  import StringComp from '../components/moduls/StringComp'
  import { mapActions, mapGetters } from 'vuex'
  export default {
    name: 'form',
    components: {
      HeadComp,
      TextareaComp,
      StringComp
    },
    methods: mapActions('Form', {
      'buttonAction': 'buttonAction'
    }),
    computed: mapGetters('Form',{
      'button': 'getButton',
      'isComponent': 'getComponent'
    })
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
