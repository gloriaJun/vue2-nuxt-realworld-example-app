import { mount } from '@vue/test-utils';
import Layout from '@/layouts/default.vue';

describe('Counter.vue', () => {
  test('Setup correctly', () => {
    expect(true).toBe(true)
  })

  test('snapshot', () => {
    const wrapper = mount(Layout)
    expect(wrapper.element).toMatchSnapshot()
  })
})
