<template>
    <div class = "container">
        <div class = "panel panel-default">
            <div class = "panel-body">
                <table class = "table table-striped">
                    <tbody>
                        <tr v-for = "(child, index) in children" v-bind:key="index">
                            <td>
                                <a :href = "'#/children/child/'+child._id">{{child.name}}</a>
                                <span class = "remove glyphicon glyphicon-remove" v-on:click="removeChild({child, index})"></span>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <label>New Child</label>
                
                <div class = "input-group">
                    <input v-model = "child" class = "form-control">
                    <span class = "input-group-btn"><button class = "btn btn-success" v-on:click="addChild()"><span class = "glyphicon glyphicon-plus"></span></button></span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'
export default {
    data:function(){
        return {
            child:''
        }
    },
    computed:{
        ...mapGetters([
            'children'
        ])
        
    },
    methods:{
        ...mapActions(['newChild', 'getChildren', 'removeChild']),

        addChild:function(){
            this.newChild({name: this.child});
            this.child = '';
        }
    },
    beforeMount(){
        this.getChildren();
    }
}
</script>
<style>
    .large {
        font-size: 12em;
        display: block;
    }
    .remove {
        float:right;
        color:red;
        cursor:pointer;
    }
</style>

