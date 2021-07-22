<template>
  <div class="back-btn">
      <router-link to="/">
        <img src="@/assets/back-button.png" alt="Starships">
      </router-link>
  </div>
</template>

<script>
export default {
  name: 'BackButton'
};
</script>

<style lang="scss">
.back-btn {

  img {
    width: 64px;
    height: 64px;
  }
}
</style>
