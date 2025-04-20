import type { paths } from "~/reqres";

export type User = NonNullable<
  paths["/users"]["get"]["responses"]["200"]["content"]["application/json"]["data"]
>[number];
