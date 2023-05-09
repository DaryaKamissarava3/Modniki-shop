import {FETCH_DATA} from './actionTypes';

const fetchData = (productsArr) => ({
  type: FETCH_DATA,
  payload: productsArr
});

export default {fetchData};