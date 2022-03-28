//Action Types:
export const Types = {
  LOGIN: "LOGIN",
  ADD_USER: "ADD_USER",
  UPDATE_USER: "UPDATE_USER",
  UPDATE_PROFILE_PICTURE: "UPDATE_PROFILE_PICTURE",
  FORM_SUBMITION_STATUS: "FORM_SUBMITION_STATUS",
};
//Action Creators:
export const ActionCreators = {
  addProfile: (user) => ({ type: Types.ADD_USER, payload: { user } }),

  updateProfileImage: (image) => ({
    type: Types.UPDATE_PROFILE_PICTURE,
    payload: { image },
  }),

  updateProfile: (user) => ({ type: Types.UPDATE_USER, payload: { user } }),

  formSubmittionStatus: (status) => ({
    type: Types.FORM_SUBMITION_STATUS,
    payload: { status },
  }),

  login: (user) => ({ type: Types.LOGIN, payload: { user } }),
};
