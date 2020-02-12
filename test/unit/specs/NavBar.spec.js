import Vue from 'vue';
import NavBar from '@/components/NavBar';

describe('NavBar.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(NavBar);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.title').textContent)
      .toEqual('BookList');
  });
});
