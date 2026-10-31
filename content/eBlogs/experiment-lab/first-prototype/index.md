---
title: "The First Prototype: What We Learned"
description: "A first hardware prototype is a learning tool. Here is how to turn an early build into useful engineering evidence."
date: 2026-09-22
draft: false
featured: false
storyType: "Experiment Log"
series:
  - "The Experiment Lab"
tags:
  - "Prototyping"
  - "Engineering Process"
tone: "amber"
icon: "⚙"
---

## Build to answer a question

The first prototype is not a miniature version of a finished product. It is a fast way to answer a question. Can the sensor detect the event? Does the chosen interface work at the required cable length? Does the power supply stay within its limits when the radio starts transmitting? A focused question makes an early build more valuable than a polished board with no clear test.

Write down what success looks like before the test. Include a measurable expectation, such as a sensor updating at least ten times per second or a device staying below a particular temperature during a workload. Record the setup too: board revision, firmware version, supply voltage, connected equipment, and environmental conditions. These details make a result repeatable instead of anecdotal.

## Make the result useful

During a test, note observations even when they seem unimportant. A microcontroller that resets only when a motor starts may point to a supply dip, grounding problem, or electromagnetic interference. Capture the timing, what was connected, and what changed between a successful and failed run. A quick phone photo of the wiring can save an hour of recreating the setup later.

Change one thing at a time when practical. If you swap the cable, power source, firmware, and sensor all at once, a better result does not tell you which change helped. When several changes are unavoidable, label the build and keep a short list of exactly what changed.

> **Fun fact:** A microcontroller's reset pin can act like a tiny black-box recorder's reset button—an unexpected reset is a clue worth logging, not just an inconvenience to clear.

## Close the loop

After testing, write down three things: what happened, what it means, and what you will try next. Separate measured results from guesses. For example, “the rail fell to 3.0 V when the motor started” is an observation; “the regulator is undersized” is a hypothesis to test.

A prototype has done its job when it reduces uncertainty. It may uncover a limitation, disprove an assumption, or reveal a more useful question. Keeping that record prevents the next iteration from repeating the same experiment and helps the team make decisions from evidence rather than memory.
