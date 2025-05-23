import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({ handleAddToBookmarks }) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blogsData.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className="md:w-2/3">
            <h3 className="text-3xl">Blogs : {blogs.length}</h3>
            {
                blogs.map(blog => <Blog handleAddToBookmarks={handleAddToBookmarks} key={blog.id} blog={blog}></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleAddToBookmarks: PropTypes.func

}
export default Blogs;