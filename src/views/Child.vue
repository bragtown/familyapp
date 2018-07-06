<template>
    <div class = "container">
        <h1>{{child.name}}</h1>
        <div class = "flex-row">
            <daily-rewards 
                :child = "child" 
                :dailyStickers="child.dailyStickers">
            </daily-rewards>
            <StopLight :child="child"></StopLight>
        </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
import DailyRewards from '@/components/DailyRewards'
import StopLight from '@/components/Stoplight'
export default {
    components: {
        DailyRewards,
        StopLight
    },
    computed:{
        child:function(){
            return this.$store.getters.getChild(this.$route.params.child)
        }
    }
}
</script>
<style>
    .flex-row {
        display:flex;
        flex-direction: row;
    }
    
    .column-reverse {
        display: flex;
        flex-direction: column-reverse;
        display: webkit-flex;
        -webkit-flex-direction: column-reverse
    }
</style>

