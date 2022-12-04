import { Provider } from "react-redux";

import MainContainer from "./src/navigation/MainContainer";
import store from "./src/store/store";

const App = () => {
  return (
    <Provider store={store}>
      <MainContainer />
    </Provider>
  );
};

export default App;
