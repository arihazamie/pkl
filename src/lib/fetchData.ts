import axios, { AxiosError } from "axios";

interface FetchDataProps {
  url: string;
  onSuccess?: (data: any) => void;
  onError?: (error: AxiosError) => void;
}

const fetchData = async ({ url, onSuccess, onError }: FetchDataProps) => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_FETCH}/${url}`);
    if (onSuccess) {
      onSuccess(response.data);
    }
  } catch (error: any) {
    if (onError) {
      onError(error);
    }
  }
};

export default fetchData;
