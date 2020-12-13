import { useState, useEffect } from 'react';
import getBlogs from '../service/blog';

// eslint-disable-next-line
export default () => {
    const [blogs, setBlogs] = useState([]);

    // このカスタムフックを利用しているコンポーネントがマウントされたら ブログ一覧 を取得する。
    useEffect(() => {
        const fetchAll = async () => {
            const results = await getBlogs();
            setBlogs(results)
        }

        fetchAll()
    }, []);

    return { blogs };
};