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
    props:['child', 'isOpen'],
    data:function(){
        return {
            updatedChild:Object.assign({}, this.child)
        }
    }
}
</script>
