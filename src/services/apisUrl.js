const apiUrls = {
  auth: {
    signup: {
      method: "post",
      url: "auth/signup",
    },
    login: {
      method: "post",
      url: "auth/login",
    },
    forgetPass: {
      method: "post",
      url: "auth/forget",
    },
    resetApi: {
      method: "post",
      url: "auth/reset",
    },
    usermediaList: {
      method: "get",
      url: "auth/user/medialist",
    },
    detailAboutMedia: {
      method: "get",
      url: "auth/user/detailData/",
    },
  },
  admin: {
    createThumb: {
      method: "post",
      url: "admin/createthumbnail",
    },
    createMedia: {
      method: "post",
      url: "admin/create_media",
    },
    listThumb: {
      method: "get",
      url: "admin/list_thumb",
    },
    deleteThumb: {
      method: "delete",
      url: "admin/delete_thumb/",
    },
    listMedia: {
      method: "get",
      url: "admin/list_media",
    },
    deleteMd: {
      method: "delete",
      url: "admin/delete_media/",
    },
    updateTh: {
      method: "post",
      url: "admin/update_thumb/",
    },
    editTh: {
      method: "post",
      url: "admin/edit_thumb/",
    },
    editMd: {
      method: "post",
      url: "admin/edit_media/",
    },
    listUsers: {
      method: "get",
      url: "admin/users",
    },
    userStatus: {
      method: "post",
      url: "admin/status/",
    },
    changePass: {
      method: "post",
      url: "user/change_password",
    },
    profileUpdate: {
      method: "post",
      url: "user/update_profile",
    },
    profileEdit: {
      method: "get",
      url: "user/edit_profile",
    },
    dashboard: {
      method: "get",
      url: "admin/dashboard",
    },
    purchaseMd: {
      method: "post",
      url: "user/media_purchase/",
    },
    totalPurchase: {
      method: "get",
      url: "user/total_purchase/",
    },
    individualPurchase: {
      method: "get",
      url: "user/purchased/",
    },
    purchaseDetail: {
      method: "get",
      url: "user/purchased_detail/",
    },
    searchApi :{
      method:"post",
      url: "/user/search"
    }
  },
};
// 1

export default apiUrls;
