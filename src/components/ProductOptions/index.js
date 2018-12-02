// @flow
import React, { Component } from 'react';
import Option from './components/Option';

/**
 * ProductOptions Properties
 */
type Props = {
    options?: {
        label: string,
        values: Array<{
            label: string,
            value_index: any,
        }>,
    },
};

/**
 * ProductOptions State
 */
type State = {};

/**
 */
export default class ProductOptions extends Component<Props, State> {
    render() {
        const { options } = this.props;

        if (!options) {
            return null;
        }

        return (
            <div>
                {options.map(option => (
                    <Option key={option.label}>
                        <label>{option.label}:</label>{' '}
                        <select>
                            {option.values.map(value => (
                                <option
                                    key={value.value_index}
                                    value={value.value_index}
                                >
                                    {value.label}
                                </option>
                            ))}
                        </select>
                    </Option>
                ))}
            </div>
        );
    }
}
