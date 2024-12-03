import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const FormPreview = () => {
  const { formId } = useParams();
  const [form, setForm] = useState(null);

  useEffect(() => {
    const fetchForm = async () => {
      const response = await axios.get(`http://localhost:5000/api/forms/${formId}`);
      setForm(response.data);
    };
    fetchForm();
  }, [formId]);

  if (!form) return <p>Loading...</p>;

  return (
    <div className="p-5">
      <h1>{form.title}</h1>
      <p>{form.description}</p>
      {form.questions.map((q, index) => (
        <div key={index}>
          <h2>{q.questionText}</h2>
          {/* Render question based on type */}
        </div>
      ))}
    </div>
  );
};

export default FormPreview;

