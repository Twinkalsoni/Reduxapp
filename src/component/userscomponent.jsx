import React, { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { getUsers } from "../Redux/actions/users";
import card from "./cardcomponent";

const Users = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users);
     
    useEffect(() => {
        dispatch(getUsers([{
            id:1,
            name: 'Leanne Graham',
            company: {
                name: "Romaguera-Crona",
                catchPhrase:"Multi-layered client-server neural-net",
            }
        }
    ]));
    }, [])
    return(
        <>
        {users.length > 0 && users.map((user)=>(
            <card key={user.id} user={user}/>
        ))}
        {users.length === 0 && <p>No users Available!</p>}
        </>
    )
}
export default Users;