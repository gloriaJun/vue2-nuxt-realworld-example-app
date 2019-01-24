import { mount } from '@vue/test-utils';
import AppBanner from '@/components/app-banner.vue';

const siteName = 'siteName';

describe('Banner.vue', () => {

  test('snapshot', () => {
    const wrapper = mount(AppBanner, {
      propsData: { siteName: siteName }
    });
    expect(wrapper.element).toMatchSnapshot();
  });

})
