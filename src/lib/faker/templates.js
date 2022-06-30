export const TEMPALTES = [
  {
    id: "template-1",
    name: "Ma première journée",
    status: "toAssign",
    lastUpdate: "2022-06-01",
    tags: ["Tout", "Junior"],
    users: ["a", "b", "c"],
  },
  {
    id: "template-2",
    name: "Découvrir l'équipe",
    status: "toAssign",
    lastUpdate: "2022-06-01",
    tags: ["Tout", "Junior"],
    users: ["a", "b", "c"],
  },
  {
    id: "template-3",
    name: "La vie chez Acme.co ",
    status: "toAssign",
    lastUpdate: "2022-06-01",
    tags: ["Tout", "Junior"],
    users: ["a", "b", "c"],
  },
  {
    id: "template-4",
    name: "La vente chez Acme.co",
    status: "toAssign",
    lastUpdate: "2022-06-01",
    tags: ["Tout", "Junior"],
    users: ["a", "b", "c"],
  },
  {
    id: "template-5",
    name: "Les missions de l'account Executive",
    status: "toAssign",
    lastUpdate: "2022-06-01",
    tags: ["Tout", "Junior"],
    users: ["a", "b", "c"],
  },
  {
    id: "template-6",
    name: "Les comptes et outils à configurer",
    status: "toAssign",
    lastUpdate: "2022-06-01",
    tags: ["Tout", "Junior"],
    users: ["a", "b", "c"],
  },
  {
    id: "template-7",
    name: "Les outils pour les sales",
    status: "toAssign",
    lastUpdate: "2022-06-01",
    tags: ["Tout", "Junior"],
    users: ["a", "b", "c"],
  },
];

export const TEMPLATE = {
  name: "Ma première journée",
  id: "template-1",
  content: [
    {
      type: "h1",
      str: "Ta première journée",
    },
    {
      type: "toDo",
      items: [
        {
          str: "Faire le point de lancement de mission avec ton manager",
          checked: false,
        },
        {
          str: "Signer ton contrat de travail",
          checked: false,
        },
        {
          str: "Descendre tous les aspects pratiques de la to-do d'onboarding",
          checked: false,
        },
      ],
    },
    {
      type: "h2",
      str: "Découvrir l'équipe de Acme.co",
    },
    {
      type: "toDo",
      items: [
        {
          str: "Rencontre ton buddy et prends un café avec lui",
          checked: false,
        },
        {
          str: "Découvre l'organigramme pour savoir qui fait quoi",
          checked: false,
        },
      ],
    },
    {
      type: "link",
      url: "https://acme.co/sales/team-view",
    },
    {
      type: "h2",
      str: "Découvre la vision de Acme.co",
    },
    {
      type: "toDo",
      items: [
        {
          str: "Lecture de notre vision",
          checked: false,
        },
      ],
    },
    {
      type: "link",
      url: "https://acme.co/our-vision",
    },
    {
      type: "h2",
      str: "L'administratif",
    },
    {
      type: "toDo",
      items: [
        {
          str: "Signe ton contrat avec ton manager",
          checked: false,
        },
        {
          str: "Renseigne tes informations clés dans PayFit - (invitation par email)",
          checked: false,
        },
        {
          str: "Renseigne tes informations dans Alan - (invitation par emai)",
          checked: false,
        },
      ],
    },
    {
      type: "h4",
      str: "Ton contrat",
    },
    {
      type: "download",
      fileName: "Contrat.pdf",
      fileUrl: "https://acme.co/yugazye165zer32fz/contrat.pdf",
    },
    {
      type: "upload",
      fileName: "",
      fileUrl: "",
    },
  ],
};
