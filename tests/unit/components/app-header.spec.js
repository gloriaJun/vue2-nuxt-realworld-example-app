import { shallowMount } from '@vue/test-utils';
import AppHeader from '@/components/app-header.vue';

const siteName = 'siteName';

describe('Header.vue', () => {

  const build = () => {
    const wrapper = shallowMount(AppHeader, {
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

  it('check brand link', () => {
    const { wrapper } = build();

    wrapper.find('.navbar-brand').trigger('click');
    expect(window.location.href).toBe(`http://${window.location.host}/`);
  });

  it('check brand name', () => {
    const { wrapper } = build();
    expect(wrapper.find('.navbar-brand').text()).toBe(siteName);
  });

  it('check home link', () => {
    const { wrapper } = build();

    const el = wrapper.findAll('li.nav-item');
    expect(el.length).toBe(4);
  });

})
