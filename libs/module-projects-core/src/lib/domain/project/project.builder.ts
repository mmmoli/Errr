import { Combine, Fail, ID, IResult, UID } from "rich-domain";
import ProjectName from "./name.vo.js";
import Project from "./project.ar.js";

export class ProjectBuilder {
  protected id: UID = ID.create();
  protected createdAt: Date | undefined;
  protected updatedAt: Date | undefined;
  protected nameResult: IResult<ProjectName> = Fail("No Name specified.");

  public withId(id: string): ProjectBuilder {
    this.id = ID.create(id);
    return this;
  }

  public withName(name: string): ProjectBuilder {
    this.nameResult = ProjectName.create({ value: name });
    return this;
  }

  public withCreatedAt(when: Date): ProjectBuilder {
    this.createdAt = when;
    return this;
  }

  public withupdatedAt(when: Date): ProjectBuilder {
    this.updatedAt = when;
    return this;
  }

  public fromProject(project: Project): ProjectBuilder {
    const builder = this.withId(project.id.value()).withName(
      project.get("name").toString()
    );

    const createdAt = project.get("createdAt");
    const updatedAt = project.get("updatedAt");

    createdAt && builder.withCreatedAt(createdAt);
    updatedAt && builder.withCreatedAt(updatedAt);

    return builder;
  }

  public build(): IResult<Project> {
    const results = Combine([this.nameResult]);

    if (results.isFail())
      return Fail(`Failed to build Project: ${results.error()}`);

    const now = new Date();

    return Project.create({
      id: this.id,
      name: this.nameResult.value(),
      createdAt: this.createdAt || now,
      updatedAt: this.updatedAt || now,
    });
  }
}
