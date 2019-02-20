import { shallowMount } from '@vue/test-utils';
import AppFooter from '@/components/app-footer.vue';

const siteName = 'siteName';

describe('AppFooter.vue', () => {

  const build = () => {
    const wrapper = shallowMount(AppFooter, {
      stubs: ['nuxt-link'],
      propsData: { siteName: siteName },
    });

    return {
      wrapper,
    }
  }

  it('should match the snapshot', () => {
    const { wrapper } = build();
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('check logo link', () => {
    const { wrapper } = build();

    wrapper.find('.logo-font').trigger('click');
    expect(window.location.href).toBe(`http://${window.location.host}/`);
  });

  it('check logo name', () => {
    const { wrapper } = build();
    expect(wrapper.find('.logo-font').text()).toBe(siteName);
  });
})
