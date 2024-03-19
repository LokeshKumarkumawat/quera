
import Blog from './index'; // Import your Blog component
import { getStaticProps } from './index'; // Import getStaticProps from your Blog component
import { data } from './data';

export { getStaticProps }; // Export getStaticProps from this file

export default Blog; // Export your Blog component

const postsPerPage = 7;

export async function getStaticPaths() {
    // Assuming you have a total number of pages stored somewhere or can calculate it
    const totalPosts = data.length;
    const totalPages = Math.ceil(totalPosts / postsPerPage);

    // Generate paths for all pages from 1 to totalPages
    const paths = Array.from({ length: totalPages }, (_, index) => ({
        params: { page: (index + 1).toString() },
    }));

    return {
        paths,
        fallback: false, // Set fallback to false to statically generate all pages during build time
    };
}