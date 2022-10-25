import React from 'react'
import { ScreencastData } from '../types';
import Backdrop from '@mui/material/Backdrop';

type Props = {
    setScreencastData: (screencastData: ScreencastData[]) => void
}

function UploadScreencast({ setScreencastData }: Props) {
    const handleFileUpload = (e: React.FormEvent<HTMLInputElement>) => {
        let target = e.target as HTMLInputElement        
        let file = target.files?.[0];
        let reader = new FileReader();
        reader.onload = (event) => {
            if (event.target) {
                let result = event.target.result as string
                let obj: ScreencastData[] = JSON.parse(result)
                console.log(obj, result)
                setScreencastData(obj)                
            }
        }
        reader.readAsText(file as Blob)        
    }
  return (    
    <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={true}
    >
        <div className="h-screen w-80 flex flex-col gap-2 justify-center items-center">
            <div>
                <label className="text-xl">Upload your saved screencast file</label>
                <input type="file" accept=".scrcst" onChange={handleFileUpload} />
            </div>
        </div>
    </Backdrop>        
  )
}

export default UploadScreencast