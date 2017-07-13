<template>
    <div class="blog">
		标题：<input type="text" v-model="title"><br>
		正文：<textarea cols="100" rows="20" v-model="content"></textarea><br>
		标签：<input type="text" v-model="tag1"><input type="text" v-model="tag2"><input type="text" v-model="tag3"><br>
        <button @click="publish">发表</button>
        <hr> 
        <button @click="getDetail('594cbc4a43671d22706a6d7d')">获得详细</button>
        <hr> 
        <button @click="getBlogList(1)">获得博客列表</button>
        <hr> 
        <button @click="getBlogListByTag(1, 'html')">根据Tag获得博客列表</button>
        <hr> 

        标题：<input type="text" v-model="t_title" readonly="true"><br>
		正文：<textarea cols="100" rows="20" v-model="t_content"></textarea><br>
        <button @click="updateBlog('594cbc4a43671d22706a6d7d')">修改</button>
        <hr>

        昵称：<input type="text" v-model="name" /><br>
		邮箱：<input type="email" v-model="email" /><br>
        评论：<textarea cols="50" rows="20" v-model="message"></textarea><br>
        <button @click="addComment">评论</button>
        <hr>

        <button @click="deleteBlog('594b4ff8dd2b9a0e7a924ed4')">删除</button>
        <br>
        <br>
        <br>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data: function(){
            return {
                title: '',
                content: '',
                tag1: '',
                tag2: '',
                tag3: '',
                t_id: '',
                t_title: '',
                t_content: '',
                name: '',
                email: '',
                message: ''
            }
        },
        methods: {
            publish(){
                axios.post('/api/blog/publish', {
                    author: 'lsx',
                    title: this.title,
                    tags: [this.tag1, this.tag2, this.tag3],
                    content: this.content
                })
                .then( response => {
                    console.log(response.data);
                })
                .catch( err => {
                    console.log(err);
                });
            },
            getDetail(id){
                axios.get(`/api/blog/detail/${id}`)
                .then( response => {
                    console.log(response.data);
                    this.t_id = response.data.blog._id;
                    this.t_title = response.data.blog.title;
                    this.t_content = response.data.blog.content;
                })
                .catch( err => {
                    console.log(err);
                });
            },
            getBlogList(page){
                axios.get(`/api/blog/blogList/${page}`)
                .then( response => {
                    console.log(response.data);
                })
                .catch( err => {
                    console.log(err);
                });
            },
            getBlogListByTag(page, tag){
                axios.get(`/api/blog/blogList/${tag}/${page}`)
                .then( response => {
                    console.log(response.data);
                })
                .catch( err => {
                    console.log(err);
                });
            },
            getTagList(){
                axios.get(`/api/tag/tagsList`)
                .then( response => {
                    console.log(response.data);
                })
                .catch( err => {
                    console.log(err);
                });
            },
            updateBlog(id){
                axios.put(`/api/blog/${id}`, {
                    content: this.t_content
                })
                .then( response => {
                    console.log(response.data);
                })
                .catch( err => {
                    console.log(err);
                });
            },
            addComment(){
                var id = this.t_id;
                axios.put(`/api/blog/comment/${id}`, {
                    name: this.name,
                    email: this.email,
                    message: this.message
                })
                .then( response => {
                    console.log(response.data);
                })
                .catch( err => {
                    console.log(err);
                });
            },
            deleteBlog(id){
                axios.delete(`/api/blog/${id}`)
                .then( response => {
                    console.log(response.data);
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
