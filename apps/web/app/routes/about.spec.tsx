import { test } from "vitest";
import { createRoutesStub, useLoaderData } from "react-router";
import { render, screen, waitFor } from "@testing-library/react";
import * as route from "./about";
import type { Route } from "./+types/about";

export type LoaderData = Route.ComponentProps["loaderData"];

test("renders loader data", async () => {
  const Stub = createRoutesStub([
    {
      path: "/",
      loader: (): LoaderData => {
        return { message: "Hello there," };
      },
      Component: () => {
        const loaderData = useLoaderData<LoaderData>();
        const View = route.default as any;
        return <View loaderData={loaderData} />;
      },
    },
  ]);

  render(<Stub />);

  await waitFor(() => {
    expect(screen.getByText("Hello there,")).toBeTruthy();
  });
});
