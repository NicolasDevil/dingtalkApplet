<template>
  <div class="todo">
    <u-empty text="暂无代办" mode="list" v-if="defaults && defaults.length == 0" margin-top="240"></u-empty>
    <todolist :isload="false" :headshow="true" v-else/>
  </div>
</template>

<script>
import todolist from "@/components/Layout/todolist/index"
export default {
  name: "todo",
  data() {
    return {
      defaults: []
    }
  },
  components: { todolist }
}
</script>

<style lang="scss" scoped>
.todo {
  padding: 20rpx 30rpx;
  box-sizing: border-box;
}
</style>