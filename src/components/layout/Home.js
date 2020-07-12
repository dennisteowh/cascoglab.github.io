import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Divider,
  Grid,
  Header,
  Image,
  Icon,
  Message,
  Segment,
  Responsive
} from "semantic-ui-react";

import Typist from "react-typist";

import { TextWrapper } from "../generic/GenericComponents";

class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typistIndex: 0
    };
  }

  render() {
    const typistIndex = this.state.typistIndex;
    return (
      <Segment attached padded="very" className="alt banner primary">
        <Header as="h1" className="bannerTitle">
          Research. Innovate. Create.
        </Header>
        <Header as="h3" style={{ display: "inline" }}>
          At CASCOGLAB, we rationalise broadly around - &nbsp;
          <Typist
            className="headerFont typist"
            avgTypingDelay={50}
            key={typistIndex}
            onTypingDone={() =>
              this.setState(state => ({
                typistIndex: state.typistIndex + 1
              }))
            }
          >
            {[
              "Cogitive Science",
              "Probabilistic Programming",
              "Machine Learning",
              "Deep Learning"
            ].map(phrase => [
              <span>{phrase}.</span>,
              <Typist.Backspace count={phrase.length + 1} delay={1000} />
            ])}
          </Typist>
        </Header>
      </Segment>
    );
  }
}

class AboutUs extends Component {
  render() {
    return (
      <Segment attached padded="very" textAlign="center" className="primary">
        <Container>
          <Header id="aboutus" as="h1" className="headerFont">
            About Us
          </Header>
          <Grid columns={2} verticalAlign="middle">
            <Grid.Column floated="right">
              <Image
                bordered
                centered
                rounded
                size="medium"
                src="https://react.semantic-ui.com/images/wireframe/white-image.png"
              />
            </Grid.Column>
            <Grid.Column>
              <Message floating>
                <Message.Header>Header 1</Message.Header>Message 1
              </Message>
            </Grid.Column>
          </Grid>
          <Grid columns={2} verticalAlign="middle">
            <Grid.Column>
              <Message floating>
                <Message.Header>Header 2</Message.Header>Message 2
              </Message>
            </Grid.Column>
            <Grid.Column>
              <Image
                bordered
                centered
                rounded
                size="medium"
                src="https://react.semantic-ui.com/images/wireframe/white-image.png"
              />
            </Grid.Column>
          </Grid>
          <Grid columns={2} verticalAlign="middle">
            <Grid.Column>
              <Image
                bordered
                centered
                rounded
                size="medium"
                src="https://react.semantic-ui.com/images/wireframe/white-image.png"
              />
            </Grid.Column>
            <Grid.Column>
              <Message floating>
                <Message.Header>Header 3</Message.Header>Message 3
              </Message>
            </Grid.Column>
          </Grid>
          <Grid columns={2} verticalAlign="middle">
            <Grid.Column>
              <Message floating>
                <Message.Header>Header 4</Message.Header>Message 4
              </Message>
            </Grid.Column>
            <Grid.Column>
              <Image
                bordered
                centered
                rounded
                size="medium"
                src="https://react.semantic-ui.com/images/wireframe/white-image.png"
              />
            </Grid.Column>
          </Grid>
        </Container>
      </Segment>
    );
  }
}

class Footer extends Component {
  render() {
    return (
      <Segment attached padded="very" className="alt primary">
        <Container>
          <Grid columns={3}>
            <Grid.Column>
              <Header as="h4" className="primary">
                <b>Research</b>
              </Header>
              <Link className="primary" to="/area">
                Areas
              </Link>
              <br />
              <Link className="primary" to="/projects">
                Projects
              </Link>
            </Grid.Column>
            <Grid.Column>
              <Header as="h4" className="primary">
                <b>People</b>
              </Header>
              <Link className="primary" to="/people">
                Leadership
              </Link>
            </Grid.Column>
            <Grid.Column>
              <Header as="h4" className="primary">
                Connect
              </Header>
              <Icon name="mail outline" size="large" />
              <Link className="primary" external to="mailto:hello@cascoglab.co">
                hello@cascoglab.co
              </Link>
              <br />
            </Grid.Column>
          </Grid>
          <Divider horizontal hidden clearing />
          <TextWrapper>
            <Fragment>
              <Icon name="copyright outline" />
              All Rights Reserved. CASCOGLAB 2020
            </Fragment>
          </TextWrapper>
        </Container>
      </Segment>
    );
  }
}

class Home extends Component {
  render() {
    return (
      <Responsive>
        <Banner />
        <AboutUs />
        <Footer />
      </Responsive>
    );
  }
}

export default Home;
