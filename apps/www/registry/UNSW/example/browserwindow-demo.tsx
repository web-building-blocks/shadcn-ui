"use client"

import React, { useState } from "react"
import styled from "styled-components"

const StyledBrowserWindow = styled.div`
  font-family: "Clancy", "Roboto Mono", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  width: 80%;
`

const BrowserWindow = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid #ffcd00;
  background-color: #fff;
  border-radius: 5px;
  overflow: hidden;
`

const BrowserHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #ffcd00;
  border-bottom: 1px solid #ffcd00;
`

const BrowserButtons = styled.div`
  display: flex;
  gap: 5px;
`

const BrowserButton = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-block;
  background-color: ${(props) => props.color};
`

const BrowserUrlBar = styled.div`
  flex: 1;
  margin-left: 10px;
  padding: 5px 10px;
  border: 1px solid #ffcd00;
  border-radius: 15px;
  background: white;
  transition: all 0.2s ease-in-out;

  &:focus-within {
    border-color: #cc9a00; // 🟡 聚焦时变深黄色
  }
  input {
    width: 100%;
    border: none;
    background: transparent;
    font-size: 14px;
    color: #cc9a00; // 🟡 文字变深黄色，增加对比度
    outline: none;
  }
`

const BrowserContent = styled.iframe`
  width: 100%;
  height: calc(100% - 48px);
  border: none;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`

// BrowserMockup
const BrowserMockup = () => {
  const [url, setUrl] = useState("https://www.example.com")

  const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value)
  }

  return (
    <StyledBrowserWindow>
      <BrowserWindow>
        <BrowserHeader>
          <BrowserButtons>
            <BrowserButton color="#f44336" />
            <BrowserButton color="#ffeb3b" />
            <BrowserButton color="#4caf50" />
          </BrowserButtons>
          <BrowserUrlBar>
            <input type="text" value={url} onChange={handleUrlChange} />
          </BrowserUrlBar>
        </BrowserHeader>
        <BrowserContent src={url} />
      </BrowserWindow>
    </StyledBrowserWindow>
  )
}

export default BrowserMockup
