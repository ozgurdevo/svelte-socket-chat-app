<script lang="ts">
  import type { Socket } from "socket.io-client";
  import { socketId } from "../store";
  export let socket: Socket;
  let nickname,
    joined = false;

  const onNickSubmit = (e: Event) => {
    e.preventDefault();

    if (!joined) {
      if (socket.disconnected) {
        socket.connect();
      }

      // send to socket [1]
      socket.emit("join", { nickname: nickname.value }, (success) => {
        if (success) {
          socketId.setSocketId(socket.id);
        }
      });

      // disable input
      nickname.disabled = true;
      joined = true;
    } else {
      // socket.disconnect();
      socket.emit("quit", { socketId: socket.id }, (success) => {
        if (success) {
          nickname.value = "";
          nickname.disabled = false;
          joined = false;
        }
      });
    }
  };
</script>

<form on:submit={onNickSubmit}>
  <input required type="text" placeholder="your nick" bind:this={nickname} />
  {#if !joined}
    <input type="submit" value="join" />
  {:else}
    <input type="submit" value="quit" />
  {/if}
</form>
