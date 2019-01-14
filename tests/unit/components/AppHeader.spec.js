import { mount } from '@vue/test-utils';
import Header from '@/components/AppHeader.vue';

describe('Header.vue', () => {

  test('snapshot', () => {
    const wrapper = mount(Header);
    expect(wrapper.element).toMatchSnapshot();
  });

})
