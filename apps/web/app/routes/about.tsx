import { Route } from "./+types/about";
import { Button } from "@err/shared-design-system/button";

export function loader({}: Route.LoaderArgs) {
  return {
    message: "Hello from the about page!",
  };
}

export default function AboutView({
  loaderData: { message },
}: Route.ComponentProps) {
  return (
    <div className="bg-accent p-4">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl font-serif">
        About
      </h1>
      <p>{message}</p>
      <Button>Click me!</Button>
    </div>
  );
}
