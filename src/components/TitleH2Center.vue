<template>
  <div class="title-h2-center">
    <h2>{{text}}</h2>
  </div>
</template>

<script>
export default {
  name: "textCenter",
  props: {
    text: String,
  }
};
</script>

<style lang="scss">
  .title-h2-center{
    text-align: center;
    background-color: #F3F3F3;
    padding: 50px 0;
    h2{
      font-family: Lato;
      font-style: normal;
      font-weight: bold;
      font-size: 42px;
      line-height: 50px;
      text-align: center;
      font-feature-settings: 'liga' off;
      margin-bottom: 0;
    }
  }
</style>
