import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

const AddRecipeForm = () => {
    const [fields, setFields] = useState([""]);

    const addField = () => {
        setFields([...fields, ""])
    };

    const handleChange = (index, value) => {
        const newFields = [...fields];
        newFields[index] = value;
        setFields(newFields);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", fields);
    };

    return (
        <Box sx={{ p: 3 }}>
            <h2>Add a New Recipe</h2>
            <form onSubmit={handleSubmit}>
                <input />
                {fields.map((field, index) => (
                    <input
                        key={index}
                        type="text"
                        value={field}
                        onChange={(e) => handleChange(index, e.target.value)}
                        placeholder={`Field ${index + 1}`} />
                ))}
                <button
                    type="button"
                    onClick={addField}
                >
                    Add another ingredient
                </button>

                <button type="submit">
                    Submit
                </button>
            </form>
        </Box>
    );
};

export default AddRecipeForm;
