---
title: Finding docs to write for your portfolio
tags:
- technicalwriting101
- portfolio-samples
---

On Reddit [/r/technicalwriting101](https://www.reddit.com/r/technicalwriting101/), aspiring tech writers often ask about portfolio samples:

- Where can I find projects that need docs?
<!--more-->
- I found a project, but it's not immediately clear what docs it needs; how can I figure out what to write?

At the core of these questions is the problem that it's hard to look at a piece of software that's new to you and understand it well enough that you can create docs that help people use it.

If you're asking these questions, congratulations!
You've discovered two important things:

- Technical writing isn't easy
- Tech writing requires lots of research before you start writing

I'll get into how to do that research later, but to get started, here's my advice about finding a project that needs a standalone document that you can write for your portfolio:

## Option 1: Start with something you know

A lot of times the hardest part is getting started, so if you use any kind of software tool, you can start there.

As a new technical writer, have you used any of this software?

- Doc platforms: Gatsby, Hugo, Jekyll, Docusaurus, and a million others
- Doc languages: Markdown, AsciiDoc, rST
- Testing platforms: Jest, Puppeteer, Playwright, Vale, Mocha
- Tools that generate docs from code: swagger-codegen, slate/reslate/widdershins/shins, javadoc, pydoc, typedoc, spectaql, dociql, and a million others

You might think that all of these platforms are well-documented because they're intended for tech writers, but many of them have holes in their docs.

For example, [Vale](https://vale.sh) is a popular tool for checking docs against a style guide.
It's got an [installation guide](https://vale.sh/docs/vale-cli/installation/), but that just tells you how to install the package or run the Docker container, not enough to actually check a document against a style guide.
In a future post I'm going to write about how I would write a getting started guide for Vale because it's a straightforward use case that would really help new users get started quickly.

If there's no major need in the doc software you've got experience with, how about integrating one tool with another?

- Guide for installing and using a specific plugin
- Guide to applying a certain template onto a doc platform
- Guide to using a testing platform on docs
- Guide to customizing the docs that come out of the doc-generation tools

If you don't have a background with any projects like these, congratulations — you get to learn something new!

## Option 2: Learn something new

Recently I got some hand-me-down Raspberry Pis to play with, and they've activated all kinds of memories from when I was a kid, learning Logo and playing with an electronics kit.
They've made me think about all kinds of use cases, like automating stuff around the house, having dedicated buttons on my desk to do specific things, and adding an info station to tell me the humidity and whether I have any new emails.

There's software out there that can do all sorts of things for you; you just have to work out what you want to learn and do.
For a lot of new tech writers, that's building an online resume/portfolio site, or just a simple personal web page that introduces you and points to other accounts or sites that you want to share.
There

### What do you want to do?

Think about the things that you want to learn or do with technology.
That's hard because the options are infinite, but you can pick something to try out and see if you like it.

Do you want to publish web sites?
Write programs to automate tasks?
Create web applications?
Edit videos or pictures?

You can do all of these things for free with open-source tools.

One great place to start is with an online resume and portfolio site or just a simple personal web page that introduces yourself and points to other accounts or sites that you want to share.

Then you can take notes as you learn the tool and think about what you could write about it.

### What do you already know how to do?

And if you already know how to do any of those things, find an [open-source equivalent](https://github.com/btw-so/open-source-alternatives) to that tool, learn it, and find what docs it needs.

### Look at command-line tools

I'm fan of the command line, and there are tons of small, self-contained command-line tools out there that are relatively easy to learn and use.
I hang out on [Rands leadership slack](https://randsinrepose.com/welcome-to-rands-leadership-slack/), which has a great channel named `#cli-enthusiasts`, where people are constantly talking about new CLI tools.
I grab the ones that seem interesting and try them out, because it's usually pretty easy to install them in your shell and give them a try.

For example, lately I've been using [tldr](https://github.com/tldr-pages/tldr) to get quick information about other commands.
It's like the `man` command, but like the name implies it gives only the 80/20 basics, like a quick description and simple examples, instead of every possible parameter.
It's spectacular for quick reference; all you have to do is compare the results for the `tar` command to see why I like it:

| `tldr tar` | `man tar` |
|---|---|
| ![The output of the `tldr` command for the `tar` command](/assets/images/blog/tldr-tar.png) | ![The output of the `man` command for the `tar` command](/assets/images/blog/man-tar.png) |

In short, `tldr` starts with a description of what the command does and a series of simple examples.
The `man` output doesn't even tell you what the command does.
(Yeah, Linux users should know `tar`, but they all had to learn it at some time.)

So it's a great tool.
Let's see if it has any doc needs.

The installation for it is pretty simple — it's a single command to your package manager of choice and you don't even have to edit any config files to get it in your terminal.
Probably no more docs needed there.

But what about the info it prints for commands?
Those pages are community-provided, so anyone can add help information for a command they know about.
There are [guidelines](https://github.com/tldr-pages/tldr/blob/main/CONTRIBUTING.md) for contributing pages about a command, but these guidelines skip over some important details and assume that you can look at the repository and figure out:

- To provide info for a command, where do I put the files?
- The guidelines say that the info for the commands is in Markdown, but markdown isn't standardized. What markup can I use and how does the program treat that output?

There's an opportunity here for a simple getting started guide that shows how to add help for a command to `tldr` and submit it in a PR to the maintainer.

Thinking outside the existing documentation and imagining these real-world use cases is a big part of software documentation, and this is good practice for it.

I don't want to throw any shade at tldr; it's a great tool with decent documentation and UX; I'm just pointing out the opportunity for someone to write a super clear getting started doc that would help someone unfamiliar with how the tools is set up contribute to it.

That's my advice for now; I hope it helps point you in the direction of good writing samples!
