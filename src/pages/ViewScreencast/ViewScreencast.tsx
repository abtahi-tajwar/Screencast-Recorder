import React from 'react'
import CodeEditor from '../../components/CodeEditor/CodeEditor'
import SeekerBar from '../../components/SeekerBar'
import UploadScreencast from '../../components/UploadScreencast'

// type imports
import { ScreencastData } from '../../types'
type Props = {
  data?: ScreencastData[]
}
function ViewScreencast({ data }:Props) {  
  const [sourceCode, setSourceCode] = React.useState<string>("")
  const [screencastData, setScreencastData] = React.useState<ScreencastData[]>()
  // Redirect user to upload screencast file, because screencast cannot be played without some kind of data
  if (data) setScreencastData(data)
  React.useEffect(() => {
    console.log(screencastData)
  }, [screencastData])
  return (
    <div>
      {!screencastData && 
        <UploadScreencast 
          setScreencastData={setScreencastData}
        /> 
      }
      <CodeEditor
        handleChange={setSourceCode}
      />
      <SeekerBar />
    </div>
  )
}

export default ViewScreencast