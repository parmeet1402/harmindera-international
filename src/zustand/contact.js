import create from "zustand";
import produce from "immer";

const useContactUsStore = create((set, get) => ({
  formState: {
    name: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  },
  updateFormState: obj => {
    set(
      produce(draft => {
        if (obj.name !== undefined) {
          draft.formState.name = obj.name;
        }
        if (obj.email !== undefined) {
          draft.formState.email = obj.email;
        }
        if (obj.phone !== undefined) {
          draft.formState.phone = obj.phone;
        }
        if (obj.country !== undefined) {
          draft.formState.country = obj.country;
        }
        if (obj.message !== undefined) {
          draft.formState.message = obj.message;
        }
      }),
    );
    // if (obj.name !== undefined) {
    //   set(produce(state => (state.formState.name = obj.name)));
    // }
    // set(
    //   produce(state => {
    //     state.formState.name = obj.name || get().formState.name;
    //     state.formState.email = obj.email || get().formState.email;
    //     state.formState.phone = obj.phone || get().formState.phone;
    //     state.formState.country = obj.country || get().formState.country;
    //     state.formState.message = obj.message || get().formState.message;
    //   }),
    // );
  },
  resetFormState: () => {
    set(state => {
      state.formState = {
        name: "",
        email: "",
        phone: "",
        country: "",
        message: "",
      };
    });
  },
}));

export default useContactUsStore;
