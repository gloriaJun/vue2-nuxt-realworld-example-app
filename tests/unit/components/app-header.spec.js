import { mount } from '@vue/test-utils';
import AppHeader from '@/components/app-header.vue';

const siteName = 'siteName';

describe('Header.vue', () => {

  test('snapshot', () => {
    const wrapper = mount(AppHeader, {
      propsData: { siteName: siteName },
      stubs: ['nuxt-link'],
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  test('check brand link', () => {
    const wrapper = mount(AppHeader, {
      propsData: { siteName: siteName },
      stubs: ['nuxt-link'],
    });

    wrapper.find('.navbar-brand').trigger('click');
    expect(window.location.href).toBe(`http://${window.location.host}/`);
  });

  test('check brand name', () => {
    const wrapper = mount(AppHeader, {
      propsData: { siteName: siteName },
      stubs: ['nuxt-link'],
    });

    expect(wrapper.find('.navbar-brand').text()).toBe(siteName);
  });

  test('check home link', () => {
    const wrapper = mount(AppHeader, {
      propsData: { siteName: siteName },
      stubs: ['nuxt-link'],
    });

    const el = wrapper.findAll('li.nav-item');
    expect(el.length).toBe(4);
  });

})
