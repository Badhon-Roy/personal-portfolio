export type TBlog = {
    _id? : string | undefined,
    title: string,
    content: string,
    image: string,
    category: string,
    author: string,
    date: string
}

export type TProject = {
    _id ? : string,
    name: string;
    images: string[];
    description: string;
    technologiesUsed: {
      frontend: string[];
      backend: string[];
      database: string;
      authentication: string;
    };
    teamMembers: number;
    projectType: "Personal" | "Team";
    role: string;
    liveSite: string;
    clientSiteGitHub: string;
    serverSiteGitHub: string;
  };