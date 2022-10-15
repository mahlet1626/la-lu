import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../../redux/articles/actions';
import Input, { Textarea } from '../../../components/uielements/input';
import Select, {
  SelectOption as Option,
} from '../../../components/uielements/select';
import Modal from '../../../components/feedback/modal';
import LayoutContentWrapper from '../../../components/utility/layoutWrapper.js';
import Box from '../../../components/utility/box';
import ContentHolder from '../../../components/utility/contentHolder';
import Popconfirms from '../../../components/feedback/popconfirm';
import {
  ActionBtn,
  Fieldset,
  Form,
  Label,
  TitleWrapper,
  ButtonHolders,
  ActionWrapper,
  ComponentTitle,
  TableWrapper,
  // StatusTag,
} from './articles.style';
import clone from 'clone';

class Articles extends Component {
  componentDidMount() {
    this.props.loadFromFireStore();
  }
  handleRecord = (actionName, article) => {
    if (article.key && actionName !== 'delete') actionName = 'update';
    this.props.saveIntoFireStore(article, actionName);
  };
  resetRecords = () => {
    this.props.resetFireStoreDocuments();
  };

  handleModal = (article = null) => {
    this.props.toggleModal(article);
  };

  onRecordChange = (key, event) => {
    let { article } = clone(this.props);
    if (key) article[key] = event.target.value;
    this.props.update(article);
  };

  onSelectChange = (key, value) => {
    let { article } = clone(this.props);
    if (key) article[key] = value;
    this.props.update(article);
  };

  render() {
    const { modalActive, 
      // articles
     } = this.props;
    const { article } = clone(this.props);
    const dataSource = [{ "name": "Abebe", "email": "abebe@gmail.com","location_tracking":"Click Here" }];
    // Object.keys(articles).map((article, index) => {
    //   return dataSource.push({
    //     ...articles[article],
    //     key: article,
    //   });
    // });

    // const rowSelection = {
    //   onChange: (selectedRowKeys, selectedRows) => { },
    // };

    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        width: '200px',
        sorter: (a, b) => {
          if (a.title < b.title) return -1;
          if (a.title > b.title) return 1;
          return 0;
        },
        render: (text, row) => {
          return (
            <a href="/dashboard/trip_history"> {row.name} </a>
          );
        },
        // render: (text, row) => {
        //   const trimByWord = sentence => {
        //     let result = sentence;
        //     let resultArray = result.split(' ');
        //     if (resultArray.length > 7) {
        //       resultArray = resultArray.slice(0, 7);
        //       result = resultArray.join(' ') + '...';
        //     }
        //     return result;
        //   };

        //   return trimByWord(row.title);
        // },
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
        width: '250px',
        sorter: (a, b) => {
          if (a.description < b.description) return -1;
          if (a.description > b.description) return 1;
          return 0;
        },
        // render: (text, row) => {
        //   const trimByWord = sentence => {
        //     let result = sentence;
        //     let resultArray = result.split(' ');
        //     if (resultArray.length > 20) {
        //       resultArray = resultArray.slice(0, 20);
        //       result = resultArray.join(' ') + '...';
        //     }
        //     return result;
        //   };

        //   return trimByWord(row.description);
        // },
      },
      {
        title: 'Phone',
        dataIndex: 'phone',
        key: 'phone',
        width: '220px',
        sorter: (a, b) => {
          if (a.excerpt < b.excerpt) return -1;
          if (a.excerpt > b.excerpt) return 1;
          return 0;
        },
        // render: (text, row) => {
        //   const trimByWord = sentence => {
        //     let result = sentence;
        //     let resultArray = result.split(' ');
        //     if (resultArray.length > 8) {
        //       resultArray = resultArray.slice(0, 8);
        //       result = resultArray.join(' ') + '...';
        //     }
        //     return result;
        //   };

        //   return trimByWord(row.excerpt);
        // },
      },
      {
        title: 'Referred By',
        dataIndex: 'referred_by',
        width: '170px',
        key: 'referred_by',
        sorter: (a, b) => {
          if (a.slug < b.slug) return -1;
          if (a.slug > b.slug) return 1;
          return 0;
        },
      },
      {
        title: 'Company Name',
        dataIndex: 'company_name',
        className: 'noWrapCell',
        key: 'company_name',
        sorter: (a, b) => {
          if (a.status < b.status) return -1;
          if (a.status > b.status) return 1;
          return 0;
        },

        // render: (text, row) => {
        //   let className;
        //   if (row.status === ('draft' || 'Draft' || 'DRAFT')) {
        //     className = 'draft';
        //   } else if (row.status === ('publish' || 'Publish' || 'PUBLISH')) {
        //     className = 'publish';
        //   }
        //   return <StatusTag className={className}>{row.status}</StatusTag>;
        // },
      },
      {
        title: 'Messenger Type',
        dataIndex: 'messenger_type',
        className: 'noWrapCell',
        key: 'messenger_type',
        sorter: (a, b) => {
          if (a.status < b.status) return -1;
          if (a.status > b.status) return 1;
          return 0;
        },

        // render: (text, row) => {
        //   let className;
        //   if (row.status === ('draft' || 'Draft' || 'DRAFT')) {
        //     className = 'draft';
        //   } else if (row.status === ('publish' || 'Publish' || 'PUBLISH')) {
        //     className = 'publish';
        //   }
        //   return <StatusTag className={className}>{row.status}</StatusTag>;
        // },
      },
      {
        title: 'Location Tracking',
        dataIndex: 'location_tracking',
        className: 'noWrapCell',
        key: 'location_tracking',
        sorter: (a, b) => {
          if (a.status < b.status) return -1;
          if (a.status > b.status) return 1;
          return 0;
        },

        render: (text, row) => {
          return (
            <a href="/dashboard/trip_history"> {row.location_tracking} </a>
          );
        },

        // render: (text, row) => {
        //   let className;
        //   if (row.status === ('draft' || 'Draft' || 'DRAFT')) {
        //     className = 'draft';
        //   } else if (row.status === ('publish' || 'Publish' || 'PUBLISH')) {
        //     className = 'publish';
        //   }
        //   return <StatusTag className={className}>{row.status}</StatusTag>;
        // },
      },




      {
        title: 'License Expiry Status',
        dataIndex: 'expiry_status',
        className: 'noWrapCell',
        key: 'expiry_status',
        sorter: (a, b) => {
          if (a.status < b.status) return -1;
          if (a.status > b.status) return 1;
          return 0;
        },

        // render: (text, row) => {
        //   let className;
        //   if (row.status === ('draft' || 'Draft' || 'DRAFT')) {
        //     className = 'draft';
        //   } else if (row.status === ('publish' || 'Publish' || 'PUBLISH')) {
        //     className = 'publish';
        //   }
        //   return <StatusTag className={className}>{row.status}</StatusTag>;
        // },
      },
      {
        title: 'Driver Wallet Amount',
        dataIndex: 'wallet_amount',
        className: 'noWrapCell',
        key: 'wallet_amount',
        sorter: (a, b) => {
          if (a.status < b.status) return -1;
          if (a.status > b.status) return 1;
          return 0;
        },

        // render: (text, row) => {
        //   let className;
        //   if (row.status === ('draft' || 'Draft' || 'DRAFT')) {
        //     className = 'draft';
        //   } else if (row.status === ('publish' || 'Publish' || 'PUBLISH')) {
        //     className = 'publish';
        //   }
        //   return <StatusTag className={className}>{row.status}</StatusTag>;
        // },
      },
      {
        title: 'Status',
        dataIndex: 'status',
        className: 'noWrapCell',
        key: 'status',
        sorter: (a, b) => {
          if (a.status < b.status) return -1;
          if (a.status > b.status) return 1;
          return 0;
        },

        // render: (text, row) => {
        //   let className;
        //   if (row.status === ('draft' || 'Draft' || 'DRAFT')) {
        //     className = 'draft';
        //   } else if (row.status === ('publish' || 'Publish' || 'PUBLISH')) {
        //     className = 'publish';
        //   }
        //   return <StatusTag className={className}>{row.status}</StatusTag>;
        // },
      },
      {
        title: 'Actions',
        key: 'action',
        width: '60px',
        className: 'noWrapCell',
        render: (text, row) => {
          return (
            <ActionWrapper>
              <a onClick={this.handleModal.bind(this, row)} href="# ">
                <i className="ion-android-create" />
              </a>

              <Popconfirms
                title="Are you sure to delete this article？"
                okText="Yes"
                cancelText="No"
                placement="topRight"
                onConfirm={this.handleRecord.bind(this, 'delete', row)}
              >
                <a className="deleteBtn" href="# ">
                  <i className="ion-android-delete" />
                </a>
              </Popconfirms>
            </ActionWrapper>
          );
        },
      },
    ];

    return (
      <LayoutContentWrapper>
        <Box>
          <ContentHolder style={{ marginTop: 0, overflow: 'hidden' }}>
            <TitleWrapper>
              <ComponentTitle>Messenger Management</ComponentTitle>

              <ButtonHolders>
                {/* <ActionBtn type="danger" onClick={this.resetRecords}>
                  Reset record
                </ActionBtn> */}

                <ActionBtn
                  type="primary"
                  onClick={this.handleModal.bind(this, null)}
                >
                  Add Messenger
                </ActionBtn>
              </ButtonHolders>
            </TitleWrapper>

            <Modal
              visible={modalActive}
              onClose={this.props.toggleModal.bind(this, null)}
              title={article.key ? 'Update Article' : 'Add New Article'}
              okText={article.key ? 'Update Article' : 'Add Article'}
              onOk={this.handleRecord.bind(this, 'insert', article)}
              onCancel={this.props.toggleModal.bind(this, null)}
            >
              <Form>
                <Fieldset>
                  <Label>Title</Label>
                  <Input
                    label="Title"
                    placeholder="Enter Title"
                    value={article.title}
                    onChange={this.onRecordChange.bind(this, 'title')}
                  />
                </Fieldset>

                <Fieldset>
                  <Label>Description</Label>
                  <Textarea
                    label="Description"
                    placeholder="Enter Description"
                    rows={5}
                    value={article.description}
                    onChange={this.onRecordChange.bind(this, 'description')}
                  />
                </Fieldset>

                <Fieldset>
                  <Label>Excerpt</Label>
                  <Textarea
                    label="Excerpt"
                    rows={5}
                    placeholder="Enter excerpt"
                    value={article.excerpt}
                    onChange={this.onRecordChange.bind(this, 'excerpt')}
                  />
                </Fieldset>

                <Fieldset>
                  <Label>Slug</Label>

                  <Input
                    label="Slug"
                    placeholder="Enter Slugs"
                    value={article.slug}
                    onChange={this.onRecordChange.bind(this, 'slug')}
                  />
                </Fieldset>

                <Fieldset>
                  <Label>Status</Label>
                  <Select
                    defaultValue={article.status}
                    placeholder="Enter Status"
                    onChange={this.onSelectChange.bind(this, 'status')}
                    style={{ width: '170px' }}
                  >
                    <Option value="draft">Draft</Option>
                    <Option value="publish">Publish</Option>
                  </Select>
                </Fieldset>
              </Form>
            </Modal>
            <TableWrapper
              rowKey="key"
              // rowSelection={rowSelection}
              columns={columns}
              bordered={true}
              dataSource={dataSource}
              loading={this.props.isLoading}
              className="isoSimpleTable"
              pagination={{
                // defaultPageSize: 1,
                hideOnSinglePage: true,
                total: dataSource.length,
                showTotal: (total, range) => {
                  return `Showing ${range[0]}-${range[1]} of ${dataSource.length
                    } Results`;
                },
              }}
            />
          </ContentHolder>
        </Box>
      </LayoutContentWrapper >
    );
  }
}

export default connect(
  state => ({
    ...state.Articles,
  }),
  actions
)(Articles);
