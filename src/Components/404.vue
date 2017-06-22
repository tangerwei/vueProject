<template>
    <div>the id of this page is{{message}}</div>
</template>
<script>
    export default{
        data(){
            return{
                message:"this is a error message!"
            } 
        },
        created(){
            this.message = this.$route.query.userid||"";
        }
    }
</script>