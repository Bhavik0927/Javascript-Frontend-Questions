import React, {useCallback, useEffect, useState} from 'react';
import type { Post } from "../types";
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import FeedItem from './FeedItem';

const LIMIT = 10;

const InfiniteFeed: React.FC = () =>{
    const [posts, setPosts] = useState<Post[]>([]);
    const [cursor, setCursor] = useState<number | null>(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchPosts = useCallback(async () =>{
        if(loading || cursor === null) return;

        setLoading(true);
        setError(null);

        try {
            const res = await fetch(`https://localhost:1280/feed?cursor=${cursor}&limit=${LIMIT}`);

            const data = await res.json();

            setPosts((prev) => [...prev, ...data.items]);
            setCursor(data.nextCursor);

        } catch (error) {
            setError("Failed to load feed");
        }finally{
            setLoading(false);
        }
    },[cursor, loading]);

    useEffect(() =>{
        fetchPosts();

    },[])

    const loadMoreRef = useIntersectionObserver({
        onIntersect: fetchPosts,
        enabled: cursor !== null,
    })
    return <div style={{ maxWidth: 600, margin: "0 auto" }}>
        {posts.map((post) => (
            <FeedItem key={post.id} post={post} />
        ))}

        {loading && <p style={{ textAlign: 'center'}}>Loading...</p>}

        {error && (
            <p style={{ color:'red', textAlign:'center'}}>{error}</p>
        )}

        { cursor !== null && <div ref={loadMoreRef} style={{height: 1}} />}

        {cursor  === null && (
            <p style={{ textAlign:"center"}}>You reached the end 🎀</p>
        )}
    </div>;
}

export default InfiniteFeed;