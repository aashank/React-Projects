import { useEffect } from 'react';
import './App.css'
import { useState } from 'react';

function App() {

  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  const fetchProducts = async () => {
    const res = await fetch(`https://dummyjson.com/products?limit=100`);
    const data = await res.json();

    if (data && data.products) {
      setProducts(data.products);
    }
  }

  const selectedPageHandler = (selectedPage) => {
    if (selectedPage >= 1 && selectedPage <= products.length / 10 && selectedPage !== page) {
      setPage(selectedPage)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div>
      {products.length > 0 && <div className='products'>
        {
          products.slice(page * 10 - 10, page * 10).map((prod) => {
            return (
              <span key={prod.id} className='products__single'>
                <img src={prod.thumbnail} alt={prod.title} />
                <span>{prod.title}</span>
              </span>
            )
          })
        }
      </div>
      }
      {products.length > 0 &&
        <div className='pagination'>
          <span onClick={() => selectedPageHandler(page - 1)}
            className={page > 1 ? "" : "pagination__disable"}>◀️</span>
          {[...Array(products.length / 10)].map((_, i) => {
            return <span className={page === i + 1 ? "" : "pagination__selected"} key={i} onClick={() => selectedPageHandler(i + 1)}>{i + 1}</span>
          })
          }
          <span onClick={() => selectedPageHandler(page + 1)}
            className={page < products.length / 10 ? "" : "pagination__disable"}>▶️</span>
        </div>
      }
    </div>
  )
}

export default App