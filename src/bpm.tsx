import { Action, ActionPanel, List } from "@raycast/api";
import { useState } from "react";

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
        title={timestampArr.length > 2 ? `BPM: ${Math.floor(bpm)}` : `Tap SPACE/ENTER...`}
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
