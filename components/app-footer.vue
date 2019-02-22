<template>
  <footer>
    <div class="container">
      <nuxt-link class="logo-font" to="/">
        {{ siteName }}
      </nuxt-link>
      <span class="attribution">
        An interactive learning project from
        <a href="https://thinkster.io">
          Thinkster
        </a>.
        Code &amp; design licensed under MIT.
      </span>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
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
