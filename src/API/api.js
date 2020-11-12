import * as axios from "axios";

const instans = axios.create({
  withCredentials: true,
  headers: {
    "API-KEY": "b8c04e43-1d5b-48ed-bbd5-829734d4889b",
  },
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
});

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instans
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
};

