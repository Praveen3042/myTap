import firebaseConfig from "./Firebaseconfig";
import React from 'react'
import {ref,onValue} from 'firebase/database';

const db= firebaseConfig();
export class First1 extends React.Component{
    constructor(){
        super();
        this.state={
            tableData:[]
        }
    }
     componentDidMount(){
        const dbref= ref(db,'modbus_data')
        onValue(dbref,(snapshot)=>{
            let records=[]
            snapshot.forEach(childSnapshot=>{
                let keyName =childSnapshot.key
                let data = childSnapshot.val()
                MediaRecorder.push({"key":keyName,"data":data})
            })
            this.setState({tableData: records})
        })
     }

    render(){
        return(
            <table>
                <tr>
                <th>address</th>
                <th>Value</th>
                <th>date & time</th>
                </tr>
                
                    {this.state.tableData.map((rowdata,index)=>{
                       return(
                        <tr>
                            
                            <td>{index}</td>
                            <td>{rowdata.key}</td>
                            <td>{rowdata.data.address}</td>
                            <td>{rowdata.data.float_value}</td>
                            <td>{rowdata.data.timestamp}</td>

                        </tr>
                       )
                    } )}
               

            </table>
        )
    }
}