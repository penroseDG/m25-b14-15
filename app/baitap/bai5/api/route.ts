export default async function handler(req:any, res:any) {
    if (req.method === 'GET') {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();
        
        res.status(200).json(products);
      } catch (error) {
        res.status(500).json({ error: 'Failed to fetch products' });
      }
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
}