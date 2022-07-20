import { useDispatch, useSelector } from "react-redux";
import { increment } from "./action";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => {
    return state.Reducer.count;
  });

  return (
    <div style={{ height: "94vh", width: "100%",display:"flex",justifyContent:"center",alignItems:"center" }}>
      <div>
        <div>count {count}</div>
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          Increment
        </button>
      </div>
    </div>
  );
}

export default App;
