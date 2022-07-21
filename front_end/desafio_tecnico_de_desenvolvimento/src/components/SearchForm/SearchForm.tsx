import { Button } from 'antd'
import { useCallback, useEffect } from 'react'
import {PersonService} from "../../provider"


function SearchForm({ openUpdateUser }: { openUpdateUser: Function }) {

    const handleSearch = useCallback((name?: string, email?: string) => {

        // TODO pesquisar usuario backend

        openUpdateUser('1') // TODO passar id do usuário
    }, [openUpdateUser])

    useEffect(() => { 
        PersonService.getById("c3229fcc-3fdb-4bbc-975f-03c80732da01")
        .then((result) => {
            if(result instanceof Error){
                alert(result.message)
            }else{
              return result;
            }
        })
    },[]);

    return <div>


        <Button onClick={()=>handleSearch('teste', 'teste@teste')}>Buscar</Button>
       
        
        </div>
}

export { SearchForm }