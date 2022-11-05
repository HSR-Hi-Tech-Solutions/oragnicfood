import './Global.scss';
import TopNav from './components/common/TopNav/TopNav';
import MainNav from './components/common/MainNav/MainNav';
import Footer from './components/common/Footer/Footer';
import PageRoute from "./PageRoute";

function App() {
  return (
    <div className="App">
      {/* Top Navigation */}
      <TopNav />
      {/* Main Navigation */}
      <MainNav />

      {/* Page Content */}
      <PageRoute />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
