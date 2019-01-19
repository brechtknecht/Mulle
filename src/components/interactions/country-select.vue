<template>
    <div>
      <transition name="fade-delay" mode="in-out" appear>
        <img class="background-image" src="assets/img/interactions/europe.svg">
      </transition>
      
    </div>
</template>

<script>

export default {
  name: 'country-select',
  props: {
      question_id: Number
  },

}
</script>

<style lang="scss">
    .background-image {
        position: relative;
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        opacity: .3;
        z-index: 0;
    }
</style>



