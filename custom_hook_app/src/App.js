
import CounterSample from "./components/counterSample";
import {
  AddColorForm,
  AddColorFormUncontrolled,
  AddColorFormCustomHook
} from "./components/addColorForm";

function App() {
  return (
    <div>
      <CounterSample />
      <hr />
      制御されていない版<br />
      <AddColorFormUncontrolled onNewColor={(title, color) => {
        console.log("こちらonNewColor(uncontrolled)");
        console.log(`title:${title}`);
        console.log(`color:${color}`);
      }} />
      <hr />
      制御されている版<br />
      <AddColorForm onNewColor={(title, color) => {
        console.log("こちらonNewColor 制御されてる");
        console.log(`title:${title}`);
        console.log(`color:${color}`);
      }} />
      <hr />
      カスタムフック版<br />
      <AddColorFormCustomHook onNewColor={(title, color) => {
        console.log("こちらonNewColor カスタムフック");
        console.log(`title:${title}`);
        console.log(`color:${color}`);
      }} />
    </div>
  );
}

export default App;
