<template>
  <div>
    <div>
      <div v-for="item in vm" :key="item.path">
        <router-link v-for="items in item.children" :key="items.name" :to="item.path">userOne</router-link>
      </div>
      <!-- <router-link to="/user/userTwo">userTwo</router-link> -->
      {{vm}}
    </div>
    <div>
      <router-view></router-view>
    </div>
    <p>
      <span class="span1">user</span>
      {{v}}
      {{o}}
      123
    </p>
    <v-header></v-header>

  </div>
</template>

<script>

import { mapState, mapActions, mapMutations } from "vuex";
export default {
  name: "user",
  computed: {
    ...mapState({
      v: state => state.user.num,
      o: state => state.user.getList,
      vm: state => state.home.userFo
    })
  },
  mounted() {
    console.log(13);
  },
  methods: {
    ...mapMutations({
      getData: "user/getData"
    }),
    ...mapActions({
      getLiter: "user/getLiter"
    })
  }
};
</script>

<style>
</style>