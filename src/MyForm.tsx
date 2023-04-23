import React, { useState, useRef } from 'react';

type FormValues = {
    name: string;
    description: string;
    nameError: string;
    descriptionError: string;
};

type MyFormProps = {
    initialValues?: FormValues;
    onSubmit: (form: FormValues) => void;
};

function MyForm({ initialValues = { name: '', description: '', nameError: '', descriptionError: '' }, onSubmit }: MyFormProps) {

    const inputRef = useRef<HTMLInputElement>(null);

    const [form, setForm] = useState<FormValues>(initialValues);

    const { name, description, nameError, descriptionError } = form;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const nameError = validateName(name);
        const descriptionError = validateDescription(description);
        setForm((prevForm) => ({
            ...prevForm,
            nameError,
            descriptionError
        }));
        if (!nameError && !descriptionError) {
            onSubmit(form);
            setForm({
                name: '',
                description: '',
                nameError: '',
                descriptionError: ''
            });
            if (inputRef.current) {
                inputRef.current.focus();
            }
        }
    };

    const validateName = (name: string) => {
        if (name.length < 2 || name.length > 10) {
            return '이름은 2~10자 이내로 입력해주세요.';
        }
        return '';
    };

    const validateDescription = (description: string) => {
        if (description.length < 10 || description.length > 100) {
            return '설명은 10~100자 이내로 입력해주세요.';
        }
        return '';
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
                maxLength={10}
            />
            <div className="error-message">{nameError}</div>
            <label htmlFor="description-input">설명:</label>
            <input
                id="description-input"
                name="description"
                value={description}
                onChange={handleChange}
                autoComplete="off"
                required
                maxLength={100}
            />
            <div className="error-message">{descriptionError}</div>
            <button type="submit">등록</button>
        </form>
    );
}

export default MyForm;