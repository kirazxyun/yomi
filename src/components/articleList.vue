<template>
  <div>
    <ArticleCard v-for="(article, index) in articles"
                       :key="article.id"
                       :article="article"
                       :index="index"></ArticleCard>
  </div>
</template>

<script>
  import ArticleCard from '@/components/articleCard'
  import Server from '@/server'

  export default {
    name: 'articleList',

    props: {
      server: {
        type: String,
        default: ''
      }
    },

    data () {
      return {
        articles: []
      }
    },

    components: {
      ArticleCard
    },

    methods: {
      getList () {
        Server[this.server]().then((res) => {
          if (res.success) {
            this.articles = res.data.rows
          } else {
            this.articles = []
          }
        })
      }
    },

    mounted () {
      this.getList()
    }
  }
</script>

<style scoped>

</style>
