import React from 'react';


function Employees() {
    const name = ['Tiger Nixon', 'Garrett Winters', 'Ashton Cox', 'Cedric Kelly', 'Airi Satou', 'Brielle Williamson', 'Herrod Chandler', 'Rhona Davidson', 'Colleen Hurst', 'Sonya Frost', 'Jena Gaines', 'Quinn Flynn', 'Charde Marshall', 'Haley Kennedy', 'Tatyana Fitzpatrick', 'Michael Silva', 'Paul Byrd', 'Gloria Little', 'Bradley Greer', 'Dai Rios', 'Jenette Caldwell', 'Yuri Berry', 'Caesar Vance', 'Doris Wilder']

    const m = name.indexOf('Dai Rios');
    console.log(m);
    name.forEach(
        function (i) {
            console.log("i:", i)
        }
    );
    const employee = name.map(name => <h4>{name}</h4>)
    return (
        <div className="Employees" >
            {
                employee

            }

            < h2 > {m}</h2>
        </div >
    )

}
export default Employees;