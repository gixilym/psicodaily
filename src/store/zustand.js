import create from "zustand";
import { WELCOME_PAGE } from "../utils/const.js";

export const useZustand = create(set => ({
  thisPage: WELCOME_PAGE,
  setThisPage: newPage => set({ thisPage: newPage }),

  chatMessages: [],
  setChatMessages: newMessages => set({ chatMessages: [...newMessages] }),
  clearChatMessages: () => set({ chatMessages: [] }),

  shownStatusBar: false,
  setShownStatusBar: () =>
    set(state => ({
      shownStatusBar: !state.shownStatusBar,
    })),

  nickNameUser: "Anónimo",
  setNickNameUser: newName => set({ nickNameUser: newName }),
  recordChat: [{}],
  recordChatIsReversed: false,
  setRecordChatIsReversed: () =>
    set(state => ({
      recordChatIsReversed: !state.recordChatIsReversed,
    })),
  setRecordChat: newMsg =>
    set(state => ({ recordChat: [...state.recordChat, newMsg] })),
  clearRecordChat: () => set({ recordChat: [] }),
  reverseRecordChat: () =>
    set(state => ({ recordChat: [...state.recordChat.reverse()] })),

  diaryTexts: "Empieza a escribir en tu diario...",
  setDiaryTexts: newTexts => set({ diaryTexts: newTexts }),
  clearDiaryTexts: () =>
    set({ diaryTexts: "Empieza a escribir en tu diario..." }),

  moodSelected: null,
  setMoodSelected: newMoodSelected => set({ moodSelected: newMoodSelected }),
  moodDate: "xx/xx/xxxx",
  setMoodDate: newDate => set({ moodDate: newDate }),
  moodDescription: "",
  setMoodDescription: newDescription =>
    set({ moodDescription: newDescription }),
}));
