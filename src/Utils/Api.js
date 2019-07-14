const hostUrl = "https://jsonplaceholder.typicode.com";

export default async function getData() {
  try {
    const pathname =
      window.location.pathname !== "/" ? window.location.pathname : "/users";
    const searchParams = window.location.search;
    const apiUrl = `${hostUrl}${pathname}${searchParams}`;
    const response = await fetch(apiUrl);
    let dataList = await response.json();
    if (!Array.isArray(dataList)) {
      let newValue = [];
      newValue.push(dataList);
      dataList = newValue;
    }
    return { dataList, success: true };
  } catch {
    return { success: false };
  }
}