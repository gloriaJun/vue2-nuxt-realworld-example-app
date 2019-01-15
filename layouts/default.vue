<template>
  <div id="app">
    <app-header />
    <nuxt />
    <app-footer
      :site-name="siteName"
    />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';

export default {
  name: 'DefaultLayout',
  components: {
    AppHeader,
    AppFooter,
  },
  data() {
    return {
      siteName: 'conduit',
    };
  },
};
</script>
