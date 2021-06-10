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
  })),
);

export default useUIStore;
