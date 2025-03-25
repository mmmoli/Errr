import { Route } from "./+types/about";
import { Button } from "@err/shared-design-system/button";

export function loader({}: Route.LoaderArgs) {
  return {
    message: "Hello from the about page!",
  };
}

export default function AboutComponent({
  loaderData: { message },
}: Route.ComponentProps) {
  return (
    <div className="bg-accent">
      <p>{message}</p>
      <Button>Click me!</Button>
    </div>
  );
}
