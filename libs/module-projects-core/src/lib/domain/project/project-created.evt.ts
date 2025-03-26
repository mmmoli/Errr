import { EventHandler } from "rich-domain";
import { Project } from "./project.ar.js";

export class ProjectCreatedEvent extends EventHandler<Project> {
  constructor() {
    super({ eventName: "ProjectCreated" });
  }

  async dispatch(project: Project): Promise<void> {
    const dto = project.toObject();
    console.log("dispatching event", dto);
    project.context().dispatchEvent(`Context:${this.params.eventName}`, dto);
  }
}
