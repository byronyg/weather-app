<template>
  <div id="app">
    <img :src="imageUrl" alt="" />
    <div class="nav">
      <!-- <ul>
        <li>WeatherApp</li>
        <li>About</li>
      </ul> -->
      <p>WeatherApp</p>
    </div>
  </div>
</template>

<script>
import { getRandomPhoto } from "@/services/unsplash.js";

export default {
  name: "Home",
  created() {
    this.searchPhoto();
  },
  data: () => ({
    query: "yellow",
    dataLoading: false,
    unsplashData: null,
  }),
  computed: {
    imageUrl() {
      if (this.unsplashData) return this.unsplashData.urls.regular;
      return null;
    },
  },

  methods: {
    searchPhoto() {
      const param = {
        featured: true,
        query: this.query,
      };

      this.dataLoading = true;
      getRandomPhoto(param).then((res) => {
        this.unsplashData = res;
        this.dataLoading = false;
      });
    },
  },
};
</script>

<style scoped>
#app {
  position: fixed;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  z-index: -1;
}
#app img {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  min-width: 50%;
  min-height: 50%;
}
.nav p {
  font-size: 45px;
  color: red;
  position: relative;
  z-index: 1;
}
</style>
