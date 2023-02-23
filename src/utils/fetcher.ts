
function updateOptions(options: RequestInit) {
  const update = { ...options };
  if (localStorage.jwt) {
    update.headers = {
      ...update.headers,
      Authorization: `Bearer ${localStorage.jwt}`,
    };
  }
  return update;
}

export default function fetcher(url: RequestInfo | URL, options: { method: string; headers?: { 'Content-Type': string; }; body?: URLSearchParams; }) {
  return fetch(url, updateOptions(options));
}