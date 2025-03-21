import React from 'react'
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import logo from '../../assets/react.svg';


const index = () => {
  const { Search } = Input;

  const onSearch = value => {
    console.log(value); // You can handle the search logic here
  };

  return (
    <div style={{ maxWidth: '300px', margin: '50px auto' }}>
       
      <img src={logo} alt="Logo" style={{ marginRight: '10px', width: '50px', height: '50px' }} />
     
      <div>
      
      <Search
        placeholder="Enter your search query"
        enterButton="Search"
        size="large"
        onSearch={onSearch}
        suffix={<SearchOutlined />}
      />
      </div>
    </div>

  )

}

export default index;
