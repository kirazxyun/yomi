<template>
  <div>
    <Tabs value="name1">
        <TabPane label="全部" name="all">全部文章</TabPane>
        <TabPane label="当月" name="current">当月推荐的文章</TabPane>
        <TabPane label="优秀" name="excellent">历史优秀文章</TabPane>
    </Tabs>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    }
  }
</script>

<style scoped>

</style>
