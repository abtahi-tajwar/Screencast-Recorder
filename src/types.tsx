export type RecordState = "recording" | "stopped" | "paused" | null;
export type ScreencastData = {
    /** How many milliseconds passed from the start of recording */
    milliSecondEllapsed: number,
    /** Source code at that time */
    sourceCode: string,
    /** Is compile button clicked */
    compile: boolean
};