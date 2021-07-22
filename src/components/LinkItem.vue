<template>
    <router-link :to="route"
                 class="linkItem">
      <p class="title">{{title | capitalize}}</p>
      <p class="model">Model: {{model | capitalize}}</p>
      <p class="rating">Rating: {{rating | capitalize}}</p>
    </router-link>
</template>

<script>
export default {
  name: 'LinkItem',
  props: [
    'routeName',
    'title',
    'model',
    'rating',
    'id'
  ],
  computed: {
    route () {
      return `/${this.routeName}/${this.id}`;
    }
  }
};
</script>

<style lang="scss">
.linkItem {
  width: 100%;
  padding: 5px 10px;
  border-radius: 6px;
  margin-bottom: 10px;
  background-color: $star-wars-gray;
  font-weight: bold;

  .title {
    padding-bottom: 2px;
    font-size: 20px;
    color: $star-wars-yellow;
  }

  .model, .rating {
    padding-left: 4px;
    font-size: 16px;
  }

  &:hover {
    background-color: $star-wars-gray-opacity;
  }
}
</style>
