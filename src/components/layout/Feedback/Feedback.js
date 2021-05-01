import React from 'react';
import Swipeable from './../../common/Swipeable/Swipeable';
import PropTypes from 'prop-types';
import styles from './Feedback.module.scss';

class Feedback extends React.Component {
  leftAction = this.changePagePrev.bind(this);
  rightAction = this.changePageNext.bind(this);
  state = {
    activeComment: 0,
  };

  handlePageChange(comment) {
    this.setState({ activeComment: comment });
  }

  changePagePrev() {
    let currentComment = this.state.activeComment;
    const { comments } = this.props;
    const commentsCount = comments.length;

    if (currentComment < commentsCount - 1) {
      this.handlePageChange(currentComment + 1);
    }
  }

  changePageNext() {
    let currentComment = this.state.activePage;

    if (currentComment !== 0) {
      this.handlePageChange(currentComment - 1);
    }
  }

  render() {
    const { comments } = this.props;
    const { activeComment } = this.state;
    const commentsCount = Math.ceil(comments.length);

    const dots = [];
    for (let i = 0; i < commentsCount; i++) {
      dots.push(
        <li>
          <a
            onClick={() => this.handlePageChange(i)}
            className={i === activeComment && styles.active}
          >
            page {i}
          </a>
        </li>
      );
    }
    return (
      <Swipeable leftAction={this.leftAction} rightAction={this.rightAction}>
        <div className={styles.root}>
          <div className='container'>
            <div className={styles.panelBar}>
              <div className='row no-gutters align-items-end'>
                <div className={'col-auto ' + styles.heading}>
                  <h3> Client Feedback</h3>
                </div>
                <div className={'col-auto ' + styles.dots}>
                  <ul>{dots}</ul>
                </div>
              </div>
            </div>
            <p className={styles.apostrof}>&quot;</p>

            {comments.slice(activeComment, activeComment + 1).map(item => (
              <div key={item.id} className='container'>
                <div className='row'>
                  <div className='col'>
                    <p className={styles.text}>{item.text}</p>
                  </div>
                </div>
                <div className='row'>
                  <div className={'col-6 ' + styles.imageBox}>
                    <img src={item.profilePic} alt={item.name} />
                  </div>
                  <div className={'col-6 ' + styles.name}>
                    <p>
                      {item.name}
                      <br />
                      {item.client}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Swipeable>
    );
  }
}

Feedback.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
      profilePic: PropTypes.string,
      name: PropTypes.string,
      client: PropTypes.string,
    })
  ),
};

export default Feedback;
