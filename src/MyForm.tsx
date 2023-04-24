import React, { useState, useRef, ChangeEvent, FormEvent } from 'react';

enum ErrorType {
    None = '',
    InvalidLength = '2~10자 이내로 입력해주세요.',
    InvalidDescription = '10~100자 이내로 입력해주세요.',
}

interface FormValues {
    readonly name: string;
    readonly description: string;
    readonly nameError: ErrorType;
    readonly descriptionError: ErrorType;
}

interface MyFormProps {
    initialValues?: FormValues;
    onSubmit: (form: FormValues) => void;
}

function MyForm({initialValues = {
                        name: '',
                        description: '',
                        nameError: ErrorType.None,
                        descriptionError: ErrorType.None,
                    }, onSubmit,}: MyFormProps) {
    const inputRef = useRef<HTMLInputElement>(null);

    const [form, setForm] = useState<FormValues>(initialValues);

    const { name, description, nameError, descriptionError } = form;

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        const nameError = validateName(name);
        const descriptionError = validateDescription(description);
        setForm((prevForm) => ({
            ...prevForm,
            nameError,
            descriptionError,
        }));
        if (nameError === ErrorType.None && descriptionError === ErrorType.None) {
            onSubmit(form);
            setForm({
                name: '',
                description: '',
                nameError: ErrorType.None,
                descriptionError: ErrorType.None,
            });
            if (inputRef.current) {
                inputRef.current.focus();
            }
        }
    };

    const validateName = (name: string): ErrorType => {
        if (name.length < 2 || name.length > 10) {
            return ErrorType.InvalidLength;
        }
        return ErrorType.None;
    };

    const validateDescription = (description: string,): ErrorType => {
        if (description.length < 10 || description.length > 100) {
            return ErrorType.InvalidDescription;
        }
        return ErrorType.None;
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
            <div>{nameError}</div>
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
            <div>{descriptionError}</div>
            <button type="submit">등록</button>
        </form>
    );
}

export default MyForm;
