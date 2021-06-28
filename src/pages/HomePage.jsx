import { useEffect } from "react"
import { useHistory } from "react-router-dom";
import SigninForm from "../components/forms/SigninForm";


export default function HomePage({ checkLogin, setCheckLogin, googleUserData, fbUserData}) {

    const history = useHistory();

    useEffect(() => {
        if (!checkLogin) {
            history.push('/')
        }
        
    }, []);

    // console.log("HomePage cual : "+SigninForm.cual )

    // if (SigninForm.cual === 1) {

    return (
        <>
            {checkLogin ?
                <>
                    <h1>
                        Página Principal
                    </h1>
                    <div>
                        {/* if (cual===1) {  */}
                        {/* <h1> Nombre : {fbUserData.name} </h1>
                        <img src={fbUserData.picture.data.url} alt="imagen de perfil" />
                        
                        <h2> Correo : {fbUserData.email} </h2> */}
                     {/* } else   */}
                     <img src={googleUserData.picture.data.url} alt="imagen de perfil" />

                    </div>
                </>
                :
                null
            }
        </>
    )
    }

//     return (
//         <>
//             {checkLogin ?
//                 <>
//                     <h1>
//                         Página Principal
//                     </h1>
//                     <div>
//                         {/* if (cual===1) {  */}
//                         <h1> Nombre : {fbUserData.name} </h1>
//                         <img src={fbUserData.picture.data.url} alt="imagen de perfil" />
                        
//                         <h2> Correo : {fbUserData.email} </h2>
//                      {/* } else   */}
//                      {/* <img src={googleUserData.picture.data.url} alt="imagen de perfil" /> */}

//                     </div>
//                 </>
//                 :
//                 null
//             }
//         </>
//     )

// }


