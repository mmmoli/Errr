import { db } from "@htch/shared-db";
import { createProjectRepo } from "../definitions/project-repo.js";

export const projectRepo = createProjectRepo({
  db,
});
