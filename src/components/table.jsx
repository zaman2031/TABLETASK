import React from 'react';
import './table.scss';

const Table = () => {
    return (  
        <table className='main-wrapper'>
            <thead className='table-Header'>
                <tr >
                    <th>Sport</th>
                    <th>Entry $</th>
                    <th>#Entries</th>
                    <th>Max</th>
                    <th>Time</th>
                </tr>
            </thead>
          <tbody className='table-body'>
            <tr>
                <td className=' primary-color'>NFL</td>
                <td>$50</td>
                <td>12</td>
                <td>48</td>
                <td>2:00ET</td>
            </tr>
            <tr>
                <td className=' primary-color'>NHL</td>
                <td>$50</td>
                <td>12</td>
                <td>48</td>
                <td>2:00ET</td>
            </tr>
            <tr>
                <td className='secondary-color'>MLB</td>
                <td>$10</td>
                <td>2</td>
                <td>10</td>
                <td>1:00ET</td>
            </tr>
            <tr>
                <td className='secondary-color'>MLB</td>
                <td>$5</td>
                <td>48</td>
                <td>120</td>
                <td>12:00ET</td>
            </tr>
            <tr>
                <td className='tirtiary-color'>NHL</td>
                <td>$50</td>
                <td>12</td>
                <td>48</td>
                <td>12:00ET</td>
            </tr>
            <tr>
                <td className='tirtiary-color'>NHL</td>
                <td>$50</td>
                <td>12</td>
                <td>48</td>
                <td>12:00ET</td>
            </tr>
            <tr >
                <td className='redish-color'>PGA</td>
                <td>$50</td>
                <td>12</td>
                <td>48</td>
                <td>11:00ET</td>
            </tr>
            <tr>
            <td className='redish-color'>PGA</td>
                <td>$50</td>
                <td>12</td>
                <td>48</td>
                <td>11:00ET</td>
            </tr>
          </tbody>
        </table>
    );
}
 
export default Table; 