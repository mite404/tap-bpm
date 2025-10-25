import { Action, ActionPanel, List } from "@raycast/api";
import { useState } from "react";

// interface Todo {
//   title: string;
//   isCompleted: boolean;
// }

export default function GetKeypress() {
  const [timestampArr, setTimestampArr] = useState<number[]>([])

  const timestamp: number = Date.now()

  const firstTimestamp = timestampArr[0]
  const lastTimestamp = timestampArr[timestampArr.length - 1]
  const numberOfIntervals = timestampArr.length - 2
  const bpm = numberOfIntervals / ((lastTimestamp - firstTimestamp) / 1000) * 60

  const handleTap = () => {
    setTimestampArr([...timestampArr, timestamp])
  }

  return (
    <List>
      <List.EmptyView
        icon="🥁"
        title={`BPM: ${Math.floor(bpm)}`}
        description="Tap SPACE/ENTER..."
        actions={
          <ActionPanel>
            <Action
              title="Space" shortcut={{ modifiers: [], key: "space" }}
              onAction={() => {
                console.log("Space/Enter pressed!")
                handleTap()
              }}></Action>
          </ActionPanel>}
      ></List.EmptyView>
    </List >
  );
}


// Suppose you counted 36 beats in 20 seconds. 
// To find the BPM, you would follow these steps:
// Divide the number of beats by the number of seconds: (36\20)=1.8
// Multiply that number by 60: (1.8 * 60 = 108)
// Result: Your BPM is 108.


// calculate number of seconds by comparing difference of time stamps for 'active time key has been tapped'
// (beats / time)*60 = BPM
