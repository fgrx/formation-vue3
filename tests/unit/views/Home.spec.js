import { mount } from "@vue/test-utils";
import Vuex from "vuex";

import Home from "../../../src/views/Home.vue";
import RessourceItem from "../../../src/components/RessourceItem.vue";

import ressources from "../../../src/store/modules/ressource";

import RessourcesMock from "../../mocks/ressources";

describe(">>>>>> Home", () => {
  it("should display one ressource component by ressource in store", () => {
    const store = new Vuex.Store({
      modules: {
        ressources,
      },
    });

    store.state.ressources.ressources = RessourcesMock;

    const wrapper = mount(Home, { global: { plugins: [store] } });
    expect(wrapper.findAllComponents(RessourceItem).length).toBe(
      RessourcesMock.length
    );
  });
});
