+++
date = 2025-05-26
draft = true
title = "Templates and Overloading"
series = [ "Raytracing in One Weekend: Zig vs C++" ]
series_order = 1
+++

A few weeks ago I decided to embark on implementing Ray Tracing in One Weekend in a programming language which was foreign to me. My level of experience is very new but I thought it would be a good opportunity in learning something new. Coming from a C++ background I thought it might be interesting to write a series of posts comparing the two. Even though, strictly speaking, the better comparison is with C; Ray Tracing in One Weekend was originally intended for C++ and that is where my background lies.

## C++ Templates

C++ templates are very powerful, 

```c++
template<class T>
T identity(T arg) {
    return arg;
}
```

## Zig Generics

Zig is very similar to C++ in that it doesn't raise an error or issue until a template has been evaluated. The way Zig does generics is through it's comptime mechanism. 