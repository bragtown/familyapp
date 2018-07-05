<template>
    <div class = "container">
        <div class = "panel panel-default">
                <div class = "panel-body">
        <table class = "table table-striped">
            <tbody>
                <tr v-for = "(child, index) in children" v-bind:key="index">
                    <td><a :href = "'#/children/child/'+child.name">{{child.name}}</a></td>
                </tr>
            </tbody>
        </table>

            </div>
        </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    computed:{
        ...mapGetters([
            'children'
        ])
    }
}
</script>
<style>
    .large {
        font-size: 12em;
        display: block;
    }
</style>

