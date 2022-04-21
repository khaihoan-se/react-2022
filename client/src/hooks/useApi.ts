import { useEffect, useState } from "react";
import axios from "axios";

const useApi = (url: string) => {
    const [ data, setData ] = useState<any>(null);
    const [ loading, setLoading ] = useState<boolean>(true);

    useEffect(() => {
        const axiosApi = async () => {
            try {
                const response = await axios.get(url);
                setData(response.data);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        }
        axiosApi();
    }, [url])

    return { loading, data }
}

export default useApi;