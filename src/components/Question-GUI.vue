<!-- Variables needed: 
  👉 – currentQuestion (For question Counter)

-->


<template>
    <div class="question-gui">
      <div class="question-display">
        <h4 class="light">{{ questionString }}</h4>
      </div>
      <div class="question-counter">
        <div class="dots">
          <div v-for="(question, index) in questions" :key=question._id > 
            <div v-if="index < question_id" class="dot filled"></div>
            <div v-else class="dot"></div>
          </div>
        </div>
        <div class="question--counter--text">
          <span class="light hairline"> FRAGE </span> 
          <span class="light bold"> {{ parseInt(this.question_id)  }} </span> 
          <span class="light hairline"> von </span>
          <span class="light hairline"> {{ questions.length }} </span>
        </div>
      </div>
      <div class="buttons">
        <button @click="$emit('buttonTriggered')" class="light"> <span> WEITER </span> </button>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Question-GUI',
  props: {
    question_id: Number,
  },
  computed: {
    questions(){
      return this.$store.getters.questions;
    },
    questionString (){
      return this.questions[this.question_id - 1].question;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .question-gui {
    .question-display {
      position: absolute;
      top: 3rem;
      left: 3rem;
      h4 {
        &:before {
          content: '';
          display: block;
          position: relative;
          left: calc(-1rem - 40px);
          top: .75rem;
          width: 40px;
          height: 2px;
          background: white;
        }
      }  
    }
    .question-counter {
      position: absolute;
      bottom: 3rem;
      left: 3rem;
      .dots {
        display: flex;
        flex-direction: row;
        .dot {
          width: 7px;
          height: 7px;
          margin-right: .5rem;
          border: 2px solid white;
          border-radius: 4px;
          &.filled {
            background: white;
          }
        }
      }
      .question--counter--text {
        margin-top: .5rem;
        span {
          font-size: 2rem;
          text-transform: uppercase;
        }
      }
    }
    .buttons {
      position: absolute;
      bottom: 2rem;
      right: 3rem;
    }
  }
  
</style>
