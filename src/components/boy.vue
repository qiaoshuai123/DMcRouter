<template>
  <div>
    <slot name="head" :datas="datas"></slot>
    中间
    <slot name="foot" ></slot>
  </div>
</template>

<script>
export default {
data() {
  return {
    datas:{
      a:13
    }
  }
},
};
</script>

<style>
</style>