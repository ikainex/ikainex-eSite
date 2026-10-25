---
title: "ADC Add-on Board"
tagline: "ADC add-on board — Analog to digital Converter"
image: "img/eboards/addon-boards/adc-aob.png"
group: "annex"
category: "Analog"
description: "ADC Add-on Board for analog front-end evaluation, sampling and calibration."
draft: false
showHero: false
showBreadcrumbs: true
showReadingTime: false
---

<!--
Replace the image and download URLs below with your actual project assets.
Recommended image location:
assets/images/adc-aob.jpg
or
static/images/adc-aob.jpg
-->

<div class="not-prose w-full max-w-none flex flex-col lg:flex-row gap-10 lg:gap-24 items-start mb-16">

<!-- Hero Image -->
<div class="w-full lg:w-[38%] lg:sticky lg:top-24 lg:shrink-0">
<div class="flex items-center justify-center overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 shadow-sm p-6">
<img
src="/img/eboards/addon-boards/adc-aob.png"
alt="ADC add-on board"
class="adc-hero-image w-full h-auto object-contain"
/>
</div>
</div>

<!-- Hero Content -->
<div class="w-full lg:flex-1 lg:min-w-0 lg:pl-2">

<h1 class="text-4xl md:text-5xl font-light tracking-tight text-neutral-900 dark:text-neutral-100 mb-4">
ADC Add-on Board
</h1>

<a href="/request-quote/?product=ADC%20Add-on%20Board" style="display: inline-flex; align-items: center; margin-bottom: 1.5rem; border-radius: 0.5rem; background: #0284c7; padding: 0.75rem 1.25rem; color: #ffffff; font-weight: 600; text-decoration: none;">
Request a quote
</a>

<p class="text-lg leading-8 text-neutral-600 dark:text-neutral-300 mb-6">
The Ikainex&trade; ADC add-on board is designed for precision analog-to-digital conversion. Powered by Microchip's MCP3204 12-bit SAR ADC, it offers a 4-channel single-ended setup with a fast 100 ksps sampling rate and an SPI-compatible interface. Ideal for industrial monitoring, instrumentation, and remote data acquisition systems.
</p>

<!-- Quick Specs -->
<div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 py-5 border-y border-neutral-200 dark:border-neutral-700">

<div>
<div class="text-xs uppercase tracking-wide text-neutral-400 dark:text-neutral-500 mb-1">Resolution</div>
<div class="text-base font-medium text-neutral-900 dark:text-neutral-100">12-bit</div>
</div>

<div>
<div class="text-xs uppercase tracking-wide text-neutral-400 dark:text-neutral-500 mb-1">Channels</div>
<div class="text-base font-medium text-neutral-900 dark:text-neutral-100">4 (single-ended)</div>
</div>

<div>
<div class="text-xs uppercase tracking-wide text-neutral-400 dark:text-neutral-500 mb-1">Sample Rate</div>
<div class="text-base font-medium text-neutral-900 dark:text-neutral-100">100 ksps</div>
</div>

<div>
<div class="text-xs uppercase tracking-wide text-neutral-400 dark:text-neutral-500 mb-1">Interface</div>
<div class="text-base font-medium text-neutral-900 dark:text-neutral-100">SPI</div>
</div>

</div>

<h2 class="text-xl font-medium text-neutral-900 dark:text-neutral-100 mb-3">Key Features</h2>

<ul class="space-y-3 text-neutral-600 dark:text-neutral-300 leading-7">
<li><strong class="text-neutral-900 dark:text-neutral-100">12-Bit 4-Channel ADC</strong> — Driven by the Microchip MCP3204, supporting up to four single-ended input channels (CH0–CH3).</li>
<li><strong class="text-neutral-900 dark:text-neutral-100">Onboard Signal Buffering</strong> — Every analog input passes through a TI TLV9054IDR 5MHz rail-to-rail op-amp for optimal signal conditioning before conversion.</li>
<li><strong class="text-neutral-900 dark:text-neutral-100">Flexible Reference Selection</strong> — Easily switch the reference voltage using the onboard REFERENCE jumper between VCC (3.3V/5V) or an ultra-stable 4.096V provided by the onboard Microchip MCP1541 voltage reference.</li>
<li><strong class="text-neutral-900 dark:text-neutral-100">4-Wire SPI Communication</strong> — Supports standard SPI modes (0 and 3) at clock speeds up to 2 MHz, activated via a low CS line.</li>
<li><strong class="text-neutral-900 dark:text-neutral-100">Dual Logic Voltage Support</strong> — Integrated PWR SEL jumper enables seamless operation with both 3.3V and 5V host microcontrollers.</li>
<li><strong class="text-neutral-900 dark:text-neutral-100">Convenient Connectivity</strong> — Dedicated CH0–3 terminal blocks with twin GND connections simplify external analog sensor integration.</li>
</ul>

</div>

</div>

## Overview

The Ikainex&trade; ADC is a high-precision analog-to-digital converter expansion board powered by Microchip's MCP3204 12-bit, 4-channel A/D converter with a fast SPI serial interface. Designed for reliable signal conversion in industrial, instrumentation, and data acquisition applications, it combines flexible reference selection, integrated signal conditioning, and dual-voltage MCU compatibility.

## Technical Specifications

<div class="overflow-x-auto my-6 rounded-lg border border-neutral-200 dark:border-neutral-700">

| Parameter | Specification |
|---|---|
| Module Type | 4-Channel, 12-bit ADC |
| ADC | MCP3204, 12-bit A/D converter with SPI interface |
| Analog Inputs | 4 × single-ended channels |
| Resolution | 12-bit |
| Sampling Rate | Up to 100 kSPS |
| Analog Front-End | 4 × operational amplifier channels |
| Op-Amp | TLV9054IDR, 5 MHz rail-to-rail I/O operational amplifier |
| Voltage Reference | MCP1541 precision voltage reference |
| Reference Voltage | 3 selectable reference voltage options |
| Interface | SPI |
| Input Voltage | 3.3 V or 5 V |
| Power Consumption |Low-power operation |
| Board Size | 42.9 × 25.4 mm |
| Primary Applications | Data acquisition, instrumentation, sensor interfacing, embedded systems, and industrial applications |

</div>

## Pin Configuration

The following table provides a starting point for documenting the exposed
header signals.

<div class="overflow-x-auto my-6 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 p-4">

```text
                            Pin Header
                       ┌─────────────────┐
                   1   │ NC          NC  │ 20
                   2   │ NC          NC  │ 19
                   3   │ NC          NC  │ 18
                   4   │ NC          NC  │ 17
  SPI chip select  5   │ CS          NC  │ 16
        SPI clock  6   │ SCK         NC  │ 15
     SPI Data Out  7   │ SDO         NC  │ 14
      SPI Data IN  8   │ SDI         NC  │ 13
     Power Supply  9   │ 3.3V        5V  │ 12  Power Supply
           Ground 10   │ GND        GND  │ 11  Ground
                       └─────────────────┘
```
</div>

## Board Configuration & Indicators

| Label   | Name      | Type   | Default | Description                                                                 |
| ------- | --------- | ------ | ------- | --------------------------------------------------------------------------- |
| **LD1** | PWR       | LED    | —       | Power indicator. Turns on when the board is powered.                        |
| **J1**  | REFERENCE | Jumper | Left    | Selects the ADC reference voltage: **VCC** (Left) or **4.096 V** (Right).   |
| **J2**  | PWR SEL   | Jumper | Left    | Selects the board's power/logic level: **3.3 V** (Left) or **5 V** (Right). |

## ADC Electrical Characteristics

| Parameter             | Min | Typ. | Max | Unit |
| --------------------- | --: | ---: | --: | ---- |
| Supply Voltage        | 3.3 |    — | 5.0 | V    |
| Analog Supply Voltage | 2.7 |    — | 5.5 | V    |
| Sampling Rate         |  50 |    — | 100 | kSPS |
| ADC Resolution        |   — |    — |  12 | bits |

## Software Support

Software examples are available for **STM32F446RE** and **Arduino** platforms.

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">

<div class="rounded-xl border border-neutral-200 dark:border-neutral-700 p-6">

### STM32F446RE

Example firmware demonstrating SPI communication and ADC data acquisition using the STM32F446RE.

**Interface:** SPI  
**Language:** C

[View on GitHub →](https://github.com/ikainex/ikainex-aob-sdk/tree/main/mcu-sdk/samples/adc_annex/STM32F446RE-Nucleo)

</div>

<div class="rounded-xl border border-neutral-200 dark:border-neutral-700 p-6">

### Arduino

Example sketches demonstrating SPI communication and basic ADC operation with Arduino.

**Interface:** SPI  
**Language:** C++

[View on GitHub →](https://github.com/ikainex/ikainex-aob-sdk/tree/main/arduino-libs/AdcAnnex)

</div>

</div>

## Tutorials & Videos

Tutorial videos are currently being prepared and will be added to this page as they become available.

<div class="rounded-xl border border-dashed border-neutral-300 dark:border-neutral-700 p-8 text-center my-6">

### 🎥 Video Tutorials — Coming Soon

We are preparing step-by-step tutorials covering:

**Hardware Setup** · **SPI Configuration** · **STM32F446RE** · **Arduino** · **ADC Data Acquisition**

Videos will be published here soon.

</div>

## Hardware Resources

<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">

<div class="rounded-xl border border-neutral-200 dark:border-neutral-700 p-5">
  <h3 class="text-base font-medium text-neutral-900 dark:text-neutral-100 mb-1">
    TLV9054IDR Datasheet
  </h3>
  <p class="text-sm text-neutral-600 dark:text-neutral-300 mb-3">
    Datasheet for the TLV9054 quad rail-to-rail input/output operational amplifier, including electrical characteristics, specifications, pin configuration, applications, and device information.
  </p>
  <a href="/downloads/documents/datasheets/TLV9054-Datasheet.pdf"
     class="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline">
    Download Datasheet (PDF) →
  </a>
</div>

<div class="rounded-xl border border-neutral-200 dark:border-neutral-700 p-5">
  <h3 class="text-base font-medium text-neutral-900 dark:text-neutral-100 mb-1">
    MCP1541 Datasheet
  </h3>
  <p class="text-sm text-neutral-600 dark:text-neutral-300 mb-3">
    Datasheet for the MCP1541 precision voltage reference, including reference-voltage specifications, electrical characteristics, pin configuration, and application information.
  </p>
  <a href="/downloads/documents/datasheets/MCP1541-Datasheet.pdf"
     class="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline">
    Download Datasheet (PDF) →
  </a>
</div>

<div class="rounded-xl border border-neutral-200 dark:border-neutral-700 p-5">
  <h3 class="text-base font-medium text-neutral-900 dark:text-neutral-100 mb-1">
    MCP3204 Datasheet
  </h3>
  <p class="text-sm text-neutral-600 dark:text-neutral-300 mb-3">
    Datasheet for the MCP3204 12-bit, 4-channel analog-to-digital converter with SPI interface, including electrical characteristics, timing specifications, pin configuration, and application information.
  </p>
  <a href="/downloads/documents/datasheets/MCP3204-Datasheet.pdf"
     class="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline">
    Download Datasheet (PDF) →
  </a>
</div>

<div class="rounded-xl border border-neutral-200 dark:border-neutral-700 p-5">
<h3 class="text-base font-medium text-neutral-900 dark:text-neutral-100 mb-1">Schematics</h3>
<p class="text-sm text-neutral-600 dark:text-neutral-300 mb-3">Complete electrical schematic, including power, wireless module, connectors, programming/debugging, status indicators, and supporting circuitry.</p>
<a href="/downloads/adc-aob-schematic.pdf" class="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline">Download Schematics (PDF) →</a>
</div>

</div>

## How to Order

To order the ADC Add-on Board, send us your required quantity and delivery
details. We will confirm availability, lead time, shipping, and the final price
before processing your order.

1. Submit your contact details and requirements using the quote request form.
2. Review the quotation and delivery information we send you.
3. Confirm the order with our team.

<p class="not-prose my-6">
<a href="/request-quote/?product=ADC%20Add-on%20Board" style="display: inline-flex; align-items: center; border-radius: 0.5rem; background: #0284c7; padding: 0.75rem 1.25rem; color: #ffffff; font-weight: 600; text-decoration: none;">
Request a quote for the ADC Add-on Board
</a>
</p>

