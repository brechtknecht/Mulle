<template>
  <div :class="{filter: isFilter}" class="fullscreen">
    <transition name="fade" mode="out-in" appear>
      <h1>{{answers}}</h1>
    </transition>
  </div>
</template>

<script>
// @ is an alias to /src
import router from '@/router'

export default {
  name: 'evaluation',
  components: {

  },
  data() {
    return {
      isFilter: true
    }
  },
  computed: {
    answers () {
      return this.$store.getters.answers;
    }
  }

}
</script>


