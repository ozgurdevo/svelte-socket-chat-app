<script lang="ts">
  import type { Socket } from "socket.io-client";
  import "../css/styles.css";
  //   export let socket: Socket;
</script>

<form action="" class="flex-row" on:submit={() => {}}>
  <input
    type="text"
    placeholder="your name here!"
    disabled={false}
    on:change={() => {}}
  />
  <input type="button" value="join" disabled={false} />
</form>
