import React from 'react';
import PropTypes from 'prop-types';

import { Button, Input } from 'antd';

// import Preview from 'widgets/Preview/Preview';
import Card from 'components/ListCard/Card'; // eslint-disable-line
import { Title } from 'components/ListCard/Card'; // eslint-disable-line

import UpLoaderTrigger from './UpLoaderTrigger';
import './style.scss';

export default class FormUpLoader extends React.Component {
  static propTypes = {
    value: PropTypes.object,
    mimeType: PropTypes.array,
    onChange: PropTypes.func,
  };

  state = {
    preview: false,
  };

  handleClosePreview = () => {
    this.setState({
      preview: false,
    });
  };

  handleOpenPreview = () => {
    this.setState({
      preview: true,
    });
  };

  handleChangeFileName = (data) => {
    const { value, onChange } = this.props;
    const video = {
      name: data,
      medias: value && value.medias ? value.medias : '',
    };
    if (onChange) {
      onChange(video);
    }
  };

  handleComplete = (data) => {
    const { value, onChange } = this.props;
    const video = {
      name: value && value.name ? value.name : '',
      medias: data,
    };
    if (onChange) {
      onChange(video);
    }
  };

  render() {
    const { preview } = this.state;
    const { value, mimeType } = this.props;
    const { medias, name } = value || {};
    const marginTop = { marginTop: 4 };
    // const PreviewTitle = (
    //   <Title
    //     name={name && name.length > 60 ? `${name.substring(0, 60)}...` : name}
    //     classes="previewTitle"
    //   />
    // );

    return (
      <div>
        <div className="video-info-input">
          <Input type="text" className="video-info-name" />
          <UpLoaderTrigger />
        </div>

        {medias && name ? (
          <Card
            className="self-card"
            cover={`https://lcdns-vv.learnta.com/res/${medias}?vframe/jpg/offset/2`}
            fileName={name}
          />
        ) : null}

        <Button
          disabled={!medias || !name}
          style={marginTop}
          className="previewBtn"
          onClick={this.handleOpenPreview}
        >
          预览
        </Button>
        {/* {preview && medias && (
          <Preview
            type="video"
            data={medias}
            title={PreviewTitle}
            footer={null}
            className="videoPreviewModal"
            onCancel={this.handleClosePreview}
          />
        )} */}
      </div>
    );
  }
}