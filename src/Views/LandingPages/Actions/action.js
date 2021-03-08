export const getSlugPages = "GET_SLUG_PAGES";
export const getSlugDetail = "GET_SLUG_DETAIL";

export function getSlugPagesAction(data) {
  return {
    type: getSlugPages,
    payload: data,
  };
}

export function getSlugDetailAction(data) {
    return {
      type: getSlugDetail,
      payload: data,
    };
  }