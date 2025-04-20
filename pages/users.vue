<script setup lang="ts">
import Button from "~/components/ui/button/Button.vue";
import { useUsers } from "~/composables/useUsers";

const { users, loading, fetchUsers } = useUsers();
</script>

<template>
  <div>
    <Button variant="destructive" size="lg" class="m-12" @click="fetchUsers">
      {{ loading ? "Loading..." : "Fetch Users" }}
    </Button>

    <div class="flex flex-col items-center">
      <h1 class="text-2xl font-bold">User List</h1>
      <ul class="list-disc">
        <li v-for="user in users" :key="user.id">
          {{ user.first_name }} {{ user.last_name }}
        </li>
      </ul>
    </div>
  </div>
</template>
