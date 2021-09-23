import { shallowMount } from "@vue/test-utils";

import RessourceItem from "../../../src/components/RessourceItem.vue";
import RessourcesMock from "../../mocks/ressources";

import eventBus from "../../../src/plugins/eventBus";

describe(">>>>> RessourceItem", () => {
  const ressourceMock = RessourcesMock[0];
  ressourceMock.media = "video";

  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(RessourceItem, {
      propsData: { ressourceDatas: ressourceMock },
    });
  });

  it("should be contain ressource title", () => {
    expect(wrapper.find("[data-test-id='title']").text()).toBe(
      ressourceMock.title
    );
  });

  it("should send an event on bookmark button click", async () => {
    const bookMarkButton = wrapper.find("[data-test-id='bookmarkButton']");
    await bookMarkButton.trigger("click");
    const emissions = wrapper.emitted();
    expect(emissions["add-to-bookmarks"]).toBeTruthy();
  });

  it("should send an event on bookmark button click", async () => {
    const eventBusEmitMock = jest.fn();
    eventBus.emit = eventBusEmitMock;

    const openVideoButton = wrapper.find("[data-test-id='openVideoButton']");
    await openVideoButton.trigger("click");

    expect(eventBusEmitMock).toBeCalled();
  });

  it("should send an event on remove bookmark button click", async () => {
    wrapper = shallowMount(RessourceItem, {
      propsData: { ressourceDatas: ressourceMock, isBookmark: true },
    });

    const removeBookMarkButton = wrapper.find(
      "[data-test-id='removeBookmarkButton']"
    );
    await removeBookMarkButton.trigger("click");
    const emissions = wrapper.emitted();
    expect(emissions["remove-from-bookmarks"]).toBeTruthy();
  });
});
