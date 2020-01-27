import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';


function Nav() {
    return (
        <div className="List" >

            <h5>
                <Link to='/Tiger'>   <li> Tiger Nixon </li></Link>
                <Link to='/Garrett'> <li> Garrett Winters </li></Link>
                <Link to='/Ashton'>  <li> Ashton Cox </li></Link>
                <Link to='/Cedric'>  <li> Cedric Kelly </li></Link>
                <Link to='/Airi'>    <li> Airi Satou </li></Link>
                <Link to='/Brielle'> <li> Brielle Williamson </li></Link>
                <Link to='/Herrod'>  <li> Herrod Chandler </li></Link>
                <Link to='/Rhona'>   <li> Rhona Davidson </li></Link>
                <Link to='/Colleen'> <li> Colleen Hurst </li></Link>
                <Link to='/Sonya'>   <li> Sonya Frost </li></Link>
                <Link to='/Jena'>    <li> Jena Gaines </li></Link>
                <Link to='/Quinn'>   <li> Quinn Flynn </li></Link>
                <Link to='/Charde'>   <li> Charde Marshall </li></Link>
                <Link to='/Haley'> <li> Haley Kennedy </li></Link>
                <Link to='/Tatyana'>  <li> Tatyana Fitzpatrick </li></Link>
                <Link to='/Michael'>  <li> Michael Silva </li></Link>
                <Link to='/Paul'>   <li> Paul Byrd </li></Link>
                <Link to='/Gloria'> <li> Gloria Little </li></Link>
                <Link to='/Bradley'>  <li> Bradley Greer </li></Link>
                <Link to='/Dai'>  <li> Dai Rios </li></Link>
                <Link to='/Jenette'>   <li> Jenette Caldwell </li></Link>
                <Link to='/Yuri'> <li> Yuri Berry </li></Link>
                <Link to='/Caesar'>  <li> Caesar Vance </li></Link>
                <Link to='/Doris'>  <li> Doris Wilder</li></Link>
            </h5>

        </div>
    )
}
export default Nav;