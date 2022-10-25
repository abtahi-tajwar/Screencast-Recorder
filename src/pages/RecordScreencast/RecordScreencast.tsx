import React from 'react'
import CodeEditor from '../../components/CodeEditor/CodeEditor'
// Types import
import { RecordState, ScreencastData } from '../../types'

function RecordScreencast() {
    const [sourceCode, setSourceCode] = React.useState<string>("")
    /*
        stopped = Not recording
        recording = Currently recording
        paused = Paused the recording
    */
    const [recordState, setRecordState] = React.useState<RecordState>("stopped")
    /** recordStartTime will initialize when recording will be started and will become null again after recording stops */
    const [recordStartTime, setRecordStartTime] = React.useState<number | null>(null);
    /** 
     * To keep track at what time user paused
     * This will be used to calculate total paused duration to subtract that from total ellapsed time to get original recording time
     */
    const [pauseStartTime, setPauseStartTime] = React.useState<number | null>(null);
    const [totalPauseTime, setTotalPauseTime] = React.useState<number>(0)
    const [screencastData, setScreencastData] = React.useState<ScreencastData[]>([])

    React.useEffect(() => {
        // If recorder started, this will start writing screencast data
        if (recordState === 'recording' && recordStartTime) {
            setScreencastData([
                ...screencastData,
                {
                    milliSecondEllapsed: (new Date().getTime() - recordStartTime) - totalPauseTime,
                    sourceCode: btoa(sourceCode),
                    compile: false
                }
            ])
        }
    }, [sourceCode])

    const startRecording = () => {
        setRecordState("recording")
        setRecordStartTime(new Date().getTime()) // Initialized the start time of recording
    }
    const stopRecording = () => {
        setRecordState("stopped")
        setRecordStartTime(null)
        downloadRecordedFile()
    }
    const pauseRecording = () => {
        setRecordState("paused")
        setPauseStartTime(new Date().getTime()) // Initial the pause start time
    }
    const resumeRecording = () => {
        setRecordState("recording")
        const pauseTimeEllapsed: number = pauseStartTime ? new Date().getTime() - pauseStartTime : 0
        setTotalPauseTime(pauseTimeEllapsed)
        setPauseStartTime(null)
    }
    const downloadRecordedFile = () => {
        var blob = new Blob([JSON.stringify(screencastData)], {type: "text/plain"});
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        // the filename you want
        a.download = 'screencast.scrcst';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
    }
    /** This will run when user will click compile button */
    const onCompile = () => {
        if (recordState === 'recording' && recordStartTime) {
            setScreencastData([
                ...screencastData,
                {
                    milliSecondEllapsed: (new Date().getTime() - recordStartTime) - totalPauseTime,
                    sourceCode: btoa(sourceCode),
                    compile: true
                }
            ])
        }
    }
  return (
    <div>
        <CodeEditor 
            handleChange={setSourceCode}
            onCompile={onCompile}
            recording={{
                recordingMode: true,
                recordState: recordState,
                recordingControllers: { startRecording, stopRecording, pauseRecording, resumeRecording }
            }}
        />
    </div>
  )
}

export default RecordScreencast