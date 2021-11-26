<script lang="ts">
  import { io } from "socket.io-client";
  import MessageBox from "./comps/MessageBox.svelte";
  import MessageInput from "./comps/MessageInput.svelte";
  import NameInput from "./comps/NameInput.svelte";
  import "./css/styles.css";

  export let api: string;

  const socket = io(api, { secure: true });

  socket.on("connect", () => {
    console.log("client connected");
  });

  socket.on("quit", (data) => {
    console.log(data);
  });

  socket.on("receivemsg", (val) => {
    console.log(val);
  });

  function onClick() {
    socket.emit("sendmsg", { res: "hello ozgur" });
  }
</script>

<div class="flex-col">
  <NameInput />
  <MessageBox />
  <MessageInput />
</div>