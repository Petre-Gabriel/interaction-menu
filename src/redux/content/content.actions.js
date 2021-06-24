import { contentActionTypes } from "./content.types";

export const updateContentData = data => ({
    type: contentActionTypes.UPDATE_CONTENT,
    payload: data
});