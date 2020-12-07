<template>
  <div class="page-position">
    <div class="page-container">
			<div class="menu-items" v-for="(items, index) in menus" :key="index" @click="pageJump(items.path || null)">
        <div class="menu-icon">
          <img src="http://www.uviewui.com/common/logo.png">
        </div>
        <div class="menu-text ellipsis">
          <span>{{items.title || "佚名"}}</span>
        </div>
      </div>
		</div>
  </div>
</template>

<script>
export default {
  props: {
    menus: {
      type: Array,
      required: true,
      default: []
    },
    isload: {
      type: Boolean,
      required: true,
      default: true
    }
  },
  data() {
    return {
    }
  },
  methods: {
    pageJump(path) {
      if(path && path.trim() !== '') {
        uni.navigateTo({ url: `${path}` })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.page-container {
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 20rpx;
  grid-row-gap: 40rpx;
  padding: 30rpx 0;
  .menu-items {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .menu-icon {
      width: 86rpx;
      height: 86rpx;
      img {
        width: inherit;
        height: inherit;
      }
    }
    .menu-text {
      font-size: 28rpx;
      color: #333333;
      margin-top: 16rpx;
    }
  }
}
</style>