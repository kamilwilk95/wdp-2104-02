/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

export const getProductsToCompare = ({ products }) =>
  products.filter(item => item.compare === true);

/* function*/

const addProductToFavourite = (state, action) => {
  return state.map(currentStateElement => {
    if (currentStateElement.id !== action.payload.id) {
      return currentStateElement;
    }

    return {
      ...currentStateElement,
      isFavourite: action.payload.isFavourite,
    };
  });
};

const addMyRating = (state, action) => {
  return state.map(currentStateElement => {
    if (currentStateElement.id !== action.payload.id) {
      return currentStateElement;
    }
    return {
      ...currentStateElement,
      myRating: action.payload.myRating,
    };
  });
};

const addProductToCompare = (state, action) => {
  return state.map(currentStateElement => {
    if (currentStateElement.id !== action.id) {
      return currentStateElement;
    } else {
      return {
        ...currentStateElement,
        compare: true,
      };
    }
  });
};

const removeProductFromCompare = (state, action) => {
  return state.map(currentStateElement => {
    if (currentStateElement.id !== action.id) {
      return currentStateElement;
    } else {
      return {
        ...currentStateElement,
        compare: false,
      };
    }
  });
};
/* action name creator */
const reducerName = 'product';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_FAVOURITE = createActionName('ADD_FAVOURITE');
const ADD_RATING = createActionName('ADD_RATING');
const ADD_COMPARE = createActionName('ADD_COMPARE');
const REMOVE_COMPARE = createActionName('REMOVE_COMPARE');

/* action creators */
export const addFavourite = payload => ({ payload, type: ADD_FAVOURITE });
export const addRating = payload => ({ payload, type: ADD_RATING });
export const addCompare = id => ({ id, type: ADD_COMPARE });
export const removeCompare = id => ({ id, type: REMOVE_COMPARE });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_FAVOURITE: {
      return addProductToFavourite(statePart, action);
    }
    case ADD_RATING: {
      return addMyRating(statePart, action);
    }
    case ADD_COMPARE: {
      return addProductToCompare(statePart, action);
    }
    case REMOVE_COMPARE: {
      return removeProductFromCompare(statePart, action);
    }
    default:
      return statePart;
  }
}
