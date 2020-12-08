<template>
  <div>
    <div class="base-info">
      <div class="_headers">申请人基本信息</div>
      <div class="base-info-content">
        <div class="base-info-cell">
          <span>姓名</span>
          <span class="_blod">张三</span>
        </div>
        <div class="base-info-cell">
          <span>性别</span>
          <span class="_blod">男</span>
        </div>
        <div class="base-info-cell">
          <span>民族</span>
          <span class="_blod">汉</span>
        </div>
        <div class="base-info-cell">
          <span>出生日期</span>
          <span class="_blod">1978年5月12日</span>
        </div>
      </div>
      <div class="business-status">
        <!-- <img src="@/static/loans/h5_images_approved.png"> -->
        <img src="@/static/loans/h5_images_refuse.png">
      </div>
    </div>
    <div class="approval-records">
      <div class="_headers">审批记录</div>
      <div class="approval-records-content">
        <div class="approval-records-cell">
          <div class="records-cell-title">
            <div class="cell-badge">1</div>
            <div>业务受理人：张三</div>
            <div class="cell-status">
              <span class="status-apply">发起申请</span>
            </div>
          </div>
          <!-- <div class="cell-detail">同意，上报审批</div> -->
        </div>
        <div class="approval-records-cell">
          <div class="records-cell-title">
            <div class="cell-badge">2</div>
            <div>调查同行人：李四</div>
            <div class="cell-status">
              <span class="status-success">已同意</span>
            </div>
          </div>
          <div class="cell-detail">同意，上报审批</div>
        </div>
      </div>
    </div>
    <div class="buttons-container">
      <buttons text="查看调查报告" @change="save"/>
      <buttons text="重新编辑" type="danger"/>
    </div>
  </div>
</template>

<script>
import buttons from "@/components/button/index"
export default {
  components: { buttons },
  methods: {
    save() {
      console.log("save active")
    }
  }
}
</script>

<style lang="scss" scoped>
._headers {
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 20rpx;
  font-size: 34rpx;
  font-weight: bold;
  color: #333333;
  margin-bottom: 10rpx;
  &::before {
    position: absolute;
    display: inline-block;
    content: "";
    top: 2rpx;
    left: 0;
    width: 8rpx;
    height: 36rpx;
    background: #0089FE;
  }
}
.base-info {
  position: relative;
  background: #fff;
  padding: 20rpx 30rpx 0;
  box-sizing: border-box;
  margin-bottom: 20rpx;
  .base-info-content { margin-top: 20rpx }
  .base-info-cell {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 28rpx;
    color: #999999;
    padding: 20rpx 10rpx 20rpx 0;
    border-bottom: 1px solid #DBDBDB;
    &:last-child { border-bottom: none }
    ._blod {
      color: #333333;
    }
  }
  .business-status {
    position: absolute;
    top: 5rpx;
    right: 40rpx;
    width: 160rpx;
    height: 160rpx;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.approval-records {
  background: #fff;
  padding: 20rpx 30rpx;
  box-sizing: border-box;
  margin-bottom: 180rpx;
  .approval-records-content {
    margin-top: 10rpx;
    .approval-records-cell {
      font-size: 28rpx;
      color: #333333;
      padding: 30rpx 0;
      border-bottom: 1px solid #DBDBDB;
      &:last-child { border-bottom: none }
      .records-cell-title {
        display: grid;
        grid-template-columns: 30rpx 1fr 130rpx;
        align-items: center;
        grid-column-gap: 20rpx;
        text-align: left;
      }
      .cell-badge {
        width: 28rpx;
        height: 28rpx;
        line-height: 28rpx;
        text-align: center;
        font-size: 22rpx;
        background: #0089FE;
        color: #fff;
        border-radius: 50%;
      }
    }
    .cell-status {
      font-size: 24rpx;
      text-align: right;
      .status-apply { color: #0089FE }
      .status-success { color: #03A535 }
      .status-fail { color: #E5460B }
    }
    .cell-detail { font-size: 28rpx; color: #999999; margin-top: 20rpx; padding: 0 50rpx }
  }
}
.buttons-container {
  position: fixed;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-row-gap: 30rpx;
  bottom: 35rpx;
  left: 0;
  padding: 0 75rpx;
  z-index: 10;
  box-sizing: border-box;
}
</style>