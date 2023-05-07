import React, { Component } from 'react';

// const LoaderHOC = (WrappedComponent,field) => {
//     return class LoaderHOC extends Component {
//         render() {

//             //componentlerin farklı loading süreleri olması durumunda hata olmaması için
//             //[field] ı ekledik. Böylece gelen alanların kontrolünü ayrı ayrı yapmış olduk 
//             return this.props[field].length === 0 ? (
//                 <div>Loading...</div>
//             ) : (
//                 <WrappedComponent {...this.props}></WrappedComponent>
//             )
//         }
//     }
// }


const LoaderHOC = (WrappedComponent, field) => {
    return (props) => props[field].length > 0
        ? (<WrappedComponent {...props}></WrappedComponent>)
        : (<div>Loading...</div>)
}

export default LoaderHOC