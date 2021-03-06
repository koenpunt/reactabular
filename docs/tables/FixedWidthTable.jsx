/* eslint-disable no-shadow */
import React from 'react';
import { Search } from '../helpers';
import {
  Table, search
} from '../../src';

class FixedWidthHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      style: {}
    };
  }
  componentDidMount() {
    // setTimeout is used to capture width correctly
    // More info: github.com/facebook/react-native/issues/953
    setTimeout(() => {
      const width = this.refs.header.clientWidth;

      this.setState({
        style: { width }
      });
    });
  }
  render() {
    return (
      <th style={this.state.style} ref="header">{this.props.children}</th>
    );
  }
}
FixedWidthHeader.propTypes = {
  children: React.PropTypes.any
};

export default class SearchTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: {}, // Search query
      columns: [
        {
          header: {
            label: 'Name',
            component: FixedWidthHeader
          },
          cell: {
            property: 'name'
          }
        },
        {
          header: {
            label: 'Address',
            component: FixedWidthHeader
          },
          cell: {
            property: 'address'
          }
        }
      ],
      data: [
        {
          id: 1,
          name: 'This is a very long title that goes on and on',
          address: '85 Peachfield Road'
        },
        {
          id: 2,
          name: 'Here is a shorter one',
          address: '77 Newmarket Road'
        }
      ]
    };
  }
  render() {
    const { data, columns, query } = this.state;
    const searchedData = search.multipleColumns({ columns, query })(data);

    return (
      <div>
        <div className="search-container">
          <span>Search</span>
          <Search
            columns={columns}
            data={data}
            onChange={query => this.setState({ query })}
          />
        </div>
        <Table.Provider columns={columns} data={searchedData} rowKey="id">
          <Table.Header />

          <Table.Body />
        </Table.Provider>
      </div>
    );
  }
}
