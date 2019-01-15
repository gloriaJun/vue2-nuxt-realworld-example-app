import { mount } from '@vue/test-utils';
import AppFooter from '@/components/AppFooter.vue';

describe('AppFooter.vue', () => {

  test('snapshot', () => {
    const wrapper = mount(AppFooter);
    expect(wrapper.element).toMatchSnapshot();
  });

  test('active class to home', () => {
    // const wrapper = mount(Header);
    // expect(wrapper.element).toMatchSnapshot();
  });

})
