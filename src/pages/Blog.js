import axios from "axios";
import { useEffect, useState } from "react";
import BlogPostsAll from "../components/BlogPostsAll";
import BlogPostsIndividual from "../components/BlogPostIndividual";

export default function Blog() {

    const [showPost, setShowPost] = useState(false)
    const [blogArr, setBlogArr] = useState([])
    const [post, setPost] = useState({})

    const url = 'https://mjclifford.onrender.com/api/blog'

    const getBlogs = async () => {
        try {
            await axios
            .get(url)
            .then(res => setBlogArr(res.data))
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        getBlogs()
    }, [])

    function getPost(item) {
        setPost(item)
        setShowPost(prevVal => !prevVal)
    }

    function clearPost() {
        setPost({})
        setShowPost(prevVal => !prevVal)
    }

    return (
        <div className="container">
            <h1 className="title">{showPost ? 'Article' : 'Blog'}</h1>
            <div className="row">
            {showPost ? <BlogPostsIndividual blog={post} click={clearPost} /> : 
                blogArr.map(blog => {
                    return (
                        <BlogPostsAll key={blog._id} blog={blog} click={getPost} />
                )})}
            </div>
        </div>
    );
  };
  
