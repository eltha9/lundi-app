import { httpRequest } from "./http";

export const getAvatarLink = (userId) => {
  return "/assets/test/avatar.jpeg";
  const data = httpRequest({ url: `/avatar?id=${userId}` });
  return data.imgLink;
};

export const getUserInformation = (userId) => {
  return {
    firstName: "Théa",
    lastName: "Dos santos",
    profilePic: "/assets/test/avatar.jpeg",
    email: "theadsoto@gmail.com",
    role: "Lead dev",
    id: "aegiaze",
  };
  const data = httpRequest({ url: `/user?id=${userId}` });
  return data;
};
