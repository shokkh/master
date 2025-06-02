// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { BsFillBasket2Fill } from 'react-icons/bs';
// import './App.css';

// function App() {
//   const [products, setProducts] = useState([]);
//   const [card, setCard] = useState([]);
//   const [showcard, setShowcard] = useState(false);

//   useEffect(() => {
//     axios.get('https://fakestoreapi.com/products')
//       .then((res) => {
//         setProducts(res.data);
//         console.log('Mahsulotlar yuklandi:', res.data);
//       })
//       .catch((err) => {
//         console.error('Xatolik:', err);
//       });
//   }, []);

//   const handleAddCard = (item) => {
//     setCard([...card, item]);
//   };

//   const handleCloseModal = () => {
//     setShowcard(false);
//   };

//   return (
//     <div>
//       <div className="search-container">
//         <BsFillBasket2Fill 
//           onClick={() => setShowcard(true)} 
//           style={{ width: '30px', height: '30px', marginRight: '10px', cursor: 'pointer' }} 
//         />
//         <input type="text" placeholder="Qidirish..." /> <button className='salom'>enter</button>
//       </div>

//       <div className="container">
//         {products.map((item, index) => (
//           <div className="card" key={index}>
//             <h1>{item.title}</h1>
//             <p>{item.price}$</p>
//             <span>{item.description}</span>
//             <p>{item.category}</p>
//             <img src={item.image} alt={item.title} style={{ width: '100px' }} />
//             <button className="gett" onClick={() => handleAddCard(item)}>Get</button>
//           </div>
//         ))}
//       </div>

//       {showcard && (
//         <div className="modal" onClick={handleCloseModal}>
//           <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//             <h2>Savatdagi mahsulotlar</h2>
//             {card.length === 0 ? (
//               <p>Savat bo‘sh</p>
//             ) : (
//               card.map((item, index) => (
//                 <div key={index} style={{ marginBottom: '10px' }}>
//                   <h4>{item.title}</h4>
//                   <p>{item.price}$</p>
//                   <img src={item.image} alt={item.title} style={{ width: '80px' }} />
//                   <hr />
//                 </div>
//               ))
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;

  

















import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BsFillBasket2Fill } from 'react-icons/bs';
import './App.css';
 import { ToastContainer, toast } from 'react-toastify';

function App() {
  const [products, setProducts] = useState([]);
  const [card, setCard] = useState([]);
  const [showcard, setShowcard] = useState(false);
  const [searchTerm, setSearchTerm] = useState(''); 

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((res) => {
        setProducts(res.data);
        
        console.log('Mahsulotlar yuklandi:', res.data);
      })
      .catch((err) => {
        console.error('Xatolik:', err);
      });
  }, []);

  const handleAddCard = (item) => {
    setCard([...card, item]);
    toast.success('bosting')
  };

  const handleCloseModal = () => {
    setShowcard(false);
  };

 
  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="search-container">
        <BsFillBasket2Fill 
          onClick={() => setShowcard(true)} 
          style={{ width: '30px', height: '30px', marginRight: '10px', cursor: 'pointer' }} 
        />
        {}
        <input 
          type="text" 
          placeholder="Qidirish..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
  <ToastContainer />
      <div className="container">
        {filteredProducts.map((item, index) => (
          <div className="card" key={index}>
            <h1>{item.title}</h1>
            <p>{item.price}$</p>
            <span>{item.description}</span>
            <p>{item.category}</p>
            <img src={item.image} alt={item.title} style={{ width: '100px' }} />
            <button className="gett" onClick={() => handleAddCard(item)}>Get</button>
          </div>
        ))}
      </div>

      {showcard && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Savatdagi mahsulotlar</h2>
            {card.length === 0 ? (
              <p>Savat bo‘sh</p>
            ) : (
              card.map((item, index) => (
                <div key={index} style={{ marginBottom: '10px' }}>
                  <h4>{item.title}</h4>
                  <p>{item.price}$</p>
                  <img src={item.image} alt={item.title} style={{ width: '80px' }} />
                  <hr />
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
