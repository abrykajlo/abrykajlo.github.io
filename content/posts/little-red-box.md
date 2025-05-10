+++
title = "Little Red Box"
date = 2018-06-29
categories = [ "programming" ]
+++

It may not look like much but this little red box is the start of a personal project which I hope will continue on for quite some time. It was in fact the reason why I built this website. You see back in the Summer of last year I was working on my own rendering engine as a learning project. It was a few months after that I learnt of WebAssembly and that I could take my engine and render it directly in any compatible browser. One day I want to work in the video game industry so I thought that it might be a good showcase of my skills if I can demo directly in the browser. Through some inspiration I realized I could post along as I write the code in the form of live demoes. And this, although very simple, is the start of that. I also want to use this website as an opportunity to play around in the Rust programming language. I like the idea that a whole project need not be made in one language and that in fact Rust is a good language with it's useful FFI and interoperability. I would like to show that it is possible to link C++ and Rust together in a WebAssembly project. The code for this simple demo is below.

<canvas id="canvas"></canvas>

<script>
  var Module = {
    canvas: function() {
      var canvas = document.getElementById('canvas');
      return canvas;
    }(),
    locateFile: function(file) {
      return "/scripts" + `/${file}`;
    }
  };
</script>
<script async src="/scripts/lrb.js"></script>

```cpp title="main.cpp" linenums="1"
#include <iostream>
#include <SDL.h>
#include <GLES2/gl2.h>

int main()
{
    SDL_Window* window = nullptr;
    window = SDL_CreateWindow("Hello World",
                              SDL_WINDOWPOS_CENTERED,
                              SDL_WINDOWPOS_CENTERED,
                              640,
                              480,
                              SDL_WINDOW_OPENGL);

    if (window == nullptr)
    {
        return -1;
    }

    SDL_GLContext glContext = SDL_GL_CreateContext(window);
    glClearColor(1, 0, 0, 1);
    glClear(GL_COLOR_BUFFER_BIT);

    SDL_GL_DeleteContext(glContext);
    SDL_DestroyWindow(window);
    return 0;
}
```

Some immediate next steps are: ideally I'd want to figure out the appropriate width to render on different screen sizes and I must write a class to hold my shaders. A large part of the difficulty of this project is that WebAssembly currently has little support for DOM manipulation or querying. This makes it more difficult for me especially as javascript is not my forte but I am still excited to get to work on a polyglot programming project, something I have not done a lot in the past.
