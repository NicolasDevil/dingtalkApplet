<template>
  <div class="container">
    <div class="search-container">
      <u-search
        placeholder="请输入客户姓名搜索"
        v-model="viewQuery.keyword"
        bg-color="#F8F8F8"
        :animation="true"
        :show-action="false"
      ></u-search>
    </div>
    <u-sticky offset-top="20">
			<div class="tabs-path">
        <div class="tabs">
          <div :class="{ '_active': tabid === 0 }" @click="tabsChange(0)">待处理</div>
          <div :class="{ '_active': tabid === 1 }" @click="tabsChange(1)">已处理</div>
        </div>
      </div>
		</u-sticky>
    <div class="tab-panel">
      <div class="tab-panel-item" v-for="(items, index) in defaults" :key="index">
        <div class="tab-panel-list tab-header">
          <div class="tab-title">
            <div class="tag">1</div>
            <strong>张三</strong>
          </div>
          <div class="status-mark">待处理</div>
        </div>
        <div class="tab-panel-list">
          <span class="tab-panel-items">楼盘：<span class="marked">近月时代</span></span>
        </div>
        <div class="tab-panel-list">
          <span class="tab-panel-items">贷款金额：<span class="marked">50万</span></span>
          <span class="tab-panel-items">利率：<span class="marked">5.88%</span></span>
        </div>
      </div>
      <Loadmore status="loading" color="#333"></Loadmore>
    </div>

    <div class="add-fixed"><img src="@/static/loans/h5_images_setup.png"></div>
  </div>
</template>

<script>
export default {
  name: "loans",
  data() {
    return {
      viewQuery: { keyword: null },
      defaults: 10,
      tabid: 0
    };
  },
  methods: {
    tabsChange(id) { // 监控tab切换
      this.tabid = id;
    }
  }
};
</script>

<style lang="scss" scoped>
.search-container {
  width: 620rpx;
  margin: 20rpx auto 30rpx;
}
.tabs-path {
  display: flex;
  justify-content: center;
  .tabs {
    display: grid;
    grid-template-columns: repeat(2, 200rpx);
    background: #dbdbdb;
    border-radius: 38rpx;
    overflow: hidden;
    font-size: 34rpx;
    color: #ffffff;
    text-align: center;
    > div {
      padding: 20rpx 0;
    }
    ._active {
      transition: 400ms;
      background: #0089fe;
      border-radius: 38px;
    }
  }
}
.tab-panel {
  margin: 40rpx 0 50rpx;
  .tab-panel-item {
    padding: 30rpx;
    border: 1px solid #dbdbdb;
    margin-bottom: 20rpx;
    border-radius: 10rpx;
    font-size: 28rpx;
    color: #999999;
    &:last-child {
      margin-bottom: 0;
    }
    .tab-panel-list {
      margin-bottom: 20rpx;
      &:last-child { margin-bottom: 0 }
    }
    .tab-panel-items {
      margin-right: 30rpx;
      &:last-child { margin-right: 0 }
    }
    .tab-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .tab-title {
        display: flex;
        align-items: center;
        font-size: 36rpx;
        color: #333333;
      }
      .status-mark {
        font-size: 28rpx;
        color: #E5460B;
      }
      .tag {
        display: inline-block;
        width: 28rpx;
        height: 28rpx;
        margin-right: 12rpx;
        line-height: 28rpx;
        text-align: center;
        background: #E5460B;
        font-size: 22rpx;
        color: #fff;
        border-radius: 50%;
      }
    }
    .marked {
      color: #333;
    }
  }
}
.add-fixed {
  position: fixed;
  bottom: 150rpx;
  right: 15rpx;
  img {
    width: 120rpx;
    height: 120rpx;
  }
}
</style>