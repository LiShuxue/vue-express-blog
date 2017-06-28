<template>
    <div class="category">
        <button @click="getTagList">获得标签列表</button>
        <hr> 
        <ul>
            <li v-for="tag in tags">
                {{tag}}
            </li>
        </ul>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data(){
            return{
                tags: []
            }
        },
        methods: {
            getTagList(){
                axios.get('http://localhost:3000/api/tag/tagList')
                .then( response => {
                    console.log(response.data);
                    console.log(this.tags);
                    this.tags = response.data.tagList
                    console.log(this.tags);
                })
                .catch( err => {
                    console.log(err);
                });
            }
        }
    }
</script>

<style>
</style>
