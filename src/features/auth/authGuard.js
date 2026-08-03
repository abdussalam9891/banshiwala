import { isLoggedIn } from "./authState.js";
import { openAuthModal }
from "./index.js";

export function requireAuth(callback) {
  if (isLoggedIn()) {
    callback?.();
    return true;
  }

  openAuthModal();

  return false;
}
