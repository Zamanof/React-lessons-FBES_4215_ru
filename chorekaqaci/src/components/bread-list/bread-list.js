import React, {useEffect} from 'react';
import BreadListItem from "../bread-list-item";
import {connect} from "react-redux";

import withBreadstoreService from '../high-order-component'
import {breadsLoaded} from "../../actions";

import './bread-list.css'
const BreadList = ({breads}) => {
    useEffect(() => {
        const {breadstoreService} = breads
        const data = breadstoreService.getBreads()

    }, []);
    return (
        <div>

        </div>
    );
};


const mapStateProps = ({breads}) =>{
   return{breads}
}
export default withBreadstoreService()(connect(mapStateProps)(BreadList));