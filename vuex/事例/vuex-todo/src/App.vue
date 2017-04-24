<template>
  <div id="app">
    <div class="mainbox m oh">
      <h1>{{title}}</h1>
      <InputBox />
      <List />
      <Foot />
    </div>
  </div>
</template>

<script>
  import InputBox from './components/InputBox.vue'
  import List from './components/List.vue'
  import Foot from './components/Foot.vue'
export default {
  name: 'app',
  data () {
    return {
      title: 'Vuex todo'
    }
  },
  components: {
    InputBox,
    List,
    Foot
  }
}
</script>

<style>
  @import "./assets/css/style.css";
</style>
