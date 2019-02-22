<template>
  <div class="banner">
    <div class="container">
      <h1 class="logo-font">
        {{ siteName }}
      </h1>
      <p>A place to share your knowledge.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppBanner',
  props: {
    siteName: {
      type: String,
      default: '',
      require: false,
    },
  },
  data () {
    return {};
  },
};
</script>
