+++
date = 2025-05-26
draft = true
title = "Templates and Overloading"
series = [ "Raytracing in One Weekend: Zig vs C++" ]
series_order = 1
+++

A few weeks ago I decided to embark on implementing Ray Tracing in One Weekend in a programming language which was foreign to me, Zig. My level of experience is very new but I thought it would be a good opportunity in learning something new. Coming from a C++ background I thought it might be interesting to write a series of posts comparing the two. Even though, strictly speaking, the better comparison is with C; Ray Tracing in One Weekend was originally intended for C++ and that is where my background lies.

## Overloading

In the walkthrough we first come across operator overloading in the vector class implementation. Zig does not allow function overloading of any kind, including operator overloading. One of Zig's ethos is you shouldn't have to think too hard about where control flow is going.

### C++

In C++, this looks like the following:

```cpp
class vec3 {
public:
    double e[3];
    ...
    vec3 operator-() const { return vec3(e[0]); }
};
```

This is very convenient for a lot of reasons.

### Zig

Since Zig doesn't come with operator overloading it does provide a convenient @Vector type. 

## Function Overloading

In part 8 on antialiasing introduces the addition of `random_double` functions.

### C++

In C++ we can overload a function definition with different arguments and return values, as long as its not ambiguous. In the tutorial we get:

```cpp

```

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