import Optimize from "./Controlled/Optimize";
import UsingMemo from "./Controlled/UsingMemo";
import UseRef from "./Hooks/UseRef";
import UnControlled from "./unControlled/UnControlled";

const App = () => {
  return (
    <div>
      {/* <UseRef /> */}
      {/* <UnControlled /> */}
      {/* <Optimize /> */}
      <UsingMemo />
    </div>
  )
}

export default App;