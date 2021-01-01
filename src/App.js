import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import SignIn from './components/signIn';
import NotFound from './components/notFound';
import AllPosts from './components/allPosts';
import MyPosts from './components/myPosts';
import AddPost from './components/addPost';
import Register from './components/register';
import {ToastContainer} from 'react-toastify'
import EditPostPage from './components/common/editPostPage'
import 'react-toastify/dist/ReactToastify.css'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    
    <BrowserRouter>
   <ToastContainer/>
      <div className="App">
    
        <Switch>
          <Route path="/sign-in" component={SignIn} />
          <Route path="/registration" component={Register} />
          <Route path="/allposts" component={AllPosts} />
          <Route path="/myposts" component={MyPosts} />
          <Route path="/addpost" component={AddPost} />
          <Route path="/edit-post/:id" component={EditPostPage} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/sign-in" />
          <Redirect to="/not-found" />
        </Switch>
       
      </div>
      
    </BrowserRouter>
    
  );
}

export default App;
