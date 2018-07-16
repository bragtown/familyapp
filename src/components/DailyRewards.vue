<template>
    <div class = "flex-row dailyRewards">
        <div 
            class = "column-reverse stickerBox"
            droppable = "true"
            v-on:drop = "drop()"
            v-on:dragover="dragover">
        <div 
                class = "sticker pointer" 
                v-for="(sticker, index) in child.daily_stickers" 
                v-bind:key="index"
                :style="'background-color:' + sticker.color"
                draggable = "true"
                v-on:dragstart = "dragstartRemove(sticker._id)"
                v-on:touchstart = "dragstartRemove(sticker._id, $event)"
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
                class = "colorBox pointer"
                :style="'background-color:'+color"
                draggable = "true"
                v-on:dragstart = "dragstart(color)"
                v-on:touchstart="dragstart(color, $event)"
                v-on:touchmove="touchmove"
                v-on:touchcancel="touchend"
                v-on:touchend="touchend">
            </div>
        </div>    
    </div>
</template>
<script>
import {mapMutations, mapActions} from 'vuex'
export default {
    props:['child'],
    data:function(){
        return {
            colors:['red', 'blue', 'yellow', 'purple', 'green', 'orange'],
            dropColor:'',
            rect:{},
            removeRect:{},
            draggedNode:{},
            stickerRemoveId:''
        }
    },
    mounted:function(){
        this.rect = document.getElementsByClassName('stickerBox')[0].getBoundingClientRect();
    },
    methods:{
        ...mapActions([
            'addDailySticker',
            'getDailyStickers',
            'removeDailySticker'
        ]),
        dragstart: function(color, event) {
            if(event){
                this.draggedNode = event.target.cloneNode()
                this.draggedNode.style.position = "absolute"
                this.draggedNode.style.top = event.changedTouches[0].clientX +'px';
                this.draggedNode.style.left = event.changedTouches[0].clientY + 'px';
                this.draggedNode.style.height = '2em';
                this.draggedNode.style.width = '4em';
                document.body.appendChild(this.draggedNode);
            }
            this.dropColor = color;
        },
        drop: function() {
            let vm = this;
            this.addDailySticker({color:vm.dropColor, _id:vm.child._id});
            this.dropColor = '';
        },
        dragover: function (ev) {
            ev.preventDefault()
            return true;
        },
        dragstartRemove: function(_id, event){
            if(event){
                this.draggedNode = event.target.cloneNode()
                this.draggedNode.style.position = "absolute"
                this.draggedNode.style.top = event.changedTouches[0].clientX +'px';
                this.draggedNode.style.left = event.changedTouches[0].clientY + 'px';
                this.draggedNode.style.height = '2em';
                this.draggedNode.style.width = '4em';
                document.body.appendChild(this.draggedNode);
            }
            this.stickerRemoveId = _id;
        },
        dropRemove: function() {
            let vm = this;
            this.removeDailySticker({_id:vm.stickerRemoveId})
        },
        touchendRemove: function(touchevent) {
            let vm = this;
            if(!this.touchInRect(touchevent.changedTouches[0])){
                this.removeDailySticker({_id:vm.stickerRemoveId})
            }
            document.body.removeChild(this.draggedNode)
        },
        touchend:function(touchevent){
            let vm = this;
            if (this.touchInRect(touchevent.changedTouches[0])) {
                
                this.addDailySticker({color:vm.dropColor, _id:vm.child._id});
                this.dropColor = '';
            }
            document.body.removeChild(this.draggedNode)


        },
        touchmove:function(touchevent){
            this.draggedNode.style.top = event.changedTouches[0].clientY +'px';
            this.draggedNode.style.left = event.changedTouches[0].clientX + 'px';
        },
        touchInRect:function(change){
            return (change.clientX <= this.rect.right &&
               change.clientX >= this.rect.left &&
               change.clientY <= this.rect.bottom &&
               change.clientY >= this.rect.top)
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
