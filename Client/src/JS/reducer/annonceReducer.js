import { AJOUT_ANNONCE_SUCCESS, AJOUT_FAIL } from "../const/productconst";

const initialState = {
  product: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case AJOUT_ANNONCE_SUCCESS:
      return { ...state,  product: payload.product };
    case AJOUT_FAIL:
      return { ...state, product: null };
    default:
      return state;
  }
};