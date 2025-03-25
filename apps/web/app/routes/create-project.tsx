import { Form } from "react-router";
import { Route } from "./+types/protected";
import { Button } from "@err/shared-design-system/button";
import { createProjectUseCase } from "@err/module-projects-core/create-project";

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const name = String(formData.get("name"));

  const result = await createProjectUseCase.execute({
    project: {
      name,
    },
  });

  if (result.isFail()) throw new Error(result.error());
  return {
    result: result.value(),
  };
}

export default function ProtectedRoute({}: Route.ComponentProps) {
  return (
    <div>
      <h1>Create Project Route</h1>

      <Form>
        <input type="text" name="name" />
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}
