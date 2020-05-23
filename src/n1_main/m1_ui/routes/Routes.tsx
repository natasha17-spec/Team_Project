import React, {useState} from 'react'
import {BrowserRouter, NavLink, Route} from 'react-router-dom';
import Register from "../../../n2_features/f1_auth/a2_register/Register";
import Login from "../../../n2_features/f1_auth/a1_login/Login";
import PasswordRecovery from "../../../n2_features/f1_auth/a3_password_recovery/PasswordRecovery";
import NewPassword from "../../../n2_features/f1_auth/a4_new_password/NewPasword";
import Profile from "../../../n2_features/f1_auth/a5_profile/Profile";
import s from './Routes.module.css'
import {LOGIN, NEWPASS, PROFILE, RECOVERY, REGISTER} from "./Path";


const Routes = () => {
    const [showResults, setShowResults] = useState(false)
    const onClick = () => setShowResults(true)
    const onClick2 = () => setShowResults(false)
    return (
        <BrowserRouter>
            <div className={s.routes_container}>
                <div className={s.button_menu}>
                    {showResults
                        ? <button onClick={onClick2}>Hide menu</button>
                        : <button onClick={onClick}>Show Menu</button>}
                </div>
                {/*<div className={s.button_menu}> <ButtonMenu/></div>*/}

                    {showResults && <div className={s.linkContainer}>
                        <div className={s.link}><NavLink to={LOGIN}>login</NavLink></div>
                        <div className={s.link}><NavLink to={REGISTER}>register</NavLink></div>
                        <div className={s.link}><NavLink to={RECOVERY}>recovery</NavLink></div>
                        <div className={s.link}><NavLink to={NEWPASS}>newpass</NavLink></div>
                        <div className={s.link}><NavLink to={PROFILE}>profile</NavLink></div>
                    </div>
                    }


                <div className={s.route}>
                    <Route exact path={LOGIN} component={Login}/>
                    <Route path={REGISTER} component={Register}/>
                    <Route path={RECOVERY} component={PasswordRecovery}/>
                    <Route path={NEWPASS} component={NewPassword}/>
                    <Route path={PROFILE} component={Profile}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default Routes;