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
  @import '~styles/colors'
  @import '~styles/types'

  .Home
    text-align center
  .background
    display block
    background-image url("../../assets/images/branch-bg.svg")
    width 100%
    height 100%
  .byline
    type-body 25px
    color dark
  header
    margin-bottom 140px
</style>
