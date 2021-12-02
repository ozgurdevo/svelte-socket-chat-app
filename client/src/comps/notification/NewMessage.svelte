<script lang="ts">
  export let sender, message, color;
</script>

<div>
  <span style="color: {color}; font-weight: bold; margin-top: 0.5em"
    >{sender}:</span
  >
  {message}
</div>
