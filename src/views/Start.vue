<template>
  <div :class="{filter: isFilter}" class="home fullscreen">
    <transition name="slide-fade" mode="out-in" appear>
      <div v-if="state == 'start'" class="content" key="start">
        <h1 class="light"> WASTE OF THE PLANET </h1>
        <h2 class="light"> Was machen wir mit unserem Müll? </h2>

        <button @click="nextStep" class="light" style="margin-top: 5rem;"> <span> Start </span> </button>
      </div>

      <div v-if="state == 'introduction'" class="content" key="introduction">
        <img src="../assets/img/introduction/iceberg.png">
        <p class="light line-before">
          Unsere Welt ist in Gefahr und es ist wichtig, dass jeder von unserer und allen kommenden Generationen daran beteiligt sind, die Welt zu einem besseren Ort zu machen. In dieser interaktiven Datenvisualisierung möchten wir dich sensilibisieren für das was Gang und Gebe ist und woran wir alle noch arbeiten können.
        </p>
        <button @click="nextStep" class="light"> <span> WEITER </span> </button>
      </div>

      <div v-if="state == 'begin'" class="content" key="next">
        <h1 class="light"> Beginnen wir mit dem Test </h1>
        <p class="light">
          Teste dich selbst und vergleiche dich mit anderen. Erfahre Fakten die dir so noch gar nicht bewusst waren. Die Idee von diesem Test ist allerdings nicht irgendjemanden zu beängstigen. Vielmehr geht es darum zu sensibilisieren. Wir können alle einen klaren, faktenorientierten Blick auf diese Thematik gut gebrauchen, denn vieles ist nicht bekannt.
        </p>
        <router-link to="/question/0">
          <button @click="nextStep" class="light"> <span> Auf Geht's </span> </button>
        </router-link>
      </div>
    </transition>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'start',
  data () {
    return {
      state: String,
      sequence: ['start', 'introduction', 'begin'],
      isFilter: false
    }
  },
  mounted (){
    this.state = 'start';
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
  .content > *:nth-child(1) {
    transition-delay: 100ms;
  }

  .content > *:nth-child(2) {
    transition-delay: 200ms;
  }
</style>


