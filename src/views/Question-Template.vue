<template>
  <div :class="{filter: isFilter}" class="fullscreen">
    <transition name="fade" mode="out-in" appear>
      <Question :question_id=parseInt($route.params.question_id) :key=$route.params.question_id />
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


