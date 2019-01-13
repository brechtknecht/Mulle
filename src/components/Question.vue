<template>
  <div>
    <transition name="fade-delay" mode="out-in" appear>
      <QuestionGUI v-if="state !== 'question'" :question_id=currentQuestion._id  @buttonTriggered="nextStep"/>
    </transition>
    <transition name="slide-fade" mode="out-in">    
      <div v-if="state == 'question'" class="content" key="question">
        <h2 class="light"> Frage {{ currentQuestion._id }} </h2>
        <h3 class="light"> {{ currentQuestion.question }} </h3>
        <p class="light">  {{ currentQuestion.description }} </p>
        <button @click="nextStep" class="light"> <span> START </span> </button>
      </div>
      <div v-if="state == 'answering'" class="content" key="answering">
        
        <div v-if="question_id == 5">
          <massComparison />
        </div>
      

        <!--<div class="answer-debug-panel">
          <label>Antwort</label>
          <input placeholder="0" v-model="answer"/> 
        </div>-->

      </div>
      <div v-if="state == 'answer'" class="content" key="answer">
        <h3 class="light"> {{ currentQuestion.answer.string }} </h3>
        <h5 class="light"> Deine Antwort: {{ stringToDigitNumber(userSession.answers[userSession.currentQuestion].answer) }} </h5>

      </div>      
    </transition>
  </div>
</template>

<script>
import QuestionGUI from '@/components/Question-GUI.vue';
import massComparison from '@/components/interactions/mass-comparison.vue';

export default {
  name: 'question',
  components: {
      QuestionGUI,
      massComparison
  },
  props: {
      question_id: Number
  },
  data () {
    return {
      state: String,
      sequence: ['question', 'answering', 'answer'],
      currentQuestion: Object,
      answer: ''
    }
  },
   mounted (){
    this.state = 'question';
    this.currentQuestion = this.$store.getters.questions[this.question_id];
  },
  computed: {
    questions(){
      return this.$store.getters.questions;
    },
    userSession(){
      return this.$store.getters.userSession;
    }
  },
  methods: {
    nextStep: function() {
      console.log("Next Step 👍");
      if(this.state == 'answering'){
        this.$store.commit('COMMIT_ANSWER', this.answer);
      }

      if(this.state == 'answer'){
        this.endQuestion();
      }

      let currentState = this.sequence.indexOf(this.state);
      this.state = this.sequence[currentState + 1];
    },
    endQuestion () {
      this.$store.commit('INCREMENT_CURRENT_QUESTION');
    },
    stringToDigitNumber (number) {
      return number.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
    }
  }
}
</script>

<style lang="scss">
  .answer-debug-panel {
    display: flex;
    justify-content: center;
    label {
      color: #fff;
    }
  }
</style>




