import { Result, UID } from "rich-domain";
import { Project } from "./project.ar.js";

export interface ProjectRepoTrait {
  fetchForId(id: UID): Promise<Result<Project, string, { id: string }>>;
  save(project: Project): Promise<Result<Project>>;
  delete(id: UID): Promise<Result<void, string, { id: string }>>;
}
