import { mount } from '@vue/test-utils';
import IndexPage from '@/pages/index.vue';
import AppBanner from '@/components/app-banner.vue';

describe('IndexPage', () => {

  const build = () => {
    const wrapper = mount(IndexPage, {
      stubs: ['nuxt-link'],
    });

    return {
      wrapper,
      Banner: () => wrapper.find(AppBanner),
      // userProfile: () => wrapper.find(VUserProfile)
    }
  }

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
