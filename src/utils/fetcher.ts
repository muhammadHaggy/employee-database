
function updateOptions(options: RequestInit) {
  const update = { ...options };
  if (getLocalStorageItem('jwt') !== "") {
    update.headers = {
      ...update.headers,
      Authorization: `Bearer ${getLocalStorageItem('jwt')}`,
    };
  }
  return update;
}
const getLocalStorageItem = (key: string): string => {
  const jwt = window.localStorage.getItem(key)
  if (jwt !== null){
    return jwt
  } else {
    return ""
  }
}
export default function fetcher(url: RequestInfo | URL, options: { method: string; headers?: { 'Content-Type': string; }; body?: URLSearchParams; }) {
  return fetch(url, updateOptions(options));
}