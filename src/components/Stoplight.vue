<template>
    <div class = "flex-column stopBox">
        <div class = "light"
            v-for = "(light, index) in lights"
            v-bind:key="index"
            :style = "'background-color:'+(child.light === light ? light : 'black')"
            v-on:click = "changeColor()">
        </div>
    </div>    
</template>
<script>
export default {
    props:['child'],
    data:function(){
        return {
            lights:['red', 'yellow', 'green']
        }
    },
    beforeMount(){
        console.log(this.child);
    },
    methods:{
        changeColor:function(){
            
        }
    }
}
</script>
<style>
.light {
    border-radius: 100%;
    height: 30%;
    width: 90%;
    margin-top:1.66%;
    margin-bottom:1.66%;
    margin-left: auto;
    margin-right:auto;
}
.stopBox {
    width:5em;
    height:15em;
    border:5px solid grey;
}
</style>
