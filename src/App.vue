<template>
  <div id="add-blog">
    <show-blogs></show-blogs>
  </div>
</template>

<script>
import addBlog from './components/addBlog.vue'
import showBlogs from './components/showBlogs.vue'


export default {
  components: {
    'add-blog':addBlog,
    'show-blogs':showBlogs
  },
  data () {
    return {
     title: 'app title'
    }
  }
}
</script>

<style>

</style>
