export function hashPw(s) {
  return btoa(s + "_apt_salt");
}