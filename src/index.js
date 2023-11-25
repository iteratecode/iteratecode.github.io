import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { Whiteboard } from './components/whiteboard/Whiteboard';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// // import { Stage, Sprite } from '@pixi/react';
// // import { createRoot } from 'react-dom/client';

// // const app = new PIXI.Application({ resizeTo: window });

// // const App = () => (
// //   <div>
// //     {/* somewhere in your tree */}
// //     <Stage>
// //       {/* <Sprite x={100} y={100} /> */}
// //     </Stage>
// //   </div>
// // );

// // const root = createRoot(document.getElementById('root'));
// // root.render(<App />);

// import { React, useEffect, useState } from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// // import App from './App';
// import reportWebVitals from './reportWebVitals';
// // import React, { useEffect, useState } from 'react';
// import { render } from 'react-dom';
// import { Stage, Sprite, Text, Container, Graphics, useTick, useApp } from '@pixi/react'//'@inlet/react-pixi';
// import * as PIXI from 'pixi.js';

// // let app = new PIXI.Application({ resizeTo: window });

// let dragging = false;
// let lastDrawnPoint = null;
// const brush = new PIXI.Graphics()
//     .beginFill(0xffffff)
//     .drawCircle(0, 0, 5);
// const line = new PIXI.Graphics();
// const graphic = new PIXI.Graphics().beginFill(0xFF3300).drawCircle(0, 0, 5).endFill();
// const getSize = () => ({
//   width: window.innerWidth,
//   height: window.innerHeight
// });

// const Size = ({ children }) => {
//   const [size, setSize] = useState(getSize);
  
//   useEffect(() => {
//     const update = () => {
//       requestAnimationFrame(() => setSize(getSize()));
//     };
    
//     window.addEventListener('resize', update);
    
//     return () => {
//       window.removeEventListener('resize', update);
//     }
//   }, []);
  
//   return children(size);
// };

// const initialSize = getSize();

// const options = {
//   backgroundColor: 0xe92162,
//   resizeTo: window,
// }

// const textStyle = {
//   align: "center",
//   fontWeight: 900,
//   dropShadow: true,
//   dropShadowAlpha: 0.6,
//   dropShadowAngle: 1,
//   dropShadowBlur: 5,
//   wordWrap: true,
//   fill: ["white", "#cccccc"]
// }

// // const Inner = () => {
// //   // const [x, setX] = React.useState(0);
// //   // const mask = React.useRef();
// //   // const i = React.useRef(0);

  
// //   return (
// //     <Container position={[250, 250]}>
// //       <Sprite
// //         image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png"
// //         scale={[4, 4]}
// //         anchor={0.5}
// //         // mask={mask.current}
// //       />

// //     </Container>
// //   );
// // };

// const App = () => {
//   return (
//     <Stage {...initialSize} 
//       raf={false} 
//       options={options}>
//       <Size>
//         {({ width, height }) => (
//           <Text
//             text={`${width}\nx\n${height}`}
//             style={textStyle}
//             anchor={0.5}
//             x={width / 2}
//             y={height / 2}
//             // interactive={true}      
//             // pointerdown={() => {
//             //   console.log("click");
      
//             //   render();
//             // }}
//           />
//         )}
//       </Size>
//       {/* <Inner /> */}
//     </Stage>
//   );
// };

// // render(<App />, document.getElementById("root"));

// app.stage.eventMode = 'static';
// app.stage.hitArea = app.screen;
// app.stage
//     .on('pointerdown', pointerDown)
//     .on('pointerup', pointerUp)
//     .on('pointerupoutside', pointerUp)
//     .on('pointermove', pointerMove);

// function pointerDown(event)
// {
//   console.log("Test");
//     dragging = true;
//     pointerMove(event);
// }

// function pointerUp(event)
// {
//   console.log("Test");
//     dragging = false;
//     lastDrawnPoint = null;
// }
// function pointerMove({ global: { x, y } })
// {
//   console.log("mv");
//     if (dragging)
//     {
//       console.log("draw");
//         brush.position.set(x, y);
//         app.renderer.render(brush, {
//             graphic,
//             clear: false,
//             skipUpdateTransform: false,
//         });
//         // Smooth out the drawing a little bit to make it look nicer
//         // this connects the previous drawn point to the current one
//         // using a line
//         if (lastDrawnPoint)
//         {
//           console.log("fin");
//             line
//                 .clear()
//                 .lineStyle({ width: 5, color: 0xffffff })
//                 .moveTo(lastDrawnPoint.x, lastDrawnPoint.y)
//                 .lineTo(x, y);
//             app.renderer.render(line, {
//                 graphic,
//                 clear: false,
//                 skipUpdateTransform: false,
//             });
//         }
//         lastDrawnPoint = lastDrawnPoint || new PIXI.Point();
//         lastDrawnPoint.set(x, y);
//     }
// }

// // const getSize = () => ({
// //   width: window.innerWidth,
// //   height: window.innerHeight
// // });
// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   // <React.StrictMode>
//     <App />
//   // </React.StrictMode>
// );

// // // If you want to start measuring performance in your app, pass a function
// // // to log results (for example: reportWebVitals(console.log))
// // // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// // reportWebVitals();
