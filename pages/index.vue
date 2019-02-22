<template>
  <div class="home-page">

    <app-banner
      :site-name=siteName
    />

    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <div class="feed-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <nuxt-link
                  class="nav-link disabled"
                  to="/yours"
                >
                  Your Feed
                </nuxt-link>
              </li>

              <li class="nav-item">
                <nuxt-link
                  class="nav-link active"
                  to="/"
                >
                  Global Feed
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-md-3">
          <div class="sidebar">
            <p>Popular Tags</p>

            <div class="tag-list">
              <a href="" class="tag-pill tag-default">programming</a>
              <a href="" class="tag-pill tag-default">javascript</a>
              <a href="" class="tag-pill tag-default">emberjs</a>
              <a href="" class="tag-pill tag-default">angularjs</a>
              <a href="" class="tag-pill tag-default">react</a>
              <a href="" class="tag-pill tag-default">mean</a>
              <a href="" class="tag-pill tag-default">node</a>
              <a href="" class="tag-pill tag-default">rails</a>
           </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import {
  mapState,
} from 'vuex';
import AppBanner from '@/components/app-banner.vue';

export default {
  name: 'IndexPage',
  components: {
    AppBanner,
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapState({
      siteName: 'siteName',
    }),
  },
};
</script>
