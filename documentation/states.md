### Important state data structure explanation
- **screencastData**: Screencast Data is used to write all the recording data into javascript object file <br />
  ```ts
    [{
        milliSecondEllapsed: number,
        sourceCode: Base64,
        compile: boolean
    }, {}, {}, ... ]
  ```