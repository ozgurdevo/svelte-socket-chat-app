<script lang="ts">
  import type { Socket } from "socket.io-client";
  export let socket: Socket;
  let message, sendButton;

  socket.on("online", ({ socketId }) => {
    if (socketId === socket.id) {
      sendButton.disabled = false;
    }
  });

  socket.on("offline", ({ socketId }) => {
    if (socketId === socket.id) {
      socketId.reset();
      sendButton.disabled = true;
    }
  });

  const onMessageSubmit = (e: Event) => {
    e.preventDefault();

    socket.emit("sendmessage", { senderId: socket.id, message: message.value });

    message.value = "";
  };
</script>

<form class="flex-col" on:submit={onMessageSubmit}>
  <input
    required
    type="text"
    placeholder="write message!"
    bind:this={message}
  />
  <input type="submit" value="send" bind:this={sendButton} disabled={true} />
</form>
