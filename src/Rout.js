import React from 'react';
import Nav from '../src/Employee/Nav';

import Tiger from '../src/Employee/Tiger';
import Garrett from '../src/Employee/Garrett';
import Ashton from '../src/Employee/Ashton';
import Cedric from '../src/Employee/Cedric';
import Airi from '../src/Employee/Airi';
import Brielle from '../src/Employee/Brielle';
import Herrod from '../src/Employee/Herrod';
import Rhona from '../src/Employee/Rhona';

import Colleen from '../src/Employee/Colleen';
import Sonya from '../src/Employee/Sonya';
import Jena from '../src/Employee/Jena';
import Quinn from '../src/Employee/Quinn';
import Charde from '../src/Employee/Charde';
import Haley from '../src/Employee/Haley';
import Tatyana from '../src/Employee/Tatyana';
import Michael from '../src/Employee/Michael';

import Paul from '../src/Employee/Paul';
import Gloria from '../src/Employee/Gloria';
import Bradley from '../src/Employee/Bradley';
import Dai from '../src/Employee/Dai';
import Jenette from '../src/Employee/Jenette';
import Yuri from '../src/Employee/Yuri';
import Caesar from '../src/Employee/Caesar';
import Doris from '../src/Employee/Doris';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function Rout() {
    return (
        <Router>
            <div>
                <section>
                    <Nav />
                    <Switch>
                        <Route path="/Tiger" component={Tiger} />
                        <Route path="/Garrett" component={Garrett} />
                        <Route path="/Ashton" component={Ashton} />
                        <Route path="/Cedric" component={Cedric} />

                        <Route path="/Airi" component={Airi} />
                        <Route path="/Brielle" component={Brielle} />
                        <Route path="/Herrod" component={Herrod} />
                        <Route path="/Rhona" component={Rhona} />

                        <Route path="/Colleen" component={Colleen} />
                        <Route path="/Sonya" component={Sonya} />
                        <Route path="/Jena" component={Jena} />
                        <Route path="/Quinn" component={Quinn} />

                        <Route path="/Charde" component={Charde} />
                        <Route path="/Haley" component={Haley} />
                        <Route path="/Tatyana" component={Tatyana} />
                        <Route path="/Michael" component={Michael} />

                        <Route path="/Paul" component={Paul} />
                        <Route path="/Gloria" component={Gloria} />
                        <Route path="/Bradley" component={Bradley} />
                        <Route path="/Dai" component={Dai} />

                        <Route path="/Jenette" component={Jenette} />
                        <Route path="/Yuri" component={Yuri} />
                        <Route path="/Caesar" component={Caesar} />
                        <Route path="/Doris" component={Doris} />

                    </Switch>

                </section>



            </div>
        </Router>
    );
}



export default Rout;
