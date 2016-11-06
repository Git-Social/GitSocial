<template lang="pug">
  .Home
    header
      .banner
        Headline
      .byline A social meetup for developers
    SignupForm
</template>

<script>
import Headline from 'components/Headline';
import SignupForm from 'components/SignupForm';

export default {
  components: {
    Headline,
    SignupForm
  }
}
</script>

<style lang="stylus">
  body
    width 100%
    height 100%
    margin 0
</style>

<style lang="stylus" scoped>
  .Home
    text-align center
  .banner
    background-color white
    margin 40px 0 0 0
    padding 20px
  .byline
    font 20px Helvetica, Arial, sans-serif
  header
    margin-bottom 140px
</style>
