// import { useState, useEffect } from 'react';
// import axios from 'axios';

// import TrashSolid from '../assets/trash_solid.svg'
// import styles from './UserForm.module.css'

// const UserList = () => {
//     // const [users, setUsers] = useState([]);
//     const [users, setUsers] = useState<Array<{ id: number, first_name: string, last_name: string, role: string }>>([]);
//     const [newUser, setNewUser] = useState({
//         first_name: '',
//         last_name: '',
//         role: ''
//     });

//     useEffect(() => {
//         axios.get('http://localhost:8000/api/users/')
//             .then(response => {
//                 setUsers(response.data);
//             })
//             .catch(error => console.error('Error fetching users:', error));
//     }, []);

//     const handleAddUser = () => {
//         axios.post('http://localhost:8000/api/users/', newUser)
//             .then(response => {
//                 setUsers([...users, response.data]);
//                 setNewUser({ first_name: '', last_name: '', role: '' });
//             })
//             .catch(error => console.error('Error adding user:', error));
//     };

//     const handleDeleteUser = (id: number) => {
//         axios.delete(`http://localhost:8000/api/users/${id}/`)
//             .then(() => {
//                 setUsers(users.filter(user => user.id !== id));
//             })
//             .catch(error => console.error('Error deleting user:', error));
//     };

//     return(
//         <div className={styles["app"]}>
//             <div className={styles["tile"]}>
//                 <div className={styles["container"]}>
//                     <h2 className={styles["title"]}>
//                         Let's level up your brand, together
//                     </h2>
//                 </div>

//                 <div className={styles["container"]}>
//                     <form onSubmit={(e) => {e.preventDefault(); handleAddUser();}} className="box">
//                         <div className={styles["field"]}>
//                             <label className={styles["inputTitle"]}>First name:</label>
//                             <input  className={styles["subtext"]} 
//                                     value={newUser.first_name} 
//                                     onChange={ (e) => setNewUser({ ...newUser, first_name: e.target.value }) } 
//                                     type="text" 
//                                     placeholder="First name"/>
//                         </div>

//                         <div className={styles["field"]}>
//                             <label className={styles["inputTitle"]}>Last name:</label>
//                             <input  className={styles["subtext"]} 
//                                     value={newUser.last_name} 
//                                     onChange={ (e) => setNewUser({ ...newUser, last_name: e.target.value }) } 
//                                     type="text" 
//                                     placeholder="Last name"/>
//                         </div>

//                         <div className={styles["field"]}>
//                             <label className={styles["inputTitle"]}>Role:</label>
//                             <input  className={styles["subtext"]} 
//                                     value={newUser.role} 
//                                     onChange={ (e) => setNewUser({ ...newUser, role: e.target.value }) } 
//                                     type="text" 
//                                     placeholder="Role"/>
//                         </div>

                        
//                         <div className={styles["field2"]}>
//                             <label className={styles["subtext2"]}>
//                                 <input type="checkbox" required/>
//                                 You agree to our friendly <u>privacy policy</u>.
//                             </label>
//                         </div>

//                         <div className={styles["field"]}>
//                             <button className={styles["submit_button"]} type="submit">
//                                 SUBMIT
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </div>

//             <div>
//                 <div className={styles["list-user"]}>
//                     {users.map( (user) => 
//                                 <div className={styles["tile2"]} key={user.id}>
//                                     <div className={styles["single_user"]}>
//                                         <div className={styles["fieldUser"]}>
//                                             {user.first_name} {user.last_name}
//                                             <div className={styles["subtext3"]}>
//                                                 {user.role}
//                                             </div>
//                                         </div>

//                                         <button className={styles["delete_button"]} 
//                                             onClick={() => handleDeleteUser(user.id)}>
//                                             <img src={TrashSolid} alt="Delete"/>
//                                         </button>
//                                     </div>
//                                 </div>
//                     )}
//                 </div>
//             </div>
//         </div>    
//     );
// };

// export default UserList;
