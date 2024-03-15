import { useState } from 'react';

const ActionTaken = () => {
    const [actionFields, setActionFields] = useState([{ id: 1, value: '' }]);

    const handleAddField = () => {
        const newField = {
            id: actionFields.length + 1,
            value: ''
        };
        setActionFields([...actionFields, newField]);
    };

    const handleRemoveField = (id) => {
        const updatedFields = actionFields.filter(field => field.id !== id);
        setActionFields(updatedFields);
    };

    const handleChange = (id, value) => {
        const updatedFields = actionFields.map(field => {
            if (field.id === id) {
                return { ...field, value };
            }
            return field;
        });
        setActionFields(updatedFields);
    };

    return (
        <div>
            <label htmlFor="actionTaken" className="block mb-2 font-bold text-blue-600">Action Taken</label>
            {actionFields.map(field => (
                <div key={field.id} className="mb-4 flex items-center">
                    <input
                        type="text"
                        id={`actionTaken${field.id}`}
                        className="w-full px-3 py-2 border rounded-md"
                        placeholder="Enter action taken"
                        value={field.value}
                        onChange={e => handleChange(field.id, e.target.value)}
                    />
                    <button
                        className="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => handleRemoveField(field.id)}
                    >
                        Remove
                    </button>
                </div>
            ))}
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleAddField}
            >
                Add More
            </button>
        </div>
    );
};

export default ActionTaken;
