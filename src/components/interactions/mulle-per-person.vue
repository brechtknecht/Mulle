<template>
  <div class="interaction">
    <div class="display">
      <h5 class="light count"> <b> {{ stringToDigitNumber(totalWeight) }} </b> Gramm</h5>
      <h4 v-if="mulleCount > 1" class="light mulleCount">{{ mulleCount }} Schiffe ins Meer geschmissen</h4>
      <h4 v-else class="light mulleCount">Wirf so viel weg, wie du glaubst jeden Tag an Gewicht zu verbrauchen.</h4>
    </div>
    <div class="matter-js"></div>
    <transition name="fade" mode="out-in" appear>
      <div class="buttons-inline">
        <button class="light"  @click="addCubes">+ Mehr Müll</button>
      </div>
    </transition>
  </div>
</template>

<script>
import Matter from 'matter-js';

export default {
  name: 'mulle-per-person',
  props: {
    msg: String
  },
  data() {
    return {
      Engine: Object,
      Render: Object,
      World: Object,
      Mouse: Object,
      MouseConstraint: Object,
      Bodies: Object,
      Runner: Object,
      Composites: Object,
      runner: Object,
      render: Object,
      engine: Object,
      bodyPositions: Object,
      isLeft: Number,
      isRight: Number,
      objects: [],
      objectWeight: 200000,
      totalWeight: 0,
      mulleCount: 0,
      canvasWidth: 1300,
      canvasHeight: 500
    }
  },
  mounted() {
    console.log('Starting Matter.js 👉');

    // module aliases
    this.Engine = Matter.Engine;
    this.Render = Matter.Render;
    this.World = Matter.World;
    this.Bodies = Matter.Bodies;
    this.Runner = Matter.Runner;
    this.Composites = Matter.Composites;
    this.Mouse = Matter.Mouse;
    this.MouseConstraint = Matter.MouseConstraint;

    // create an engine
    var engine = this.Engine.create();
    this.runner = this.Runner.create();
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
    var ground      = this.Bodies.rectangle(400, this.canvasHeight, this.canvasWidth * 2,   60, options);
    var ceiling     = this.Bodies.rectangle(400, 0, this.canvasWidth * 2,   60, options);
    var left_wall   = this.Bodies.rectangle(0,   0,  60, this.canvasWidth, options);
    var right_wall  = this.Bodies.rectangle(1270,   0,  60, this.canvasWidth, options);

    var middle_line = this.Bodies.rectangle(this.canvasWidth / 2,   this.canvasHeight + 100 ,  20, this.canvasHeight, {
        isStatic: true,
        render: {
          fillStyle: 'transparent',
          strokeStyle: 'white',
          lineWidth: 2
        }
    });
    
    this.World.add(engine.world, [
      ground,
      ceiling,
      left_wall,
      right_wall,
      middle_line
    ]);


    // Coffee cups
    var options = {
      render: {
        sprite: {
          texture: 'assets/img/interactions/objects/coffee_s.png',
          xScale: 1,
          yScale: 1
        }
      }
    };
    for(var i = 0; i <= 5; i++){
      this.objects.push(this.Bodies.circle((i * 40) % this.canvasWidth / 2, (i * 40) % this.canvasHeight, 20, options));
    }

    // Pizza Box
    var options = {
      render: {
        sprite: {
          texture: 'assets/img/interactions/objects/pizza_s.png',
          xScale: 1,
          yScale: 1
        }
      }
    };
    for(var i = 0; i <= 5; i++){
      this.objects.push(this.Bodies.circle((i * 40) % this.canvasWidth / 2, (i * 40) % this.canvasHeight, 20, options));
    }

    // Water Bottle
    var options = {
      render: {
        sprite: {
          texture: 'assets/img/interactions/objects/bottle_s.png',
          xScale: 1,
          yScale: 1
        }
      }
    };
    for(var i = 0; i <= 5; i++){
      this.objects.push(this.Bodies.rectangle((i * 40) % this.canvasWidth / 2, (i * 40) % this.canvasHeight, 40, 64, options));
    }

    this.World.add(engine.world, this.objects);

    // add mouse control
    var mouse = this.Mouse.create(this.render.canvas),
      mouseConstraint = this.MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: false
          }
        }
      });

    this.World.add(engine.world, mouseConstraint);

    // run the engine
    this.Engine.run(engine);

    // run the renderer
    this.Render.run(this.render);

    this.$nextTick(function () {
            window.setInterval(() => {
                this.collisionCheck();
            },1000);
        })
  },
  watch : {
      totalWeight() {
        if(this.totalWeight > 0){
          this.$parent.enableContinue();
        } else {
          this.$parent.disableContinue();
        }


        let answer = {
          value : this.totalWeight,
          unit : 'Gramm'
        }
        this.$store.commit('COMMIT_CURRENT_ANSWER', answer);
      },
      isRight (){
          var randomSeed = Math.floor((Math.random() * 100) + 10);
          this.totalWeight = this.isRight * 50;
      }
  },
  methods: {
    collisionCheck(){
        var numberLeft = 0;
        var numberRight = 0;

        this.objects.forEach(item => {
            let isLeft = (item.position.x < (this.canvasWidth / 2) ? true : false);
            item.isLeft = isLeft;    

            (item.isLeft ? numberLeft++ : numberRight++)
        });

        this.isLeft = numberLeft;
        this.isRight = numberRight;
    },
    addCubes () {
      var objects = [];
      let body = this.Bodies;
      let scale = 0.5;
      var CUBE_COUNT = 1;

      for (var i = 0; i < CUBE_COUNT; i++){
        let object = body.rectangle(this.canvasWidth / 4, 40, 30, 30, { 
            angle: Math.floor((Math.random() * 1) - 45),
            restitution: 0,
            slop:0,
            
            render: {
              sprite: {
                texture: 'assets/img/interactions/objects/can_s.png',
                xScale: scale,
                yScale: scale
              }
            }
        })
        objects.push(object);
        this.objects.push(object);
      } 

      this.World.add(this.engine.world, objects);
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
  .mulleCount {
    margin-top: 0;
  }

  .display {
    position: relative;
    top: 3rem;
  }
</style>