import { shallowMount } from '@vue/test-utils';
import AppBanner from '@/components/app-banner.vue';

const siteName = 'siteName';

describe('Banner.vue', () => {

  it('should match the snapshot', () => {
    const wrapper = shallowMount(AppBanner, {
      propsData: { siteName: siteName },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

})
