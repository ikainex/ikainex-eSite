---
title: "LIN Add-on Board"
tagline: "LIN Add-on Board — diagnostics & comms"
image: "/img/boards/lin-aob.jpg"
group: "annex"
category: "Automotive"
description: "Explore LIN communication and bus diagnostics with the MCP2003B transceiver and an onboard MCP1804 3.3 V regulator."
draft: false
showHero: false
showBreadcrumbs: true
showReadingTime: false
---

{{< board-intro label="LIN" >}}

## Overview

The Ikainex LIN Add-on Board provides a physical interface between a host microcontroller and a Local Interconnect Network (LIN) bus. It is intended for bench testing, diagnostics, and experiments with the single-wire network commonly used alongside CAN in vehicles.

## Key Features

- **LIN physical interface** — The MCP2003B transceiver supports bidirectional, half-duplex communication at up to 20 kbaud.
- **Onboard regulation** — The MCP1804 provides a 3.3 V regulated output.
- **Host and control signals** — The header exposes UART RX and TX, along with CS, WAKE, and VREN.

## Technical Specifications

| Parameter | Specification |
|---|---|
| Communication protocol | LIN |
| LIN transceiver | Microchip MCP2003B |
| LIN data rate | Up to 20 kbaud |
| Network communication | Single-wire, half-duplex |
| Transceiver protocol support | LIN 2.2, SAE J2602, and ISO 17987 |
| Voltage regulator | Microchip MCP1804 |
| Regulator output | 3.3 V |
| Host communication | UART TX and RX |

## Pin Configuration

The diagram shows the signals on the 20-pin header.

<div class="overflow-x-auto my-6 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 p-4">

```text
                                Pin Header
                          ┌─────────────────┐
                      1   │ NC          NC  │ 20
                      2   │ NC          NC  │ 19
Voltage Regulator EN  3   │ VREN        NC  │ 18
                      4   │ NC        WAKE  │ 17  WAKE UP
         Chip select  5   │ CS          RX  │ 16  UART RX
                      6   │ NC          TX  │ 15  UART TX
                      7   │ NC          NC  │ 14
                      8   │ NC          NC  │ 13
        Power Supply  9   │ 3.3V        NC  │ 12
              Ground 10   │ GND        GND  │ 11  Ground
                          └─────────────────┘
```
</div>

## Tutorials

Read the [LIN lesson]({{< relref "/elearn/embedded-systems/automotive-peripherals/lin" >}}) for an introduction to LIN communication and frame structure.

## Hardware Resources

<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">

<div class="rounded-xl border border-neutral-200 dark:border-neutral-700 p-5">
  <h3 class="text-base font-medium text-neutral-900 dark:text-neutral-100 mt-0 mb-2">MCP2003B Datasheet</h3>
  <p class="text-sm text-neutral-600 dark:text-neutral-300 mb-3">LIN transceiver pin functions, operating modes, and electrical characteristics.</p>
  <a href="https://ww1.microchip.com/downloads/en/DeviceDoc/2000546C3.pdf" class="text-sm font-medium">View MCP2003B datasheet (PDF)</a>
</div>

<div class="rounded-xl border border-neutral-200 dark:border-neutral-700 p-5">
  <h3 class="text-base font-medium text-neutral-900 dark:text-neutral-100 mt-0 mb-2">MCP1804 Datasheet</h3>
  <p class="text-sm text-neutral-600 dark:text-neutral-300 mb-3">Voltage regulator specifications, shutdown behavior, and application circuits.</p>
  <a href="https://ww1.microchip.com/downloads/en/DeviceDoc/20002200D.pdf" class="text-sm font-medium">View MCP1804 datasheet (PDF)</a>
</div>

</div>

## How to Order

1. Open the quote form and enter your quantity and delivery location. The form comes prefilled with the LIN Add-on Board.
2. Review the prepared message and send it by email or WhatsApp.
3. Review the availability, lead time, shipping costs, and price in our reply before confirming your order.

<p class="not-prose my-6">
<a href="/request-quote/?product=LIN%20Add-on%20Board" class="board-quote-button">Request a quote for the LIN Add-on Board</a>
</p>
