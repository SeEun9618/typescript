import React, { useState, useRef } from 'react';

type FormValues = {
    name: string;
    description: string;
};

type MyFormProps = {
    initialValues?: FormValues;
    onSubmit: (form: FormValues) => void;
};

function MyForm({ initialValues = { name: '', description: '' }, onSubmit }: MyFormProps) {

    const inputRef = useRef<HTMLInputElement>(null);

    const [form, setForm] = useState<FormValues>(initialValues);

    const { name, description } = form;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(form);
        setForm({
            name: '',
            description: ''
        });
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name-input">이름:</label>
            <input
                id="name-input"
                name="name"
                value={name}
                onChange={handleChange}
                ref={inputRef}
                autoComplete="off"
                required
                maxLength={30}
            />
            <label htmlFor="description-input">설명:</label>
            <input
                id="description-input"
                name="description"
                value={description}
                onChange={handleChange}
                autoComplete="off"
                required
                maxLength={200}
            />
            <button type="submit">등록</button>
        </form>
    );
}

export default MyForm;