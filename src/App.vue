<template>
  <div id="app">
    <header-bar></header-bar>
    <aside-menu></aside-menu>
    <settings></settings>
    <footer-bar></footer-bar>
    <div class="app-content">
      <div class="app-content-body fade-in-up">
        hello worde
      </div>
    </div>
  </div>
</template>

<script>
import HeaderBar from './components/Header';
import AsideMenu from './components/Aside';
import Settings from './components/Settings';
import FooterBar from './components/Footer';

export default{
  name: 'app',
  components: {
    HeaderBar,
    AsideMenu,
    Settings,
    FooterBar,
  },
};
</script>

<style lang="scss"></style>