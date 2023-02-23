
function updateOptions(options: any) {
  const update = { ...options };
  if (localStorage.jwt) {
    update.headers = {
      ...update.headers,
      Authorization: `Bearer ${localStorage.jwt}`,
    };
  }
  return update;
}

/**
* @param {RequestInfo | URL} url
* @param {{ method: string; headers?: { 'Content-Type': string; }; body?: URLSearchParams; }} options
*/
export default function fetcher(url: RequestInfo | URL, options: { method: string; headers?: { 'Content-Type': string; }; body?: URLSearchParams; }) {
  return fetch(url, updateOptions(options));
}