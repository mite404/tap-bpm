# Implementation Plan (Step-by-Step)

## Phase 1: Setup & Environment (Learning the basics)

Install Raycast and enable developer mode
Create your first extension using Raycast's "Create Extension" command

Choose the "Detail" or "List" template to start
Name it "BPM Counter"

Explore the generated files

Understand the folder structure
Look at package.json - this defines your extension
Look at src/index.tsx - this is your React component

Run the development server (npm run dev)

Learn the hot-reload workflow
Make a small text change to see it update live

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

## Phase 3: Design Your Data Flow (Visual thinking)

Think of your app like a water fountain:

Input (tap) → Water pressure (user action)
State (timestamps array) → Water reservoir (storage)
Calculation → Water filter (processing)
Display (BPM number) → Fountain spray (output)

Map out:

When user taps → what happens to state?
When state changes → how do you calculate BPM?
When BPM is calculated → how do you display it?

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

Test with actual music at known BPMs (use online metronome)
Handle edge cases:

What if user taps too slowly?
What if user taps just once?
What if user waits too long between taps?

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
    - can print 1/2 time and double time BPM
    - can flash on tap / flashes when BPM speed determined

  - upon stopping tapping the BPM average is copied directly to clipboard
  - menu bar extra
