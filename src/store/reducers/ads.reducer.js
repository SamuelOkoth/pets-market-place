import { postRequest } from "../../config/axiosConfig"
import { createAd } from "../slices/ads.slice";

export function createAdsAsync(data) {
  return async (dispatch, _getState) => {
    const res = await postRequest("api/v1/ads", data);
    dispatch(createAd(res?.status?.user_token));
    window.location.replace(res.checkout_link)
  }
}
