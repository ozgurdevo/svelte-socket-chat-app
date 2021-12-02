<script lang="ts">
  export let nickname, status, color;
</script>

<div
  style="text-align: center; color: seashell; font-weight: bold; margin-top: 0.5em"
>
  <span style="color: {color}">{nickname}</span>
  {status}!
</div>
