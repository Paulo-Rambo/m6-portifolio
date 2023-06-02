const repoList = [
  {
    "teste-frontend-football":
      "https://www.linkedin.com/search/results/content/?heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAADLC4XwBrp8nchfgZ88uuvnos9aTzKGS8Y0&keywords=paulo%20vitor%20ramos%20locatelli&origin=SWITCH_SEARCH_VERTICAL&position=0&searchId=20446565-daf2-47b5-84a5-43b1c74098f1&sid=bsz",
  },
  {
    "mobile_weather_app_16-05-23":
      "https://www.linkedin.com/posts/paulo-vitor-ramos-locatelli_reactnative-redux-api-activity-7065730608123002880-YdAA?utm_source=share&utm_medium=member_desktop",
    "learning-websockets-with-DRF":
      "https://www.linkedin.com/posts/paulo-vitor-ramos-locatelli_mais-um-aprendizado-super-legal-praticando-activity-7061697589213036544-58kd?utm_source=share&utm_medium=member_desktop",
    "React-Native---primeiro-projeto-10-05-23":
      "https://www.linkedin.com/posts/paulo-vitor-ramos-locatelli_aeeee-primeiro-app-feito-para-celular-utilizando-activity-7062213111520346113-kJxt?utm_source=share&utm_medium=member_desktop",
  },
];

import {
  Project as ProjectWrapper,
  ProjectStack,
  ProjectStackTech,
  ProjectLink,
  ProjectLinks,
} from "./style";

import { Text } from "@/styles/Text";
import { useEffect, useState } from "react";
import { FaGithub, FaShare } from "react-icons/fa";
import { userData } from "@/utils/userData";

interface ReposType {
  id: number;
  name: string;
  language: string;
  description: string;
  git_url: string;
  homepage: string;
}

export const Project = (): JSX.Element => {
  const [repositories, setRepositories] = useState<ReposType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data: Response = await fetch(
        `https://api.github.com/users/${userData.githubUser}/repos`
      );

      const json = await data.json();

      setRepositories(json);

      if (!data.ok) {
        throw data;
      }

      return json;
    };
    fetchData();
  }, []);

  return (
    <>
      {repositories?.map((repository) => (
        <ProjectWrapper key={repository.id}>
          <Text
            as="h2"
            type="heading3"
            css={{ marginBottom: "$3" }}
            color="grey1"
          >
            {repository.name}
          </Text>

          {repository.language && (
            <ProjectStack>
              <Text type="body2">Linguagem:</Text>
              <ProjectStackTech>
                <Text color="brand1" type="body2">
                  {repository.language}
                </Text>
              </ProjectStackTech>
            </ProjectStack>
          )}

          <Text type="body1" color="grey2">
            {repository.description}
          </Text>
          <ProjectLinks>
            <ProjectLink
              target="_blank"
              href={`http${repository.git_url.substring(
                3,
                repository.git_url.length
              )}`}
            >
              <FaGithub /> Github Code
            </ProjectLink>
            {repository.homepage && (
              <ProjectLink target="_blank" href={repository.homepage}>
                <FaShare /> Aplicação
              </ProjectLink>
            )}
          </ProjectLinks>
        </ProjectWrapper>
      ))}
    </>
  );
};
