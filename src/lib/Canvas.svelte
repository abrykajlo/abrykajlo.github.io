<script lang="ts">
  export let js: string;

  let Module = {
    canvas: (function () {
      let canvas = document.getElementById('canvas');
      return canvas;
    })(),
    locateFile: function (file: string) {
      return `/js/${file}`;
    }
  };
</script>

<div id="canvas-container">
  <canvas id="canvas" />
</div>

{@html `<script async src="/js/${js}"></script>`}
