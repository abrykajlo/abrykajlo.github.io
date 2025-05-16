+++
title = "Life Update And Some Rust"
date = 2018-11-11
categories = [ "personal" ]
showComments = true
+++

Writing code and writing words about said code is not my forte. While the coding continued on the WASM renderer I was working on, the blog posts stopped. Life gets busy and habits die hard. Well a lot has happened since then and while I continued the coding portion up until mid-August I have stopped since then. I got to the point of having a full Shader and ShaderProgram class implementation wrapping the OpenGL code. Alas you work on projects to figure out what sticks and this has not stuck.

## A New Angle

The problem I have been having is my C++ background is heavily Visual Studio based and there is no good VS2017 plugins for using with WebAssembly (and I am tired of trying to get CMake or Scons to work). Well I hate to say it but I think I am going to continue this same project in Rust. Well not hate, I love Rust, it's just that any time you hear WebAssembly you mostly hear "Rust + WebAssembly". So yah, there is a band wagon and I am ready to jump on it.

## Not Just Personal

So recently I have achieved a big goal of mine. I am now proudly and excitedly now working at a game studio in Vancouver, Relic Entertainment. Now whats exciting about Rust is the potential I see it in impacting the games industry. In the last year I have heard of 3 game studios experimenting or outright adopting it. Ready At Dawn has been slowly converting their engine over and Chucklefish is working on an all new game called Witchbrook. I have also heard EAs SEED division has been doing some experimentation. I will post links below.

## What Am I Hoping To See?

I think the most interesting thing with Rust is the ability to see the bigger picture without having to know the world. I have dabbled in Rust but I have yet to write any multithreaded code, Rusts namesake. Being able to start tackling concurrency without fear is a big thing to achieve. When you have many people of different skill levels touching a complicated code base something is bound to get broken (like all the time). Even the most skilled developers make mistakes from time to time. Rust enables its users by mitigating the types of mistakes available to make. Sticking to safe Rust means you're mostly only bound by logical errors. I hope to see more tools being created for content creators. Tools which have greater stability and less bugs which can have quicker release cycles without succumbing to crashes. It would be great to see companies be more productive and not have to overwork employees when approaching a deadline (games industry crunch!!??!?). I think there is huge potential for games to be more polished since play testing can focus on the gameplay and not on bugs or crashes.

## What Am I Hoping To Achieve?

I would like to stop dabbling and start making. I am a capable C++ developer but with my level of experience sometimes learning concepts take a backseat to learning nuances of a language or making silly frustrating mistakes. Leaving that behind sounds great. Plus Rust is one of the most enjoyable languages I have used in a long time and I have used a lot of different languages (Haskell, Lisp, Go, Elm to name a few). I have recently finished the Rust Programming Book which I do recommend to anyone trying to learn the language. A great tip by the way if you have rust installed and want to read documentation or the rust book just use `rustup doc` and you will open a local copy of the doc for the version of rust you have installed. This month is Github's GameOff 2018 and I am working on a simple game by myself. It will be the first game I will write ever in Rust or any language for that matter. Next month is Advent of Code which is 25 days of coding challenges over at [Advent of Code](https://adventofcode.com/) which I have commited to coding entirely in Rust...if I can make it the whole month.

## Links

[Johan Andersson from SEED tweets about Rust](https://twitter.com/repi/status/1002512705792733184)

[Chucklefish whitepaper on Rust at Chucklefish](https://prev.rust-lang.org/pdfs/Rust-Chucklefish-Whitepaper.pdf)

[Andrea Pessino, CTO at Ready at Dawn, announces Rust for studio](https://twitter.com/andreapessino/status/1021532074153394176?lang=en)

[Andrea Pessino how to learn Rust twitter thread](https://twitter.com/andreapessino/status/1042120425415700480?lang=en)
