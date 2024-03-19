import { getBlogPosts } from "./blogAPI";
import { blogData } from "./data";
import BlogSidebar from "./BlogSidebar";
import Pagination from "./Pagination";
import SingleBlogPost from "./SingleBlogPost";

import { data } from './data'; // Import existing data

const postsPerPage = 7;

export default function Home({posts, currentPage, totalPosts}) {

    const totalPages = Math.ceil(totalPosts / postsPerPage);
    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === totalPages;



	return (
		<div className="blog-grid-wrapper section-padding mtm-30">
			<div className="container">
				<div className="row">
					<div className="col-xl-8 col-12">
						<div className="row">
							{posts.map((post) => (
								<div key={post.slug} className="col-md-12 col-12">
                                  
									<SingleBlogPost post={post}  currentPage={currentPage}/>
								</div>
							))}
						</div>
						<Pagination currentPage={currentPage} totalPages={totalPages} isFirstPage={isFirstPage} isLastPage={isLastPage}  />
					</div>
					<div className="col-xl-4 col-12">
						<BlogSidebar />
					</div>
				</div>
			</div>
		</div>
	);
}



export async function getStaticProps({ params }) {
    const { page } = params || {};
    const currentPage = page ? parseInt(page) : 1;
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;

    // For demonstration purposes, let's assume newData contains the latest 10 posts added
    const newData = [/* Data of 10 new posts */];

    // Combine existing data with new data
    const allPosts = [...newData, ...data]; // Add new posts to the beginning

    // Paginate the combined data
    const paginatedPosts = allPosts.slice(startIndex, endIndex);

    return {
        props: {
            posts: paginatedPosts,
            currentPage,
            totalPosts: allPosts.length,
        },
        // Re-generate the page every week instead of every day
        // revalidate: 604800, // 1 week in seconds
    };
}



