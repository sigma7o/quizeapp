import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import QuizPage from './components/QuizPage';
import TopicDetails from './assets/components/TopicDetails';

//... बाकी इम्पोर्ट्स यहाँ हैं

function App() {


  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <Routes>
          <Route path="/topic/:topicId" element={<TopicDetails />} />
          <Route path="/quiz/:topicId" element={<QuizPage />} />
          
          {/* बाकी सभी रूट्स यहाँ होंगे */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;