<template>
  <div>
    <Tabs value="name1">
        <TabPane label="全部" name="all">
          <ArticleList server="getArchived"></ArticleList>
        </TabPane>
        <TabPane label="当月" name="current">
          <ArticleList server="getExcellent"></ArticleList>
        </TabPane>
        <TabPane label="优秀" name="excellent">
          <ArticleList server="getVoting"></ArticleList>
        </TabPane>
    </Tabs>
  </div>
</template>

<script>
  import ArticleList from '@/components/articleList'

  export default {
    data () {
      return {
      }
    },
    components: {
      ArticleList
    }
  }
</script>

<style scoped>
</style>
