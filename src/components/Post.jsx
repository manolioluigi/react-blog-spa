import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Post() {
    const [post, setPost] = useState({});
    const { slug } = useParams();

    useEffect(() => {
        fetch(`http://localhost:3300/posts/${slug}`)
            .then((response) => response.json())
            .then((data) => {
                setPost(data.data);
            })
            .catch((error) => {
                console.error('Errore nel recupero dei dettagli del post:', error);
            });
    }, [slug]);

    return (
        <div>
            <h1>Post Page</h1>
            <h2>{post.title}</h2>
            <img src={post.image} alt={post.slug} />
            <p>{post.content}</p>
        </div>
    );
}

export default Post;
