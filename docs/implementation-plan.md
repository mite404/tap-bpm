# Implementation Plan (Step-by-Step)

## Phase 2: Research & Understanding (Before writing code)

Read Raycast documentation sections:

User Interface components (List, Detail, Actions)
Keyboard shortcuts and event handling
State management with React hooks

Study BPM calculation logic

Understand: BPM = (60 seconds / average time between taps)
Research how many taps you need for accuracy (usually 4-8)
Decide how to store timestamps

Sketch out your component structure on paper

What state do you need? (tap timestamps, calculated BPM)
What events do you need to handle? (key presses)
What UI components will you use? (Detail view? List view?)

## Phase 4: Build Incrementally (One piece at a time)

- Iteration 1: Static UI

Create a basic Detail view with placeholder text
Show a static BPM number (like "120 BPM")
Get comfortable with Raycast components

- Iteration 2: Add State

Add React state to store one timestamp
Create a button/action that captures current time
Display the timestamp on screen (just to see it work)

- Iteration 3: Capture Multiple Taps

Change state to store an array of timestamps
Each tap adds a new timestamp to the array
Display the count of taps

- Iteration 4: Calculate BPM

Write the math: calculate time differences between taps
Convert time differences to BPM
Display the calculated BPM

- Iteration 5: Improve UX

Add a reset button/action
Show tap history or visual feedback
Add keyboard shortcuts
Polish the display (formatting, colors, layout)

## Phase 5: Test & Refine

Add error handling and user feedback

## Phase 6: Polish & Share

Write clear instructions in your UI
Add helpful metadata to package.json
Test the extension from a fresh Raycast restart
(Optional) Share with the Raycast community!

- Features:
  - can use any key (won't work with blank window implementation)
    - limitation of Raycast for my purposes only Space/Enter works
  - How can the BPM display be larger than these?
    (i want the BPM to be in the middle w/ 1/2 time above and double time below
    smaller font pt. and grayer color)
    - can print 1/2 time and double time BPM ✅
    - can flash on tap / flashes when BPM speed determined
      - could be a limitation of Raycast's API

  - upon stopping tapping the BPM average is copied directly to clipboard ✅
    - reset timer ✅
    - add Toast to notify user clipboard has BPM value ✅

  - menu bar extra
