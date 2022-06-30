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
  return MY_TEAM.members.find((user) => user.id === userId);
  //   {
  //     firstName: "Elmo",
  //     lastName: "",
  //     profilePic: "/assets/test/avatar.jpeg",
  //     email: "elmo@sesame.stree",
  //     role: "Lead dev",
  //     userPerm: "admin",
  //     lastActivity: "2022-06-20",
  //     createdDate: "2022-03-02",
  //     progress: 50,
  //     id: userId,
  //     templates: [
  //       {
  //         id: "temp1",
  //         name: "Arriver",
  //         teamName: "Ressource Humaine",
  //         lastUpdate: "2022-06-20",
  //         progress: 45,
  //         docs: ["doc id"],
  //       },
  //       {
  //         id: "temp3",
  //         name: "Bonne conduite en entreprise",
  //         teamName: "Ressource Humaine",
  //         lastUpdate: "2022-06-20",
  //         progress: 45,
  //         docs: ["doc id"],
  //       },
  //       {
  //         id: "temp2",
  //         name: "Utilisation des Systèmes d'information",
  //         teamName: "Team SI",
  //         lastUpdate: "2022-06-20",
  //         progress: 95,
  //         docs: ["doc id"],
  //       },
  //     ],
  //     documents: [
  //       {
  //         name: "Contrat-de-travail.pdf",
  //         uploadName: "contrat de travail",
  //         uploadDate: "2022-06-22",
  //         teamName: "Ressource Humaine",
  //         templateName: "Arriver",
  //         date: "2022-04-22",
  //         status: "toLate",
  //         id: "azeaze",
  //       },
  //       {
  //         name: "chartre-informatique.pdf",
  //         uploadName: "Chartre informatique",
  //         uploadDate: "2022-06-22",
  //         teamName: "Ressource Humaine",
  //         templateName: "Arriver",
  //         date: "2022-04-22",
  //         status: "good",
  //         id: "azeaze",
  //       },
  //     ],
  //   };
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
