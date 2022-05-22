import { authenticatedApi, unAuthApi } from "./apis.helper";
import apiUrls from "./apisUrl";

export const handleLoginApi = async (data) => {
  let response = await unAuthApi(
    apiUrls.auth.login.method,
    apiUrls.auth.login.url,
    data
  );
  return response;
};

export const handleSingUpApi = async (data) => {
  let response = await unAuthApi(
    apiUrls.auth.signup.method,
    apiUrls.auth.signup.url,
    data
  );
  return response;
};

export const handleForgetApi = async (data) => {
  let response = await unAuthApi(
    apiUrls.auth.forgetPass.method,
    apiUrls.auth.forgetPass.url,
    data
  );
  return response;
};

export const handleResetPass = async (data) => {
  let response = await unAuthApi(
    apiUrls.auth.resetApi.method,
    apiUrls.auth.resetApi.url,
    data
  );
  return response;
};

// authenticated user only
// for thumbnail create function

export const createThumbnail = async (data) => {
  let response = await authenticatedApi(
    apiUrls.admin.createThumb.method,
    apiUrls.admin.createThumb.url,
    data
  );
  return response;
};

// for media
export const createMedia = async (data) => {
  let response = await authenticatedApi(
    apiUrls.admin.createMedia.method,
    apiUrls.admin.createMedia.url,
    data
  );
  return response;
};

export const listThumb = async () => {
  let response = await authenticatedApi(
    apiUrls.admin.listThumb.method,
    apiUrls.admin.listThumb.url
  );
  return response;
};

// to delete thumbnail
export const deleteThumb = async (data) => {
  let response = await authenticatedApi(
    apiUrls.admin.deleteThumb.method,
    apiUrls.admin.deleteThumb.url + data
  );
  return response;
};

// list media
export const listMedia = async (data) => {
  let response = await authenticatedApi(
    apiUrls.admin.listMedia.method,
    apiUrls.admin.listMedia.url
  );
  return response;
};

// delete media
export const deleteMedia = async (data) => {
  let response = await authenticatedApi(
    apiUrls.admin.deleteMd.method,
    apiUrls.admin.deleteMd.url + data
  );
  return response;
};

// update thumbnail
export const updateThumb = async (data, id) => {
  let response = await authenticatedApi(
    apiUrls.admin.updateTh.method,
    apiUrls.admin.updateTh.url + id,
    data
  );
  return response;
};

// edit Thumb
export const editThumb = async (data) => {
  let response = await authenticatedApi(
    apiUrls.admin.editTh.method,
    apiUrls.admin.editTh.url + data
  );
  return response;
};

// edit media
export const editMedia = async (data) => {
  let response = await authenticatedApi(
    apiUrls.admin.editMd.method,
    apiUrls.admin.editMd.url + data
  );
  return response;
};

export const listUsers = async () => {
  let response = await authenticatedApi(
    apiUrls.admin.listUsers.method,
    apiUrls.admin.listUsers.url
  );
  return response;
};

// user status
export const userBanned = async (id) => {
  let response = await authenticatedApi(
    apiUrls.admin.userStatus.method,
    apiUrls.admin.userStatus.url + id
  );
  return response;
};

export const userMedialist = async () => {
  let response = await unAuthApi(
    apiUrls.auth.usermediaList.method,
    apiUrls.auth.usermediaList.url
  );
  return response;
};

// change password
export const changePassword = async (data) => {
  let response = await authenticatedApi(
    apiUrls.admin.changePass.method,
    apiUrls.admin.changePass.url,
    data
  );
  return response;
};

// update profile
export const updateProfile = async (data) => {
  let response = await authenticatedApi(
    apiUrls.admin.profileUpdate.method,
    apiUrls.admin.profileUpdate.url,
    data
  );
  return response;
};

// edit profile
export const editProfile = async () => {
  let response = await authenticatedApi(
    apiUrls.admin.profileEdit.method,
    apiUrls.admin.profileEdit.url
  );
  return response;
};

// dashboard
export const dashContent = async () => {
  let response = await authenticatedApi(
    apiUrls.admin.dashboard.method,
    apiUrls.admin.dashboard.url
  );
  return response;
};

// for unauth user list of media
export const mediaDetail = async (id) => {
  let response = await authenticatedApi(
    apiUrls.auth.detailAboutMedia.method,
    apiUrls.auth.detailAboutMedia.url + id
  );
  return response;
};

// to purchase media
export const mediaPurchase = async (id,token) => {
  let response = await authenticatedApi(
    apiUrls.admin.purchaseMd.method,
    apiUrls.admin.purchaseMd.url + id,
    token
  );
  return response;
};

// total purchased
export const totalMediaPurchased = async () => {
  let response = await authenticatedApi(
    apiUrls.admin.totalPurchase.method,
    apiUrls.admin.totalPurchase.url
  );
  return response;
};

// individual purchase
export const individualPurchaseApi = async () => {
  let response = await authenticatedApi(
    apiUrls.admin.individualPurchase.method,
    apiUrls.admin.individualPurchase.url
  );
  return response;
};

// purchase media details
export const getDetailPurchase = async (id) => {
  let response = await authenticatedApi(
    apiUrls.admin.purchaseDetail.method,
    apiUrls.admin.purchaseDetail.url + id
  );
  return response;
};

// for search
export const getSearchData = async (data) => {
  let response = await authenticatedApi(
    apiUrls.admin.searchApi.method,
    apiUrls.admin.searchApi.url,
    data
  );
  return response;
};
