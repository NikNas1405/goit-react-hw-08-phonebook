export const initialState = {
  auth: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};
