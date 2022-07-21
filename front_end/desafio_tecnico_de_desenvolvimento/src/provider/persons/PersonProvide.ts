import { provider } from "../configProvider"

export interface IGetData {
    id: string;
    name: string;
    email: string;
    gender: string;
    birthDate: string;
    phone: string;
}

type TPersinWithTotal = {
    data: IGetData[];
    CountPersont: number;
}

const getAll = async (page = 1): Promise<TPersinWithTotal | Error> => {
    try{
        const urlRelative = `/all?page=${page}&limit=10`
        
        const { data, headers } = await provider.get(urlRelative);

        if (!data){

        return new Error("Users not found !")
        }
        return {
            data,
            CountPersont: Number(headers["x-total-count"])
        }
    }catch (error){
        console.error(error)
        return new Error((error as {message: string}).message)
    }
};

const getById = async (id: string): Promise<IGetData | Error> => {
    try{
        const { data } = await provider.get(`person/${id}`);
        
       return data
    }catch (error){
        console.error(error)
        return new Error((error as {message: string}).message)
        
    }
};

const getByName = async (name: string): Promise<any> => {
    try{
        const { data } = await provider.get(`/${name}`);
        
       return data
    }catch (error){
        console.error(error)
        return new Error((error as {message: string}).message)
        
    }
};

const getByEmail = async (email: string): Promise<IGetData | Error> => {
    try{
        const { data } = await provider.get(`/${email}`);
        
       return data
    }catch (error){
        console.error(error)
        return new Error((error as {message: string}).message)
        
    }
};

const create = async (data: Omit<IGetData, "id">): Promise<void | Error> => {
    try{
         await provider.post<IGetData>("", data);
        
    }catch (error){
        console.error(error)
        return new Error((error as {message: string}).message)
        
    }
};

const updateById = async (id: string, data: IGetData): Promise<void | Error> => {
    try{
        await provider.put(`/${id}`, data);
       
   }catch (error){
       console.error(error)
       return new Error((error as {message: string}).message)
       
   }
};

const deleteById = async (id: string,): Promise<void | Error> => {
    try{
        await provider.delete(`/${id}`);
       
   }catch (error){
       console.error(error)
       return new Error((error as {message: string}).message)  
   }
};


export const PersonService = {

    getAll, 
    getById ,
    getByName ,
    getByEmail,
    create, 
    updateById,
    deleteById,
}