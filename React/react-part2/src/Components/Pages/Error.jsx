import { useNavigate, useRouteError } from "react-router-dom"


export const ErrorPage = () =>{
    const error = useRouteError(); 
    const navigate = useNavigate();

    const HandleBack = () => {
        navigate(-1);
        console.log(navigate);
    }
    return (
    <>
       <h1>{error.status}</h1>
       <h1>{error.error.message}</h1>
       
       {/* way to go back previous page */}
       {/* <button onClick={() => window.history.back()}>Chal bhai</button> */}
       
       {/* way to go home page  ( Render ho ga yaha )*/}
        {/* <button onClick={() => window.location.replace("/")}>Home</button> */}

        {/* Way to go home page without rerendering */}
        {/* <NavLink to="/">Go to home Page</NavLink> */}

        {/* Way to go back previous page: */}
        <button onClick={() => HandleBack()}>Chal bhai Peecha</button>

    </>
    )
}