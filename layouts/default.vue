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
      siteName: 'conduit',
    };
  },
};
</script>
