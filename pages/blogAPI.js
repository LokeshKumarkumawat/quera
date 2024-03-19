// utils/blogAPI.js

import path from 'path';
import { posts } from './data';
// Function to read the JavaScript file containing blog posts
// export async function getBlogPosts() {
//   try {
//     // Get the absolute path to the JavaScript file
//     const filePath = path.resolve('./data.js');

//     console.log("FILEPATH", filePath);
    
//     // Import the file as a module
//     const { posts } = await import(filePath);

//     return posts;
//   } catch (error) {
//     console.error('Error reading blog posts JavaScript file:', error);
//     return []; // Return an empty array in case of an error
//   }
// }


export async function getAllBlogPostSlugs() {
  return posts.map(post => ({
    params: { slug: post.slug }
  }));
}


export async function getBlogPosts() {
  try {
    return posts; // Return the array of blog posts
  } catch (error) {
    console.error('Error retrieving blog posts:', error);
    return []; // Return an empty array in case of an error
  }
}
