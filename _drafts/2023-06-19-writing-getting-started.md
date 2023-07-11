---
title: Writing a getting started guide
permalink: getting-started
toc: true
tags:
- technicalwriting101
- portfolio-samples
---

I recently wrote about [Finding docs to write for your portfolio]({% post_url 2023-06-13-finding-topics %}) and I mentioned how hard it can be to do the research to learn enough about software to write about it.
So I figured it might help if I walked through my entire process for research for a new document.
This post is verbose because I want to cover the whole process and not skip any steps.

## Finding a topic

For portfolio samples, you probably want a standalone document instead of edits or improvements to existing documents.
Standalone documents make it easier for you to say "I wrote this" and for people to gauge your skills.
So go down this checklist and see if you can find something that's missing from the existing docs for the project:

- Installation instructions
- Getting started document
- Guide to installing a plugin or extension
- Guide for any specific task or use case

For example, [Vale](https://vale.sh) is a tool that checks docs against a style guide.
It's got an [installation guide](https://vale.sh/docs/vale-cli/installation/), but that just tells you how to install the package or run the Docker container, not enough to actually check a repo of documentation against a style guide.
It could really use a getting started guide, so in the next sections I'm going to walk through how I'd write a getting started guide for Vale.
These steps mirror how I approach a lot of common tech writing tasks.

## Researching the topic

When you do doc research, imagine that you're an archaeologist carefully removing dirt from around a fossil.
If you go in too quickly, you'll miss something important in the chaos.
Instead, start from zero and write down absolutely every step that you do so you can reproduce or edit them later.

It's critical to remember all of the steps you take so you can reproduce the process later to test it.
As you experiment, you may run steps that weren't necessary, so you need to have those written down so you can try the process again later and skip those steps to verify that the end user doesn't need to do them.

Here's how I'd do this for a Vale getting started guide:

1. Start with as clean an environment as possible.

   If you're familiar with Docker or any virtual machine tools like Docker, VMWare, VirtualBox, or Vagrant, you can use them to start up a new virtual computer.
   This way you're not messing with your actual computer and you can have some confidence that you don't have anything preinstalled or installed in a strange way that isn't how your target audience has things set up.

   If you don't want to use any of these tools, you can use your own computer and take careful note of any settings you change or software that you install.
   You don't want to forget to tell people to install something or change some setting because you've already done it on your computer.

   I'm going to use [Docker](https://www.docker.com/) because it's what I'm most familiar with.
   Vale will run on just about anything, so I'm going to run this command on my computer's terminal to start up an Ubuntu container in Docker.
   If you're not familiar with Docker, just imagine that this command creates a computer within my computer that I can work with without changing anything on my actual computer:

   ```shell
   docker run --rm -idt --name vale-getting-started ubuntu:latest
   ```

   I'll hope to come up with another example later for people who aren't into the command line.
   But really, don't be afraid of the command line; check out this video: [How I Learned to Stop Worrying and Love the Command Line](https://www.writethedocs.org/videos/portland/2019/how-i-learned-to-stop-worrying-and-love-the-command-line-mike-jang/).

   I can see the container running by running the command `docker ps`.

   ![The terminal response to the `docker ps` command, showing the running container named vale-getting-started](/assets/images/blog/docker-ps.png)

   Then I can log in to that container with this command:

   ```shell
   docker exec -it vale-getting-started bash
   ```

   That command means "open the `bash` command-line shell in the container named `vale-getting-started` and stay in there until I close it."
   The command prompt in my terminal changes to how the terminal looks in Ubuntu.
   Now I can run commands on the container's virtual computer and not on my physical computer.

1. Set up the start of the use case.

   Time to install Vale now, right?

   Nope!
   The environment isn't ready yet.

   Vale is a tool for checking docs against a style guide, and we don't have any docs on this computer.
   For Vale, a single Markdown file would be enough, but for a more realistic use case, let's grab an actual project with docs in it.
   I thought about using [Vale's docs themselves](https://github.com/errata-ai/vale.sh) but I thought that might get confusing, so I'm going to clone the docs for [Jekyll](https://jekyllrb.com/), which is a super useful doc platform.

   I went to the [Jekyll repo on GitHub](https://github.com/jekyll/jekyll), clicked the **Code** button, clicked the **Local** tab and then the **HTTPS** tab, and copied the URL to the repo.

   First I'll need Git, which isn't installed on Ubuntu by default, so I run these commands to update Ubuntu's software list and install Git:

   ```shell
   apt update
   apt install -y git
   ```

   Then I put the URL in the `git clone` command to grab a local copy of the repo and go into its folder:

   ```shell
   git clone https://github.com/jekyll/jekyll.git
   cd jekyll
   ```

   Now when I go into the `jekyll` folder I can see the Markdown docs in its `docs/_docs` folder:

   ![Listing the markdown files in Jekyll's documentation](/assets/images/blog/ls-docs.png)

1. Install the software I'm documenting.

   Ok, now I'm ready for Vale and fortunately it's got [installation instructions](https://vale.sh/docs/vale-cli/installation/).
   The instructions for Windows say to use the Chocolatey package manager and the instructions for Mac say to use the Brew package manager.
   Linux is closer to Mac than Windows, so I'll use Brew.

   But Brew isn't installed on this Ubuntu container by default, so I look up the instructions for installing Brew on Ubuntu, which are fortunately on the [home page of Homebrew's web site](https://brew.sh/).
   It says to run a command that uses the cUrl command.

   This installation of Ubuntu actually doesn't have the cUrl command even though it's pretty common, so I have to install it first:

   ```shell
   apt install -y curl
   ```

   Are you taking careful notes about what prerequisites you're installing?
   When I go back and write this up for real, I'll add all of these prerequisites to my getting started guide.

   Now that cUrl is installed, I can run the Brew install command:

   ```shell
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```

   That install command tells me to run a few more commands to complete the installation:

   ```shell
   (echo; echo 'eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"') >> /root/.profile
   eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"
   ```

   I verify that Brew is installed properly with this command:

   ```shell
   brew --version
   ```

   Running a command with `--version` like that is a habit of mine after I install something to verify that it's ready for me to use.

   Finally I can run the command from Vale's installation instructions:

   ```shell
   brew install vale
   ```

   Then I check its installation:

   ```shell
   vale --version
   ```

   Fantastic!

   That was a lot, and if you're using a different setup, you may have to do other setup steps.
   In fact, setting up a development environment (which is what we've got going here) is often a complex task that requires familiarity with a wide range of computer stuff; you can see how many tools I've used so far.
   This is all part of the research experience, so don't be afraid to try different things, search for info and tips, and ask people for help.
   Setting up a development environment is hard at first, but it gets easier as you get more familiar with installing tools in this way.

1. Run the software I'm documenting.

   Finally I'm at the part I'm most interested in: Running Vale on the Jekyll documentation.
   To figure out how to do this, I have to read the existing Vale docs and look at examples of how to run Vale against docs.
   That info is in the Vale docs, but it's complex, and hidden behind lots of info about configuring Vale and customizing what it looks for.
   (That's why I'm writing this getting started guide.)

   The Vale docs also have a [sample repository](https://vale.sh/docs/vale-cli/structure/#sample-repository), and it's a bit more helpful because of this single line in the README:

   ```md
   Try it out by running `vale README.md` from your command line.
   ```

   This is a simple command, and some people may be able to find it hidden in other info in the Vale docs, but I don't think it's as obvious as it should be.

   So I try it out in my setup by pointing Vale to one of the Jekyll doc files:

   ```shell
   vale docs/_docs/index.md
   ```

   I get this error:

   ```shell
   E100 [.vale.ini not found] Runtime error
   ```

   I was hoping that Vale would use a default configuration, but it looks like we have to explicitly create a config file.
   I tried copying the config file from the [sample repository](https://vale.sh/docs/vale-cli/structure/#sample-repository), but it refers to specific rules in the `Styles/Vocab/Blog` folder, and I want to keep things simpler for now.

   Vale has a [Config generator](https://vale.sh/generator) to create these files, so I tried that next.
   I selected the Microsoft writing style guide and the write-good supplementary style and it showed this config file:

   ```
   StylesPath = styles

   MinAlertLevel = suggestion

   Packages = Microsoft, write-good

   [*]
   BasedOnStyles = Vale, Microsoft, write-good
   ```

   I copied that text into the file `.vale.ini` at the root of the Jekyll documentation.
   To do this on the command line, I used the Nano text editor by following these steps.
   You can use whatever text editor you're familiar with, but I like Nano for its user-friendliness.

   1. Install Nano with the command `apt install -y nano`.
   1. Open the new file for editing by running the command `nano .vale.ini`.
   1. Paste the config file from the config generator into Nano.
   1. Save and close the file by pressing Ctrl+x, then y, and then Enter.
   1. Check the contents of the file by running the command `cat .vale.ini`.
   1. As instructed by the generator, run the command `vale sync`.
   This command downloads the styles that are listed in the config file so Vale can use them.

   Now let's try running vale again:

   ```sh
   vale docs/_docs/index.md
   ```

   Success at last!
   The command line shows the rules that the Jekyll doc file breaks:

   ![Vale's report on the Jekyll doc file](/assets/images/blog/vale-successful-run.png)

   The last step I'd want to do is to communicate to people who use this project how to run Vale, rather than expecting them to know how to run Vale.
   A simple way to do that is to add a note in the readme about running Vale, but it would be better if I documented how to include the Vale script as part of the usual build process.
   There are many ways to do that, such as including the Vale command as part of the GitHub workflows in the `.github/workflows` folder or adding it as a script to the `package.json` file of a Node project, but I'm going to stop here.

1. Test and refine

   But I'm not done yet — there's a lot of refinement work before the guide is easy for everyone to use.
   Some of these refinement steps are:

   - Put the steps in an easy order to follow.
   For example, install all of the dependencies at once instead of installing each dependency as you learn that you need it.
   - Start over with a clean environment, go through the steps, and make sure nothing is left out.
   I test my tutorials, guides, and such several times on different environments and in different ways until I'm confident that they will work for a large number of people.
   - Look for steps that are unnecessary and try removing them to see what happens.

## Wrapping up

That took a long time, didn't it?
Research takes time, but it's the best way to get to the bottom of what a user really needs to know.
I hope you've got a little more appreciation for the effort that goes into tech writing and how the result simplifies things for people.
