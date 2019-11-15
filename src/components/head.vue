<template>
    <div class="head">
         123456
         <p>{{getList}}</p>
         <p v-num='color'>1234</p>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name: 'q_head',
    data () {
        return {
          color:'yellow',
          msg: '12'
        }
      },
      computed: {
        ...mapState({
          getList:state=>state.user.getList
        })
      },
}
</script>
    
<style>

</style>
