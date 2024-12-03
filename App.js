import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormEditor from "./pages/FormEditor";
import FormPreview from "./pages/FormPreview";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 p-5">
        <Routes>
          {/* Route for the Form Editor */}
          <Route path="/" element={<FormEditor />} />

          {/* Route for the Form Preview */}
          <Route path="/preview/:formId" element={<FormPreview />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
