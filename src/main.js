import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";

import { mutations } from "@/store.js";
import { env } from "@/prod.js";

Vue.config.productionTip = env.inProduction();

Vue.prototype.$request = function(
  type,
  url,
  params,
  data,
  test,
  ok_message,
  ok_action,
  error_message,
  error_action
) {
  function console_log(response) {
    if (!env.inProduction()) console.log(type + " => " + url.href, response);
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
    // console_log(response);
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

  const backendUrl = url.slice(0, 4) != "http";

  if (backendUrl) {
    url = env.getApiUrl() + url;
  }

  url = new URL(url);
  url.search = new URLSearchParams(params).toString();

  fetch(url, {
    mode: "cors",
    method: type,
    headers: backendUrl
      ? {
          "Restrict-Access": "e980f5d67e1bb62e84e559f60f8154ae8c831cbd",
        }
      : {},
    body:
      Object.keys(data).length === 0 && data.constructor === Object
        ? null
        : data,
  })
    .then((response) =>
      response.ok
        ? response
            .json()
            .then((json) => (test(json) ? requestOk(json) : requestError(json)))
        : requestError(response)
    )
    .catch(() => requestError());
};

new Vue({ router, vuetify, render: (h) => h(App) }).$mount("#app");
