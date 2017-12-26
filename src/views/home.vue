<template>
  <div>
    <Tabs value="name1">
        <TabPane label="全部" name="all">
          <ArticleList :params="params.all"></ArticleList>
        </TabPane>
        <TabPane label="当月" name="current">
          <ArticleList :params="params.current"></ArticleList>
        </TabPane>
        <TabPane label="优秀" name="excellent">
          <ArticleList :params="params.excellent"></ArticleList>
        </TabPane>
    </Tabs>
  </div>
</template>

<script>
  import ArticleList from '@/components/articleList'
  export default {
    data () {
      return {
        params: {
          all: {},
          current: {},
          excellent: {}
        }
      }
    },
    components: {
      ArticleList
    }
  }
</script>

<style scoped>
</style>
