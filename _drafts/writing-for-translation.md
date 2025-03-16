---
title: Writing to be translated
permalink: writing-for-translation
tags:
- technicalwriting101
---

Writing for translation is a lot like writing with accessibility in mind.
The primary benefit of writing for accessibility is to make the information available to people who don't view it in the same way as most people, but it often has the side benefit of making it easier to read for everyone.
In the same way, the primary benefit of writing with translation in mind is to make the process of translation easier and to make the translated text more accurate and easier to read, but it has the side benefit of making the text easier to read in the individual language.
Writing with translation in mind is worth it even if you don't have any plan to translate what you write.

I don't know how much of this is still relevant, but these are the things I keep in mind around translation:

## Use code as modifiers, not as subjects, verbs or objects

I was taught to never use an untranslatable word or phrase (such as a code word, command, or variable name) as a part of speech.
For example, suppose that you are talking about Linux commands and you say "ls lists the files and folders in the current directory."
Translators may have a hard time with that sentence because they can't translate "ls" and the target language may require specific syntax like certain endings on nouns.

Imagine trying to translate this sentence:

> When you are done with the cache folder, `rm -rf` it to remove it.

Good luck translating "`rm -rf`" as a verb and putting that verb in the right syntax for the target language.

Instead, use untranslatable words as modifiers for translatable words.
That example sentence becomes:

> The `ls` command lists the files and folders in the current directory.

The translator can then translate the sentence without `ls` and then shoehorn it in where it makes sense, as I did in the English.

I've continued to do it because it makes sense to me, but maybe things change.
The English is a bit more verbose but easier to follow if you're still learning the code and commands.

## Use the same term to refer to the same thing

When writers get [slender yellow fruit syndrome](http://www.clearwriting.com/articles/playing-the-synonym-game/) or


This happens in tech when people don't stick to specific terms for things.


For example, here's some made-up API doc:

> The `GET /widgets/{widgetId}` endpoints provides information about a specific widget.
> You can identify the widget by its ID, or you can get the widget signature by accessing the matching resource under `GET /widgets/signatures/`.
>


This paragraph refers to an API "endpoint," "resource," and "method."
Sometimes I refer to them as "commands," in the way that I describe an API as "a list of commands that a computer understands."
Other people refer to them as "requests" and "calls," though those terms should really mean the request that you send to the API, not any part of the API itself.
(I confess that I'm not sure which term is the best to use here, so I try to pick either "endpoint" or "method" and stick with it.)

When someone translates that paragraph, are they going to know  that those different terms refer to the same thing?
If they don't, the resulting words in the target language may not relate very well to each other.
Even if they do, will they translate the different source language words into the same target language words or different ones?
There are lots of places where this can lead to a bad translation.