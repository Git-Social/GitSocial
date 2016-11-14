<template lang="pug">
  .Logo
    img(src="../../assets/images/gitsocial-left.svg")
</template>

<script>
export default {
  props: [
    'modifier'
  ],
  computed: {
    path: () => `../../assets/images/gitsocial${this.modifier ? '-' + this.modifer : ''}.svg`
  }
}
</script>

<style lang="stylus" scoped>
  img
    height 100%
</style>
