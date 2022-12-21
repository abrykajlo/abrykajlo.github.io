<script lang="ts">
  export let folder: string;
  export let file: string;
</script>

<div class="flex justify-center">
  <canvas id="canvas" />
</div>

{@html `
<script>
  var Module = {
    canvas: function(){
      var canvas = document.getElementById('canvas');
      return canvas;
    }(),
    locateFile: function(file){
      return "/${folder}/" + file;
    }
  };
</script>
<script async src="/${folder}/${file}"></script>
`}
