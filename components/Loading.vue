<template>
  <div class="is-overlay is-loading"></div>
</template>

<script>
export default {};
</script>

<style lang="scss">
  .is-loading,
  .is-loading:after {
    border-radius: 50%;
    width: 13em;
    height: 13em;
  }
  .is-loading {
    margin: 20% auto;
    font-size: 10px;
    position: relative;
    text-indent: -9999em;
    border-top: 1.1em solid rgba(255, 255, 255, 0.2);
    border-right: 1.1em solid rgba(255, 255, 255, 0.2);
    border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);
    border-left: 1.1em solid #fff;
    transform: translateZ(0);
    animation: load8 0.5s infinite linear;
  }
  @-webkit-keyframes load8 {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes load8 {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
