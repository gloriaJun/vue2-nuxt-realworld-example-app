<template>
  <nav class="navbar navbar-light">
    <div class="container">
      <nuxt-link class="navbar-brand" to="/">
        conduit
      </nuxt-link>

      <ul class="nav navbar-nav pull-xs-right">
        <li class="nav-item">
          <nuxt-link
            class="nav-link"
            to="/"
          >
            Home
          </nuxt-link>
        </li>

        <li class="nav-item">
          <nuxt-link
            class="nav-link"
            to="/post"
          >
            <i class="ion-compose" />&nbsp;New Post
          </nuxt-link>
        </li>

        <li class="nav-item">
          <nuxt-link
            class="nav-link"
            to="/setting"
          >
            <i class="ion-gear-a" />&nbsp;Settings
          </nuxt-link>
        </li>

        <li class="nav-item">
          <nuxt-link
            class="nav-link"
            to="/signUp"
          >
            Sign up
          </nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppHeader',
  mounted() {
  },
};
</script>
