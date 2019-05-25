import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import History from '../History/History';
import Contact from '../Contact/Contact';


export default class About extends Component {
  render() {
    return (
      <div>
        <div className='subnav'>
          <Link to="/about" >
            <h3 className="subnav_links" >About</h3>
          </Link>
          <Link to="/about/history" >
            <h3 className="subnav_links" >History</h3>
          </Link>
          <Link to="/about/contact" >
            <h3 className="subnav_links" >Contact</h3>
          </Link>
        </div>
        <div className='box'>
          <Switch>
            <Route component={History} path="/about/history" />
            <Route component={Contact} path="/about/contact" />
            <Route path="/about" render={() => (
              <div>
                <h1>About The University</h1>
                <h3>Cupcake ipsum dolor sit amet sugar plum fruitcake. Tart soufflé chocolate cake bonbon sweet roll bonbon. Macaroon jujubes soufflé. Gummi bears gingerbread wafer candy chupa chups cupcake candy. Pie sesame snaps bear claw sweet roll. Lemon drops marshmallow candy chupa chups ice cream caramels. Sesame snaps liquorice cotton candy sugar plum. Cake powder lollipop. Cupcake muffin cake tart. Pudding soufflé tootsie roll chupa chups. Sweet sugar plum tart cupcake macaroon halvah chocolate oat cake. Caramels soufflé cake gummi bears chocolate cake bear claw cheesecake ice cream. Lollipop jelly jujubes cookie cotton candy cupcake candy canes lollipop. Lollipop halvah donut.</h3>
              </div>
            )} />
          </Switch>
        </div>
      </div>
    )
  }
}