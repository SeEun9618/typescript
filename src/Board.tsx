import React, { useState } from "react";

type Post = {
    id: number;
    title: string;
    content: string;
};

const Board = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newPost: Post = {
            id: posts.length + 1,
            title,
            content,
        };
        setPosts([...posts, newPost]);
        setTitle("");
        setContent("");
    };

    return (
        <div>
            <h1>게시판</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                    </li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">제목</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={handleTitleChange}
                    />
                </div>
                <div>
                    <label htmlFor="content">내용</label>
                    <textarea
                        id="content"
                        value={content}
                        onChange={handleContentChange}
                    />
                </div>
                <button type="submit">작성</button>
            </form>
        </div>
    );
};

export default Board;