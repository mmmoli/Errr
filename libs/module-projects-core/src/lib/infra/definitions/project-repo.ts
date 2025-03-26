import { Fail, Ok } from "rich-domain";
import { ProjectRepoTrait, Project } from "../../domain/project/index.js";
import { Db } from "@err/shared-db";

export interface CreateProjectRepoDeps {
  db: Db;
}

export const createProjectRepo = (
  deps: CreateProjectRepoDeps
): ProjectRepoTrait => {
  return {
    fetchForId: async (id) => {
      const query = await deps.db.query.usersTable.findFirst();
      console.log(query);

      const buildResult = Project.builder()
        .withName("My First Project")
        .build();
      if (buildResult.isFail())
        return Fail(`Failed to build Project: ${buildResult.error()}`);
      const project = buildResult.value();
      return Ok(project, { id: id.value() });
    },
    save: async (project) => {
      return await Promise.resolve(Ok(project));
    },
    delete: async (id) => {
      return await Promise.resolve(Ok(null, { id: id.value() }));
    },
  };
};
