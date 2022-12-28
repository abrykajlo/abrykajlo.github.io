<script lang="ts">
  import { onDestroy, onMount } from "svelte";

  export let folder: string;
  export let file: string;

  let mounted = false;  
  onMount(() => {
    mounted = true;
  })

  onDestroy(() => {
    mounted = false;
  })
</script>

<div class="flex justify-center">
  <canvas id="canvas" />
</div>

{#if mounted}
  <script data-folder="{folder}">
    var folder = document.currentScript.dataset.folder;
    var Module = {
      canvas: function() {
        var canvas = document.getElementById('canvas');
        return canvas;
      }(),
      locateFile: function(file) {
        return `${folder}/` + file;
      }
    };
  </script>
  <script async src={`${folder}/${file}`} />
{/if}