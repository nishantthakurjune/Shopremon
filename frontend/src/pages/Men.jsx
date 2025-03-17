//  
import CollectionOfCards from './CollectionOfCards'
import { useState, useEffect } from 'react';
import spinner from '../assets/images/spinner.png'

const Men = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapiserver.reactbd.com/products");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError('Failed to load products');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()) && product.category === 'men'
  );

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        {/* <p className="text-xl">Loading products...</p> */}
        <img src={spinner} className="animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4">
      {/* SearchBar */}
      <div className="flex justify-center w-full mb-8">
        <input
          className="w-1/3 h-12 pl-4 outline-none rounded-xl  border"
          type="text"
          placeholder="Enter the product you want to search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {/* <button className="text-white bg-black rounded-r-lg p-2 w-14 flex items-center justify-center">
          <CiSearch className="w-6 h-6" />
        </button> */}
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto ">
        {filteredProducts.map((product) => (
          <CollectionOfCards product={product} key={product._id} />
        ))}
      </div>
    </div>
  );
};

export default Men;


