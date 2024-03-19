import Link from "next/link";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
export default function SingleBlogPost({ post  , currentPage}) {
  return (
    <div className="single-news-card wow fadeInUp">
      {/* <div className="news-thumb bg-cover" style={{ backgroundImage: `url(/img/blog/${post.img})` }}></div> */}

      <div className="contents">
        <div className="post-meta d-flex align-items-center justify-content-between">
          <div className="auther-name ">
            <div className="">
              <Image
                src="/img/blog/11.jpg"
                alt="My Image"
                width={30}
                height={30}
                className="image-author mr-2"
              />
            </div>
            <div className="post-cat">
              <a className="author-name-tag">
                {post.author} {post.id}
              </a>
            </div>
          </div>

          <div className="post-date">
            <span>{post.publishedDate}</span>
          </div>
        </div>
        <h4>
          <Link href={`/${currentPage}/${post.slug}`}>{post.title}</Link>
        </h4>
        <p className="content-p-fix"> {post.content} ...</p>

        <div className="tag-handel">
          <Link href={`/${post.slug}`} className="read-more-link">
            read more
            <BsArrowRight color="#5B7486" size={18} />
          </Link>

          <div className="tag-p">
      

            {post.tags.map((tag) => (
              <p key={tag}>{tag}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
