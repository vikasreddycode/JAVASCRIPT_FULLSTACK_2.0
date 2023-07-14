import React,{useState,useEffect} from "react"
import  Axios from "axios"
import { ListGroup,ListGroupItem } from "reactstrap"
const Repos = ({repos_url}) => {
    const [repos,setRepos] = useState([]);
    const fetchrepos =  async () => {
        const {data} = await Axios.get(repos_url)
        setRepos(data);
    }
    useEffect(() =>  {fetchrepos()},[repos_url])
    return (
        <>
        <ListGroup>
            {repos.map(repo => {
                <ListGroupItem key={repo.id}>
                        <div className="text-prime">{repo.name}</div>
                        <div className="text-prime">{repo.language}</div>
                        <div className="text-prime">{repo.description}</div>


                </ListGroupItem>
            })}
        </ListGroup>
        </>
    )

}
export default Repos;