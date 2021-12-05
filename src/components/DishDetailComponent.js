import React, { Component } from 'react';
import {
  Col, Row,
  Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

class DishDetail extends Component {
    constructor(props) {
        super(props);
    }

    renderComments(comments) {
      if (comments != null) {
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
            <CardText>
                {commentsList}
            </CardText>
          );
      }
      else
        return(
            <div></div>
        );
    }

    render() {
        const dish = this.props.dish;

        return (
          <div className="mt-2">
            <div className="row">
              <div className="col">
                <Card>
                  <CardImg top src={dish.image} alt={dish.name} />
                  <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                  </CardBody>
                </Card>
              </div>
              <div className="col">
                <Card>
                  <CardBody>
                  <CardTitle><h4>Comments</h4></CardTitle>
                    {this.renderComments(dish.comments)}
                  </CardBody>
                </Card>
              </div>
            </div>
          </div>
        );
    }
}

export default DishDetail;
