<template>
  <div :class="{filter: isFilter}" class="fullscreen">
    <transition name="fade" mode="out-in" appear>
      <div class="evaluation">
        <!-- <h1>{{currentAnswers}}</h1> -->

        <div v-for="(question, index) in correctAnswers" class="evaluation--question" :key="question.question._id">
          <h2 class="light question">{{ question.question }}</h2>
          <div>
            <span class="light">Deine Antwort</span>
             <!-- <h3 class="light">
               <countTo v-if="index != 3" :startVal='0' :endVal='Math.abs(parseInt(currentAnswers[index].answer.value))' :separator="''" :duration='3000'></countTo>
               <span v-else> {{ currentAnswers[index].answer.value }} </span>
               <span class="unit">{{ question.answer.unit }}</span>
            </h3> -->
          </div>
          <div>
            <span class="light">Durchschnitts Antwort</span>

            <h3 class="light"> 
              <countTo v-if="index != 3" :startVal='0' :endVal='Math.abs(parseInt(averageValues[index]))' :separator="''" :duration='3000'></countTo>
              <span v-else>–</span>
              <span class="unit">{{ question.answer.unit }}</span>
            </h3>
          </div>
          <div>
            <span class="light">Richtige Antwort</span>
            <h3 class="light">  
              <countTo v-if="index != 3" :startVal='0' :endVal='parseInt(question.answer.number)' :separator="''" :duration='3000'></countTo>
              <span v-else>{{ question.answer.number}}</span>
              <span class="unit">{{ question.answer.unit }}</span> 
            </h3>
          </div>
          
        </div>

      </div>
    </transition>
  </div>
</template>

<script>
// @ is an alias to /src
import router from '@/router'

import axios from 'axios'

import countTo from 'vue-count-to';

export default {
  name: 'evaluation',
  components: {
    countTo
  },
  data() {
    return {
      isFilter: true,
      averageValues: Array
    }
  },
  created(){
      axios.get('http://döner.jetzt:3000/userSessions/')
        .then(function (response) {
          return response;
        })
        .catch(function (error) {
          return false;
        })
        .then(function (response) {
          let userSession = response.data.userSessions; 

          let NUMBER_OF_QUESTIONS = userSession[0].answers.length;

          var averages = [];

          for(var i = 0; i < NUMBER_OF_QUESTIONS; i++){
            let answer_array = [];

            for (var key in userSession) {
              if (userSession.hasOwnProperty(key)) {
                  answer_array.push(userSession[key].answers[i].answer.value);
              }
            }

            var sum, avg = 0;

            // dividing by 0 will return Infinity
            // arr must contain at least 1 element to use reduce
            if (answer_array.length) {
                sum = answer_array.reduce(function(a, b) { return a + b; });
                avg = sum / answer_array.length;
            }

            avg = Math.round(avg);

            if(isNaN(avg)){
              avg = 0;
            }

            avg = parseInt(avg);

            averages.push(avg);
          }
          return averages;
        }).then(averages => this.averageValues = averages);
    
  },
  computed: {
    correctAnswers() {
      return this.$store.getters.questions;
    },
    currentAnswers () {
      return this.$store.getters.answers;
    }
  },
  methods: {
  }

}
</script>

<style lang="scss" scoped>
  .question {
      max-height: 300px;
      grid-row: 1 / span 1;
      grid-column: 1 / span 3;
  }
  .evaluation--question {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    height: 100%;
  }

  .fullscreen {
    align-items: initial;
    overflow-y: scroll;
  }

  .unit {
    margin-left: -.25rem;
  }
</style>



