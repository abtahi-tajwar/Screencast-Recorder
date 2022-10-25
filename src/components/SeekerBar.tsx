import React from 'react'
import styled from 'styled-components'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

function SeekerBar() {
    const [seekerState, setSeekerState] = React.useState<"stopped" | "playing" | "paused" >("stopped")
  return (
    <Container>
        <div className="play-pause-btn">
        {(seekerState === "stopped" || seekerState === "paused") ?
            <PlayArrowIcon /> : <PauseIcon />
        }
        </div>
        <div className="seeker-container">

        </div>
    </Container>
  )
}

const Container = styled.div`
    box-sizing: border-box;

    position: fixed;
    left: 0px;
    right: 0px;
    bottom: 0px;

    height: 30px;
    background-color: #5ac8fa;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: white;
    padding-right: 20px;
    .play-pause-btn {
        cursor: pointer;
        &:hover {
            color: #FFFFFFCC;
        }
    }
    .seeker-container {
        flex: 1;
        height: 3px;
        border-radius: 3px;
        background-color: #FFFFFFAA;
    }
`

export default SeekerBar