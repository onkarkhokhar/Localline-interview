import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Icon } from 'semantic-ui-react';
import './displayList.css'
import ViewCustomerModal from './viewCustomer'


const App =()=> {
    const [customers,setCustomer]= useState(null);
    const [viewModelVisible,setViewModelVisible]= useState(false);
    const [selectedCustomer,setSelectedCustomer]= useState(null);

    useEffect(() => {
        fetchData().then((customers)=>{
        setCustomer(customers);
        });
        
        
    },[])

    const fetchData=()=>{
        const customers = [
            {
                "province": "ON",
                "city": "Ottawa",
                "customer_info": {
                    "last_delivery_date": null,
                    "orders_this_month": 0,
                    "buyer_average_order": 0.0
                },
                "country": "Canada",
                "business_name": "Cole's Cappuccino"
            },
            {
                "province": "ON",
                "city": "Waterloo",
                "customer_info": {
                    "last_delivery_date": "2018-04-30T12:00:00-00:00",
                    "orders_this_month": 1,
                    "buyer_average_order": 5.0
                },
                "country": "Canada",
                "business_name": "Jen's Jello"
            },
            {
                "province": "ON",
                "city": "Kingston",
                "customer_info": {
                    "last_delivery_date": "2015-03-14T12:00:00-00:00",
                    "orders_this_month": 1,
                    "buyer_average_order": 2.5
                },
                "country": "Canada",
                "business_name": "Brock's Bakery"
            },
            {
                "province": "ON",
                "city": "Toronto",
                "customer_info": {
                    "last_delivery_date": "2018-05-04T12:00:00-00:00",
                    "orders_this_month": 5,
                    "buyer_average_order": 4.0
                },
                "country": "Canada",
                "business_name": "Matty's Mango"
            }
        ]
            return new Promise(function(resolve, reject) {
              setTimeout(resolve, 3000, customers);
            });
          
          
        
    }

    const setViewModelVisibleFunc=(open,obj)=>{
        console.log(obj)
        setViewModelVisible(true)
        setSelectedCustomer(obj)

    }

        return (
            <div>
                <ViewCustomerModal
                open={viewModelVisible}
                setOpen={setViewModelVisibleFunc}
                data={selectedCustomer}
            /> 
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    borderStyle: 'ridge'
                }}>
                    <header style={{
                        color: 'green'
                    }}>
                        My Customers</header>
                </div>
                {
                    customers ? customers.map((obj) => (
                       
                        <div style={{borderStyle: 'ridge'}}>
                    
                                <header style={{ color: '#2185d0',float:'left'}}> {obj.business_name ? obj.business_name : "N/A"}</header><br/>
                                <div>
                                <body >
                                    <span style={{float:'left'}}>{obj.city},{obj.province}</span>
                                    <button style={{float: 'row-reverse', background:'green', color:'white'}}
                                    onClick={(e)=>setViewModelVisibleFunc(e,obj)}
                                    >
                                            view
                                        </button><Icon name="window close" />
                                </body>
                                </div>
                        </div>
                    ))
                    :
                    'Customer details is Loading...'
                }


            </div>

        )
    }

export default App;

