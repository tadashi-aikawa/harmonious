import createClient from "openapi-fetch";
import { defineStore } from "pinia";
import type { paths } from "~/reqres";

export const useReqresStore = defineStore("reqres", () => {
  const client = createClient<paths>({
    baseUrl: "https://reqres.in/api",
  });
  return { client };
});
