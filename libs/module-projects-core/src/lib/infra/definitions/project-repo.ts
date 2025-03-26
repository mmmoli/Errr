import { Fail, Ok } from "rich-domain";
import { ProjectRepoTrait, Project } from "../../domain/project/index.js";

export const createProjectRepo = (): ProjectRepoTrait => {
  return {
    fetchForId: async (id) => {
      const buildResult = Project.builder()
        .withName("My First Project")
        .build();
      if (buildResult.isFail())
        return Fail(`Failed to build Project: ${buildResult.error()}`);
      const project = buildResult.value();
      return Ok(project, { id: id.value() });
    },
    save: async (project) => {
      return Ok(project);
    },
    delete: async (id) => {
      return Ok(null, { id: id.value() });
    },
  };
};
