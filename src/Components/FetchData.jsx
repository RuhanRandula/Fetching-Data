import React from 'react'; 
import UseFetch from './UseFetch'; 
import './FetchData.css' 
 
const FetchData = () => { 
    // Fix: Destructure the object properly
    const { data, loading, error } = UseFetch('https://api.npoint.io/9045c260b1565daa9e15'); 
    
    // Handle loading state
    if (loading) return <div>Loading...</div>;
    
    // Handle error state
    if (error) return <div>Error: {error}</div>;

    // Handle case when data is null
    if (!data) return <div>No data available</div>;

    return ( 
        <div> 
            <ul className='list_data_main'> 
                <h1 className='usefetch_heading'>Use Fetch Custom Hook</h1> 
                {data.map((e, index) => ( 
                    <li key={index} className='list_data'> 
                        <h3>{e.name}</h3> 
                        <p><strong>Importance: </strong>{e.importance}</p> 
                        <p><strong>Benefits: </strong>{e.benefits6}</p> 
                        <p><strong>Time to eat: </strong>{e.best_time_to_intake}</p> 
                    </li> 
                ))} 
            </ul> 
        </div> 
    ); 
}; 

export default FetchData;