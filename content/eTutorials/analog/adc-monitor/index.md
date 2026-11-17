---
title: "ADC AOB Monitor"
description: "Read four MCP3204 channels over SPI on a NUCLEO-F446RE and print the raw counts and voltages once per second."
layout: "tutorial-lab"
weight: 1
tone: "violet"
icon: "∿"
level: "Beginner"
details: ["NUCLEO-F446RE", "MCP3204", "12-bit SPI ADC"]
boardUrl: "eproducts/adc-aob/"
conceptUrl: "elearn/parth-ved/episodes/adc-fundamentals/"
---

## What you'll build

The INX ADC Add-on Board uses an MCP3204 to convert four single-ended analog inputs into 12-bit readings. In this exercise, a NUCLEO-F446RE reads CH0 through CH3 over SPI1 using the `inx_mcp3204` middleware. The firmware converts the raw counts to millivolts using a configured 4.096 V reference and prints both values over USART2.

## Bench setup

Use a NUCLEO-F446RE, an INX ADC Add-on Board, an ST-LINK USB connection, and STM32CubeIDE with STM32CubeF4 V1.28.3. The example uses a 2 MHz SPI clock.

| NUCLEO-F446RE pin | ADC AOB pin | Function |
| --- | --- | --- |
| PB6 (Arduino D10) | CS | Chip select |
| PA5 (Arduino D13) | SCK | SPI clock |
| PA7 (Arduino D11) | SDI | Nucleo MOSI to ADC |
| PA6 (Arduino D12) | SDO | ADC to Nucleo MISO |
| GND | GND | Common ground |

Follow the [ADC AOB board documentation]({{< relref "/eProducts/adc-aob" >}}) for power, logic levels, and reference selection. Set the hardware reference to 4.096 V to match the firmware.

## Build and run

1. In the INX AOB SDK, open `mcu-sdk/projects/nucleo-f446re/inx_adc_aob/adc_monitor/` and import `STM32CubeIDE/.project` into STM32CubeIDE.
2. Connect the Nucleo over ST-LINK USB, then build and flash the project. Open `adc_monitor.ioc` to review the peripheral configuration or `Src/main.c` to inspect the channel reads and voltage conversion.
3. Open the board's ST-LINK virtual COM port at **115200 baud**. Reset the Nucleo to see the startup message.

## Verify the readings

Look for `ADC Monitor Start`, followed by a table with CH0 through CH3. The table reports the raw 12-bit count (0–4095) and the calculated voltage in millivolts for each channel. It refreshes about once a second.

Connect CH0 to the board's ground and check that its reading is close to zero. Then apply a known voltage within the board's documented input range, with a shared ground. Compare the reported CH0 voltage with a multimeter reading. If the terminal is blank, check the virtual COM port and baud rate. If the raw readings change as expected but the millivolt values are off, check that the board's reference matches the firmware setting.
