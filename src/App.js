import {Provider} from "react-redux";
import "./App.css";
import Head from "./Components/Head";
import Body from "./Components/Body";
import store from "./utils/store";
import MainContainer from "./Components/MainContainer";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import WatchPage from "./Components/WatchPage";
import VideosList from "./Components/VideosList";

const appRouter= createBrowserRouter([{
  path:"/",
  element: <Body />,
  children: [
    {
      path:"/",
      element: <MainContainer />
    },
    {
      path:"/watch",
      element: <WatchPage />
    },
    {
      path:"/list",
      element: <VideosList />
    },
  ]
}])

function App() {
  return (
    <Provider store = {store}>
     <div>
      <Head />
      <RouterProvider router={appRouter}/>
      
     </div>
    </Provider>
  );
}

export default App;
