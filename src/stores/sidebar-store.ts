import { createStore } from "zustand/vanilla";

export type SidebarState = {
  isOpen: boolean;
};

export type SidebarActions = {
  updateSidebar: () => void;
};

export type SidebarStore = SidebarState & SidebarActions;

export const defaultInitState: SidebarState = {
  isOpen: true,
};

export const createSidebarStore = (
  initState: SidebarState = defaultInitState
) => {
  return createStore<SidebarStore>()((set) => ({
    ...initState,
    updateSidebar: () =>
      set((state) => ({
        isOpen: !state.isOpen,
      })),
  }));
};
