const TOGGLE_UPDATE = "update/TOGGLE_UPDATE";

export const toggleUpdate = (payload) => ({ type: TOGGLE_UPDATE, payload });

// initial state - 통 - store
const initialState = {
  isUpdate: false,
};

// reducer - 통에 접근해서 바꿔주는애
export default function updateReducer(state = initialState, { payload, type }) {
  switch (type) {
    case TOGGLE_UPDATE:
      return { ...state, isUpdate: payload };
    default:
      return state;
  }
}
