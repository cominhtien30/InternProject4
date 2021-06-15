import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import './App.css';
import Index from "./component/index"
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import reducer from "./reducers/index";
import rootSaga from "./sagas";
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Index />
      </div>
    </Provider>
  );
}

export default App;
