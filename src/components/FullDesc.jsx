import React from 'react';
import { findDOMNode } from 'react-dom';
import $ from 'jquery';

export default class FullDesc extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor() {
        super();
    }

    handleToggle = () => {
        const el = findDOMNode(this.refs.toggle);
        $(el).slideToggle();
    };

    render() {
        return (
            <div className='long-desc'>
                <ul className='profile-info'>
                    <li>
                        <span className='info-title'>User Name : </span> Shuvo Habib
                    </li>
                </ul>

                <ul className='profile-info additional-profile-info-list' ref='toggle'>
                    <li>
                        <span className='info-email'>Office Email</span> me@shuvohabib.com
                    </li>
                </ul>
                
                <div className='ellipsis-click' onClick={this.handleToggle}>
                    <i className='fa-ellipsis-h'/>
                </div>
            </div>
        );
    }
}