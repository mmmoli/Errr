import { FC } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@htch/shared-design-system/card";

export const JoinWaitingListWidget: FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Join Waiting List</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent></CardContent>
    </Card>
  );
};
