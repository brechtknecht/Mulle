<template>
    <div class="free-spacing">
        <transition name="fade-delay" mode="in-out" appear>
            <img class="background-image" src="assets/img/interactions/germany.svg">
        </transition>
        <div class="country-grid">
            <div v-for="(n, index) in 100" :key="index" class="grid-element">
                <transition name="fade-down" appear>
                    <div v-if="index < found" class="found">
                        <svg class="found" width="16" height="20" viewBox="0 0 87 112" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <!-- Generator: Sketch 52.1 (67048) - http://www.bohemiancoding.com/sketch -->
                            <title>Group 3</title>
                            <desc>Created with Sketch.</desc>
                            <defs>
                                <polygon id="path-1" points="0 0 86.8609 0 86.8609 111.8568 0 111.8568"></polygon>
                            </defs>
                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g id="Group-3">
                                    <mask id="mask-2" fill="white">
                                        <use xlink:href="#path-1"></use>
                                    </mask>
                                    <g id="Clip-2"></g>
                                    <path d="M-0.0001,111.4808 C2.5909,107.5068 5.3559,103.6348 7.7409,99.5418 C14.6209,87.7328 21.3849,75.8558 28.1139,63.9598 C30.5419,59.6648 30.5319,59.4618 26.4779,56.7438 C20.3369,52.6268 14.0479,48.7308 7.8209,44.7428 C7.1969,44.3438 6.5639,43.9588 5.6459,43.3848 C7.0449,41.4288 8.2979,39.5738 9.6589,37.8028 C11.2249,35.7638 12.9229,33.8278 14.4869,31.7888 C15.1109,30.9758 15.6919,30.8168 16.5249,31.3698 C17.8819,32.2688 19.3079,33.0738 20.6039,34.0528 C25.3579,37.6418 30.0529,41.3098 34.8069,44.8978 C37.5539,46.9708 37.6849,46.9748 39.1939,43.8138 C45.1339,31.3698 51.0089,18.8948 56.9029,6.4278 C57.9119,4.2928 58.8899,2.1428 59.8829,-0.0002 L63.2729,-0.0002 C68.0369,0.7608 72.7999,1.5198 77.5639,2.2848 C78.2219,2.3898 78.8759,2.5258 79.7219,2.6828 C78.0209,5.2958 76.3919,7.6698 74.8929,10.1228 C66.6489,23.6158 58.4179,37.1168 50.2239,50.6398 C47.8379,54.5768 47.8989,54.6148 51.4029,57.5658 C57.0179,62.2968 62.8919,66.7588 68.1769,71.8348 C73.2679,76.7218 77.8559,82.1538 82.4599,87.5218 C84.9479,90.4218 85.8189,94.1688 86.8609,98.2168 C85.2239,97.4788 83.8059,97.0038 82.5569,96.2508 C74.5559,91.4228 66.5539,86.5968 58.6479,81.6188 C56.8819,80.5068 55.4959,78.7938 53.9369,77.3558 C53.8459,77.2718 53.7969,77.0988 53.6999,77.0718 C48.9059,75.7108 46.1799,71.1658 41.3369,69.0948 C40.2309,71.2248 39.1549,73.3808 37.9919,75.4888 C37.5209,76.3408 36.9279,77.1498 36.2699,77.8688 C34.4529,79.8518 32.4299,81.6608 30.7469,83.7478 C26.7699,88.6798 23.0719,93.8418 19.0029,98.6968 C16.7609,101.3708 14.1039,103.7298 11.4449,106.0118 C8.1269,108.8608 4.3419,110.9408 -0.0001,111.8568 L-0.0001,111.4808 Z" id="Fill-1" fill="#000000" mask="url(#mask-2)"></path>
                                </g>
                            </g>
                        </svg>

                    </div>
                    <div v-else>
                        <svg width="16" height="20" viewBox="0 0 87 112" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <!-- Generator: Sketch 52.1 (67048) - http://www.bohemiancoding.com/sketch -->
                            <title>Group 3</title>
                            <desc>Created with Sketch.</desc>
                            <defs>
                                <polygon id="path-1" points="0 0 86.8609 0 86.8609 111.8568 0 111.8568"></polygon>
                            </defs>
                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g id="Group-3">
                                    <mask id="mask-2" fill="white">
                                        <use xlink:href="#path-1"></use>
                                    </mask>
                                    <g id="Clip-2"></g>
                                    <path d="M-0.0001,111.4808 C2.5909,107.5068 5.3559,103.6348 7.7409,99.5418 C14.6209,87.7328 21.3849,75.8558 28.1139,63.9598 C30.5419,59.6648 30.5319,59.4618 26.4779,56.7438 C20.3369,52.6268 14.0479,48.7308 7.8209,44.7428 C7.1969,44.3438 6.5639,43.9588 5.6459,43.3848 C7.0449,41.4288 8.2979,39.5738 9.6589,37.8028 C11.2249,35.7638 12.9229,33.8278 14.4869,31.7888 C15.1109,30.9758 15.6919,30.8168 16.5249,31.3698 C17.8819,32.2688 19.3079,33.0738 20.6039,34.0528 C25.3579,37.6418 30.0529,41.3098 34.8069,44.8978 C37.5539,46.9708 37.6849,46.9748 39.1939,43.8138 C45.1339,31.3698 51.0089,18.8948 56.9029,6.4278 C57.9119,4.2928 58.8899,2.1428 59.8829,-0.0002 L63.2729,-0.0002 C68.0369,0.7608 72.7999,1.5198 77.5639,2.2848 C78.2219,2.3898 78.8759,2.5258 79.7219,2.6828 C78.0209,5.2958 76.3919,7.6698 74.8929,10.1228 C66.6489,23.6158 58.4179,37.1168 50.2239,50.6398 C47.8379,54.5768 47.8989,54.6148 51.4029,57.5658 C57.0179,62.2968 62.8919,66.7588 68.1769,71.8348 C73.2679,76.7218 77.8559,82.1538 82.4599,87.5218 C84.9479,90.4218 85.8189,94.1688 86.8609,98.2168 C85.2239,97.4788 83.8059,97.0038 82.5569,96.2508 C74.5559,91.4228 66.5539,86.5968 58.6479,81.6188 C56.8819,80.5068 55.4959,78.7938 53.9369,77.3558 C53.8459,77.2718 53.7969,77.0988 53.6999,77.0718 C48.9059,75.7108 46.1799,71.1658 41.3369,69.0948 C40.2309,71.2248 39.1549,73.3808 37.9919,75.4888 C37.5209,76.3408 36.9279,77.1498 36.2699,77.8688 C34.4529,79.8518 32.4299,81.6608 30.7469,83.7478 C26.7699,88.6798 23.0719,93.8418 19.0029,98.6968 C16.7609,101.3708 14.1039,103.7298 11.4449,106.0118 C8.1269,108.8608 4.3419,110.9408 -0.0001,111.8568 L-0.0001,111.4808 Z" id="Fill-1" fill="#000000" mask="url(#mask-2)"></path>
                                </g>
                            </g>
                        </svg>

                        
                    </div>
                    
                            
                </transition>
            </div>
        </div>
        <div class="interaction">
            <h5 class="light">Wie viel Prozent von unseren Müll könnten wir theoretisch finden?</h5>
            <div class="slider">
                <vue-slider ref="slider" v-model="found" v-bind="options"></vue-slider>
            </div>
        </div>
    </div>
</template>

<script>
    import vueSlider from 'vue-slider-component'
    
    export default {
        name: 'pacific-path',
        props: {
            question_id: Number
        },
        components: {
            vueSlider
        },
        data() {
            return {
                found: 0,
                options: {
                    data: null,
                    eventType: 'auto',
                    width: 'auto',
                    height: 6,
                    dotSize: 16,
                    dotHeight: null,
                    dotWidth: null,
                    min: 0,
                    max: 100,
                    interval: 1,
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
        watch: {
            found() {
                if(this.found > 0){
                    this.$parent.enableContinue();
                } else {
                    this.$parent.disableContinue();
                }
                let answer = {
                    value: this.found,
                    unit: '%'
                }
                this.$store.commit('COMMIT_CURRENT_ANSWER', answer);
            },
        }
    
    }
</script>

<style lang="scss" scoped>
    .found {
        svg path {
            fill: red !important;
        }
    }
    .background-image {
        position: relative;
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        z-index: 0;
    }
    
    .slider {
        z-index: 100;
        position: relative;
        margin: 0 auto;
        bottom: 5.5rem;
        width: 400px;
        left: 0;
        right: 0;
    }

    .interaction {
        position: relative;
        bottom: 10rem;
    }
    
    .country-grid {
        display: grid;
        grid-template-columns: repeat(20, 1fr);
        grid-gap: 0;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 40vh;
        left: 0;
        right: 0;
        bottom: 0;
        width: 80vh;
        height: 200px;
        opacity: 0;
        margin: 0 auto;
        animation: 500ms jump-fix cubic-bezier(0.25, 0.46, 0.45, 0.94);
        animation-delay: 900ms;
        animation-iteration-count: 1;
        animation-fill-mode: forwards; 
        .grid-element {
            flex: .5 .5 10%;
            padding: 0 1rem;
            height: 20px;
            translate: all 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
            svg {
                
                z-index: -1;
                max-width: 15vw;
                path {
                    fill: #fff;
                    stroke: #fff;
                    
                }
            }
        }

       @keyframes jump-fix {
           0% {
               opacity: 0;
           } 100% {
               opacity: 1;
           }
       } 
    }
</style>



