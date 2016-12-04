<template lang="pug">

  .SignupForm
    // Begin MailChimp Signup Form
    #mc_embed_signup
      form(action="//social.us14.list-manage.com/subscribe/post?u=df0a22070493c9ccd40e021d7&amp;id=874ebc298a" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate)
        #mc_embed_signup_scroll
          input(type="email" value="" name="EMAIL" class="email border" id="mce-EMAIL" placeholder="Email Address" required)

          // real people should not fill this in and expect good things - do not remove this or risk form bot signups
          div(style="position: absolute; left: -5000px;" aria-hidden="true")
            input(type="text" name="b_df0a22070493c9ccd40e021d7_874ebc298a" tabindex="-1" value="")
          div(class="clear border")
            input(type="submit" value="Sign Up" name="subscribe" id="mc-embedded-subscribe" class="button")

</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>
  @import '~styles/colors'
  @import '~styles/types'

  input
    /* background: */
    border 2px solid #E0E1E2;
    border-radius 9px;
    /* ghost text: */
    font-family Lato-Regular;
    font-size 31.5px;
    color rgba(0,0,0,0.36);
    /* Sign Up: */
    font-family Lato-Bold;
    font-size 31.5px;
    color #FFFFFF;

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
    .border
      display inline
    .button
      @extends $form
      height 42px
      width 100px
      background primary
      border none
      border-radius 0
      border-top-right-radius radius
      border-bottom-right-radius radius
</style>
