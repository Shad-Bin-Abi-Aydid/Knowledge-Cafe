import PropTypes from "prop-types";

const Blog = ({ blog }) => {
  const {
    title,
    cover_img,
    author,
    author_img,
    posted_date,
    reading_time,
    hashtags,
  } = blog;

  return ( 
    <div>
        <img src={cover_img} alt={`This is the image of the title ${title}`} />
        <div className="flex justify-between items-center">
            <div className="flex">
                <img className="w-14" src={author_img} alt="" />
                <div className="ml-5">
                    <h4 className="text-xl font-bold">{author}</h4>
                    <p className="text-gray-400">{posted_date}</p>
                </div>
            </div>

            <div>
                <p>{reading_time} min read</p>
            </div>
        </div>
        <h2 className="text-2xl font-bold">{title}</h2>
        <p>
        {
            hashtags.map((hash,idx)=> <span key={idx}>{hash}</span>)
        }
        </p>
    </div>
)
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default Blog;
