<template>
    <div>
      <a href="#" class="square_btn" @click='buttonTitle'><slot></slot></a>
    </div>
</template>

<script>
  import { mapMutations } from 'vuex'
    export default {
        name: "ButtonCounter",
        props: {
          mode: String
        },
        methods: {
          ...mapMutations([
            'increments',
            'decrements'
          ]),
          buttonTitle(){
            this.$store.commit(this.mode)
          }
        }
    }
</script>

<style scoped>
  .square_btn{
    display: inline-block;
    padding: 0.5em 1em;
    text-decoration: none;
    background: #668ad8;/*ボタン色*/
    color: #FFF;
    border-bottom: solid 4px #627295;
    border-radius: 3px;
  }
  .square_btn:active {/*ボタンを押したとき*/
    -ms-transform: translateY(4px);
    -webkit-transform: translateY(4px);
    transform: translateY(4px);/*下に動く*/
    border-bottom: none;/*線を消す*/
  }

</style>
