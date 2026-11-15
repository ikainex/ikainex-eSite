---
title: "DC Motor Add-on Board"
tagline: "DC Motor Add-on Board — motor control & testing"
image: "img/eboards/addon-boards/dc-motor-aob.png"
group: "annex"
category: "Motor control"
description: "Drive a brushed DC motor and monitor its current for bench testing and control-loop experiments."
showBreadcrumbs: true
---

{{< board-intro >}}

## Overview

The DC Motor Add-on Board pairs a Texas Instruments DRV8871DDAR motor driver with an INA293B3IDBVR current-sense amplifier. It provides control inputs for a brushed DC motor and an analog output for observing motor current during testing.

## Key Features

- **Brushed DC motor control** — The DRV8871DDAR H-bridge supports bidirectional control and PWM.
- **Analog current feedback** — The INA293B3IDBVR amplifies a current-sense signal for monitoring through the AN header pin.
- **Host control inputs** — The header exposes IN1 and IN2 for a host microcontroller.

## Technical Specifications

| Parameter | Specification |
|---|---|
| Motor type | Brushed DC motor |
| Motor driver | Texas Instruments DRV8871DDAR |
| Current-sense amplifier | Texas Instruments INA293B3IDBVR |
| Control inputs | IN1 and IN2, with PWM support |
| Current feedback | Analog output (AN) |
| Application | Motor control |
| Typical use | Driver testing, control loop experiments, and diagnostics |

## Pin Configuration

The diagram shows the signals on the 20-pin header.

<div class="overflow-x-auto my-6 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 p-4">

```text
                            Pin Header
                       ┌─────────────────┐
                   1   │ NC          NC  │ 20
                   2   │ NC          NC  │ 19
    Current sense  3   │ AN          NC  │ 18
        IN2 input  4   │ IN2         NC  │ 17
        IN1 input  5   │ IN1         NC  │ 16
                   6   │ NC          NC  │ 15
                   7   │ NC          NC  │ 14
                   8   │ NC          NC  │ 13
                   9   │ NC          5V  │ 12  Power Supply
           Ground 10   │ GND        GND  │ 11  Ground
                       └─────────────────┘
```
</div>

## Tutorials

Explore the [Motor Control tutorial series]({{< relref "/etutorials/motor-control" >}}) for practical projects.

## Hardware Resources

<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">

<div class="rounded-xl border border-neutral-200 dark:border-neutral-700 p-5">
  <h3 class="text-base font-medium text-neutral-900 dark:text-neutral-100 mt-0 mb-2">DRV8871 Datasheet</h3>
  <p class="text-sm text-neutral-600 dark:text-neutral-300 mb-3">H-bridge operation, PWM input behavior, and current regulation.</p>
  <a href="https://www.ti.com/lit/ds/symlink/drv8871.pdf" class="text-sm font-medium">View DRV8871 datasheet (PDF)</a>
</div>

<div class="rounded-xl border border-neutral-200 dark:border-neutral-700 p-5">
  <h3 class="text-base font-medium text-neutral-900 dark:text-neutral-100 mt-0 mb-2">INA293 Datasheet</h3>
  <p class="text-sm text-neutral-600 dark:text-neutral-300 mb-3">Current-sense amplifier gain options, electrical characteristics, and application circuits.</p>
  <a href="https://www.ti.com/lit/ds/symlink/ina293.pdf" class="text-sm font-medium">View INA293 datasheet (PDF)</a>
</div>

</div>

## How to Order

1. Open the quote form and enter your quantity and delivery location. The form comes prefilled with the DC Motor Add-on Board.
2. Add any motor or setup requirements in the notes, then review and send the message by email or WhatsApp.
3. Review the availability, lead time, shipping costs, and price in our reply before confirming your order.

<p class="not-prose my-6">
<a href="/request-quote/?product=DC%20Motor%20Add-on%20Board" class="board-quote-button">Request a quote for the DC Motor Add-on Board</a>
</p>

