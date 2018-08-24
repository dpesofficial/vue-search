<template>
    <div>
        <form v-if="!submitted">
            <input type="text" value="test" v-model="blog.title"/>
            <p>{{ blog.title }}</p>
            <button v-on:click.prevent="post">Add Blog </button>
        </form>
        <div v-if="submitted"> 
            <h3>Post submitted</h3>
        </div>
    </div>

</template>

<script>
export default {
    data(){
        return{
            blog: {
                title: "",
            },
            authors:['auth1','auth2'],
            submitted: false
        }
    },
    methods: {
        post:function(){
            this.$http.post("https://jsonplaceholder.typicode.com/posts",{
                title: this.blog.title
            }).then(function(data){
                console.log(data);
                this.submitted = true;
            });
        }
    }
}
</script>

<style>

</style>
