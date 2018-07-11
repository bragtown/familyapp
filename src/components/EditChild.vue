<template>
    <div>
        <label>Edit Name</label>
        <input 
            type="text" 
            class = "form-control"
            v-model="childName">
        <label>Rewards</label>
        <table class = "table">
            <body>
                <tr v-for = "(reward, index) in rewards" v-bind:key="index">
                    <td>{{reward.reward}}</td>
                    <td><span class = "glyphicon glyphicon-delete" v-on:click="removeReward(index)"></span></td>
                </tr>
            </body>
        </table>
        <div class = "input-group">
            <input v-model = "newReward" class = "form-control">
            <span class = "input-group-btn"><button class = "btn btn-success" v-on:click="addReward()"><span class = "glyphicon glyphicon-plus"></span></button></span>
        </div>
    </div>
</template>
<script>
export default {
    props:['child'],
    data:function(){
        return {
            newReward:''
        }
    },
    computed:{
        childName:{
            get:function(){
                return this.$store.state.updatedChild.name
            },
            set:function(value){
                this.$store.commit('updateChildName', value)
            }
        },
        rewards:{
            get:function(){
                return this.$store.state.updatedChild.rewards
            }
        }
    },
    methods:{
        removeReward:function(index){
            this.$store.commit('removeReward', index)
        },
        addReward:function(){
            this.$store.commit('addReward', {reward:this.newReward, selected:false})
            this.newReward = '';
        }
    },
    beforeMount(){
        this.$store.commit('setUpdatedChild', this.child);
    }
}
</script>
