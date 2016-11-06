<template lang="pug">

  .SignupForm
    // Begin MailChimp Signup Form
    link(href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css" rel="stylesheet" type="text/css")
    #mc_embed_signup
      form(action="//social.us14.list-manage.com/subscribe/post?u=df0a22070493c9ccd40e021d7&amp;id=874ebc298a" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate)
        #mc_embed_signup_scroll
          label(for="mce-EMAIL") Interested? Want to be a part?
          input(type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required)

          // real people should not fill this in and expect good things - do not remove this or risk form bot signups
          div(style="position: absolute; left: -5000px;" aria-hidden="true")
            input(type="text" name="b_df0a22070493c9ccd40e021d7_874ebc298a" tabindex="-1" value="")
          .clear
            input(type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button")

</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>
  #mc_embed_signup
    background white
    clear left
    font 14px Helvetica, Arial, sans-serif
    width 100%
    .email
      border-radius 0
    .button
      background #f15a29
      border-radius 0
</style>
