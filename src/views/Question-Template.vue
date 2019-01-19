<template>
  <div :class="{filter: isFilter}" class="fullscreen" :style="'background-image: url(' +  question.background_image + ')'">
    <transition name="fade" mode="out-in" appear>
      <Question :question_id=parseInt($route.params.question_id) :key=$route.params.question_id />
    </transition>
  </div>
</template>

<script>
// @ is an alias to /src
import Question from '@/components/Question.vue'
import router from '@/router'

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
  mounted(){
    console.log()
  },
  computed: {
    question (){
      let id = parseInt(this.$route.params.question_id);
      return this.$store.getters.questions[id];
    },
    currentQuestion () {
      return this.$store.getters.currentQuestion;
    }
  }

}
</script>


