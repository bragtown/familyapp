<template>
    <div class = "container">
        <h1>
            {{child.name}}
            <span 
                class = "floatRight shrink glyphicon glyphicon-option-vertical"
                v-on:click="edit = true">
            </span>
        </h1>
        <div class = "row">
            <div class = "col-md-9">
                <daily-rewards 
                    :child = "child" 
                    :dailyStickers="child.dailyStickers">
                </daily-rewards>
            </div>
            <!-- <div class = "col-md-4">
                <StopLight :child="child"></StopLight>
            </div> -->
            <div class = "col-md-3">
                <Rewards :child="child"></Rewards>
            </div>
        </div>
        <modal v-model="edit" title="Edit" @hide="updateChild" ok-text = "Save">
            <EditChild :child="child"></EditChild>
        </modal>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
import DailyRewards from '@/components/DailyRewards'
import StopLight from '@/components/Stoplight'
import Rewards from '@/components/Rewards'
import {Modal} from 'uiv'
import EditChild from '@/components/EditChild'
export default {
    components: {
        DailyRewards,
        StopLight,
        Rewards,
        Modal,
        EditChild
    },
    data:function(){
        return {
            edit:false
        }
    },
    computed:{
        child:function(){
            return this.$store.state.currentChild;
        }
    },
    methods:{
        updateChild:function(msg){
            console.log('updating child', msg);
            if(msg === 'ok') this.$store.commit('updateChild', this.child);
        }
    },
    beforeMount(){
        this.$store.commit('setCurrentChild', this.$route.params.child)
    }
}
</script>
<style>
    .flex-row {
        display: flex;
        flex-direction: column;
        display: webkit-flex;
        -webkit-flex-direction: column

    }
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
    .floatRight {
        float:right;
    }
    .shrink {
        font-size: .5em;
    }
</style>

