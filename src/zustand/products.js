import create from "zustand";
import { _immer } from "./helpers";

const useProductsStore = create(set => ({
  activeTab: "Auto Parts",
  setActiveTab: str => {
    set(state => (state.activeTab = str));
  },
}));
export default useProductsStore;
