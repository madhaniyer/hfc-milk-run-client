import React,{useState,useEffect} from 'react'
import MaterialTable from 'material-table';
import PageContent from './PageContent';
import './NodeDet.css'
import { API } from "aws-amplify";
import { ThemeProvider } from './contexts/ThemeContext';
import { LoginProvider } from './contexts/LoginContext';
import { withRouter} from "react-router-dom";

function NodeDet() {
    const [state, setState] = useState({
        columns: [
            {title: "Completed",field: "IsComplete", type: "boolean"},
            {title: "Node",field: "Node"},
            {title: "Modem MAC ID",field: "CmMac"},
            {title: "Address",field: "Address"},
            {title: "IP Address",field: "IpAddress"},
            {title: "Place",field: "Place"},
            {title: "TBox MAC",field: "TboxMac"}
        ],
        data: [],
    });

    useEffect(() => {
        try {    
            async function getDetails() { 
                const data = await getNodes();  
                console.log("nodeDetails"+JSON.stringify(data));
                setState({ ...state, data });
            }
            getDetails();
        } catch(e) {
            alert(e);
        }
    },[]);

    const getNodes = () => {
        return API.get("hfc-milk-run", "/node_details/C38");
    }

    const  updateNodes = (data) =>  {
        let newItem = {
            body: data
        }
        //return API.post("hfc-milk-run", `/node_details/${data.Node}/${data.CmMac}`);
        //console.log("New Item"+JSON.stringify(data));
       // API.put()
        API.put("hfc-milk-run", `/node_details/update_node`, newItem).then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error.response);
        });
    }

    const update  = async (newData, oldData) => {
        const res = await updateNodes(newData);  
        console.log("New Data" + JSON.stringify(newData));
        const data = state.data;
        const index = data.indexOf(oldData);
        data[index] = newData;
        setState({ newData });
        /*const Nodes = state.data.map(data => {
          if (data.Node === newData.Node && data.CmMac === newData.CmMac) {
            return { ...data, IsComplete: newData.IsComplete };
          }
          return data;
        });
        setState({ data: Nodes }); *
        console.log("After update" +  JSON.stringify(Nodes) ); */
    }

    return (
        <LoginProvider>
            <ThemeProvider>
                <PageContent>
                {console.log("ReRender")}
                    <MaterialTable
                        title="HFC Node Details"
                        columns={state.columns}
                        data={state.data}
                        editable={{
                            onRowAdd: newData =>
                            new Promise(resolve => {
                                setTimeout(() => {
                                resolve();
                                //const data = [...state.data];
                                //data.push(newData);
                                //setState({ ...state, data });
                                }, 600);
                            }),
                            onRowUpdate: (newData, oldData) =>
                            new Promise(resolve => {
                                setTimeout(() => {
                                resolve();
                                //const data = [...state.data];
                                //data[data.indexOf(oldData)] = newData;
                                //setState({ ...state, data });
                                console.log("State.Data" + JSON.stringify(state.data));
                                update(newData,oldData);
                                }, 600);
                            }),
                            onRowDelete: oldData =>
                            new Promise(resolve => {
                                setTimeout(() => {
                                resolve();
                                //const data = [...state.data];
                                //data.splice(data.indexOf(oldData), 1);
                                //setState({ ...state, data });
                                }, 600);
                            }),
                        }}
                    />
                </PageContent>
            </ThemeProvider>
        </LoginProvider>
    )
}
export default withRouter(NodeDet);