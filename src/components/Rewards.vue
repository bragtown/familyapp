<template>
    <table class = "table">
        <tbody>
            <tr 
                v-for = "(reward, index) in child.rewards"
                v-bind:key="index"
                :class = "reward.selected ? 'success' : ''"
                v-on:click = "setReward({child:child.name, index})">
                <td>{{reward.reward}}</td>
            </tr>
        </tbody>
    </table>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
    props:['child'],
    methods:{
        ...mapMutations([
            'setReward'
        ])
    }
}
</script>
<style>

</style>
