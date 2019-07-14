const hostUrl = "https://jsonplaceholder.typicode.com";

export default async function getData() {
  try {
    const pathname =
      window.location.pathname !== "/" ? window.location.pathname : "/users";
    const searchParams = window.location.search;
    const uRLSearchParams = new URLSearchParams(searchParams);
    const targetUrl =
      uRLSearchParams.get("posts") || window.location.href.split(/[?&]/)[0];
    const apiUrl = `${hostUrl}${pathname}${searchParams}`;
    const response = await fetch(apiUrl);
    const dataList = await response.json();
    return { dataList, success: true };
  } catch {
    return { success: false };
  }
}
