export default async function handler(req:any, res:any) {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const posts = await response.json();
  
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch posts' });
    }
}