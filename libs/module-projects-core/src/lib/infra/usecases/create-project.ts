import { CreateProjectUseCase as Usecase } from "../../application/create-project.uc.js";
import { projectRepo } from "../impl/project-repo.js";

export const createProjectUseCase = new Usecase({
  projectRepo,
});
