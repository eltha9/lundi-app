import { httpRequest } from "./http";
import { ADMIN, ONBOARDEE } from "./faker/user";
import { COMPANY_INFORMATION } from "./faker/compagny";
import { MY_TEAM } from "./faker/team-mates";
import { TEMPALTES, TEMPLATE } from "./faker/templates";
export const getAvatarLink = (userId) => {
  return "/assets/test/avatar.jpeg";
  const data = httpRequest({ url: `/avatar?id=${userId}` });
  return data.imgLink;
};

export const getUserInformation = (userId) => {
    console.log(MY_TEAM)
  return MY_TEAM.members.find((user) => user.id === userId);
  const data = httpRequest({ url: `/user?id=${userId}` });
  return data;
};
export const login = (psw, email) => {
  if (email === "alban.d@gmail.com") return ADMIN;
  if (email === "gaetan.a@gmail.com") return ONBOARDEE;
  return;
  const data = httpRequest({ url: `/login` });
  return data;
};
export const getMe = (jwt) => {
  if (jwt === "admin") return ADMIN;
  if (jwt === "onboardee") return ONBOARDEE;
  return;
  const data = httpRequest({ url: `/me` });
  return data;
};
export const getCompagnieInformation = (jwt) => {
  return COMPANY_INFORMATION;
  const data = httpRequest({ url: `` });
  return data;
};
export const getMyTeam = (jwt) => {
  return MY_TEAM;
  const data = httpRequest({ url: `` });
  return data;
};
export const getTeamData = (id) => {
  return COMPANY_INFORMATION.compagnie.teams.find((team) => team.id === id);
  const data = httpRequest({ url: `` });
  return data;
};
export const getTemplate = (id) => {
  return TEMPLATE;
};
