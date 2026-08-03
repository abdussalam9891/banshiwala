const STORAGE_KEY = "banshiwala_user";

export function getCurrentUser() {
  const raw = localStorage.getItem(STORAGE_KEY);

  if (!raw) return null;

  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function isLoggedIn() {
  return !!getCurrentUser();
}

export function login(user) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(user)
  );

  window.dispatchEvent(
    new CustomEvent("authChanged")
  );
}

export function logout() {
  localStorage.removeItem(STORAGE_KEY);

  window.dispatchEvent(
    new CustomEvent("authChanged")
  );
}
