---
title: The three audiences
permalink: three-audiences
tags:
- technicalwriting101
---

Potential examples:
- Mastercard: can I find the right API and what to do with it?


Over the years of working on developer documentation, I've started to put the target audiences I write for into these three categories.
I'm sure there are different situations, but this is my starting point for identifying the people who are going to read my developer docs:

## Decision-makers

People forget that technical docs have an important marketing component.
Your company has a marketing effort, sure, but on top of that, the docs must communicate:

- What the software does; people shouldn't need https://wtfdoesthiscompanydo.vercel.app/ to figure out what it can do
- That the software is user-friendly
- That the software is easy to integrate with
- That the company supports its customers

You don't have to commit completely to the "every page is page one" mentality, but always consider what the site looks like when you land on a page out of the blue from a search engine.
How scary is it?
Can people make sense of the navigation and organization at first glance?
Do people know if they're in the right place, and can they see how to get out of the developer docs and into other areas of the company site?




- Decision-makers
  - Does this software do what I need it to do?
  - Shouldn't need https://wtfdoesthiscompanydo.vercel.app/ to figure out what an API or developer platform can do
  - It's user-friendly, easy to integrate with, and it supports its customers
  - Bad example: nodegit
  - Good example

## Architects

Architects have to examine the software that the decision-maker bought and work out how it will connect to their existing systems.

Their main concern is how the software is organized.

- Architects
  - How is this software organized?
  - How does it fit with my current tech stack? Where are the integration points? Do the data types look anything like my own?
  - Quick reference to data types not to make sure that they've got individual calls right but to know what data comes and goes from each call
  - Look for analogues, so even when your software uses terms differently you must help people make connections to concepts and terms that they already know and use

## Developers

The main audience of developer docs is the developers who code the integration, of course.
They're the ones that need to know all the specifics about API calls, prerequisites, data structures



A lot of writers and developers think a spec document is enough information to tell you how to integrate with an API, but I strongly believe that it's not.


For example, if you're mining asteroids in the game [SpaceTraders](https://spacetraders.io/), certain ships can scan the asteroids to look for deposits of certain resources.
The API returns a `survey` object with information about where the resources are and which resources it found, and you pass that survey along with your `extract` API request to mine the asteroid.

It seemed strange to me that I had to pass the entire survey object back exactly as it was, including a lot of repeated detail — why couldn't I just pass the ID of the survey or the location?
But that's what the generated documentation shows, because it's inserting the entire `survey` data type in the docs for the `extract` API request.
I found that instead of passing the whole object and entire list of resources that the survey found, I could filter the list and pass only the resources that I wanted to extract.

That's an example of when the generated docs are not enough — something should tell me the details of passing the object and what the API does with it, not just that I pass a `survey` data type.
This is the kind of thing that shows up later when generated docs lead developers to make faulty assumptions about the API.
They get incomplete information, implement something the wrong way, and wind up having to call support or get your company's solutions people into a meeting.




- Developers
  - How do I do these specific things with the software?
  - What data do I send and what data do I receive?
  - Specifics about data types: what values are valid in a field and which fields are always provided vs appear only some of the time
  - Example in spacetraders: it says that we need to submit the whole survey, because the API ref is a copy of the survey object, but through experimentation I've learned that you can trim the survey down to get only the resources that you want
