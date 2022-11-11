import { useState, useEffect, useRef } from "react";

import UserData from './UserData';

const UsersHook = () => {
    const [ userList, setUserList]= useState([]);
    const [ isLoading, setIsLoading]= useState(true);
    const [ totalPages, setTotalPages]= useState();
    const [ actualPage, setActualPage]= useState(1);
    const title = useRef(null);

    const [value, setValue] = useState(0);

    useEffect( () => {
        (async () => {
            const API_URL = 'https://reqres.in/api/users?per_page=4&page=' + actualPage;
            const apiResponse = await fetch(API_URL).then( response => response.json());
            const { data } = apiResponse;
            const { total_pages } = apiResponse;
            setUserList(data);
            setIsLoading(false);
            setTotalPages(total_pages);
        })();

        if(actualPage > 1){
            (async () => {
                const API_URL = 'https://reqres.in/api/users?per_page=4&page=' + actualPage;
                const apiResponse = await fetch(API_URL).then( response => response.json());
                const { data } = apiResponse;
                const { total_pages } = apiResponse;
                setUserList(data);
                setIsLoading(false);
                setTotalPages(total_pages);
            })();
        }

        
    }, [actualPage])
    

    const incrementHandler = () => {
        setValue(value + 1);
        setIsLoading(false);
    }

    const nextPage = () => {
        if(actualPage == totalPages){
            return;
        }
        setActualPage(actualPage + 1);
    }

    const previousPage = () => {
        if(actualPage == 1){
            return;
        }
        setActualPage(actualPage - 1);
    }

    const changeTitleHandler = () => {
        title.current.style.color = 'red';
        title.current.classList.add('testing-text')
    }
    
  return (
    <>
      <h3 ref={title}>User List</h3>

    <button onClick={ changeTitleHandler }>Cambiar el Title</button>

      <p>El valor es de {value}</p>

      <button onClick={ incrementHandler }>Incrementar</button>

      { isLoading && <h4>Cargando usuarios...</h4>}

                { !isLoading && (
                    <ul>
                        { userList.map( user => <UserData key={user.id} user={user} /> ) }
                    </ul>
                )}
                <button onClick={ previousPage }>Anterior</button>
                <button onClick={ nextPage }>Siguiente</button>
    </>
  )
}

export default UsersHook