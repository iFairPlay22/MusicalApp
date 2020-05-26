import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import { mutations } from "@/store.js";

Vue.config.productionTip = false;

const local = false;

Vue.prototype.$request = function(
  type,
  url,
  params,
  test,
  ok_message,
  ok_action,
  error_message,
  error_action
) {
  function console_log(response) {
    console.log(type + " => " + url.href, response);
  }

  function requestError(response) {
    console_log(response);
    error_action(response);

    if (error_message !== "")
      mutations.addSnack({
        color: "red",
        text: error_message,
        buttonText: "Ok",
        timeout: 5000,
      });

    return {};
  }

  function requestOk(response) {
    console_log(response);
    ok_action(response);

    if (ok_message !== "")
      mutations.addSnack({
        color: "green",
        text: ok_message,
        buttonText: "Ok",
        timeout: 5000,
      });

    return response;
  }

  url = new URL(
    (local
      ? "http://127.0.0.1:8000/api"
      : "https://cors-anywhere.herokuapp.com/musical-app-back.herokuapp.com/api") +
      url
  );
  url.search = new URLSearchParams(params).toString();

  fetch(url, {
    mode: "cors",
    method: type,
  })
    .then((response) =>
      response.ok
        ? response
            .json()
            .then((json) => (test(json) ? requestOk(json) : requestError()))
        : requestError(response)
    )
    .catch(() => requestError());
};

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
