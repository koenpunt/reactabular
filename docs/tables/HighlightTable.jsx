/* eslint-disable no-shadow */
import React from 'react';
import { Search } from '../helpers';
import {
  Table, search, formatters,
} from '../../src';

export default class HighlightTable extends React.Component {
  constructor(props) {
    super(props);

    const highlight = column => formatters.highlight(value => {
      const { query } = this.state;

      return search.matches({
        value,
        query: query[column],
      });
    });

    this.state = {
      query: {},
      columns: [
        {
          header: {
            value: 'Name',
          },
          cell: {
            property: 'name',
            format: highlight('name'),
          },
        },
        {
          header: {
            value: 'Age',
          },
          cell: {
            property: 'age',
            format: highlight('age'),
          },
        },
      ],
      data: [
        {
          id: 100,
          name: 'Adam',
          age: 12,
        },
        {
          id: 101,
          name: 'Brian',
          age: 7,
        },
        {
          id: 102,
          name: 'Jake',
          age: 88,
        },
        {
          id: 103,
          name: 'Jill',
          age: 50,
        },
      ],
    };
  }
  render() {
    const { data, columns, query } = this.state;
    let searchedData = search.multipleColumns({ data, columns, query });

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
        <Table columns={columns} data={searchedData}>
          <Table.Header />

          <Table.Body rowKey="id" />
        </Table>
      </div>
    );
  }
}