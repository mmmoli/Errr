import { Aggregate, Ok, Result, UID } from "rich-domain";
import ProjectName from "./name.vo.js";
import { ProjectBuilder } from "./project.builder.js";
import { ProjectCreatedEvent } from "./project-created.evt.js";

export interface ProjectProps {
  id?: UID;
  name: ProjectName;
  createdAt?: Date;
  updatedAt?: Date;
}

export default class Project extends Aggregate<ProjectProps> {
  private constructor(props: ProjectProps) {
    super(props);
  }

  public static override create(props: ProjectProps): Result<Project> {
    const project = new Project(props);
    if (project._id.isNew()) project.addEvent(new ProjectCreatedEvent());
    return Ok(project);
  }

  public static builder(): ProjectBuilder {
    return new ProjectBuilder();
  }
}
