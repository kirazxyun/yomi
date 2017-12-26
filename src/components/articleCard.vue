<template>
  <div :style="style">
    <Card :bordered="false">
      <div slot="title">
        <div class="article-item-user">
          <span class="name">{{ article.recommend_name }}</span>
        </div>
        <div class="article-item-info-aside">
          <a target="_blank" class="title tra-color-bg" :href="article.link">{{ article.title }}</a>
        </div>
      </div>
      <div class="article-item-recommend">
        <p class="paragraph">
         {{ article.recommend_reason }}
        </p>
      </div>
      <!-- <div class="article-item-ctrl">
        <div class="article-item-ctrl-info">权重 1 · 推荐 0 · 收藏 1</div>
        <div class="article-item-ctrl-main">
          <span class="tra_color_bg"><i class="iconfont icon-mark31"></i>稍后阅读</span>
          <span class="tra_color_bg" id="6429173748411007180"><i class="iconfont icon-8"></i>阅读模式</span>
        </div>
      </div> -->
    </Card>
  </div>
</template>

<script>
export default {
  name: 'articleCard',

  props: {
    article: {
      type: Object,
      default: function () {
        return {}
      }
    },
    index: {
      type: Number,
      default: 0
    }
  },

  computed: {
    style: function () {
      return {
        'background': '#eee',
        'padding': this.index ? '0 20px 20px 20px' : '20px'
      }
    }
  },

  data () {
    return {
    }
  }
}
</script>

<style lang="less">
  .article-item-user,
  .article-item-info-aside {
    margin: 0 10px;
    font-size: 16px;
    padding: 5px 0;
  }
  .article-item-info-aside {
    a {
      &.title {
        color: #0099e5;
      }
    }
  }
  .article-item-recommend {
    p {
      &.paragraph {
        color: #777;
        text-align: justify;
        margin: 0 10px;
        padding-top: 2px;
      }
    }
  }
  .tra-color-bg {
    -webkit-transition: color .2s ease-in-out, background-color .3s ease-in-out;
    -moz-transition: color .2s ease-in-out, background-color .3s ease-in-out;
    transition: color .2s ease-in-out, background-color .3s ease-in-out;
  }
</style>
