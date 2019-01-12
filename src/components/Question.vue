<template>
    <div :class="{filter: isFilter}" class="question fullscreen">
    <transition name="slide-fade" mode="out-in" appear>
      <div v-if="state == 'question'" class="content" key="question">
        <h2 class="light"> Frage {{ currentQuestion._id }} </h2>
        <h3 class="light"> {{ currentQuestion.question }} </h3>
        <p class="light">  {{ currentQuestion.description }} </p>
        <button @click="nextStep" class="light"> <span> START </span> </button>
      </div>
      <div v-if="state == 'answering'" class="content" key="question">
        <h2 class="light">Versuche mit dem Slider einzuschätzen vieviel jeder Deutsche am Tag wegwirft</h2>

        <transition name="fade" appear>
          <QuestionGUI :question_id=currentQuestion._id />
        </transition>

        <button @click="nextStep" class="light"> <span> WEITER </span> </button>
      </div>
      <div v-if="state == 'answer'" class="content" key="question">
        <h3 class="light"> {{ currentQuestion.answer.string }} </h3>
        <h4 class="light"> !!Deine Antwort: 400g!! </h4>

        <QuestionGUI :question_id=currentQuestion._id />

        <button @click="nextStep" class="light"> <span> WEITER </span> </button>
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
      question_id: String
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

      //Enables and disables B/W Filter
      if(currentState >= 0) { this.isFilter = true; } else { this.isFilter = false; }
    }
  }
}
</script>

<style lang="scss">
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>



