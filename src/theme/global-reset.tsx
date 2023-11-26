import {css} from '@emotion/react'

const globalReset = css`
  *,
  :after,
  :before {
    box-sizing: border-box;
  }
  :root {
    cursor: default;
    overflow-wrap: break-word;
  }
  html,
  body {
    height: 100%;
  }
  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }
  button {
    background: none;
    border: 0;
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`
export default globalReset
