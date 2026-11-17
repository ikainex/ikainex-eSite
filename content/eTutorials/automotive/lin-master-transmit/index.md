---
title: "LIN Master Transmit"
description: "Send and decode an eight-byte LIN frame on a NUCLEO-F446RE with the INX LIN Add-on Board."
layout: "tutorial-lab"
weight: 1
tone: "mint"
icon: "⟷"
level: "Beginner"
details: ["NUCLEO-F446RE", "MCP2003B", "10 kbit/s"]
conceptUrl: "elearn/embedded-systems/automotive-peripherals/lin/"
boardUrl: "eproducts/lin-aob/"
---

## Concepts

LIN (Local Interconnect Network) is a single-wire bus. The master starts a frame with a break, the sync byte `0x55`, and a protected identifier made up of the six-bit frame ID and two parity bits. The scheduled publisher supplies the response bytes and checksum. In this lab the master sends both the header and the eight-byte response.

USART2 generates the LIN traffic through the MCP2003B transceiver. The project configures a baud rate of 10000 and specifies an 11-bit break width in the middleware. USART3 carries the console output on a separate connection at 115200 baud.

## Bench setup

Use a NUCLEO-F446RE, INX LIN Add-on Board, LIN bus peer, USB-to-UART adapter, ST-LINK USB cable, and STM32CubeIDE with STM32CubeF4 V1.28.3. A LIN-capable analyzer or a peer that can show decoded frames lets you verify the bus traffic.

| Nucleo pin | LIN board pin | Function |
| --- | --- | --- |
| PA2 (Arduino D1) | RX | USART2 TX to transceiver |
| PA3 (Arduino D0) | TX | Transceiver to USART2 RX |
| PB6 | EN | Transceiver enable |
| GND | GND | Common ground |

Connect the transceiver's LIN bus pin to the peer's LIN bus pin and share ground. Power the transceiver and set up the master pull-up according to the board documentation. Check the Nucleo board revision before changing solder bridges SB62 and SB63, which can affect USART2 routing to the Arduino header.

For the console, connect **PB10 (Arduino D6)** to the adapter's RX input and connect grounds. Set the terminal to **115200 baud**.

## Quick start

1. In the SDK, open `mcu-sdk/projects/nucleo-f446re/inx_lin_aob/lin_master_transmit/` and import its `STM32CubeIDE/.project`.
2. Connect the board over ST-LINK USB, then build and flash the project. Use `lin_master_transmit.ioc` to review the peripheral configuration and `Src/main.c` to find the frame data.
3. Open the terminal and arm your LIN decoder at 10 kbit/s. Reset the Nucleo. The example sends one frame during startup.

## Verify the frame

Look for a startup line followed by the transmitted ID, payload, and bus rate.

```text
LIN Master Start
Tx 0x17 { 0x1 0x2 0x3 0x4 0x5 0x6 0x7 0x8 } br: 10000
```

In the bus capture, look for a break, sync byte `0x55`, frame ID `0x17` (protected ID `0x97` in a raw-byte view), payload `01 02 03 04 05 06 07 08`, and checksum. If the terminal stays blank, check PB10, adapter ground, and the baud setting. If the console starts but the bus stays quiet, arm the analyzer before resetting and check PB6 enable, transceiver power, and USART2 routing.

## Hands-on exercise

Change the last byte of `tx_data` in `Src/main.c` from `0x08` to `0xA5`. Rebuild, flash, and capture another reset. Compare the two traces and identify which payload byte and checksum changed.
