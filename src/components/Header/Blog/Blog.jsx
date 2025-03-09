import PropTypes from "prop-types";
import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead}) => {
  const {
    id,
    title,
    cover_img,
    author,
    author_img,
    posted_date,
    reading_time,
    hashtags,
  } = blog;

  return ( 
    <div className="mb-20 pl-8 space-y-3">
        <img className="rounded-xl mb-5" src={cover_img} alt={`This is the image of the title ${title}`} />
        <div className="flex justify-between items-center mb-3">
            <div className="flex">
                <img className="w-14" src={author_img} alt="" />
                <div className="ml-5">
                    <h4 className="text-xl font-bold">{author}</h4>
                    <p className="text-gray-400">{posted_date}</p>
                </div>
            </div>

            <div className="flex gap-2">
                <p>{reading_time} min read</p>
                <button onClick={() => handleAddToBookmark(blog)} className="text-xl font-extrabold text-red-500"><CiBookmark></CiBookmark></button>
            </div>
        </div>
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p>
        {
            hashtags.map((hash,idx)=> <span key={idx}>{hash}</span>)
        }
        </p>
        <button onClick={() => handleMarkAsRead(reading_time,id)} className="text-purple-600 underline font-bold">Mark as Read</button>
    </div>
)
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default Blog;
