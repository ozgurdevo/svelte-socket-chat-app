<script lang="ts">
  import { io } from "socket.io-client";
  import MessageBox from "./comps/MessageBox.svelte";
  import MessageInput from "./comps/MessageInput.svelte";
  import NameInput from "./comps/NameInput.svelte";
  import "./css/styles.css";
  export let api: string;

  const socket = io(api, { secure: true });
</script>

<div class="flex-col pad-top">
  <NameInput {socket} />
  <MessageBox {socket} />
  <MessageInput {socket} />
</div>
