<template>
  <Question :question_id=currentQuestion :key=currentQuestion />
</template>

<script>
// @ is an alias to /src
import Question from '@/components/Question.vue'

export default {
  name: 'question-template',
  components: {
    Question
  },
  computed: {
    currentQuestion () {
      return this.$store.getters.currentQuestion;
    }
  }
}
</script>


