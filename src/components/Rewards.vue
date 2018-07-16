<template>
    <table class = "table">
        <tbody>
            <tr 
                v-for = "(reward, index) in child.rewards"
                v-bind:key="index"
                class = "pointer"
                :class = "reward.selected ? 'success' : ''"
                v-on:click = "setReward(index)">
                <td>{{reward.reward}}</td>
            </tr>
            <tr>
                
            </tr>
        </tbody>
    </table>
</template>
<script>
import {mapActions} from 'vuex'
export default {
    props:['child'],
    methods:{
        ...mapActions([
            'setReward'
        ])
    }
}
</script>
<style>

</style>
