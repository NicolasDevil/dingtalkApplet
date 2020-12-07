<template>
  <div class="todolist">
    <div class="todo-header" v-if="!headshow">
      <div class="header-name">待办</div>
      <div class="header-more" @click="showMore()">查看更多</div>
    </div>
    <div class="todo-container">
      <div v-for="(items, index) in list || defaults" class="todo-items" :key="index">
        <skeleton
          :loading="isload"
          :showAvatar="false"
          :row="1">
          <div class="todo-items-content">
            <div class="todo-item-header">
              <div class="tag todo-text-item">{{index}}</div>
              <div class="todo-text-item">{{items.title}}</div>
              <div class="todo-text-item">{{items.name}}</div>
              <div class="todo-text-item">{{items.num}}</div>
              <div class="todo-text-item todo-text-mark">{{items.status}}</div>
            </div>
            <div class="todo-item-contant">创建时间：{{items.time}}</div>
          </div>
        </skeleton>
      </div>
    </div>
  </div>
</template>

<script>
import skeleton from "@/components/skeleton"
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
        { title: "按揭房贷", name: "张三", num: "66万", status: "待处理", time: "2020.10.10 14：30" }
      ]
    }
  },
  methods: {
    showMore() {   // 查看更多
      uni.navigateTo({
        url: '/pages/todo/index'
      })
    }
  },
  components: { skeleton }
}
</script>

<style lang="scss" scoped>
.todolist {
  .todo-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
        background: #0089FE;
      }
    }
    .header-more {
      padding: 40rpx 0;
      font-size: 24rpx;
      color: #0089FE;
    }
  }
  .todo-container {
    margin-top: -20rpx;
    .todo-items {
      padding: 30rpx 0;
      border-bottom: 1px solid #DBDBDB;
      &:last-child {
        border-bottom: none;
      }
    }
    .todo-items-content {
      width: inherit;
      .todo-item-header {
        display: flex;
        align-items: center;
        font-size: 26rpx;
        margin-bottom: 20rpx;
        .margin-right {
          margin-right: 25rpx;
        }
        .todo-text-item {
          margin-right: 30rpx;
          &:last-child { margin-right: 0 }
        }
        .todo-text-mark {
          color: #E5460B;
        }
      }
      .todo-item-contant {
        font-size: 24rpx;
        color: #999999;
        text-align: right;
      }
      .tag {
        display: inline-block;
        width: 28rpx;
        height: 28rpx;
        line-height: 28rpx;
        text-align: center;
        background: #E5460B;
        font-size: 22rpx;
        color: #fff;
        border-radius: 50%;
      }
    }
  }
}
</style>