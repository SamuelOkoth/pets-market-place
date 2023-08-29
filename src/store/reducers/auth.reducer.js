import { postRequest } from "../../config/axiosConfig"
import { setToken } from "../slices/auth.slice";

export function signInAsync(data) {
  return async (dispatch, _getState) => {
    const res = await postRequest("login", data);
    dispatch(setToken(res?.status?.user_token));
  }
}

export function signUpAsync(data) {
  return async (dispatch, _getState) => {
    const res = await postRequest("signup", data);
    return res;
  }
}

export function signOutAsync() {
  return async (dispatch, _getState) => {
    dispatch(setToken(null));
  }
}

export function resetPasswordAsync(data) {
  return async (dispatch, _getState) => {
    const res = await postRequest("api/v1/password/forgot", data)
    return res;
  }
}

export function changePasswordAsync(data) {
  return async (dispatch, _getState) => {
    const res = await postRequest("api/v1/password/reset", data)
    return res;
  }
}
