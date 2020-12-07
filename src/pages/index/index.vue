<template>
	<div>
    <div class="container view-modules">
      <u-swiper :list="list" :height="260"></u-swiper>
      <menus :menus="list"/>
    </div>

    <div class="container view-modules">
      <todolist :isload="true"/>
    </div>

    <div class="container view-modules">
      <performance/>
    </div>

    <u-no-network></u-no-network>
	</div>
</template>

<script>
  import menus from "@/components/Layout/menu/index"
  import todolist from "@/components/Layout/todolist/index"
  import performance from "@/components/Layout/performance/index"
	export default {
		data() {
			return {
				list: [{
            image: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
            path: "/pages/loans/index",
						title: '按揭房贷'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/2.jpg',
						title: '房易贷'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',
						title: '容易贷'
					},{
						image: 'https://cdn.uviewui.com/uview/swiper/2.jpg',
						title: '待定'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',
						title: '待定'
					}
				],
			}
		},
		onLoad() {
      console.log(getApp().globalData)
		},
		methods: {

    },
    components: { menus, todolist, performance }
	}
</script>

<style lang="scss" scoped>
.view-modules {
  background: #fff;
  margin-bottom: 20rpx;
  &:first-child {
    padding-top: 30rpx;
  }
  &:last-child {
    margin-bottom: 30rpx;
  }
}
</style>
