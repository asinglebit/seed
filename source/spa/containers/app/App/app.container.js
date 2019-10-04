/**
 * Libraries
 */

import React, {
    Component
} from 'react';
import {
    bindActionCreators
} from 'redux';
import {
    connect
} from 'react-redux';

/**
 * Actions
 */

import * as Actions from 'spa/actions';

/**
 * Styles
 */

import './app.container.scss';

/**
 * App container definition
 */

export class App extends Component < void, AppPropsType, void > {

    /**
     * Constructor
     */

    constructor(props: AppPropsType) {
        super(props);
    }

    /**
     * Markup
     */

    render() {
        return (
            <div
                className="app-root"
            >
                {'Application'}
            </div>
        );
    }
}

/**
 * Store bindings
 */

export default connect(
    (state) => {
        return {};
    },
    (dispatch) => {
        return {
            actions: bindActionCreators(Actions, dispatch)
        };
    }
)(App);
