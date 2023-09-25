import axios from 'axios';
import { jsonPlaceHolder_URL } from 'shared';

export const jsonPlaceHolderApi = axios.create({ baseURL: jsonPlaceHolder_URL });
