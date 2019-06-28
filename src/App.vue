<template>
  <div id="app">
    <h3>VUE多语言按需引入</h3>
    <div class="tab">
      <a href="/?lang=cn">中文</a>
      <a href="/?lang=en">English</a>
    </div>
    <div class="i18n">
      <p>{{$t('Loading all of your translation files at once is overkill and unnecessary.')}}</p>
      <p>{{$t('Lazy loading or asynchronously loading the translation files is really easy when using Webpack.')}}</p>
    </div>
    <div class="tip">
      <p>现在我们可以看Network里的js引入的语言，只会引入当前切换的语言。（这句话没加翻译）</p>
    </div>
    <div class="img">
      <h3>这里是CN引入的js</h3>
      <img src="./assets/image/cn-js.jpg" alt="cn" >
    </div>
    <div class="img">
      <h3>这里是EN引入的js</h3>
      <img src="./assets/image/en-js.jpg" alt="en" >
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.tab{
  display: block;
}
.tab a {
  display: inline-block;
  margin: 0 20px;
  color: #000;
}
.i18n{
  display: inline-block;
  padding: 20px;
  margin: 20px 0 10px 0;
  background: #f9f9f9;
  box-shadow:  0 0 5px #b9b9b9;
}
.img{
    display: inline-block;
    margin-top: 50px;
    padding: 20px;
    background: #f9f9f9;
    -webkit-box-shadow: 0 0 5px #b9b9b9;
    box-shadow: 0 0 5px #b9b9b9;
}
.img img{
  display: block;
  width: 100%;
}
</style>
