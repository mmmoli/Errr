import { Fail, type IUseCase, Ok, type Result } from "rich-domain";
import { ProjectRepoTrait } from "../domain/project/project-repo-trait.js";
import { Project } from "../domain/project/project.ar.js";

export type CreateProjectUseCaseDeps = {
  projectRepo: ProjectRepoTrait;
};

export type CreateProjectUseCaseInputs = {
  project: {
    name: string;
  };
};

export type CreateProjectUseCaseOutputs = Result<
  {
    name: string;
    id: string;
  },
  string,
  CreateProjectUseCaseInputs
>;

export class CreateProjectUseCase
  implements IUseCase<CreateProjectUseCaseInputs, CreateProjectUseCaseOutputs>
{
  constructor(protected readonly deps: CreateProjectUseCaseDeps) {}

  async execute(
    inputs: CreateProjectUseCaseInputs
  ): Promise<CreateProjectUseCaseOutputs> {
    try {
      // Build Project

      const buildResult = Project.builder()
        .withName(inputs.project.name)
        .build();
      if (buildResult.isFail()) {
        return Fail(`Build failed: ${buildResult.error()}`, inputs);
      }
      const project = buildResult.value();

      // Save
      const saveResult = await this.deps.projectRepo.save(project);
      if (saveResult.isFail()) {
        return Fail(`Failed to create project: ${saveResult.error()}`, inputs);
      }

      // Events
      await project.dispatchAll();

      return Ok(
        {
          name: project.get("name").toString(),
          id: project.id.value(),
        },
        inputs
      );
    } catch (error) {
      console.error(error);
      return Fail(`Failed to create project: ${(error as Error).message}`);
    }
  }
}
