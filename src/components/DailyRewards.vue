<template>
    <div class = "flex-row">
        <div 
            class = "column-reverse stickerBox"
            droppable = "true"
            v-on:drop = "drop()"
            v-on:dragover="dragover">
        <div 
                class = "sticker" 
                v-for="(sticker, index) in dailyStickers" 
                v-bind:key="index"
                :style="'background-color:' + sticker.color"
                draggable = "true"
                v-on:dragstart = "dragstartRemove(index)">
            </div>
        </div>
        <div class = "column-reverse pickerBox"
        v-on:dragover = "dragover"
        v-on:drop = "dropRemove">
            <div v-for="(color, index) in colors"
                v-bind:key="index"
                class = "colorBox"
                :style="'background-color:'+color"
                draggable = "true"
                v-on:dragstart = "dragstart(color)">
            </div>
        </div>    
    </div>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
    props:['dailyStickers', 'child'],
    data:function(){
        return {
            colors:['red', 'blue', 'yellow', 'purple', 'green', 'orange'],
            dropColor:''
        }
    },
    methods:{
        ...mapMutations([
            'addDailySticker',
            'removeDailySticker'
        ]),
        dragstart: function(color) {
            console.log('dragstart')
            this.dropColor = color;
        },
        drop: function() {
            let vm = this;
            this.addDailySticker({child:vm.child.name, color:vm.dropColor});
            this.dropColor = '';
        },
        dragover: function (ev) {
            ev.preventDefault()
            return true;
        },
        dragstartRemove: function(index){
            this.stickerRemoveIndex = index;
        },
        dropRemove: function() {
            let vm = this;
            console.log('removing')
            this.removeDailySticker({child:vm.child.name, index:vm.stickerRemoveIndex})
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
    .sticker {
        height:15%;
        margin:.5em;
    }
    .stickerBox {
        width:10em;
        height:15em;
        border:5px solid grey;
        border-top:0px;
    }
    .colorBox {
        height:16%;
        width:5em;
        margin:.5em;
    }
    .pickerBox {
        height:15em;
    }
</style>
