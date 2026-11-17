---
title: "CAN FD Echo"
description: "Receive a 12-byte CAN FD frame and echo its payload from a NUCLEO-L552ZE-Q with the INX CAN FD Add-on Board."
layout: "tutorial-lab"
weight: 2
tone: "blue"
icon: "⌘"
level: "Intermediate"
details: ["NUCLEO-L552ZE-Q", "FDCAN1", "500 kbit/s"]
conceptUrl: "elearn/embedded-systems/automotive-peripherals/can/"
boardUrl: "eproducts/canfd-aob/"
---

## Concepts

CAN nodes share a differential pair and use message identifiers during arbitration. CAN FD (Flexible Data-Rate) extends the frame payload to as many as 64 bytes and can use a faster data phase when bitrate switching (BRS) is enabled. This lab uses an 11-bit standard identifier, a 12-byte payload (wire DLC 9), and a nominal rate of 500 kbit/s with BRS off.

On this Cortex-M33 project, Secure firmware configures TrustZone and hands off to the NonSecure vector table at `0x08040000`. The NonSecure application configures FDCAN1 and LPUART1. A receive notification reads FIFO0, logs the frame, copies its 12 bytes, and queues an echo under standard ID `0x22`.

## Bench setup

Use a NUCLEO-L552ZE-Q (MB1361), INX CAN FD Add-on Board, an active CAN FD peer or USB CAN FD interface, ST-LINK USB, STM32CubeIDE with STM32CubeL5 V1.6.0, and STM32CubeProgrammer.

| Nucleo pin | CAN FD board pin | Function |
| --- | --- | --- |
| PB9 | TXD | FDCAN1 TX to transceiver |
| PB8 | RXD | Transceiver to FDCAN1 RX |
| GND | GND | Common ground |

Connect the transceiver's **CANH** and **CANL** to the matching bus lines and terminate both physical ends of the bench bus. PB8 and PB9 carry logic-level signals and connect to the transceiver's MCU interface. Power and enable the transceiver as described in its board documentation. Set the peer to **CAN FD, 500 kbit/s nominal, BRS off** and use its active mode so it can acknowledge the echo.

Open the Nucleo's **ST-LINK virtual COM port at 115200 baud**. Console output comes from LPUART1 TX on PG7.

## TrustZone setup

Use STM32CubeProgrammer to inspect the board's current security state and match the project option bytes. Compare these settings with the project's linker scripts and `Secure/Inc/partition_stm32l552xx.h` before applying them to the lab board.

```text
TZEN = 1
DBANK = 1
SECWM1_PSTRT = 0x0   SECWM1_PEND = 0x7F
SECWM2_PSTRT = 0x1   SECWM2_PEND = 0x0
```

The supplied layout places Secure firmware in Bank 1 and NonSecure firmware in Bank 2.

## Quick start

1. In the SDK, open `mcu-sdk/projects/nucleo-l552ze-q/inx_canfd_aob/canfd_echo/` and import both projects from `STM32CubeIDE/`.
2. Choose the same Debug or Release configuration for both projects and build NonSecure, which depends on Secure.
3. Select Secure as the startup image and include NonSecure in the TrustZone debug or run configuration. Use ST-LINK to program and run both images.
4. Open the serial console and confirm startup. Use your CAN FD peer to send a standard-ID FD frame to `0x11` with 12 bytes, for example `01 02 03 04 05 06 07 08 09 0A 0B 0C`.

## Verify the echo

| Direction | Standard ID | Frame settings | Payload (hex) |
| --- | --- | --- | --- |
| Peer → Nucleo | `0x11` | FD, BRS off, 12 bytes | `01 02 03 04 05 06 07 08 09 0A 0B 0C` |
| Nucleo → peer | `0x22` | FD, BRS off, 12 bytes | `01 02 03 04 05 06 07 08 09 0A 0B 0C` |

The console logs the received frame and the queued transmission. Confirm on the peer that ID `0x22` arrived with the same bytes in order. If startup is missing, review the option bytes, both programmed images, and the COM port. If startup succeeds but no echo arrives, check termination, transceiver enable, CAN FD and bitrate settings, and that the peer can acknowledge frames.

## Hands-on exercise

Send a second 12-byte payload with the first and last bytes swapped. Confirm that both changes appear in the echo while its ID remains `0x22`. In `NonSecure/Src/main.c`, find the FIFO0 receive callback and trace how it moves bytes from the receive buffer to the transmit queue.
