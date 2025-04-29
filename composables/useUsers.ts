import type { User } from "~/domain/entities/User";
import { useReqresStore } from "~/store/useReqres";

export function useUsers() {
  const rqStore = useReqresStore();

  const users = ref<User[] | null>(null);
  const error = ref<Error | null>(null);
  const loading = ref(false);

  const fetchUsers = async () => {
    loading.value = true;
    const { data: res, error: _error } = await rqStore.client.GET("/users");
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
