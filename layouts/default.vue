<template>
  <div id="app">
    <app-header
      :site-name="siteName"
    />
    <nuxt />
    <app-footer
      :site-name="siteName"
    />
  </div>
</template>

<script>
import AppHeader from '@/components/app-header.vue';
import AppFooter from '@/components/app-footer.vue';

export default {
  name: 'DefaultLayout',
  components: {
    AppHeader,
    AppFooter,
  },
  data() {
    return {
    };
  },
  computed: {
    siteName () {
       return this.$store.state.siteName;
    },
  },
};
</script>
