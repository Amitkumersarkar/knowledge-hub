import PropTypes from 'prop-types';
import { FaRegBookmark } from "react-icons/fa";
const Blog = ({ blog, handleAddToBookmarks }) => {
    const { title, cover, author, author_image, posted_date, reading_time, hashtags } = blog;
    return (
        <div className='mb-20 mt-10'>
            <img className='w-5/5 mb-10' src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between'>
                <div className='flex'>
                    <img className='w-16 rounded-full' src={author_image} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>

                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmarks(blog)} className='ml-2 text-red-500 text-2xl cursor-pointer'><FaRegBookmark /></button>
                </div>
            </div>
            <h2 className='text-4xl mt-5 mb-5'> {title}</h2>
            {/* map for hashtag */}
            <p className='text-sky-300'>
                {
                    hashtags.map((hashtag, idx) => <span key={idx}><a href="">{hashtag}</a></span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmarks: PropTypes.func
}
export default Blog;