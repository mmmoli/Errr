import { Route } from "./+types/about";

export function loader({}: Route.LoaderArgs) {
  return {
    message: "Hello from the about page!",
  };
}

export default function AboutComponent({
  loaderData: { message },
}: Route.ComponentProps) {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
}
