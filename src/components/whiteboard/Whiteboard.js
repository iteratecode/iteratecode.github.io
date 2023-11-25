import Textbox from './Textbox';
import { Tldraw } from '@tldraw/tldraw'
// import '@tldraw/tldraw/tldraw.css'

// const getSize = () => ({
//   width: window.innerWidth / 2,
//   height: window.innerHeight
// });

const options = {
  backgroundColor: 0xEEEEEE,
  resizeTo: window,
}

export const Whiteboard = () => {
  return (
    <>
      <div style={{ width: '50%', position: 'fixed', inset: 0 }}>
        <Tldraw />
      </div>
      <Textbox/>
    </>
  )
}

// write the code to get a screenshot of the tldraw canvas 
