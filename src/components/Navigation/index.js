import React from 'react'
import { Link } from 'react-router-dom'

import * as ROUTES from '../../constants/routes'

const Navigation = () => (
    <div>
        <ul>
            <li>
                <link to={ROUTES.SIGN_IN}>Нэвтрэх</link>
            </li>
            <li>
                <link to={ROUTES.LANDING}>LAND</link>
            </li>
            <li>
                <link to={ROUTES.HOME}>НҮҮР</link>
            </li>
            <li>
                <link to={ROUTES.ACCOUNT}>ХАЯГ</link>
            </li>
            <li>
                <link to={ROUTES.ADMIN}>Admin</link>
            </li>
        </ul>
    </div>
)
export default Navigation