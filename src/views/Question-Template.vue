<template>
  <div :class="{filter: isFilter}" class="fullscreen">
    <transition name="fade" mode="out-in" appear>
      <Question :question_id=currentQuestion :key=currentQuestion />
    </transition>
  </div>
</template>

<script>
// @ is an alias to /src
import Question from '@/components/Question.vue'

export default {
  name: 'question-template',
  components: {
    Question
  },
  data() {
    return {
      isFilter: true
    }
  },
  computed: {
    currentQuestion () {
      return this.$store.getters.currentQuestion;
    }
  }

}
</script>


