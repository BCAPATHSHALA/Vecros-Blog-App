import {
  loginSuccess,
  loginRequest,
  loginFail,
  loadProfileRequest,
  loadProfileSuccess,
  loadProfileFail,
  logoutRequest,
  logoutSuccess,
  logoutFail,
  registerRequest,
  registerSuccess,
  registerFail,
  forgotPasswordRequest,
  forgotPasswordSuccess,
  forgotPasswordFail,
  resetPasswordRequest,
  resetPasswordSuccess,
  resetPasswordFail,
  deleteCurrentUserRequest,
  deleteCurrentUserSuccess,
  deleteCurrentUserFail,
  updateCurrentUserRequest,
  updateCurrentUserSuccess,
  updateCurrentUserFail,
  loadAllBlogsPublicallyRequest,
  loadAllBlogsPublicallySuccess,
  loadAllBlogsPublicallyFail,
  loadAllProfileBlogsRequest,
  loadAllProfileBlogsSuccess,
  loadAllProfileBlogsFail,
  deleteBlogRequest,
  deleteBlogSuccess,
  deleteBlogFail,
  fetchBlogRequest,
  fetchBlogSuccess,
  fetchBlogFail,
  createBlogRequest,
  createBlogSuccess,
  createBlogFail,
  updateBlogRequest,
  updateBlogSuccess,
  updateBlogFail,
  verifyOTPFail,
  verifyOTPRequest,
  verifyOTPSuccess,
} from "../reducers/userSlice";
import api from "../../utils/axiosClient";

export const login = (email, password, username = "") => {
  return async (dispatch) => {
    try {
      dispatch(loginRequest());

      const { data } = await api.post(
        `/users/login`,
        { email, username, password },
        {
          headers: {
            "Content-type": "application/json",
          },
          withCredentials: true,
        }
      );
      dispatch(loginSuccess(data));
    } catch (error) {
      dispatch(loginFail(error.response.data));
    }
  };
};

export const loadProfile = () => async (dispatch) => {
  try {
    dispatch(loadProfileRequest());

    const { data } = await api.get(
      `/users/profile`,

      {
        withCredentials: true,
      }
    );
    dispatch(loadProfileSuccess(data));
  } catch (error) {
    dispatch(loadProfileFail(error.response.data));
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch(logoutRequest());

    const { data } = await api.post(
      `/users/profile/logout`,
      {},
      {
        withCredentials: true,
      }
    );
    dispatch(logoutSuccess(data));
  } catch (error) {
    dispatch(logoutFail(error.response.data));
  }
};

export const registerUser =
  (fullName, email, username, password, confirmPassword) =>
  async (dispatch) => {
    try {
      dispatch(registerRequest());

      const { data } = await api.post(
        `/users/register`,
        { fullName, email, username, password, confirmPassword },
        {
          headers: {
            "Content-type": "application/json",
          },
          withCredentials: true,
        }
      );
      dispatch(registerSuccess(data));
    } catch (error) {
      dispatch(registerFail(error.response.data));
    }
  };

export const forgotPassword = (email) => async (dispatch) => {
  try {
    dispatch(forgotPasswordRequest());

    const { data } = await api.post(
      `/users/forgot-password`,
      { email },
      {
        headers: {
          "Content-type": "application/json",
        },
        withCredentials: true,
      }
    );
    dispatch(forgotPasswordSuccess(data));
  } catch (error) {
    dispatch(forgotPasswordFail(error.response.data));
  }
};

export const resetPassword =
  (password, confirmPassword, resetToken) => async (dispatch) => {
    try {
      dispatch(resetPasswordRequest());

      const { data } = await api.post(
        `/users/reset-password/${resetToken}`,
        { password, confirmPassword },
        {
          headers: {
            "Content-type": "application/json",
          },
          withCredentials: true,
        }
      );
      dispatch(resetPasswordSuccess(data));
    } catch (error) {
      dispatch(resetPasswordFail(error.response.data));
    }
  };

export const deleteCurrentUser = () => async (dispatch) => {
  try {
    dispatch(deleteCurrentUserRequest());

    const { data } = await api.delete(`/users/profile/delete`, {
      withCredentials: true,
    });
    dispatch(deleteCurrentUserSuccess(data));
  } catch (error) {
    dispatch(deleteCurrentUserFail(error.response.data));
  }
};

export const updateCurrentUser =
  (email, username, fullName) => async (dispatch) => {
    try {
      dispatch(updateCurrentUserRequest());

      const { data } = await api.patch(
        `/users/profile/update`,
        { email, username, fullName },
        {
          headers: {
            "Content-type": "application/json",
          },
          withCredentials: true,
        }
      );
      dispatch(updateCurrentUserSuccess(data));
    } catch (error) {
      dispatch(updateCurrentUserFail(error.response.data));
    }
  };

// Blogs
export const fetchAllBlogsPulically =
  (page = 1, category = "") =>
  async (dispatch) => {
    try {
      dispatch(loadAllBlogsPublicallyRequest());

      const { data } = await api.get(
        `/blogs/public/all?page=${page}&category=${category}`,
        {
          withCredentials: true,
        }
      );
      dispatch(loadAllBlogsPublicallySuccess(data));
    } catch (error) {
      dispatch(loadAllBlogsPublicallyFail(error.response.data));
    }
  };

export const fetchAllProfileBlogs =
  (page = 1, category = "", isPublished = true) =>
  async (dispatch) => {
    try {
      dispatch(loadAllProfileBlogsRequest());

      const { data } = await api.get(
        `/blogs/all?page=${page}&category=${category}&isPublished=${isPublished}`,
        {
          withCredentials: true,
        }
      );
      dispatch(loadAllProfileBlogsSuccess(data));
    } catch (error) {
      dispatch(loadAllProfileBlogsFail(error.response.data));
    }
  };

export const deleteBlog = (id) => async (dispatch) => {
  try {
    dispatch(deleteBlogRequest());

    const { data } = await api.delete(`/blogs/delete/${id}`, {
      withCredentials: true,
    });
    dispatch(deleteBlogSuccess(data));
  } catch (error) {
    dispatch(deleteBlogFail(error.response.data));
  }
};

export const fetchBlog = (id) => async (dispatch) => {
  try {
    dispatch(fetchBlogRequest());

    const { data } = await api.get(`/blogs/fetch/${id}`, {
      withCredentials: true,
    });
    dispatch(fetchBlogSuccess(data));
  } catch (error) {
    dispatch(fetchBlogFail(error.response.data));
  }
};

export const createBlog =
  (title, description, content, category, isPublished, keywords) =>
  async (dispatch) => {
    try {
      dispatch(createBlogRequest());

      const { data } = await api.post(
        `/blogs/create`,
        { title, description, content, category, isPublished, keywords },
        {
          headers: {
            "Content-type": "application/json",
          },
          withCredentials: true,
        }
      );
      dispatch(createBlogSuccess(data));
    } catch (error) {
      dispatch(createBlogFail(error.response.data));
    }
  };

export const updateBlog =
  (title, description, content, category, isPublished, keywords, id) =>
  async (dispatch) => {
    try {
      dispatch(updateBlogRequest());

      const { data } = await api.patch(
        `/blogs/update/${id}`,
        { title, description, content, category, isPublished, keywords },
        {
          headers: {
            "Content-type": "application/json",
          },
          withCredentials: true,
        }
      );
      dispatch(updateBlogSuccess(data));
    } catch (error) {
      dispatch(updateBlogFail(error.response.data));
    }
  };

export const verifyOTP = (randomOTP) => async (dispatch) => {
  try {
    dispatch(verifyOTPRequest());

    const { data } = await api.post(
      `/users/verify-otp`,
      { randomOTP },
      {
        headers: {
          "Content-type": "application/json",
        },
        withCredentials: true,
      }
    );
    dispatch(verifyOTPSuccess(data));
  } catch (error) {
    dispatch(verifyOTPFail(error.response.data));
  }
};
