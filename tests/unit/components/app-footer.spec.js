import { mount } from '@vue/test-utils';
import AppFooter from '@/components/app-footer.vue';

describe('AppFooter.vue', () => {

  test('snapshot', () => {
    const wrapper = mount(AppFooter);
    expect(wrapper.element).toMatchSnapshot();
  });

  test('check logo link', () => {
    const siteName = 'siteName';
    const wrapper = mount(AppFooter, {
      propsData: { siteName: siteName }
    });

    wrapper.find('.logo-font').trigger('click');
    expect(window.location.href).toBe(`http://${window.location.host}/`);
  });

  test('check logo name', () => {
    const siteName = 'siteName';
    const wrapper = mount(AppFooter, {
      propsData: { siteName: siteName }
    });

    expect(wrapper.find('.logo-font').text()).toBe(siteName);
  });
})
