import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchUsers} from "../../redux/actions";
import User from "./User";
import Loader from "../Loader/Loader";

const UsersList = () => {

  const users = useSelector(state => state.users);
  const loading = useSelector(state => state.isLoadingUsers);
  
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(fetchUsers())
  }, [dispatch]);


  return (
    <div className="row">
      {
        loading
          ? <Loader/>
          : users.map(user => {
            return (
              <div key={user.id} className="col-3 mt-4">
                <User user={user}/>
              </div>
            )
          })
      }
    </div>
  )
}

export default UsersList;
