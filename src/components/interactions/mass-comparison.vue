<template>
  <div class="interaction">
    <h5 class="light count"> {{ stringToDigitNumber(totalWeight) }} Tonnen</h5>
    <h4 v-if="boatCount > 1" class="light boatCount">{{ boatCount }} Schiffe ins Meer geschmissen</h4>
    <h4 v-else class="light boatCount">Ein Kreuzfahrtschiff entspricht 200.000 Tonnen</h4>
    <div class="matter-js"></div>
    <transition name="fade" mode="out-in" appear>
      <div class="buttons-inline" v-if="isRunning">
        <button class="light"  @click="addCube">+ Kreuzfahrtschiff</button>
      </div>
    </transition>
  </div>
</template>

<script>
import Matter from 'matter-js';

export default {
  name: 'mass-comparison',
  props: {
    msg: String
  },
  data() {
    return {
      Engine: Object,
      Render: Object,
      World: Object,
      Bodies: Object,
      engine: Object,
      render: Object,
      isRunning: true,
      objectWeight: 200000,
      totalWeight: 0,
      boatCount: 0,
      canvasWidth: 1300,
      canvasHeight: 500
    }
  },
  mounted() {
    console.log('Starting Matter.js 👉');

    // module aliases
    this.Engine = Matter.Engine,
    this.Render = Matter.Render,
    this.World = Matter.World,
    this.Bodies = Matter.Bodies;

   

    // create an engine
    var engine = this.Engine.create();
    this.engine = engine;

    // create a renderer
    this.render = this.Render.create({
        element: document.querySelector('.matter-js'),
        engine: engine,
        options: {
          wireframes: false,
          width: this.canvasWidth,
          height: this.canvasHeight,
          background: 'transparent'
        }
    });

    var options = {
      isStatic: true,
      render: {
        fillStyle: 'transparent'
      }
    }

    // create two boxes and a ground
    var ground     = this.Bodies.rectangle(400, this.canvasHeight, this.canvasWidth * 2,   60, options);
    var left_wall  = this.Bodies.rectangle(0,   0,  60, this.canvasWidth, options);
    var right_wall = this.Bodies.rectangle(1270,   0,  60, this.canvasWidth, options);
    
    this.World.add(engine.world, [ground, left_wall, right_wall]);

    // run the engine
    this.Engine.run(engine);

    // run the renderer
    this.Render.run(this.render);
  },
  watch: {
    totalWeight() {
        if(this.totalWeight > 0){
          this.$parent.enableContinue();
        } else {
          this.$parent.disableContinue();
        }

        var answer = {
          value : this.totalWeight,
          unit : 'Tonnen'
        }
        this.$store.commit('COMMIT_CURRENT_ANSWER', answer);
      }
  },
  methods: {
    addCube() {
      var objects = [];
      let body = this.Bodies;
      let scale = 0.5;
      var CUBE_COUNT = 1;
      this.boatCount++;

      for (var i = 0; i < CUBE_COUNT; i++){
        objects.push(  
          body.rectangle(this.canvasWidth / 2, -100, 250 * scale, 40 * scale, { 
            angle: Math.floor((Math.random() * 1) - 45),
            restitution: 0,
            slop:0,
            
            render: {
              sprite: {
                texture: 'assets/img/texture.png',
                xScale: scale,
                yScale: scale
              }
            },
            /*vertices: [
              {x:  0, y: 41},
              {x:  25, y: 60},
              {x: 242, y: 60},
              {x: 248, y: 25},
              {x: 187, y:  7},
              {x:  42, y: 20}
            ]*/
          })
        );
      } 

      this.totalWeight = this.totalWeight + (this.objectWeight * objects.length);

      this.World.add(this.engine.world, objects);
    },
    endQuestion() {
      var endLine = this.Bodies.rectangle(60, -30, this.canvasWidth - 30, 30, {
        render: {
          fillStyle: 'transparent',
          strokeStyle: 'white',
          lineWidth: 2
        }
      });
      this.World.add(this.engine.world, endLine);
      
      this.isRunning = false;
    },
    stringToDigitNumber (number) {
      return number.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
    }
  },
  destroyed() {
    var Runner = this.Runner;
    var engine = this.engine;
    setTimeout(function(){ 
      Runner.stop(engine)
    }, 2000, Runner, engine);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .buttons-inline {
    display: flex;
  }

  .interaction {
    h4 {
      margin-top: 1rem;
    }
    h5 {
      margin-top: 3rem;
      margin-bottom: 0;
    }
  } 
  .boatCount {
    margin-top: 0;
  }
</style>
