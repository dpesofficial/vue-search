<template>
    <ul>
        <li v-for="(x, index) in ninjas" :id="index"> 
            {{ this.ninjas[index] }} 
        </li>
    </ul>
</template>

<script>
    export default{
        data() {
            return{
                ninjas: ['first','second', 'third']
            }
        }
    }
</script>

<style>

</style>