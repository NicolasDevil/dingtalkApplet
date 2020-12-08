<template>
  <div class="buttom-container">
    <div
      class="custom-button"
      :class="{
        '_primary': type === 'primary',
        '_danger': type === 'danger',
      }"
      v-if="!load"
      @click="clickEvent">
      {{text}}
    </div>
    <div class="custom-button _active" v-else>
      <view class="loading-icon">
        <view class="ball_holder">
          <view class="ball"></view>
        </view>
      </view>
      <span>{{loadText}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "buttons",
  props: {
    text: {
      type: String,
      default: "按钮"
    },
    type: {
      type: String,
      default: "primary"
    },
    loadText: {
      type: String,
      default: "正在保存"
    },
    load: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  methods: {
    clickEvent(e) {
      this.$emit("change", e)
    }
  }
};
</script>

<style lang="scss" scoped>
.buttom-container {
  .custom-button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80rpx;
    line-height: 80rpx;
    text-align: center;
    font-size: 34rpx;
    color: #fff;
    border-radius: 6rpx;
  }
  ._primary {
    background: #2196fa;
    box-shadow: 0 5rpx 9rpx 0 rgba(33, 150, 250, 0.29);
  }
  ._danger {
    background: #E5460B;
    box-shadow: 0 5rpx 9rpx 0 rgba(229, 70, 11, 0.29);
  }
  ._active {
    background: #ccc;
    box-shadow: 0 5rpx 9rpx 0 transparent;
  }
}
.loading-icon {
  position: relative;
  width: 16px;
  height: 16px;
  margin-right: 10rpx;
  border: 2px solid #fff;
  border-radius: 100%;
  .ball_holder {
    position: absolute;
    width: 12px;
    height: 100%;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    animation: loadingKey 1.3s linear infinite;
    .ball {
      position: absolute;
      left: 0;
      top: 1px;
      width: 5px;
      height: 5px;
      border-radius: 100%;
      background: #fff;
    }
  }
}
@keyframes loadingKey {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>