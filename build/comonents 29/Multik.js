
import React, {useState, useEffect} from 'react';

function Multik() {

        const [allUser, setAllUser] = useState([])

            useEffect(() => {
                async function getData(){
                    let allUser = await fetch("https://myjson.dit.upm.es/api/bins/apdx")
                    .then(res => {
                        return res.json()
                    })
                    .catch(err => {
                        return err
                    })
                    setAllUser(allUser)
                    console.log(allUser)
                }
                getDate()
            }, []);

            return(
                <div>
                    <tbody></tbody>
                    <thead></thead>
                </div>
            );
        }
export default Multik;
