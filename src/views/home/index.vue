<template>
  <div>
    <span @click="btn">跳转</span>
    <button @click="btner">点击出现</button>
    <span id="span"></span>
    <v-boy>
      <template slot="foot">脚步</template>
      <template #head="datas">头部<span>{{datas.datas.a}}</span></template>
    </v-boy>
  </div>
</template>

<script>
import vBoy from "@/components/boy";
import { getRouters } from "../../util/getUser";
import routes from "../../util/route";
import Router from "../../router";
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  name: "home",
  components: {
    vBoy
  },
  computed: {
    ...mapState({})
  },
  mounted() {
    // Profile().$mount('#span')
  },
  methods: {
    ...mapActions({
      getInfo: "home/getInfo"
    }),
    btner() {
      this.$Profile.$mount("#span");
    },
    btn() {
      // console.log(Router)
      Router.addRoutes(getRouters(2, routes));
      this.getInfo(getRouters(2, routes));
      this.$router.history.push("/user");
    }
  }
};
</script>

<style>
</style>