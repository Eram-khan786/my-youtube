import { Provider } from 'react-redux';
import './App.css'
import Body from './components/Body';
import Head from './components/Head';
import store from './utils/store';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import WatchPage from './components/WatchPage';
import MainContainer from './components/MainContainer';

const appRouter =createBrowserRouter([
  {
    path:'/',
    element:<Body/>,
    children:[
      {
        path:"/",
        element:<MainContainer/>
      },
      {
        path:"/watch",
        element:<WatchPage/>
      }
    ]
  }
])
function App() {
  return (
     <>
       {/* <div className='bg-black text-lg'>Hello</div> */}
      <Provider store={store}>
        <Head/>
        <RouterProvider router={appRouter}/>
      </Provider>
     </>   
  )
}

export default App;
 