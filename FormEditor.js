import React, { useState } from "react";
import axios from "axios";

const FormEditor = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    headerImage: "",
    questions: [],
  });

  const addQuestion = (type) => {
    setForm({
      ...form,
      questions: [
        ...form.questions,
        { type, questionText: "", options: [], correctAnswers: [] },
      ],
    });
  };

  const saveForm = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/forms", form);
      alert("Form saved! Preview link: " + `/preview/${response.data._id}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-5">
      <input
        type="text"
        placeholder="Form Title"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
        className="border mb-2 p-2"
      />
      <textarea
        placeholder="Form Description"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
        className="border mb-2 p-2"
      ></textarea>
      <button className="bg-blue-600 m-4 rounded-md" onClick={() => addQuestion("Categorize")}>Add Categorize</button>
      <button className="bg-blue-600 m-4 rounded-md" onClick={() => addQuestion("Cloze")}>Add Cloze</button>
      <button className="bg-blue-600 m-4 rounded-md" onClick={() => addQuestion("Comprehension")}>
        Add Comprehension
      </button>
      <button className="bg-blue-600 m-4 rounded-md" onClick={saveForm}>Save Form</button>
    </div>
  );
};

export default FormEditor;
