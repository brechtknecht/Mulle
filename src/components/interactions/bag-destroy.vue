<template>
    <div>
        <div class="history">
            <div class="image">
                <h5 class="light">{{ currentText }}</h5>
                <img :src=currentImage />
            </div>
        </div>
        <div class="slider">
            <vue-slider ref="slider" v-model="year" v-bind="options"></vue-slider>
        </div>
    </div>
</template>

<script>
    import vueSlider from 'vue-slider-component'
    
    export default {
        name: 'bag-destroy',
        props: {
            question_id: Number
        },
        components: {
            vueSlider
        },
        data() {
            return {
                year: new Date().getFullYear(),
                currentText: 'heute',
                currentImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Litter_on_Singapore%27s_East_Coast_Park.jpg/2880px-Litter_on_Singapore%27s_East_Coast_Park.jpg',
                options: {
                    data: null,
                    eventType: 'auto',
                    width: 'auto',
                    height: 6,
                    dotSize: 16,
                    dotHeight: null,
                    dotWidth: null,
                    min: 1300,
                    max: 2019,
                    interval: 5,
                    show: true,
                    speed: 0.5,
                    disabled: false,
                    piecewise: false,
                    usdKeyboard: false,
                    enableCross: true,
                    piecewiseStyle: false,
                    piecewiseLabel: false,
                    tooltip: 'always',
                    tooltipDir: 'top',
                    reverse: false,
                    data: null,
                    clickable: true,
                    realTime: false,
                    lazy: false,
                    formatter: null,
                    bgStyle: null,
                    sliderStyle: null,
                    processStyle: null,
                    piecewiseActiveStyle: null,
                    piecewiseStyle: null,
                    tooltipStyle: null,
                    labelStyle: null,
                    labelActiveStyle: null
                }
            }
        },
        computed: {
            history(){
               return this.$store.getters.history;
            }
        },
        watch: {
            year() {
                this.outputHistory();

                if(this.year < new Date().getFullYear()){
                    this.$parent.enableContinue();
                } else {
                    this.$parent.disableContinue();
                }
                let answer = {
                    value: this.year,
                    unit: ''
                }
                this.$store.commit('COMMIT_CURRENT_ANSWER', answer);
            },
        },
        methods: {
            outputHistory() {
                for (var key in this.history) {
                    if (this.history.hasOwnProperty(key)) {
                        
                        if(this.year < key){
                            this.currentText = this.history[key].text;
                            this.currentImage = this.history[key].image;
                            return;
                        }
                    }
                }
            }
        }
    
    }
</script>

<style lang="scss" scoped>
    .history {
        img {
            height: 60vh;
            top: 0;
            max-width: 100vw;
            bottom: 0;
        }
    }
    .slider {
        z-index: 100;
        position: relative;
        margin: 0 auto;
        bottom: 3rem;
        width: 500px;
        left: 0;
        right: 0;
    }
</style>



