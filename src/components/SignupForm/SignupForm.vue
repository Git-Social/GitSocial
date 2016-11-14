<template lang="pug">

  .SignupForm
    // Begin MailChimp Signup Form
    link(href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css" rel="stylesheet" type="text/css")
    #mc_embed_signup
      form(action="//social.us14.list-manage.com/subscribe/post?u=df0a22070493c9ccd40e021d7&amp;id=874ebc298a" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate)
        #mc_embed_signup_scroll
          input(type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="Email Address" required)

          // real people should not fill this in and expect good things - do not remove this or risk form bot signups
          div(style="position: absolute; left: -5000px;" aria-hidden="true")
            input(type="text" name="b_df0a22070493c9ccd40e021d7_874ebc298a" tabindex="-1" value="")
          div(class="clear border")
            input(type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button")

</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>
  @import '~styles/colors'
  @import '~styles/types'

  radius = 5px
  $form
    type-body()
    height 36px
  #mc_embed_signup
    background white
    clear left
    width 100%
    .email
      @extends $form
      border-radius 0
      border-top-left-radius radius
      border-bottom-left-radius radius
      border-right none
      width 300px
      &:focus
        outline none
        border-color primary
    .button
      @extends $form
      background primary
      border-radius 0
      border-top-right-radius radius
      border-bottom-right-radius radius
</style>
