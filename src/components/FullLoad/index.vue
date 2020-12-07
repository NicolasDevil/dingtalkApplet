<template>
  <view class='header' v-if="show">
    <view class="logo-container">
      <image class="app-logo" src="https://wxtest.fyydrcb.cn/media_files/ydrcb_wechat_img/shouye/logo.png"></image>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true,
      default: false
    }
  },
}
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: #fff;
  .app-logo {
    width: 320rpx;
    height: 60rpx;
  }
}
.logo-container {
  position: relative;
  overflow: hidden;
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    z-index: 9;
    width: 100%;
    height: 100%;
    background-color: transparent;
    display: block;
  }
  &:not(.not-round)::after {
    border-radius: 4px;
  }
  &:not(.not-before)::before {
    position: absolute;
    top: 0;
    width: 30%;
    height: 100%;
    content: "";
    background: linear-gradient(to right,rgba(255,255,255,0) 0,
        rgba(255,255,255,.5) 50%,rgba(255,255,255,0) 100%);
    transform: skewX(-45deg);
    z-index: 99;
    animation: render-animate 3.2s ease infinite;
    display: block;
  }
  & .badge::after {
    background-color: #F8FAFC;
  }
}
@keyframes render-animate {
  from {
    left: -100%;
  }
  to {
    left: 150%;
  }
}
</style>