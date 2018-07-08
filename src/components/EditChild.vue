<template>
    <div>
        <label>Edit Name</label>
        <input type="text" v-model="child.name">
    </div>
</template>
<script>
export default {
    props:['child']
}
</script>
