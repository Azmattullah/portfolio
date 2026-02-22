import Sidebar from './components/Sidebar';
import ProfileHeader from './components/ProfileHeader';
import ContentArea from './components/ContentArea';
import BackgroundShapes from './components/BackgroundShapes';
import './App.css';

function App() {
  return (
    <>
      <BackgroundShapes />
      <Sidebar />
      <div className="app-container">
        <ProfileHeader />
        <ContentArea />
      </div>
    </>
  );
}

export default App;
