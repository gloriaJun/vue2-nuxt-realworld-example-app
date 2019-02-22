import {
  mount,
  createLocalVue,
} from '@vue/test-utils';
import Vuex from 'vuex';
import IndexPage from '@/pages/index.vue';
import AppBanner from '@/components/app-banner.vue';
import initialStore from '@/store';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('IndexPage', () => {
  let store;

  const build = () => {
    const wrapper = mount(IndexPage, {
      stubs: ['nuxt-link'],
      localVue,
      store: store,
    });

    return {
      wrapper,
      Banner: () => wrapper.find(AppBanner),
      // userProfile: () => wrapper.find(VUserProfile)
    }
  }

  // reset variables when test called
  beforeEach(() => {
    store = initialStore;
  })

  it('should match the snapshot', () => {
    // given: nothing
    // when: component is mounted
    const { wrapper } = build();

    // then: created
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('renders main child components', () => {
    // given: index page is mounted
    // when: child component found
    const { Banner } = build();

    // then: child component is exists
    expect(Banner().exists()).toBe(true);
    // expect(userProfile.exists()).toBe(true)
  });

})
