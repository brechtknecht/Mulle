<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/start">About</router-link>
    </div>-->
    <router-view/>
  </div>
</template>

<style lang="scss">
  body {
    margin: 0; padding: 0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  #nav {
    padding: 30px;
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
  
  .fullscreen {
    padding: 3rem;
    height: calc(100vh - 6rem);
    background-image: url('./assets/img/background.png');
    background-size: cover;
    background-position: 50% 50%;
    transition: all .7s ease-in-out;
    &.filter {
      background-color: rgba(21, 21, 21, 0.89);
      background-blend-mode: saturation;
    }
  }

  // Typo Setup
  @font-face {
    font-family:'Suisse-Works-Regular';
    src: url('assets/fonts/SuisseWorks-Regular.otf');
  }

  @font-face {
    font-family:'Suisse-Works-Bold';
    src: url('assets/fonts/SuisseWorks-BoldItalic.otf');
  }

  @font-face {
    font-family:'Suisse-Sign';
    src: url('assets/fonts/SuisseSign-Bold.otf');
  }

  @font-face {
    font-family:'Suisse-Mono-Light';
    src: url('assets/fonts/SuisseIntlMono-Thin.otf');
  }

  @font-face {
    font-family:'Suisse-Mono-Bold';
    src: url('assets/fonts/SuisseIntlMono-Bold.otf');
  }

  // Colors
  $primary-light: #FFEEEA;
  $primary-dark: #1E1E1E;
  $test: red;

  h1, h3, h4, h5, h6, span {
    font-family: "Suisse-Sign";
  }

  h1, h2, h3, h4, h5, h6, p, span, a, button, button > span {
    &.light {
      color: $primary-light;
      &:after {
        background: $primary-light;
      }
    }
    &.dark {
      color: $primary-dark;
      &:after {
        background: $primary-dark;
      }
    }
  }

  span.bold {
    font-family: 'Suisse-Mono-Bold';
  }

  span.hairline {
    font-family: 'Suisse-Mono-Light';
  }

  h1 {
    font-size: 4rem;
    text-transform: uppercase;
  }

  h3 {
    font-size: 2.5rem;
    margin-top: 1.5rem;
  }


  h1, h3 {
    &:after {
      content: '';
      display: block;
      width: 6.25rem;
      height: 2px;
      position: relative;
      top: 1.25rem;
      left: calc(50% - (6.25rem / 2));
      right: 50%;
      opacity: 0;
      animation: line-in 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
      animation-delay: 500ms;
      animation-iteration-count: 1;
      animation-fill-mode: forwards;
    }
  }

  @keyframes line-in {
    from {
        width: 0;
        opacity: 0;
    }
    to {
        width: 6.25rem;
        opacity: 1;
    }
}


  h2 {
    font-family: "Suisse-Works-Bold";
    display: inline-block;
  }

  p {
    font-family: 'Suisse-Works-Regular';
    font-size: 1.25rem;
    line-height: 2.2rem;
    padding: 2.5rem 0;
    max-width: 680px;
    margin: 0 auto;
    &.light {
      &:before {
        background: $primary-light;
      }
    }
    &.dark {
      &:before {
        background: $primary-dark;
      }
    }
    &.line-before {
      margin-top: 1.5rem;
      &:before {
        content: '';
        display: block;
        width: 6.25rem;
        height: 2px;
        position: relative;
        bottom: 2rem;
        left: calc(50% - (6.25rem / 2));
        right: 50%;
        opacity: 0;
        animation: line-in 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
        animation-delay: 500ms;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
      }
    }
  }

  button {
    font-family: 'Suisse-Sign';
    font-size: 1.25rem;
    display: block;
    margin: 0 auto;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    text-transform: uppercase;
    padding: 1rem 2.5rem;
    border: 1px solid;
    border-radius: 4px;
    background: transparent;
    text-decoration: none;
    outline: 0;
    cursor: pointer;
    &.down {
      margin-top: 36rem;
    }
    &.light {
      border-color: $primary-light;
      span {
        color: $primary-light;
      }
    }
    &.dark {
      border-color: $primary-dark;
      span {
        color: $primary-dark;
      }
    }
  }

  .fullscreen {
    display: flex;
    justify-content: center;
    align-items: center;
    .content {
      margin-top: -5.5rem;
    }
  }
</style>
