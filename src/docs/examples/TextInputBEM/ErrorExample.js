
import React from 'react';
import TextInputBEM from 'ps-react/TextInputBEM';

/** Optional TextBox */
export default class ExampleOptional extends React.Component {
    render() {
        return (
            <TextInputBEM
                htmlId="example-optiosnal"
                label="Firsssst Name"
                name="firstnsssame"
                error="yuri here plz"
                onChange={() => {}}
            />
        )
    }
}