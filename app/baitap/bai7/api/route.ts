export default async function handler(req:any, res:any) {
    const { minPrice, maxPrice } = req.query;
  
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const products = await response.json();
  
      const filteredProducts = products.filter(
        (product:any) => product.price >= minPrice && product.price <= maxPrice
      );
  
      res.status(200).json(filteredProducts);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch products' });
    }
}