import React from "react";
import { addAuthor } from "./redux/actionCreators";
import { connect } from "react-redux";

const Sidebar = props => {
  return (
    <div id="sidebar">
      <img src="theindex.svg" className="logo" alt="the index logo" />
      <section>
        <h4 className="menu-item active">
          <button>AUTHORS</button>
        </h4>
        <button
          id="add-button"
          className="btn btn-block btn-light"
          onClick={props.addAuthor}
        >
          + ADD AUTHOR
        </button>
      </section>
    </div>
  );
};

const mapStateToProps = dispatch => {
  return {
    addAuthor: () => dispatch(addAuthor())
  };
};

export default connect(null, mapStateToProps)(Sidebar);
