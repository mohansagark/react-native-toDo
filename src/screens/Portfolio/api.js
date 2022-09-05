import axios from 'axios';
import {useState} from 'react';

export const useGitHubInfo = () => {
  const result = axios.get('https://api.github.com/users/mohansagark');
  const [data, setData] = useState([]);

  result.then(res => setData(res.data)).catch(err => console.log(err));
  return data;
};
