import { Component } from "react";

import UserData from './UserData';

class UsersClassComponent extends Component {
    constructor(){
        super();
        this.state = {
            userList: [],
            isLoading: true
        }
    }

    componentDidMount() {
        (async () => {
            const API_URL = 'https://reqres.in/api/users?per_page=4&page=1';
            const apiResponse = await fetch(API_URL).then( response => response.json());
            const { data } = apiResponse;
            const { total_pages } = apiResponse;
            this.setState({
                userList: data,
                isLoading: false,
                totalPages: total_pages,
                actualPage: 1
            })
        })()
    }

    componentDidUpdate() {
        (async () => {
            const API_URL = 'https://reqres.in/api/users?per_page=4&page=' + this.state.actualPage;
            const apiResponse = await fetch(API_URL).then( response => response.json());
            const { data } = apiResponse;
            const { total_pages } = apiResponse;
            this.setState({
                userList: data,
                isLoading: false,
            })
        })()
    }

    nextPage() {
        if(this.state.actualPage == this.state.totalPages){
            return;
        }
        this.setState({ actualPage: this.state.actualPage + 1});
    }

    previousPage() {
        if(this.state.actualPage == 1){
            return;
        }
        this.setState({ actualPage: this.state.actualPage - 1});
    }

    render() {
        return(
            <>
                <h3>User List</h3>

                { this.state.isLoading && <h4>Cargando usuarios...</h4>}

                { !this.state.isLoading && (
                    <ul>
                        { this.state.userList.map( user => <UserData key={user.id} user={user} /> ) }
                    </ul>
                )}
                <button onClick={ () => this.previousPage() }>Anterior</button>
                <button onClick={ () => this.nextPage() }>Siguiente</button>
            </>
        )
    }
} 

export default UsersClassComponent