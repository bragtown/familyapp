<template>
    <div class = "container">
        <h1>{{child.name}}</h1>
        <div class = "column-reverse">
            <div>hello</div>
            <div>world</div>
        </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {

    computed:{
        child:function(){
            return this.$store.getters.getChild(this.$route.params.child)
        }
    }
}
</script>
<style>

    .column-reverse {
        display: flex;
        flex-direction: column-reverse;
        display: webkit-flex;
        -webkit-flex-direction: column-reverse
    }
</style>

