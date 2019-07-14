import { API_BASE } from "./Constants";

export default async function getData() {
  try {
    // On home page it should fetch users
    const pathname =
      window.location.pathname !== "/" ? window.location.pathname : "/users";
    const searchParams = window.location.search;
    // append search params to url
    const apiUrl = `${API_BASE}${pathname}${searchParams}`;
    const response = await fetch(apiUrl);
    let dataList = await response.json();
    // Check if the response sends array as we are mapping the response in parent
    // If it return object then push it into array
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
