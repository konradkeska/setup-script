import axios from "axios";

import { Bundle } from "types";
import { APP } from "config";

const getBundle = (id: string) =>
  axios.get<Bundle>(`${APP.FIREBASE_API_HOST}setups/${id}.json`);

const postBundle = (bundle: Bundle) =>
  axios.post<{ name: string }>(`${APP.FIREBASE_API_HOST}setups.json`, bundle);

const putBundle = (id: string, bundle: Bundle) =>
  axios.put<Bundle>(`${APP.FIREBASE_API_HOST}setups/${id}.json`, bundle);

const deleteBundle = (id: string) =>
  axios.delete<Bundle>(`${APP.FIREBASE_API_HOST}setups/${id}.json`);

const loadBundle = async (id: string) => {
  try {
    if (id) {
      const { data } = await getBundle(id);
      return data;
    }
  } catch (error) {
    console.error(error);
  }
};

const addBundle = async (bundle: Bundle) => {
  try {
    const { data } = await postBundle(bundle);
    window.location.pathname = `/setup-script/${data.name}`;
  } catch (error) {
    console.error(error);
  }
};

const updateBundle = async (id: string, bundle: Bundle) => {
  try {
    await putBundle(id, bundle);
  } catch (error) {
    console.error(error);
  }
};

const removeBundle = async (id: string) => {
  try {
    await deleteBundle(id);
  } catch (error) {
    console.error(error);
  }
};

export { loadBundle, addBundle, updateBundle, removeBundle };
