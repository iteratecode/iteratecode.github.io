console.clear();

const { render } = ReactDOM;
const { Stage } = ReactPixi;

const width = 400;
const height = 400;
const backgroundColor = 0x1d2330;

const App = () => {
  return <Stage width={width} height={height} options={{ backgroundColor}}></Stage>;
};

render(<App />, document.getElementById("root"));
