import { ReactNode } from "react";
import create, { UseStore } from "zustand";
import { _immer } from "./helpers";

interface UIStore {
  isBackdropVisible: boolean;
  isMobileNavbarExpanded: boolean;
  isKeyboardOpened: boolean;
  showBackdrop(): void;
  hideBackdrop(): void;
  expandMobileNavbar(): void;
  shrinkMobileNavbar(): void;
  keyboardOpened(): void;
  keyboardClosed(): void;
  refs: any;
  setRef: (key: string, ref: ReactNode) => void;
}

const useUIStore: UseStore<UIStore> = create(
  _immer((set: any, get: any, api: any) => ({
    isBackdropVisible: false,
    isMobileNavbarExpanded: false,
    isKeyboardOpen: false,
    showBackdrop: () => {
      set((state: UIStore) => {
        state.isBackdropVisible = true;
      });
    },
    hideBackdrop: () => {
      set((state: UIStore) => {
        state.isBackdropVisible = false;
      });
    },
    expandMobileNavbar: () => {
      set((state: UIStore) => {
        state.isMobileNavbarExpanded = true;
      });
    },

    shrinkMobileNavbar: () => {
      set((state: UIStore) => {
        state.isMobileNavbarExpanded = false;
      });
    },

    keyboardOpened: () => {
      set((state: UIStore) => {
        state.isKeyboardOpened = true;
      });
    },

    keyboardClosed: () => {
      set((state: UIStore) => {
        state.isKeyboardOpened = false;
      });
    },
    refs: {},
    setRef: (key, ref) => {
      set((state: UIStore) => (state.refs[key] = ref));
    },
  })),
);

export default useUIStore;
