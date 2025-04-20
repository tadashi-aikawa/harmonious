import { useReqres } from "~/composables/useReqres";
import type { User } from "~/domain/entities/User";

export function useUsers() {
  const { client } = useReqres();

  const users = ref<User[] | null>(null);
  const error = ref<Error | null>(null);
  const loading = ref(false);

  const fetchUsers = async () => {
    loading.value = true;
    // WARN: 本来ならOASでdelayを定義しておく(定義がないので型エラーになる)
    const { data: res, error: _error } = await client.GET("/users", {
      params: { query: { delay: 1 } },
    });
    loading.value = false;

    // WARN: 本来ならOASの方でエラー定義をしておく
    if (_error) {
      error.value = _error;
      return;
    }

    // WARN: 本来ならOASの方でrequiredにしておく
    users.value = res.data!;
  };

  return { users, error, loading, fetchUsers };
}
