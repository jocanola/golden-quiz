import React from 'react';

class Header extends React.Component {
  render() {
    return(
      <div className="well" style={{backgroundColor:"gold"}}>
        Question {this.props.current+1} out of {this.props.questions.length}
      </div>
    );
  }
}

export default Header;