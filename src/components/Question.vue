<template>
  <div :class="{filter: isFilter}" class="fullscreen">
    <div v-if="state != 'question'">
      <transition name="fade" mode="out-in" appear>
        <QuestionGUI :question_id=currentQuestion._id :key=currentQuestion._id />
      </transition>
    </div>
    <transition name="slide-fade" mode="out-in" appear>    
      <div v-if="state == 'question'" class="content" key="question">
        <h2 class="light"> Frage {{ currentQuestion._id }} </h2>
        <h3 class="light"> {{ currentQuestion.question }} </h3>
        <p class="light">  {{ currentQuestion.description }} </p>
        <button @click="nextStep" class="light"> <span> START </span> </button>
      </div>
      <div v-if="state == 'answering'" class="content" key="answering">
        <h2 class="light">Versuche mit dem Slider einzuschätzen vieviel jeder Deutsche am Tag wegwirft</h2>


        <button @click="nextStep" class="light"> <span> WEITER </span> </button>
      </div>
      <div v-if="state == 'answer'" class="content" key="answer">
        <h3 class="light"> {{ currentQuestion.answer.string }} </h3>
        <h4 class="light"> !!Deine Antwort: 400g!! </h4>

        <button @click="endQuestion" class="light"> <span> NÄCHSTE FRAGE </span> </button>
      </div>      
    </transition>
  </div>
</template>

<script>
import QuestionGUI from '@/components/Question-GUI.vue'

export default {
  name: 'question',
  components: {
      QuestionGUI
  },
  props: {
      question_id: Number
  },
  data () {
    return {
      state: String,
      sequence: ['question', 'answering', 'answer'],
      isFilter: true,
      currentQuestion: Object
    }
  },
   mounted (){
    this.state = 'question';
    this.currentQuestion = this.$store.getters.questions[this.question_id];
  },
  computed: {
    questions(){
      return this.$store.getters.questions;
    }
  },
  methods: {
    nextStep: function() {
      console.log("Next Step 👍");
      let currentState = this.sequence.indexOf(this.state);
      this.state = this.sequence[currentState + 1];
    },
    endQuestion () {
        this.$store.commit('INCREMENT_CURRENT_QUESTION');
        this.$emit('question-finished');
    }
  }
}
</script>

<style lang="scss">
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
    transition-delay: 1.2s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>



