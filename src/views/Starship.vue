<template>
  <main>
    <Loader v-if="loading"/>
    <ErrorHandler v-else-if="error"
                  :err="error">
    </ErrorHandler>
    <article v-else>
    <BackButton/>
      <section class="heading">{{starship.name | capitalize}}</section>
      <SectionItem title="Model"
                   :data="starship.model"/>
      <SectionItem title="Hyperdrive rating"
                   :data="starship.hyperdrive_rating"/>
      <SectionItem title="Passengers"
                   :data="starship.passengers"/>
      <SectionItem title="Max atmosphering speed"
                   :data="starship.max_atmosphering_speed"/>
      <SectionItem title="Manufacturer"
                   :data="starship.manufacturer"/>
      <SectionItem title="Crew"
                   :data="starship.crew"/>
      <SectionItem title="Cargo capacity"
                   :data="starship.cargo_capacity"/>
    </article>
  </main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import SectionItem from '@/components/SectionItem.vue';
import Loader from '@/components/Loader.vue';
import ErrorHandler from '@/components/ErrorHandler.vue';
import BackButton from '@/components/BackButton.vue';

export default {
  name: 'Starship',
  data () {
    return {
      loading: false,
      error: ''
    };
  },
  props: ['id'],
  components: {
    SectionItem,
    Loader,
    ErrorHandler,
    BackButton
  },
  computed: {
    ...mapGetters(['getStarship']),
    starship () {
      return this.getStarship(this.id);
    }
  },
  methods: {
    ...mapActions(['fetchStarship']),
    fetchData () {
      this.loading = true;
      this.fetchStarship(this.id).then((error) => {
        this.loading = false;
        this.error = error;
      });
    }
  },
  created () {
    this.fetchData();
  },
  watch: {
    '$route.params.id': 'fetchData'
  }
};
</script>
