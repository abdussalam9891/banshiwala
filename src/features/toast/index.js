import { createToastContainer }
from "../../components/toast/index.js";

export function initToast() {

  if (
    document.getElementById(
      "toastContainer"
    )
  ) {
    return;
  }

  document.body.insertAdjacentHTML(
    "beforeend",
    createToastContainer()
  );

}
