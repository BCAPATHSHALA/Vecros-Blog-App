import { createSlice } from "@reduxjs/toolkit";
import {
  getItem,
  removeItem,
  setItem,
} from "../../utils/localStorageManagement";

const initialState = {
  loading: false,
  message: null,
  error: null,
  isAuthenticated: false,
  userData: null,
  accessToken: getItem("accessToken") || null,
  blogList: null,
  profileBlogList: null,
  blogsCount: null,
  totalPages: null,
  currentPage: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginRequest: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = action.payload?.message === "OTP has been sent to your registered email." ? false : true;
      state.message = action.payload?.message;
      state.userData = action.payload?.data?.user;
      state.accessToken = action.payload?.data?.accessToken;
    },
    loginFail: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload?.message;
      state.accessToken = null;
      removeItem("accessToken");
    },
    verifyOTPRequest: (state) => {
      state.loading = true;
    },
    verifyOTPSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.message = action.payload?.message;
      state.userData = action.payload?.data?.user;
      state.accessToken = action.payload?.data?.accessToken;
    },
    verifyOTPFail: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload?.message;
      state.accessToken = null;
      removeItem("accessToken");
    },
    loadProfileRequest: (state) => {
      state.loading = true;
    },
    loadProfileSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = action.payload?.data?.user ? true : false;
      state.userData = action.payload?.data?.user;
    },
    loadProfileFail: (state, action) => {
      state.loading = false;
      state.error = action.payload?.message;
      removeItem("accessToken");
    },
    logoutRequest: (state) => {
      state.loading = true;
    },
    logoutSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.message = action.payload?.message;
      state.userData = null;
      state.accessToken = null;
      removeItem("accessToken");
      state.profileBlogList = null;
    },
    logoutFail: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.error = action.payload?.message;
    },
    registerRequest: (state) => {
      state.loading = true;
    },
    registerSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.message = action.payload?.message;
      state.userData = null;
    },
    registerFail: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload?.message;
    },
    forgotPasswordRequest: (state) => {
      state.loading = true;
    },
    forgotPasswordSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.message = action.payload?.message;
      state.userData = null;
    },
    forgotPasswordFail: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload?.message;
    },
    resetPasswordRequest: (state) => {
      state.loading = true;
    },
    resetPasswordSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.message = action.payload?.message;
      state.userData = null;
    },
    resetPasswordFail: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload?.message;
    },
    deleteCurrentUserRequest: (state) => {
      state.loading = true;
    },
    deleteCurrentUserSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.message = action.payload?.message;
      state.userData = null;
      state.accessToken = null;
      removeItem("accessToken");
    },
    deleteCurrentUserFail: (state, action) => {
      state.loading = false;
      state.error = action.payload?.message;
    },
    updateCurrentUserRequest: (state) => {
      state.loading = true;
    },
    updateCurrentUserSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload?.message;
      state.userData = action.payload?.data?.user;
    },
    updateCurrentUserFail: (state, action) => {
      state.loading = false;
      state.error = action.payload?.message;
    },
    loadAllBlogsPublicallyRequest: (state) => {
      state.loading = true;
    },
    loadAllBlogsPublicallySuccess: (state, action) => {
      state.loading = false;
      state.blogList = action.payload?.data?.blogs;
      state.blogsCount = action.payload?.data?.blogsCount;
      state.totalPages = action.payload?.data?.totalPages;
      state.currentPage = action.payload?.data?.currentPage;
    },
    loadAllBlogsPublicallyFail: (state, action) => {
      state.loading = false;
      state.error = action.payload?.message;
      state.blogList = null;
    },
    loadAllProfileBlogsRequest: (state) => {
      state.loading = true;
    },
    loadAllProfileBlogsSuccess: (state, action) => {
      state.loading = false;
      state.profileBlogList = action.payload?.data?.blogs;
      state.blogsCount = action.payload?.data?.blogsCount;
      state.totalPages = action.payload?.data?.totalPages;
      state.currentPage = action.payload?.data?.currentPage;
    },
    loadAllProfileBlogsFail: (state, action) => {
      state.loading = false;
      state.error = action.payload?.message;
      state.profileBlogList = null;
    },
    deleteBlogRequest: (state) => {
      state.loading = true;
    },
    deleteBlogSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload?.message;
    },
    deleteBlogFail: (state, action) => {
      state.loading = false;
      state.error = action.payload?.message;
    },
    fetchBlogRequest: (state) => {
      state.loading = true;
    },
    fetchBlogSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload?.message;
    },
    fetchBlogFail: (state, action) => {
      state.loading = false;
      state.error = action.payload?.message;
    },
    createBlogRequest: (state) => {
      state.loading = true;
    },
    createBlogSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload?.message;
    },
    createBlogFail: (state, action) => {
      state.loading = false;
      state.error = action.payload?.message;
    },
    updateBlogRequest: (state) => {
      state.loading = true;
    },
    updateBlogSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload?.message;
    },
    updateBlogFail: (state, action) => {
      state.loading = false;
      state.error = action.payload?.message;
    },
    clearError: (state) => {
      state.error = null;
    },
    clearMessage: (state) => {
      state.message = null;
    },
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
      setItem("accessToken", action.payload);
    },
    clearAccessToken: (state) => {
      state.accessToken = null;
      removeItem("accessToken");
    },
  },
});

export const {
  loginRequest,
  loginSuccess,
  loginFail,
  loadProfileFail,
  loadProfileRequest,
  loadProfileSuccess,
  logoutFail,
  logoutRequest,
  logoutSuccess,
  registerFail,
  registerRequest,
  registerSuccess,
  forgotPasswordFail,
  forgotPasswordRequest,
  forgotPasswordSuccess,
  resetPasswordFail,
  resetPasswordRequest,
  resetPasswordSuccess,
  deleteCurrentUserFail,
  deleteCurrentUserRequest,
  deleteCurrentUserSuccess,
  updateCurrentUserFail,
  updateCurrentUserRequest,
  updateCurrentUserSuccess,
  loadAllBlogsPublicallyFail,
  loadAllBlogsPublicallyRequest,
  loadAllBlogsPublicallySuccess,
  loadAllProfileBlogsFail,
  loadAllProfileBlogsRequest,
  loadAllProfileBlogsSuccess,
  deleteBlogFail,
  deleteBlogRequest,
  deleteBlogSuccess,
  fetchBlogFail,
  fetchBlogRequest,
  fetchBlogSuccess,
  createBlogFail,
  createBlogRequest,
  createBlogSuccess,
  updateBlogFail,
  updateBlogRequest,
  updateBlogSuccess,
  verifyOTPFail,
  verifyOTPRequest,
  verifyOTPSuccess,
  clearError,
  clearMessage,
  clearAccessToken,
  setAccessToken,
} = userSlice.actions;

export const userReducer = userSlice.reducer;
