export const env = {
  inProduction: () => process.env.NODE_ENV !== "development",
  getApiUrl: () =>
    env.inProduction()
      ? "http://127.0.0.1:8000/api"
      : "https://cors-anywhere.herokuapp.com/musical-app-back.herokuapp.com/api",
};
