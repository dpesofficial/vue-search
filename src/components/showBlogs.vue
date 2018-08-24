<template>
  <div id="show-blogs">
      <h1>Blog Filter fetched from vue-resource</h1>
      <input type="text" v-model="search" placeholder="search blogs">
      <div v-for="blog in filteredBlogs" class="single-blog" :key="blog.index">
          <h2>{{ blog.title | to-upper }}</h2>
          <article> {{ blog.title | excerpt }} </article>
          <img v-bind:src="blog.url" />
      </div>
  </div>
</template>

<script>

export default {
  data () {
      return{
          blogs: [],
          search: ''
      }
  },
  methods:{

  },
  created(){
      this.$http.get('https://jsonplaceholder.typicode.com/photos').then(function(data){
          console.log(data);
          this.blogs = data.body.slice(0,10);
      })
  },
  computed:{
      filteredBlogs: function(){
          return this.blogs.filter((blog) =>{
              return blog.title.match(this.search);
          })
      }
  }
}
</script>
    
<style>
    @import url('https://fonts.googleapis.com/css?family=Open+Sans');
    *{
        font-family: 'Open Sans', sans-serif;
        font-size: 102%;
    }
    #add-blog {
        max-width: 80%;
        margin: 0 auto;
    }
    input[type="text"] {
        border: 1px solid #ccc;
        width: 300px;
        display: inline-block;
        height: 40px;
        text-indent: 10px;
    }
    .single-blog {
        background: #eee;
        padding: 10px;
        margin: 15px;
        padding-bottom: 25px;
        margin-left: 0;
    }
    .single-blog {
    position: relative;
    }
    #show-blogs img {
        position: absolute;
        right: 0;
        top: 0;
        height: 100%;
    }
</style>
