

import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux/user/actions'

const UserContainer = ({ userData, fetchUsers }) => {
  useEffect(() => {
    fetchUsers()
  }, []);
  return(
    <div>
      { userData.loading ? <span>Loading...</span> :
           userData.error ? <span>{ userData.error }</span> :
              <div>
                <h2>Users Lifat</h2>
                <div>
                {
                  userData &&
                    userData.users &&
                      userData.users.map(user => <p key={user.id}>{user.name}</p>)
                }
                </div>
              </div>
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    userData: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => {
      dispatch(fetchUsers())
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps) (UserContainer)
