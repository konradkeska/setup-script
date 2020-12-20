import axios from "axios";
import { History } from "history";
import { toast } from "react-hot-toast";

import { Bundle } from "types";
import { APP } from "config";
import { getBundleCreatedToast } from "utils";

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
      toast.success("Success! Bundle loaded.");
      return data;
    }
  } catch (error) {
    toast.error("Failure! Bundle could not load properly..");
  }
};

const addBundle = async (bundle: Bundle, history: History) => {
  try {
    const { data } = await postBundle(bundle);
    history.push(`/${data.name}`);
    toast.success("Success! Bundle created.");
    toast(getBundleCreatedToast(data.name), { duration: 30000 });
  } catch (error) {
    toast.error("Failure! Bundle could not create properly..");
  }
};

const updateBundle = async (id: string, bundle: Bundle) => {
  try {
    await putBundle(id, bundle);
    toast.success("Success! Bundle updated.");
  } catch (error) {
    toast.error("Failure! Bundle could not update properly..");
  }
};

const removeBundle = async (id: string) => {
  try {
    await deleteBundle(id);
    toast.success("Success! Bundle removed.");
  } catch (error) {
    toast.error("Failure! Bundle could not remove properly..");
  }
};

export { loadBundle, addBundle, updateBundle, removeBundle };
