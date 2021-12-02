<script lang="ts">
  import type { Socket } from "socket.io-client";
  import { items } from "../store";
  import UserStatus from "./notification/UserStatus.svelte";
  import NewMessage from "./notification/NewMessage.svelte";
  export let socket: Socket;

  socket.on("online", ({ nickname, color }) => {
    items.updateUserStatus(nickname, color, "online");
  });

  socket.on("offline", ({ nickname, color }) => {
    items.updateUserStatus(nickname, color, "offline");
  });

  socket.on("receivemessage", ({ sender, color, message }) => {
    items.addNewMessage(sender, color, message);
  });
</script>

<div class="bordered-box">
  {#each $items as item}
    {#if item.sender}
      <NewMessage
        sender={item.sender}
        message={item.message}
        color={item.color}
      />
    {:else}
      <UserStatus
        nickname={item.nickname}
        status={item.status}
        color={item.color}
      />
    {/if}
  {/each}
</div>
