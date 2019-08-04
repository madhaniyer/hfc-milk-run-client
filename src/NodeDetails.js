import React,{ useEffect }  from 'react';
import MUIDataTable from "mui-datatables";
import { API } from "aws-amplify";
import Navbar from "./Navbar";
import PageContent from './PageContent';
import useNodeDetails from './hooks/useNodeDetails';
import { ThemeProvider } from './contexts/ThemeContext';
import { LoginProvider } from './contexts/LoginContext';
import { NodeDetailsProvider } from './contexts/NodeDetailsContext';
//import { NodeDetailsContext } from './contexts/NodeDetailsContext';
import { withRouter} from "react-router-dom";

function NodeDetails(props) {

    //const {Nodes, setNodeDetails} = useContext(NodeDetailsContext);
    const [nodes, setNodeDetails] = useNodeDetails([]);
    const getNodes = () => {
        return API.get("hfc-milk-run", "/node_details/C38");
    }

    useEffect(() => {
        try {    
            async function getDetails() { 
                const nodeDetails = await getNodes();  
                console.log("nodeDetails"+JSON.stringify(nodeDetails));
                setNodeDetails(nodeDetails);
            }
            getDetails();
        } catch(e) {
            alert(e);
        }
    }, []);
    /*useEffect(() => {
        try {    
            async function getDetails() { 
                const nodeDetails = await getNodes();  
                console.log("nodeDetails"+JSON.stringify(nodeDetails));
                //setValues(nodeDetails);
            }
            getDetails();
        } catch(e) {
            alert(e);
        }
    }, []);*/

    const columns = [
        {
         name: "Node",
         label: "Node",
         options: {
          filter: true,
          sort: true,
         }
        },
        {
         name: "CmMac",
         label: "Modem MAC ID",
         options: {
          filter: true,
          sort: false,
         }
        },
        {
         name: "Address",
         label: "Address",
         options: {
          filter: true,
          sort: false,
         }
        },
        {
         name: "IpAddress",
         label: "IP Address",
         options: {
          filter: true,
          sort: false,
         }
        },
        {
            name: "Place",
            label: "Place",
            options: {
             filter: true,
             sort: false,
            }
        },
        {
            name: "TboxMac",
            label: "TBox MAC",
            options: {
             filter: true,
             sort: false,
            }
        }

       ];
        
       const options = {
         filterType: 'checkbox'
       };

    return (
        <div>
            <LoginProvider>
                <ThemeProvider>
                    <NodeDetailsProvider>
                        <PageContent>
                            <Navbar />
                                <MUIDataTable
                                    title={"Node List"}
                                    data={nodes}
                                    columns={columns}
                                    options={options}
                                /> 
                        </PageContent>
                    </NodeDetailsProvider>
                </ThemeProvider>
            </LoginProvider>
        </div>
    )
}
export default withRouter(NodeDetails);