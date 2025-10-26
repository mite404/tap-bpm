import { Action, ActionPanel, List } from "@raycast/api";
import { useRef, useState } from "react";
// import { Timeout } from "timers"

export default function GetKeypress() {
  const [timestampArr, setTimestampArr] = useState<number[]>([])
  const timeoutId = useRef<ReturnType<typeof setTimeout> | null>(null)

  const timestamp: number = Date.now()

  const firstTimestamp = timestampArr[0]
  const lastTimestamp = timestampArr[timestampArr.length - 1]
  const numberOfIntervals = timestampArr.length - 2
  const bpm = numberOfIntervals / ((lastTimestamp - firstTimestamp) / 1000) * 60

  const handleTap = () => {
    if (timeoutId.current !== null) {
      clearTimeout(timeoutId.current)
    }
    setTimestampArr([...timestampArr, timestamp])
    timeoutId.current = setTimeout(() => {
      console.log('Timeout reached')
      setTimestampArr([])
      /* here's where we'd copy the BPM value if timer reaches 0 */}, 5000)
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
