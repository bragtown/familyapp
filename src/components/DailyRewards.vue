<template>
    <div class = "flex-row dailyRewards">
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
                v-on:dragstart = "dragstartRemove(index)"
                v-on:touchstart = "dragstartRemove(index)"
                v-on:touchmove = "touchmove"
                v-on:touchcancel = "touchendRemove"
                v-on:touchend = "touchendRemove">
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
                v-on:dragstart = "dragstart(color)"
                v-on:touchstart="dragstart(color)"
                v-on:touchmove="touchmove"
                v-on:touchcancel="touchend"
                v-on:touchend="touchend">
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
            dropColor:'',
            rect:{},
            removeRect:{},
            canDrop:false
        }
    },
    mounted:function(){
        this.rect = document.getElementsByClassName('stickerBox')[0].getBoundingClientRect();
        console.log(this.rect)
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
        },
        touchendRemove: function() {
            let vm = this;
            if(!this.canDrop){
                console.log('removing')
                this.removeDailySticker({child:vm.child.name, index:vm.stickerRemoveIndex})
            }
        },
        touchend:function(color){
            let vm = this;
            if(vm.canDrop){    
                this.addDailySticker({child:vm.child.name, color:vm.dropColor});
                this.dropColor = '';
            }


        },
        touchmove:function(touchevent){
            let change = touchevent.changedTouches[0]
            this.canDrop = (
                change.clientX <= this.rect.right &&
                change.clientX >= this.rect.left &&
                change.clientY <= this.rect.bottom &&
                change.clientY >= this.rect.top);
        }
    }
}
</script>
<style>
    .dailyRewards {
        margin-left: auto;
        margin-right: auto;
        width:22em;
    }
    .sticker {
        height:15%;
        margin:.5em;
    }
    .stickerBox {
        width:15em;
        height:22em;
        border:5px solid grey;
        border-top:0px;
    }
    .colorBox {
        height:16%;
        width:5em;
        margin:.5em;
    }
    .pickerBox {
        height:22em;
    }
</style>
