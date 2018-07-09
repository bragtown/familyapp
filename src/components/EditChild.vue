<template>
    <div>
        <label>Edit Name</label>
        <input 
            type="text" 
            class = "form-control"
            v-model="childName">
    </div>
</template>
<script>
export default {
    props:['child'],
    computed:{
        childName:{
            get:function(){
                return this.$store.state.updatedChild.name
            },
            set:function(value){
                this.$store.commit('updateChildName', value)
            }
        }
    },
    beforeMount(){
        this.$store.commit('setUpdatedChild', this.child);
    }
}
</script>
