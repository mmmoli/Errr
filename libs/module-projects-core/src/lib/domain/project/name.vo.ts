import { ValueObject, Ok, Result } from "rich-domain";

export interface ProjectNameProps {
  value: string;
}

export default class ProjectName extends ValueObject<ProjectNameProps> {
  private constructor(props: ProjectNameProps) {
    super(props);
  }

  public static override create(props: ProjectNameProps): Result<ProjectName> {
    return Ok(new ProjectName(props));
  }

  override toString(): string {
    return this.props.value;
  }
}
