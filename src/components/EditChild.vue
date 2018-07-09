<template>
    <div>
        <label>Edit Name</label>
        <input 
            type="text" 
            class = "form-control"
            v-model="updatedChild.name">
    </div>
</template>
<script>
export default {
    computed:{
        child:{
            get:function(){
                return this.$store.getters.getChild(this.$route.params.child);
            },
            set:function(){
                this.$store.commit()
            }
        }
    }
}
</script>
