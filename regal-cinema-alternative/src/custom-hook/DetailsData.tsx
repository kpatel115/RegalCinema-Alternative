import { server_details } from '../api/server';
import { useState, useEffect } from 'react'
// just to get the details data from server.ts 
export const useGetData = (id:any) => {
    const [ detailData, setData ] = useState<[]>([])

    async function handleDataFetch(){
        const result = await server_details.get(id);
        setData(result)
    }

    useEffect( () => {
        handleDataFetch();
    }, [])

  return {
    detailData, getData:handleDataFetch,
  }}
