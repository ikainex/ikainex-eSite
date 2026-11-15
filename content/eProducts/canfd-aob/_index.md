---
title: "CAN FD Add-on Board"
tagline: "CAN FD Add-on Board — high-speed comms"
image: "/img/boards/canfd-aob.jpg"
group: "annex"
category: "Automotive"
description: "Test CAN FD communication on the bench with the Infineon TLE9252 transceiver and onboard 5 V and 3.3 V regulators."
showBreadcrumbs: true
---

{{< board-intro label="CAN FD" >}}

## Overview

The CAN FD Add-on Board connects a host CAN controller to a Controller Area Network with Flexible Data-Rate (CAN FD). It is designed for bench testing, monitoring bus traffic, and diagnosing communication in embedded and automotive projects.

## Key Features

- **CAN FD physical interface** — The TLE9252 transceiver drives and receives signals on the CAN bus.
- **5 V and 3.3 V regulation** — The board uses the TLS850B0TB V50 and TLS850B0TB V33 fixed-output low-dropout regulators.
- **Host and control signals** — The header exposes CAN TX and RX, along with standby, enable, wake-up, and error signals.

## Technical Specifications

| Parameter | Specification |
|---|---|
| Communication protocol | CAN FD |
| CAN FD transceiver | Infineon TLE9252 |
| Transceiver data-phase capability | Up to 5 Mbit/s, per the TLE9252V datasheet |
| 5 V regulator | Infineon TLS850B0TB V50 |
| 3.3 V regulator | Infineon TLS850B0TB V33 |
| Host interface | CAN controller TX and RX |
| Application | Automotive communication |
| Typical use | Bus testing and diagnostics |

## Pin Configuration

The diagram shows the signals on the 20-pin header.

<div class="overflow-x-auto my-6 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 p-4">

```text
                            Pin Header
                       ┌─────────────────┐
           CAN TX  1   │ CAN TX      NC  │ 20
           CAN RX  2   │ CAN RX      NC  │ 19
         Stand-by  3   │ STB         WKE │ 18 Wake Up
     Mode Control  4   │ EN          ERR │ 17 Error Flag
                   5   │ NC          NC  │ 16
                   6   │ NC          NC  │ 15
                   7   │ NC          NC  │ 14
                   8   │ NC          NC  │ 13
     Power Supply  9   │ 3.3V        5V  │ 12 Power Supply
           Ground 10   │ GND         GND │ 11 Ground
                       └─────────────────┘
```
</div>

## Tutorials

Start with the [Automotive tutorial series]({{< relref "/etutorials/automotive" >}}) for background on automotive networks.

## Hardware Resources

<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">

<div class="rounded-xl border border-neutral-200 dark:border-neutral-700 p-5">
  <h3 class="text-base font-medium text-neutral-900 dark:text-neutral-100 mt-0 mb-2">TLE9252V Datasheet</h3>
  <p class="text-sm text-neutral-600 dark:text-neutral-300 mb-3">CAN FD transceiver pin functions, operating modes, and timing characteristics.</p>
  <a href="https://www.infineon.com/assets/row/public/documents/10/49/infineon-tle9252v-datasheet-en.pdf" class="text-sm font-medium">View TLE9252V datasheet (PDF)</a>
</div>

<div class="rounded-xl border border-neutral-200 dark:border-neutral-700 p-5">
  <h3 class="text-base font-medium text-neutral-900 dark:text-neutral-100 mt-0 mb-2">TLS850B0TB V50 Datasheet</h3>
  <p class="text-sm text-neutral-600 dark:text-neutral-300 mb-3">5 V regulator specifications, enable behavior, and application circuits.</p>
  <a href="https://www.infineon.com/assets/row/public/documents/10/49/infineon-tls850b0tb-v50-datasheet-en.pdf" class="text-sm font-medium">View TLS850B0TB V50 datasheet (PDF)</a>
</div>

<div class="rounded-xl border border-neutral-200 dark:border-neutral-700 p-5">
  <h3 class="text-base font-medium text-neutral-900 dark:text-neutral-100 mt-0 mb-2">TLS850B0TB V33 Datasheet</h3>
  <p class="text-sm text-neutral-600 dark:text-neutral-300 mb-3">3.3 V regulator specifications, enable behavior, and application circuits.</p>
  <a href="https://www.infineon.com/assets/row/public/documents/10/49/infineon-tls850b0tb-v33-datasheet-en.pdf" class="text-sm font-medium">View TLS850B0TB V33 datasheet (PDF)</a>
</div>

</div>

## How to Order

1. Open the quote form and enter your quantity and delivery location. The form comes prefilled with the CAN FD Add-on Board.
2. Review the prepared message and send it by email or WhatsApp.
3. Review the availability, lead time, shipping costs, and price in our reply before confirming your order.

<p class="not-prose my-6">
<a href="/request-quote/?product=CAN%20FD%20Add-on%20Board" class="board-quote-button">Request a quote for the CAN FD Add-on Board</a>
</p>
