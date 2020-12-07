<template>
  <div class="performance">
    <div class="performance-header" v-if="!headshow">
      <div class="header-name">业绩概览</div>
    </div>
    <div class="performance-container">
      <div class="performance-items" v-for="(items, index) in defaults" :key="index">
        <div class="items-top">
          <div class="items-title">房易贷</div>
          <div class="items-time">更新时间：2020.10.10 14：30</div>
        </div>
        <div class="items-content">
          <div>
            <div class="content-items">
              <div class="content-num">56</div>
              <div class="content-name">授信笔数</div>
            </div>
          </div>
          <div>
            <div class="content-items">
              <div class="content-num">56</div>
              <div class="content-name">授信金额（万元）</div>
            </div>
          </div>
          <div>
            <div class="content-items">
              <div class="content-num">56</div>
              <div class="content-name">用信金额（万元）</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import skeleton from "@/components/skeleton";
export default {
  props: {
    headshow: {
      type: Boolean,
      default: false
    },
    isload: {
      type: Boolean,
      default: true
    },
    list: {
      type: Array,
      default: null
    }
  },
  data() {
    return {
      defaults: [
        {
          title: "按揭房贷",
          name: "张三",
          num: "66万",
          status: "待处理",
          time: "2020.10.10 14：30"
        },
        {
          title: "房贷",
          name: "张三",
          num: "66万",
          status: "待处理",
          time: "2020.10.10 14：30"
        }
      ]
    };
  },
  components: { skeleton }
};
</script>

<style lang="scss" scoped>
.performance {
  position: relative;
  .performance-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 40rpx 0;
    .header-name {
      position: relative;
      font-size: 34rpx;
      color: #333333;
      overflow: hidden;
      padding-left: 18rpx;
      &::before {
        content: "";
        position: absolute;
        top: 3rpx;
        left: 0;
        width: 6rpx;
        height: 34rpx;
        background: #0089fe;
      }
    }
    .header-more {
      padding: 40rpx 0;
      font-size: 24rpx;
      color: #0089fe;
    }
  }
  .performance-container {
    margin-top: -20rpx;
    .performance-items {
      padding: 30rpx 25rpx;
      box-sizing: border-box;
      border-bottom: 1px solid #dbdbdb;
      &:last-child {
        border-bottom: none;
      }
      .items-top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .items-title {
          font-size: 30rpx;
          color: #0089fe;
        }
        .items-time {
          font-size: 20rpx;
          color: #999999;
        }
      }
      .items-content {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        margin-top: 30rpx;
        > div {
          display: flex;
          &:nth-child(1) {
            justify-content: flex-start;
          }
          &:nth-child(3) {
            justify-content: flex-end;
          }
        }
        .content-items {
          width: inherit;
          text-align: center;
          .content-num {
            font-size: 34rpx;
            color: #333333;
            font-weight: bold;
            margin-bottom: 15rpx;
          }
          .content-name {
            font-size: 24rpx;
            color: #999999;
          }
        }
      }
    }
  }
}
</style>