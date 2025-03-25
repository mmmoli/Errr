import { Outlet } from "react-router";

export default function DefaultLayout() {
  return (
    <div className="p-4">
      <Outlet />
    </div>
  );
}
