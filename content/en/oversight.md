---
title: Oversight
menuTitle: Oversight
badge: research.oversight.in
category: Projects
description: Crowdfund advanced scientific research. CMS for research collaboration.
subtitle: Story of my first start-up. And how we failed at it. A crowdfunding platform for advanced scientific research. And content management and collaboration system for academic research.
position: 5
stack:
    - Nuxt.js SSR (Deployed on Vercel)
    - Golang (Stateful API on Echo framework, deployed on Elastic Beanstalk)
    - GraphQL (Hasura)
    - AWS (EC2, S3, RDS/Postgres, ELB)
    - Razorpay (Payments)
---

<alert>
The primary platform is available at <a href="https://research.oversight.in">research.oversight.in
</a>. 
Supporting micro-site is at <a href="https://resources.oversight.in">resources.oversight.in</a>.
The social networking platform, which was earlier available at <b>oversight.in</b> is now shut down.
</alert>

When we were in college, I and my friend [Hemant](https://instagram.com/hemanttvats) wanted to build a
self-driving/autonomous military tank. One that can drive to the target location by itself, neutralize/engage the targets, and drive back to the base by itself. While trying to fetch research grants for building the first prototype, we realised the monumental lackadaisical problems driven by attitude and ego in India's academic research ecosystem. Nobody would give us funds because we were *too young*. We were told **we didn't even have a PhD**. As if that was mandatory for building advanced tech.

We both envisioned that we would go on to build an in-house research incubator, along the lines of India's DRDO, which would work on all the latest technologies, including deep learning and quantum computation. We were young and green at that time, so we were naive enough to start such a journey.

## Business Plan

We started small by trying to connect mentors inside colleges, who were mostly professors, experienced in writing research papers, with mentees, like students, who were looking for guidance and mentorship on how to write their own research papers, and how to get them published.

After running these operations manually, over Google Docs and spreadsheets, we started building a platform, which would go on to be hosted at <code>Oversight.in</code>.

We (it was mostly my own idea) took a bet that we will build a crowdfunding platform where young researchers would publish their research projects/ideas, and a target amount for the funds they need to either execute their idea or to take it to completion.

<blockquote>

And a small portion of those sponsorships would go to us as **platform fees**. Enough to generate a stable revenue for us.

</blockquote>

I was inspired by <a href="https://experiment.com">Experiment.com</a> which was serving the identical audience but in the United States. And no such platform was available for Indian students.

## Journey Begins

I hired a team of interns to start coding the platform. Because I'd never ventured into web development and didn't even want to, and most of my experience was in writing neural networks. I was paying their stipends with the money I'd earned while doing open source work for Google. But soon I realised that there's only so well interns can do. The platform we wanted to be designed actually required the skills of at least Software Development Expert Level 3 (SDE-III). And these were mostly just 2nd-year interns in a random private engineering college in India.

After spending months trying to babysit them about nitty-gritty like minor UI/UX changes, and insignificant bug fixes, I was starting to give up on them. Besides the platform looked nowhere what I wanted to design. Wasn't even professional. We weren't even sure if it was safe enough to handle payments.

I finally fired the team of interns and started to learn web development myself. [Hasura](https://hasura.io) immediately caught my eye with how easy it made working with database schemas, automatically handling migrations, and giving a straightforward GraphQL interface using which I could perform queries and mutations on the database directly from the frontend. This was my first time encountering GraphQL. I'd only rarely even worked with REST before this.

Then I began my journey into Golang. I always wanted to learn it. Had heard a lot about this phenomenal language at that time. Besides, I could only write in Python until then.

And my search for a first-class easy to use front-end framework landed me on [NuxtJS](https://nuxtjs.org). And I immediately fell in love with how easy Nuxt makes it to develop and deploy a straightforward front-end.

And that is it. It took me about 2 months to learn all these new tools and put together a beta version of the platform that could be rolled out for first the batch of users. This is just a few months before the pandemic.

## Stack

<list :items="stack"></list>

## What went wrong?

The pandemic. Almost once in a lifetime phenomenon, which no one could've imagined in their wildest dreams. Almost the entire planet shut down. On March 24th 2020 Prime Minister Modi announced India's first nationwide lockdown. Since most of our initial clients/leads were inside colleges and laboratories, almost all of which had shut down, we just lost the entirety of our initial leads almost overnight. All of this meant - **no revenue at all!**

As a side effect of this lockdown, even government offices started working too slow. Compliances which used to take not more than 2-3 days, were now taking weeks, and sometimes months, due to lack of staff at offices.

## Where Did We Primarily Fail

But the pandemic wasn't the fundamental reason why we lost the game. It was us. We were simply not good enough and simply didn't realise how tough building a venture is. The world of enterprise turned out to be nothing of the sort we'd hoped it would be.

We learned something the hard way, which I want every single first-time entrepreneur to know. That **it is easy to build a software. It's tough to sell your product. And it's even more fucking tough to turn it into a business.** Building software isn't equal to building a business.

I wish someone would have told me this before we incorporated our company, that we should first establish a guaranteed list of early users, who wouldn't ditch us and will definitely generate revenue for us. And only then start building the software. Otherwise, it would turn out to be a waste of time. As it did!

<alert>

It's easy to code a website. It's tough to get users.

</alert>

And that is primarily where we failed. **We failed to sell the idea. We failed to get enough users.** We even tried to introduce new features, and ultimately pivoted to an entirely different fundamental product, which was a social networking platform for academics, keeping crowdfunding research as a supporting/miscellaneous feature.

## What I Learned

The biggest learnings out of all were **humility** and **contentment**. Some time into the lockdown, my dad was laid off from his job at a reputed airline, as was the case with millions of others all over the globe whose companies had decided to downsize to optimize for survival during the pandemic. When I started Oversight, I always had it at the back of my mind, that it was okay for me to not be able to generate stable income from Oversight for a few months, or years, because my dad can comfortably take care of our family finances. But now that comfortable option was gone.

I remember, a few months after my dad lost his job, my mom used to regularly check up on me, while I was typing on my laptop all day long, to inquire whether we started generating a reasonable revenue. She made it sound as if she was just casually inquiring and not really concerned over our monthly expenses. But as months passed, her lowered voice started making it even more clear to me why she was inquiring, even if she never admitted it.

I knew exactly the situation my family was in. And I used to politely tell my mother that from the following month we're more hopeful that we'll have good money flowing into our accounts from the new users. It was the standard response from my end, every single month.

I continued to run Oversight knowing precisely the fact that I was lying to her about our realities. In hindsight, I feel I was being fairly selfish. Oversight, by then, had become more of my obsession instead of a reasonable idea that deserves to be perceived.

Every single day, after tens of cold calls, mass spamming over Instagram, and shooting cold emails, when I would go back to bed at night with a **deflated ego** from having heard "no" so many times, there was little escape but developing humility.

## Game Over

Since Oversight had already taken a toll on the mental health of both myself and Hemant, we decided to call it off. Also, it didn't make sense to continue bootstrapping the venture since our finances were now diluted, and our families also needed our help more than ever.

Hemant went back to working with Infosys, from which he had taken a sabbatical to build Oversight with me, and I subsequently took down the entire AWS infrastructure.

<alert type="danger">

Oversight was officially shut down in March 2021.

</alert>

All of this with a heavy heart. But also a sense of relief and a weird hope that some very troubling times are now behind us.

From April onward of the same year, I started working with [Johan](https://twitter.com/elitasson/) and [Nuno](https://twitter.com/nunopato) at [Nhost.io](https://nhost.io).

<alert>

You can read more about my journey at Nhost [over here](/work#nhostio-stockholm).

</alert>
