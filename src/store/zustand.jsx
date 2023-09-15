import create from "zustand";

export const useZustand = create(set => ({
  chatMessages: [],
  setChatMessages: newMessages => set({ chatMessages: [...newMessages] }),
  clearChatMessages: () => set({ chatMessages: [] }),
  shownStatusBar: "light-content",
  setShownStatusBar: () =>
    set(state => ({
      shownStatusBar:
        state.shownStatusBar === "light-content"
          ? "dark-content"
          : "light-content",
    })),
}));
