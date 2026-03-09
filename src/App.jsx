import { useState, useEffect } from "react";
import { Routes, Route } from "react-router";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import Header from "./components/Header";
import NotFoundPage from "./pages/not-found";
import CoinDetailsPage from "./pages/coin-details";
const API_URL = import.meta.env.VITE_COINS_API_URL;

const App = () => {

  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [limit, setLimit] = useState(10);
  const [filter, setFilter] = useState('');
  const [sortBy, setSortBy] = useState('market_cap_desc');

  useEffect(() => {
    const LoadData = async () => {
      try {
        const res = await fetch(`${API_URL}&order=${sortBy}}&per_page=${limit}&page=1&sparkline=false`);
        if (!res.ok) throw Error('Failed to load data');

        const data = await res.json();
        console.log('coins data: ', data);
        setCoins(data);
      }
      catch(err) {
        setError(err.message);
      }
      finally {
        setLoading(false);
      }
    }
    LoadData();

  }, [limit]);
  // useEffect(()=>{
  //   fetch(API_URL)
  //   .then((res) => {
  //     if(!res.ok) throw new Error('Failed to load data');
  //     return res.json();
  //   })
  //   .then((data) => {
  //     console.log('data: ', data);
  //     setCoins(data);
  //     setLoading(false);
  //   })
  //   .catch((err) => {
  //     setError(err.message);
  //     setLoading(false);
  //   });
  // }, []);


  return ( 
    <>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage coins={coins} filter={filter} setFilter={setFilter} 
        limit={limit} setLimit={setLimit} sortBy={sortBy} setSortBy={setSortBy}
        loading={loading} error={error} />} />
      
      <Route path='/about' element={<AboutPage />}></Route>
      <Route path='/contact' element={<ContactPage />}></Route>
      <Route path='/coin/:id' element={<CoinDetailsPage />}></Route>
      <Route path='*' element={<NotFoundPage />}></Route>
    </Routes>   
    </> 
  );
}
 
export default App;