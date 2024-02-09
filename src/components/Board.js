import React from "react";
import Square from './Square';

export default class Board extends React.Component {

    render() {
        return (
            <div>
                <div className="border-row">
                    <Square />
                    <Square />
                    <Square />
                </div>

                <div className="border-row">
                    <Square />
                    <Square />
                    <Square />
                </div>

                <div className="border-row">
                    <Square />
                    <Square />
                    <Square />
                </div>

            </div>
        )
    }

}