import React from 'react';
import { tableTypes } from './types';
import {
  resolveHeaderRows, evaluateTransforms, mergeProps
} from './utils';

// This has to be a React component instead of a function.
// Otherwise refs won't work.
export default class Header extends React.Component { // eslint-disable-line max-len, react/prefer-stateless-function
  render() {
    const { children, ...props } = this.props;
    const { columns, components } = this.context;

    return React.createElement(
      components.header.wrapper,
      props,
      [resolveHeaderRows(columns).map((row, i) =>
        React.createElement(HeaderRow, {
          key: `${i}-header-row`,
          components: components.header,
          row
        })
      )].concat(children)
    );
  }
}
Header.propTypes = {
  children: React.PropTypes.any
};
Header.contextTypes = {
  columns: tableTypes.columns,
  components: React.PropTypes.object
};

const HeaderRow = ({ row, components }) => (
  React.createElement(
    components.row,
    {},
    row.map((column, j) => {
      const columnProps = column.props || {};
      const {
        label,
        transforms = [],
        format = a => a,
        props // eslint-disable-line no-shadow
      } = column.header || {};
      const extraParameters = {
        columnIndex: j,
        column,
        rowData: label
      };
      const transformed = evaluateTransforms(transforms, label, extraParameters);

      if (!transformed) {
        console.warn('Table.Header - Failed to receive a transformed result'); // eslint-disable-line max-len, no-console
      }

      return React.createElement(
        components.cell,
        {
          key: `${j}-header`,
          ...mergeProps([transformed, props, columnProps])
        },
        transformed.children || format(label, extraParameters)
      );
    })
  )
);
HeaderRow.propTypes = {
  row: React.PropTypes.arrayOf(React.PropTypes.object),
  components: React.PropTypes.object
};
