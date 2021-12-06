import React, { Component } from 'react';
import {
  Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

  // render the selected dish with image, name, and description
  renderDish(dish) {
    if (dish != null)
      return (
        <div className='col-12 col-md-5 m-1'>
          <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
      )
    else
      return (<div></div>)
  }

  // render the comments of selected dish
  renderComments(comments) {
    if (comments != null) {
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const commentsList = comments.map((comment) => {
        const date = comment.date.split('T')[0].split('-');
        let formattedDate = `${months[date[1]-1]} ${date[2]}, ${date[0]}`;

        return (
          <ul className = "list-unstyled">
            <li>{comment.comment} </li>
            <li>-- {comment.author}, {formattedDate}</li>
          </ul>
        );
      });

      return (
        <div className="col-12 col-md-5 m-1">
          <h4>Comments</h4>
          {commentsList}
        </div>
      );
    }
    else
      return(<div></div>);
  }

  // render the DishDetail
  render() {
    const dish = this.props.dish; // selected dish is passed as prop

    return (
      <div className="row">
        {this.renderDish(dish)}
        {this.renderComments(dish.comments)}
      </div>
    );
  }
}

export default DishDetail;
