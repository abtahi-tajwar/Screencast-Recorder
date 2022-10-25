import React from 'react'
import styled from "styled-components";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Container>
        <Link to="/record">Record Screencast</Link>
        <Link to="/view-screencast">View Screencast</Link>
    </Container>
  )
}
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  width: 100vw;
  height: 100vh;
`
export default Home