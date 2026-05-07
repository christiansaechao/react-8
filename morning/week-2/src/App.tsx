// functions that are apart of the React library
import "./App.css";
import FetchData from "./components/useEffect/FetchData";

function App() {
  // 3 states
  // 1. None: every time component / app rerenders
  // 2. Empty Array:
  // 3. Dependencies

  // api calls
  // local storage store theme, on mount fetch local storage theme
  // setData()
  // useMemo
  // useCallback

  return (
    <>
      {/* <TitleUpdater /> */}
      {/* <Cleanup /> */}
      <FetchData />
    </>
  );
}

export default App;