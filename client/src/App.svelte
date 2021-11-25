<script lang="ts">
  import { io } from "socket.io-client";
  export let api: string;
  let name = "ozgur";

  const socket = io(api, { secure: true });

  socket.on("connect", () => {
    console.log("client connected");
  });

</script>

<main>
  <h1>Hello {name}!</h1>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: cadetblue;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }
</style>
