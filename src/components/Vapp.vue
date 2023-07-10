<template lang="pug">
.OpenInAppButton(:class="{hidden: !show}")
  a.open.linkedme(:href="url" data-track-category="app" data-track-label="App 内打开")
  a.close(@click="show = false")
</template>

<script>
export default {
  name: 'vapp',
  data () {
    return {
      url: 'http://a.app.qq.com/o/simple.jsp?pkgname=net.geekpark.geekpark',
      show: true
    }
  },
  mounted() {
    this.getUrl()
  },
  methods: {
    getUrl () {
      var _this = this
      linkedme.init("0bd47e7101366093a027cc6ea662d018", {type: "live"}, null)
      var initData = {}
      initData.type = "live"
      var value1 = this.$route.path === '/' ? 'index' : 'detail'
      var value2 = this.$route.params.id
      initData.params = '{"type":"'+value1+'","topicId":"'+value2+'"}'
      linkedme.link(initData, function(err, response){
        if(err){
          // console.log('linkedme err', err)
        } else {
          _this.url = response.url
          // console.log('linkedme ok', response, response.url)
        }
      }, false)
    }
  }
}
</script>

<style lang="stylus">
  .OpenInAppButton
    display none
  @media screen and (max-width: 767px)
    .OpenInAppButton
      position fixed
      top auto
      bottom 0
      left 0
      right 0
      width 100%
      z-index 100
      display block
      background url("../assets/imgs/app_down.jpg") no-repeat center
      background-size cover
      // transform translate(-50%,200%)
      transition transform .3s .3s
      box-shadow 0 0 5px rgba(0,0,0,.25)
      border none
      padding-bottom 13.87%
      &.hidden
        display none
    .open
      display block
      position absolute
      left 0
      top 0
      bottom 0
      width 90.5%
    .close
      display block
      position absolute
      right 0
      top 0
      bottom 0
      width 9.5%
      padding-bottom 13.87%
</style>
