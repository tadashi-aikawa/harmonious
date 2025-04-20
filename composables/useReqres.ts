import createClient from "openapi-fetch";
import type { paths } from "~/reqres";

export function useReqres() {
  const client = createClient<paths>({
    baseUrl: "https://reqres.in/api",
  });
  return { client };
}
