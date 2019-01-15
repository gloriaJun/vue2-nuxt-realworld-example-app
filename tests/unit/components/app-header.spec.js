import { mount } from '@vue/test-utils';
import AppHeader from '@/components/AppHeader.vue';

describe('Header.vue', () => {

  test('snapshot', () => {
    const wrapper = mount(AppHeader);
    expect(wrapper.element).toMatchSnapshot();
  });

  test('check brand name', () => {
    // const wrapper = mount(Header);
    // expect(wrapper.element).toMatchSnapshot();
  });

  test('active class to home', () => {
    // const wrapper = mount(Header);
    // expect(wrapper.element).toMatchSnapshot();
  });

})
